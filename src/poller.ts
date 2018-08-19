import * as SP from "./datatypes";
import * as $ from "jquery";
import * as Helper from "./helper";
import * as moment from "moment";

/**
 * Retrieves events from the SP Calendar API and displays it in the main tab, if
 * there is an event right now
 */
export function calendarPoll() {
  console.debug("[DEBUG]: Loading SP Calendar");
  const request = new XMLHttpRequest();
  request.onloadend = function() {
    if (this.status === 200) {
      // Get all objects
      const allCalendarEntries: SP.CalendarEntry[] = JSON.parse(this.responseText);
      const relevantEntries: SP.CalendarEntry[] = [];
      for (const entry of allCalendarEntries) {
        const startDate = Date.parse(entry.startTime);
        const endDate = Date.parse(entry.endTime);
        const currentDate = Date.now();
        if (currentDate > startDate && currentDate < endDate) {
          relevantEntries.push(entry);
        }
      }

      // Set status
      if (relevantEntries.length > 0) {
        // Sort entries by importance (using colorId)
        relevantEntries.sort((a, b) => {
          if (a.colorId > b.colorId) {
            return 1;
          } else if (a.colorId < b.colorId) {
            return -1;
          } else {
            return 0;
          }
        });

        let schoolStateString = "";
        relevantEntries.forEach((element) => {
          schoolStateString += ", ";
          schoolStateString += element.summary;
        });
        schoolStateString = schoolStateString.substr(2, schoolStateString.length);   // Remove the first 2 characters
        $("#currentStatus").text(schoolStateString);
      } else {
        $("#currentStatus").text("No School Events");
      }
    }
  };
  request.open("GET", "https://mobileapps.sp.edu.sg/SPMobileAPI/api/GetAcadCalendar", true);
  request.send();
}

/**
 * Gets the timetable for today and checks if the user is attending a lesson.
 * Displays the lesson if any in the main tab
 */
export function timetablePoll() {
  Helper.userIsAuthenticated(function(authenticated, token) {
    if (authenticated && token) {
      const currentDateString = moment().format("DDMMYY");
      const request = Helper.authenticatedRequest("GET", SP.URL_TIMETABLE + currentDateString, true, token);
      request.onloadend = function() {
        if (this.status === 200) {
          console.debug("[DEBUG]: Requested for timetable with returned data:" + this.responseText);
          if (this.responseText === SP.TIMETABLE_NO_LESSONS) {
            // No lessons
            $("#currentLesson").text("No Lessons");
          } else {
            const jsonArray = JSON.parse(this.responseText);

            // Stage I: Validate all timetable entries
            const timetableEntries: SP.TimetableEntry[] = [];
            let currentLesson: SP.TimetableEntry | undefined;
            for (const entryString of jsonArray) {
              const element: string = JSON.stringify(entryString);

              const entryValid = SP.TimetableEntry.isValid(element);
              if (entryValid) {
                const entry = SP.TimetableEntry.fromJSON(element, currentDateString);
                // Stage II: Insert all entries into array where it is currently happening
                const currentDateTime = new Date();
                if (entry.getStartDateTime() < currentDateTime && entry.getEndDateTime() > currentDateTime) {
                  // timetableEntries.push(entry);
                  currentLesson = entry;
                  console.debug("[DEBUG]: Lesson currently running: ");
                  console.debug(entry);
                } else {
                  console.debug("[DEBUG]: Lesson not running: ");
                  console.debug(entry);
                }
                timetableEntries.push(entry);
              } else {
                console.warn("[WARNING]: Timetable entry is invalid:");
                console.warn(element);
              }
            }

            // Stage III: Display current lesson
            if (currentLesson) {
              $("#currentLesson").text(
                currentLesson.getAbbreviation() + " " +
                currentLesson.getTypeString() + " @ " +
                currentLesson.getLocation());
            } else {
              $("#currentLesson").text("No Lesson Currently");
            }

            // Stage IV: Display all lessons in the timetable tab
            // TODO
          }
        } else {
          console.warn("[WARNING]: Failed to load timetable: ");
          console.warn(this.status);
          console.warn(this.responseText);
        }
      };
      request.send();
    } else {
      console.error("[ERROR]: Token invalid, found during timetable retrieval!");
    }
  });
}

/**
 * Checks if the user is connected to SP Wi-Fi and displays the connectivity status
 */
export function spWifiPoll() {
  const request = new XMLHttpRequest();
  request.onloadend = function() {
    let connected = false;

    if (this.status === 200) {
      // Check if request actually gets the real ATS page
      connected = this.responseURL.startsWith("https://myats.sp.edu.sg") ? true : false;
    } else if (this.status === 401) {
      // User is not authenticated, attempt rekey

      // NOTE: don't bother trying to rekey with other functions, as all these
      // functions are run in parallel, so doing rekeying from one would do
      Helper.rekeyUser((success) => {
        if (!success) {
          // If rekey failed
          Helper.showLoginUIAndPurgeToken();
        }
      });
    }

    // Display connected state
    if (connected) {
      console.debug("[DEBUG]: Connected to SP wifi");
      $("#wifiConnectedText").text("Connected to SP Wi-Fi");
      $("#wifiLogo").css("color", "#33C3F0");
    } else {
      console.debug("[DEBUG]: Not connected to SP wifi");
      $("#wifiConnectedText").text("Not connected to SP Wi-Fi");
      $("#wifiLogo").css("color", "#bbb");
    }
  };
  request.open("GET", SP.URL_ATS, true);
  request.send();
}

/**
 * Checks for crowd data and displays it in the crowd tab
 */
export function crowdPoll() {
  Helper.userIsAuthenticated(function(authenticated, token) {
    if (authenticated && token) {
      const request = Helper.authenticatedRequest("GET", SP.URL_CROWD_CHECK, true, token);
      request.onloadend = function() {
        if (this.status === 200) {
          const jsonArray = JSON.parse(this.responseText);

          // Stage I: Validate all crowd entries
          const crowdEntries: SP.CrowdInfo[] = [];
          for (const entryString of jsonArray) {
            const element: string = JSON.stringify(entryString);

            const entryValid = SP.CrowdInfo.isValid(element);
            if (entryValid) {
              const entry = SP.CrowdInfo.fromJSON(element);
              // Stage II: Insert all valid entries into array
              crowdEntries.push(entry);
            } else {
              console.warn("[WARNING]: Crowd JSON is invalid:");
              console.warn(element);
            }
          }

          // Stage III: Display it!
          for (const entry of crowdEntries) {
            const name = entry.getName();
            const status = entry.getStatus();
            let percentage = "&lt; 50%";
            let color = "limegreen";
            switch (status) {
              case SP.CrowdLevel.Small:
                color = "limegreen";
                percentage = "&lt; 50%";
                break;
              case SP.CrowdLevel.Medium:
                color = "gold";
                percentage = "&lt; 75%";
                break;
              case SP.CrowdLevel.Large:
                color = "crimson";
                percentage = "&gt; 75%";
                break;
            }
            $("#crowdTable > tbody:last-child").append(
            `<tr>
              <td>${name}</td>
              <td><i class=\"fas fa-users\" style=\"color: ${color}\"></i> ${percentage}</td>
            </tr>`);
          }
        } else {
          // TODO: Error handling here
        }
      };
      request.send();
    } else {
      console.error("[ERROR]: Token invalid, found during crowd fetch!");
    }
  });
}
