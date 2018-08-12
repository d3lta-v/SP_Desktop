import * as moment from "moment";
import * as $ from "jquery";
import * as SP from "./datatypes";
import * as Listener from "./listeners";
import * as Helper from "./helper";

/**
 * Starts all of the pollers, basically functions that needs to run periodically
 */
function startAllPollers() {
  clockPoll(); // this does not use interval as it is time sensitive
  calendarPoll();
  timetablePoll();
  spWifiPoll();
  crowdPoll();
  setInterval(calendarPoll, 1000 * 60 * 5); // 5 minute calendar polling
  setInterval(timetablePoll, 1000 * 60 * 5); // 5 minute timetable polling
  setInterval(spWifiPoll, 1000 * 60 * 5); // 5 minute wifi polling
  setInterval(crowdPoll, 1000 * 60 * 5); // 5 minute crowd polling
}

//#region Pollers

/**
 * Refreshes the clock display every 1 second
 */
function clockPoll() {
  $("#time").text(moment().format("HH:mm:ss"));
  setTimeout(clockPoll, 1000); // 1 second polling
}

/**
 * Retrieves events from the SP Calendar API and displays it in the main tab, if
 * there is an event right now
 */
function calendarPoll() {
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

    // Repeat request once it is loaded or unsuccessfully loaded
    console.debug("[DEBUG]: Loaded SP Calendar");
  };
  request.open("GET", "https://mobileapps.sp.edu.sg/SPMobileAPI/api/GetAcadCalendar", true);
  request.send();
}

/**
 * Gets the timetable for today and checks if the user is attending a lesson.
 * Displays the lesson if any in the main tab
 */
function timetablePoll() {
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
            for (const entryString of jsonArray) {
              const element: string = JSON.stringify(entryString);

              const entryValid = SP.TimetableEntry.isValid(element);
              if (entryValid) {
                const entry = SP.TimetableEntry.fromJSON(element, currentDateString);
                // Stage II: Insert all entries into array where it is currently happening
                const currentDateTime = new Date();
                if (entry.getStartDateTime() < currentDateTime && entry.getEndDateTime() > currentDateTime) {
                  timetableEntries.push(entry);
                  console.debug("[DEBUG]: Lesson currently running: ");
                  console.debug(entry);
                } else {
                  console.debug("[DEBUG]: Lesson not running: ");
                  console.debug(entry);
                }
              } else {
                console.warn("[WARNING]: Timetable entry is invalid:");
                console.warn(element);
              }
            }

            // Stage III: Display current lesson
            if (timetableEntries.length > 0) {
              $("#currentLesson").text(
                timetableEntries[0].getAbbreviation() + " " +
                timetableEntries[0].getTypeString() + " @ " +
                timetableEntries[0].getLocation());
            } else {
              $("#currentLesson").text("No Lesson Currently");
            }
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
function spWifiPoll() {
  const request = new XMLHttpRequest();
  request.onloadend = function() {
    let connected = false;

    if (this.status === 200) {
      // Check if request actually gets the real ATS page
      connected = this.responseURL.startsWith("https://myats.sp.edu.sg") ? true : false;
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
function crowdPoll() {
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
              console.warn("[WARNING]: Crowd entry is invalid:");
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

//#endregion Pollers

// Initialisation. This block runs when document is ready
$(function() {

  // ==================== User authentication check ====================
  Helper.userIsAuthenticated(function(authenticated) {
    $("#loading").show();
    if (authenticated) {
      // User is logged in, show main UI and initialise pollers
      $("#main").show();
      $("#tabBar").show();
      $("#auth").hide();
      $("#loading").hide();
      startAllPollers();
    } else {
      // Not authenticated, display login UI only
      $("#main").hide();
      $("#tabBar").hide();
      $("#auth").show();
      $("#loading").hide();

      // If the old login token still exists in storage, purge it
      Helper.purgeOldToken();
    }
  });

  // =========================== Listeners ============================
  // Initialise Login listener
  $("#loginButton").click(() => {
    Listener.loginListener(function() {
      // Start up the pollers, as this lambda will only be called if
      // the login is successful
      startAllPollers();
    });
  });

  // Setup ATS button listener
  $("#atsButton").click(() => {
    Listener.atsButtonListener();
  });

  // ========================= Tab Listeners =========================
  $("#homeTabButton").click(() => {
    showTab("#main");
  });

  $("#crowdTabButton").click(() => {
    showTab("#crowdTab");
  });

});

//#region Helper functions

/**
 * Shows a single tab and hides all other tabs
 * @param name Name of the single tab to show
 */
function showTab(name: string) {
  const allTabNames = ["#main", "#crowdTab"];
  for (const tabName of allTabNames) {
    if (name === tabName) {
      $(tabName).show();
    } else {
      $(tabName).hide();
    }
  }
}

//#endregion Helper functions
