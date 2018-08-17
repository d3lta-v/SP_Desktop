import * as moment from "moment";
import * as $ from "jquery";
import * as Listener from "./listeners";
import * as Helper from "./helper";
import * as Poller from "./poller";

/**
 * Starts all of the pollers, basically functions that needs to run periodically
 */
function startAllPollers() {
  clockPoll(); // this does not use interval as it is time sensitive
  Poller.calendarPoll();
  Poller.timetablePoll();
  Poller.spWifiPoll();
  Poller.crowdPoll();
  setInterval(() => Poller.calendarPoll(), 1000 * 60 * 5); // 5 minute calendar polling
  setInterval(() => Poller.timetablePoll(), 1000 * 60 * 5); // 5 minute timetable polling
  setInterval(() => Poller.spWifiPoll(), 1000 * 60 * 5); // 5 minute wifi polling
  setInterval(() => Poller.crowdPoll(), 1000 * 60 * 5); // 5 minute crowd polling
}

//#region Pollers

/**
 * Refreshes the clock display every 1 second
 */
function clockPoll() {
  $("#time").text(moment().format("HH:mm:ss"));
  setTimeout(clockPoll, 1000); // 1 second polling
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
      // Attempt rekeying if user is already logged in
      Helper.rekeyUser((success) => {
        if (!success) {
          Helper.showLoginUIAndPurgeToken();
        }
      });
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
    highlightTabButton("#homeTabButton");
  });

  $("#crowdTabButton").click(() => {
    showTab("#crowdTab");
    highlightTabButton("#crowdTabButton");
  });

  $("#timetableTabButton").click(() => {
    showTab("#timetableTab");
    highlightTabButton("#timetableTabButton");
  });

  // Highlight the Home Tab button so it looks natural
  highlightTabButton("#homeTabButton");
});

//#region Helper functions

/**
 * Shows a single tab and hides all other tabs
 * @param name Name of the single tab to show
 */
function showTab(name: string) {
  const allTabNames = ["#main", "#crowdTab", "#timetableTab"];
  for (const tabName of allTabNames) {
    if (name === tabName) {
      $(tabName).show();
    } else {
      $(tabName).hide();
    }
  }
}

/**
 * Highlights a single tab button out of all the other tab buttons
 * @param name Name of the tab button to highlight
 */
function highlightTabButton(name: string) {
  // Highlight the correct button
  const allButtonNames = ["#homeTabButton", "#crowdTabButton", "#timetableTabButton"];
  for (const buttonName of allButtonNames) {
    const button = $(buttonName);
    const buttonIcon = button.find("i");
    if (name === buttonName) {
      button.addClass("button-primary"); // Highlight that button
      buttonIcon.css({color: "#fff"});
    } else {
      // Change those buttons to white
      if (button.hasClass("button-primary")) {
        button.removeClass("button-primary");
        buttonIcon.css({color: "#33C3F0"});
      }
    }
  }
}

//#endregion Helper functions
