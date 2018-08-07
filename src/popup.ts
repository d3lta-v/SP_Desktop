import * as moment from 'moment';
import * as $ from 'jquery';
import * as SP from './datatypes';
import * as Listener from './listeners';
import * as Helper from './helper';

let count = 0;

function startAllPollers() {
  clockPoll(); // this does not use interval as it is time sensitive
  calendarPoll();
  timetablePoll();
  spWifiPoll();
  setInterval(calendarPoll, 1000 * 60 * 5); // 5 minute calendar polling
  setInterval(timetablePoll, 1000 * 60 * 5); // 5 minute timetable polling
  setInterval(spWifiPoll, 1000 * 60 * 5); // 5 minute wifi polling
}

//#region Pollers

function clockPoll() {
  $('#time').text(moment().format('HH:mm:ss'));
  setTimeout(clockPoll, 1000); // 1 second polling
}

function calendarPoll() {
  // Get SP Academic Calendar and read from JSON
  let request = new XMLHttpRequest();
  request.onloadend = function () {
    if (this.status == 200) {
      // Get all objects 
      let allCalendarEntries: SP.CalendarEntry[] = JSON.parse(this.responseText);
      let relevantEntries: SP.CalendarEntry[] = [];
      for (var i = 0; i < allCalendarEntries.length; i++) {
        let startDate = Date.parse(allCalendarEntries[i].startTime);
        let endDate = Date.parse(allCalendarEntries[i].endTime);
        let currentDate = Date.now();
        if (currentDate > startDate && currentDate < endDate) {
          relevantEntries.push(allCalendarEntries[i]);
        }
      }

      // Set status
      if (relevantEntries.length > 0) {
        let schoolStateString: string = "";
        relevantEntries.forEach(element => {
          schoolStateString += ", ";
          schoolStateString += element.summary;
        });
        schoolStateString = schoolStateString.substr(2, schoolStateString.length);   // Remove the first 2 characters
        $('#currentStatus').text(schoolStateString);
      } else {
        $('#currentStatus').text("No School Events");
      }
    }

    // Repeat request once it is loaded or unsuccessfully loaded
    console.debug("[DEBUG]: Loaded SP Calendar");
  };
  request.open("GET", "https://mobileapps.sp.edu.sg/SPMobileAPI/api/GetAcadCalendar", true);
  request.send();
}

/**
 * Gets the timetable for today and checks if the user is attending a lesson
 */
function timetablePoll() {
  Helper.userIsAuthenticated(function (authenticated, token) {
    if (authenticated && token) {
      let currentDateString = moment().format('DDMMYY');
      console.debug("[DEBUG] Requested for timetable with date: " + currentDateString);
      let request = Helper.authenticatedRequest(
        "GET", 
        "https://mobileapps.sp.edu.sg/SPMobileAPI/api/GetStudentTimetableByIdAndDate/" + 
        currentDateString, true, token);
      request.onloadend = function () {
        if (this.status == 200) {
          console.debug("[DEBUG]: Requested for timetable with returned data:");
          console.debug(this.responseText);
          if (this.responseText == SP.TIMETABLE_NO_LESSONS) {
            // No lessons
            $('#currentLesson').text("No Lesson");
          } else {
            let jsonArray = JSON.parse(this.responseText);

            // Stage I: Validate all timetable entries
            let timetableEntries: SP.TimetableEntry[] = [];
            for (let i = 0; i < jsonArray.length; i++) {
              const element: string = JSON.stringify(jsonArray[i]);
              
              let entryValid = SP.TimetableEntry.isValid(element);
              if (entryValid) {
                let entry = SP.TimetableEntry.fromJSON(element, currentDateString);
                // Stage II: Insert all entries into array where it is currently happening
                let currentDateTime = new Date();
                if (entry.getStartDateTime() < currentDateTime && entry.getEndDateTime() > currentDateTime) {
                  timetableEntries.push(entry);
                  console.debug("[DEBUG]: Lesson currently running: ");
                  console.debug(entry);
                } else {
                  console.debug("[DEBUG]: Lesson not running: ");
                  console.debug(entry);
                }
              } else {
                console.warn("[WARNING]: Timetable entry is invalid:")
                console.warn(element);
              }
            }

            // Stage III: Display current lesson
            if (timetableEntries.length > 0) {
              $('#currentLesson').text(
                timetableEntries[0].getAbbreviation() + " " + 
                timetableEntries[0].getTypeString() + " @ " + 
                timetableEntries[0].getLocation());
            } else {
              $('#currentLesson').text("No Lesson");
            }
          }
        } else {
          console.warn("[WARNING]: Failed to load timetable: ")
          console.warn(this.status);
          console.warn(this.responseText);
        }
      }
      request.send();
    } else {
      console.error("[ERROR]: Token invalid, found during timetable retrieval!");
    }
  });
}

/**
 * Checks if the user is connected to SP Wi-Fi
 */
function spWifiPoll() {
  let request = new XMLHttpRequest();
  request.onloadend = function () {
    let connected = false;

    if (this.status == 200) {
      // Check if request actually gets the real ATS page
      console.log(this.responseURL);
      if (this.responseURL.startsWith("https://myats.sp.edu.sg")) {
        connected = true;
      } else {
        // Else, Wi-Fi is considered to be not connected
        connected = false;
      }
    }

    // Display connected state
    if (connected) {
      console.debug("[DEBUG]: Connected to SP wifi");
      $('#wifiConnectedText').text("Connected to SP Wi-Fi");
      $('#wifiLogo').css('color', '#33C3F0');
    } else {
      console.debug("[DEBUG]: Not connected to SP wifi");
      $('#wifiConnectedText').text("Not connected to SP Wi-Fi");
      $('#wifiLogo').css('color', '#bbb');
    }
  }
  request.open("HEAD", SP.URL_ATS, true);
  request.send();
}

//#endregion Pollers

// Initialisation for jQuery. This block runs when document is ready
$(function () {
  const queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function (tabs) {
    // $('#url').text(tabs[0].url);
    $('#time').text(moment().format('HH:mm:ss'));
  });

  chrome.browserAction.setBadgeText({ text: count.toString() });
  $('#countUp').click(() => {
    chrome.browserAction.setBadgeText({ text: (++count).toString() });
  });

  // $('#changeBackground').click(()=>{
  //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //     chrome.tabs.sendMessage(tabs[0].id, {
  //       color: '#555555'
  //     },
  //     function(msg) {
  //       console.log("result message:", msg);
  //     });
  //   });
  // });

  // First things first, check if user is authenticated
  Helper.userIsAuthenticated(function (authenticated) {
    $('#loading').show();
    if (authenticated) {
      // User is logged in, show main UI and initialise pollers
      $('#main').show();
      $('#auth').hide();
      $('#loading').hide();
      startAllPollers();
    } else {
      // Not authenticated, display login UI only
      $('#main').hide();
      $('#auth').show();
      $('#loading').hide();

      // If the old login token still exists in storage, purge it
      Helper.purgeOldToken();
    }
  });

  // Initialise Login listener
  $('#loginButton').click(function () {
    Listener.loginListener(function () {
      // Start up the pollers, as this lambda will only be called if
      // the login is successful
      startAllPollers();
    });
  });

  // Setup ATS button listener
  $('#atsButton').click(function () {
    Listener.atsButtonListener();
  });
});
