/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"popup": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/popup.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/listeners.ts":
/*!**************************!*\
  !*** ./src/listeners.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
const Helper = __webpack_require__(/*! ./helper */ "./src/helper.ts");
/**
 * Hooks up to a .click() listener for the login event
 * @param finished A callback for the main popup.ts to initialise recurring events (i.e. pollers)
 */
function loginListener(finished) {
    Helper.userLogin($("#username").val(), $("#password").val(), () => {
        // Hide the login dialog and show the main UI
        $("#main").show();
        $("#tabBar").show();
        $("#auth").hide();
        $("#loading").hide();
        // Start pollers by calling back the main file (popup.ts)
        finished();
    }, (error) => {
        // Display error
        $("#authError").show();
        $("#authError").text(error);
    });
}
exports.loginListener = loginListener;
/**
 * A listener to attach to a button to trigger the ATS interface
 */
function atsButtonListener() {
    // Call background.ts to post data
    chrome.runtime.sendMessage({ type: "ats-listener" });
}
exports.atsButtonListener = atsButtonListener;


/***/ }),

/***/ "./src/poller.ts":
/*!***********************!*\
  !*** ./src/poller.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const SP = __webpack_require__(/*! ./datatypes */ "./src/datatypes.ts");
const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
const Helper = __webpack_require__(/*! ./helper */ "./src/helper.ts");
const moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/**
 * Retrieves events from the SP Calendar API and displays it in the main tab, if
 * there is an event right now
 */
function calendarPoll() {
    console.debug("[DEBUG]: Loading SP Calendar");
    const request = new XMLHttpRequest();
    request.onloadend = function () {
        if (this.status === 200) {
            // Get all objects
            const allCalendarEntries = JSON.parse(this.responseText);
            const relevantEntries = [];
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
                schoolStateString = schoolStateString.substr(2, schoolStateString.length); // Remove the first 2 characters
                $("#currentStatus").text(schoolStateString);
            }
            else {
                $("#currentStatus").text("No School Events");
            }
        }
    };
    request.open("GET", "https://mobileapps.sp.edu.sg/SPMobileAPI/api/GetAcadCalendar", true);
    request.send();
}
exports.calendarPoll = calendarPoll;
/**
 * Gets the timetable for today and checks if the user is attending a lesson.
 * Displays the lesson if any in the main tab
 */
function timetablePoll() {
    Helper.userIsAuthenticated(function (authenticated, token) {
        if (authenticated && token) {
            const currentDateString = moment().format("DDMMYY");
            const request = Helper.authenticatedRequest("GET", SP.URL_TIMETABLE + currentDateString, true, token);
            request.onloadend = function () {
                if (this.status === 200) {
                    console.debug("[DEBUG]: Requested for timetable with returned data:" + this.responseText);
                    if (this.responseText === SP.TIMETABLE_NO_LESSONS) {
                        // No lessons
                        $("#currentLesson").text("No Lessons");
                    }
                    else {
                        const jsonArray = JSON.parse(this.responseText);
                        // Stage I: Validate all timetable entries
                        const timetableEntries = [];
                        for (const entryString of jsonArray) {
                            const element = JSON.stringify(entryString);
                            const entryValid = SP.TimetableEntry.isValid(element);
                            if (entryValid) {
                                const entry = SP.TimetableEntry.fromJSON(element, currentDateString);
                                // Stage II: Insert all entries into array where it is currently happening
                                const currentDateTime = new Date();
                                if (entry.getStartDateTime() < currentDateTime && entry.getEndDateTime() > currentDateTime) {
                                    timetableEntries.push(entry);
                                    console.debug("[DEBUG]: Lesson currently running: ");
                                    console.debug(entry);
                                }
                                else {
                                    console.debug("[DEBUG]: Lesson not running: ");
                                    console.debug(entry);
                                }
                            }
                            else {
                                console.warn("[WARNING]: Timetable entry is invalid:");
                                console.warn(element);
                            }
                        }
                        // Stage III: Display current lesson
                        if (timetableEntries.length > 0) {
                            $("#currentLesson").text(timetableEntries[0].getAbbreviation() + " " +
                                timetableEntries[0].getTypeString() + " @ " +
                                timetableEntries[0].getLocation());
                        }
                        else {
                            $("#currentLesson").text("No Lesson Currently");
                        }
                    }
                }
                else {
                    console.warn("[WARNING]: Failed to load timetable: ");
                    console.warn(this.status);
                    console.warn(this.responseText);
                }
            };
            request.send();
        }
        else {
            console.error("[ERROR]: Token invalid, found during timetable retrieval!");
        }
    });
}
exports.timetablePoll = timetablePoll;
/**
 * Checks if the user is connected to SP Wi-Fi and displays the connectivity status
 */
function spWifiPoll() {
    const request = new XMLHttpRequest();
    request.onloadend = function () {
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
        }
        else {
            console.debug("[DEBUG]: Not connected to SP wifi");
            $("#wifiConnectedText").text("Not connected to SP Wi-Fi");
            $("#wifiLogo").css("color", "#bbb");
        }
    };
    request.open("GET", SP.URL_ATS, true);
    request.send();
}
exports.spWifiPoll = spWifiPoll;
/**
 * Checks for crowd data and displays it in the crowd tab
 */
function crowdPoll() {
    Helper.userIsAuthenticated(function (authenticated, token) {
        if (authenticated && token) {
            const request = Helper.authenticatedRequest("GET", SP.URL_CROWD_CHECK, true, token);
            request.onloadend = function () {
                if (this.status === 200) {
                    const jsonArray = JSON.parse(this.responseText);
                    // Stage I: Validate all crowd entries
                    const crowdEntries = [];
                    for (const entryString of jsonArray) {
                        const element = JSON.stringify(entryString);
                        const entryValid = SP.CrowdInfo.isValid(element);
                        if (entryValid) {
                            const entry = SP.CrowdInfo.fromJSON(element);
                            // Stage II: Insert all valid entries into array
                            crowdEntries.push(entry);
                        }
                        else {
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
                        $("#crowdTable > tbody:last-child").append(`<tr>
              <td>${name}</td>
              <td><i class=\"fas fa-users\" style=\"color: ${color}\"></i> ${percentage}</td>
            </tr>`);
                    }
                }
                else {
                    // TODO: Error handling here
                }
            };
            request.send();
        }
        else {
            console.error("[ERROR]: Token invalid, found during crowd fetch!");
        }
    });
}
exports.crowdPoll = crowdPoll;


/***/ }),

/***/ "./src/popup.ts":
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
const Listener = __webpack_require__(/*! ./listeners */ "./src/listeners.ts");
const Helper = __webpack_require__(/*! ./helper */ "./src/helper.ts");
const Poller = __webpack_require__(/*! ./poller */ "./src/poller.ts");
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
$(function () {
    // ==================== User authentication check ====================
    Helper.userIsAuthenticated(function (authenticated) {
        $("#loading").show();
        if (authenticated) {
            // User is logged in, show main UI and initialise pollers
            $("#main").show();
            $("#tabBar").show();
            $("#auth").hide();
            $("#loading").hide();
            startAllPollers();
        }
        else {
            // Attempt rekeying if user is already logged in
            Helper.rekeyUser((success) => {
                if (!success) {
                    // Rekeying failed, display login UI only
                    $("#main").hide();
                    $("#tabBar").hide();
                    $("#auth").show();
                    $("#loading").hide();
                    // If the old login token still exists in storage, purge it
                    Helper.purgeOldToken();
                }
            });
        }
    });
    // =========================== Listeners ============================
    // Initialise Login listener
    $("#loginButton").click(() => {
        Listener.loginListener(function () {
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
function showTab(name) {
    const allTabNames = ["#main", "#crowdTab", "#timetableTab"];
    for (const tabName of allTabNames) {
        if (name === tabName) {
            $(tabName).show();
        }
        else {
            $(tabName).hide();
        }
    }
}
/**
 * Highlights a single tab button out of all the other tab buttons
 * @param name Name of the tab button to highlight
 */
function highlightTabButton(name) {
    // Highlight the correct button
    const allButtonNames = ["#homeTabButton", "#crowdTabButton", "#timetableTabButton"];
    for (const buttonName of allButtonNames) {
        const button = $(buttonName);
        const buttonIcon = button.find("i");
        if (name === buttonName) {
            button.addClass("button-primary"); // Highlight that button
            buttonIcon.css({ color: "#fff" });
        }
        else {
            // Change those buttons to white
            if (button.hasClass("button-primary")) {
                button.removeClass("button-primary");
                buttonIcon.css({ color: "#33C3F0" });
            }
        }
    }
}
//#endregion Helper functions


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3RlbmVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVCQUF1QjtBQUN2RDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsS0FBSztBQUN6Qiw2REFBNkQsTUFBTSxVQUFVLFdBQVc7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6TUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsNkRBQTZEO0FBQzdELDBEQUEwRDtBQUMxRCx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5Qyw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUJBQW1CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicG9wdXBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvcG9wdXAudHNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5jb25zdCBIZWxwZXIgPSByZXF1aXJlKFwiLi9oZWxwZXJcIik7XG4vKipcbiAqIEhvb2tzIHVwIHRvIGEgLmNsaWNrKCkgbGlzdGVuZXIgZm9yIHRoZSBsb2dpbiBldmVudFxuICogQHBhcmFtIGZpbmlzaGVkIEEgY2FsbGJhY2sgZm9yIHRoZSBtYWluIHBvcHVwLnRzIHRvIGluaXRpYWxpc2UgcmVjdXJyaW5nIGV2ZW50cyAoaS5lLiBwb2xsZXJzKVxuICovXG5mdW5jdGlvbiBsb2dpbkxpc3RlbmVyKGZpbmlzaGVkKSB7XG4gICAgSGVscGVyLnVzZXJMb2dpbigkKFwiI3VzZXJuYW1lXCIpLnZhbCgpLCAkKFwiI3Bhc3N3b3JkXCIpLnZhbCgpLCAoKSA9PiB7XG4gICAgICAgIC8vIEhpZGUgdGhlIGxvZ2luIGRpYWxvZyBhbmQgc2hvdyB0aGUgbWFpbiBVSVxuICAgICAgICAkKFwiI21haW5cIikuc2hvdygpO1xuICAgICAgICAkKFwiI3RhYkJhclwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjYXV0aFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjbG9hZGluZ1wiKS5oaWRlKCk7XG4gICAgICAgIC8vIFN0YXJ0IHBvbGxlcnMgYnkgY2FsbGluZyBiYWNrIHRoZSBtYWluIGZpbGUgKHBvcHVwLnRzKVxuICAgICAgICBmaW5pc2hlZCgpO1xuICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAvLyBEaXNwbGF5IGVycm9yXG4gICAgICAgICQoXCIjYXV0aEVycm9yXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNhdXRoRXJyb3JcIikudGV4dChlcnJvcik7XG4gICAgfSk7XG59XG5leHBvcnRzLmxvZ2luTGlzdGVuZXIgPSBsb2dpbkxpc3RlbmVyO1xuLyoqXG4gKiBBIGxpc3RlbmVyIHRvIGF0dGFjaCB0byBhIGJ1dHRvbiB0byB0cmlnZ2VyIHRoZSBBVFMgaW50ZXJmYWNlXG4gKi9cbmZ1bmN0aW9uIGF0c0J1dHRvbkxpc3RlbmVyKCkge1xuICAgIC8vIENhbGwgYmFja2dyb3VuZC50cyB0byBwb3N0IGRhdGFcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6IFwiYXRzLWxpc3RlbmVyXCIgfSk7XG59XG5leHBvcnRzLmF0c0J1dHRvbkxpc3RlbmVyID0gYXRzQnV0dG9uTGlzdGVuZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFNQID0gcmVxdWlyZShcIi4vZGF0YXR5cGVzXCIpO1xuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5jb25zdCBIZWxwZXIgPSByZXF1aXJlKFwiLi9oZWxwZXJcIik7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuLyoqXG4gKiBSZXRyaWV2ZXMgZXZlbnRzIGZyb20gdGhlIFNQIENhbGVuZGFyIEFQSSBhbmQgZGlzcGxheXMgaXQgaW4gdGhlIG1haW4gdGFiLCBpZlxuICogdGhlcmUgaXMgYW4gZXZlbnQgcmlnaHQgbm93XG4gKi9cbmZ1bmN0aW9uIGNhbGVuZGFyUG9sbCgpIHtcbiAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTG9hZGluZyBTUCBDYWxlbmRhclwiKTtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAvLyBHZXQgYWxsIG9iamVjdHNcbiAgICAgICAgICAgIGNvbnN0IGFsbENhbGVuZGFyRW50cmllcyA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc3QgcmVsZXZhbnRFbnRyaWVzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGFsbENhbGVuZGFyRW50cmllcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IERhdGUucGFyc2UoZW50cnkuc3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmREYXRlID0gRGF0ZS5wYXJzZShlbnRyeS5lbmRUaW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID4gc3RhcnREYXRlICYmIGN1cnJlbnREYXRlIDwgZW5kRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZWxldmFudEVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2V0IHN0YXR1c1xuICAgICAgICAgICAgaWYgKHJlbGV2YW50RW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNjaG9vbFN0YXRlU3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZWxldmFudEVudHJpZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyArPSBcIiwgXCI7XG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nICs9IGVsZW1lbnQuc3VtbWFyeTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyA9IHNjaG9vbFN0YXRlU3RyaW5nLnN1YnN0cigyLCBzY2hvb2xTdGF0ZVN0cmluZy5sZW5ndGgpOyAvLyBSZW1vdmUgdGhlIGZpcnN0IDIgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgICQoXCIjY3VycmVudFN0YXR1c1wiKS50ZXh0KHNjaG9vbFN0YXRlU3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjY3VycmVudFN0YXR1c1wiKS50ZXh0KFwiTm8gU2Nob29sIEV2ZW50c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS9hcGkvR2V0QWNhZENhbGVuZGFyXCIsIHRydWUpO1xuICAgIHJlcXVlc3Quc2VuZCgpO1xufVxuZXhwb3J0cy5jYWxlbmRhclBvbGwgPSBjYWxlbmRhclBvbGw7XG4vKipcbiAqIEdldHMgdGhlIHRpbWV0YWJsZSBmb3IgdG9kYXkgYW5kIGNoZWNrcyBpZiB0aGUgdXNlciBpcyBhdHRlbmRpbmcgYSBsZXNzb24uXG4gKiBEaXNwbGF5cyB0aGUgbGVzc29uIGlmIGFueSBpbiB0aGUgbWFpbiB0YWJcbiAqL1xuZnVuY3Rpb24gdGltZXRhYmxlUG9sbCgpIHtcbiAgICBIZWxwZXIudXNlcklzQXV0aGVudGljYXRlZChmdW5jdGlvbiAoYXV0aGVudGljYXRlZCwgdG9rZW4pIHtcbiAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZWQgJiYgdG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlU3RyaW5nID0gbW9tZW50KCkuZm9ybWF0KFwiRERNTVlZXCIpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IEhlbHBlci5hdXRoZW50aWNhdGVkUmVxdWVzdChcIkdFVFwiLCBTUC5VUkxfVElNRVRBQkxFICsgY3VycmVudERhdGVTdHJpbmcsIHRydWUsIHRva2VuKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBSZXF1ZXN0ZWQgZm9yIHRpbWV0YWJsZSB3aXRoIHJldHVybmVkIGRhdGE6XCIgKyB0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc3BvbnNlVGV4dCA9PT0gU1AuVElNRVRBQkxFX05PX0xFU1NPTlMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIGxlc3NvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjY3VycmVudExlc3NvblwiKS50ZXh0KFwiTm8gTGVzc29uc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGpzb25BcnJheSA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSTogVmFsaWRhdGUgYWxsIHRpbWV0YWJsZSBlbnRyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1ldGFibGVFbnRyaWVzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5U3RyaW5nIG9mIGpzb25BcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBKU09OLnN0cmluZ2lmeShlbnRyeVN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cnlWYWxpZCA9IFNQLlRpbWV0YWJsZUVudHJ5LmlzVmFsaWQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5VmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cnkgPSBTUC5UaW1ldGFibGVFbnRyeS5mcm9tSlNPTihlbGVtZW50LCBjdXJyZW50RGF0ZVN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIElJOiBJbnNlcnQgYWxsIGVudHJpZXMgaW50byBhcnJheSB3aGVyZSBpdCBpcyBjdXJyZW50bHkgaGFwcGVuaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5nZXRTdGFydERhdGVUaW1lKCkgPCBjdXJyZW50RGF0ZVRpbWUgJiYgZW50cnkuZ2V0RW5kRGF0ZVRpbWUoKSA+IGN1cnJlbnREYXRlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXRhYmxlRW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMZXNzb24gY3VycmVudGx5IHJ1bm5pbmc6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExlc3NvbiBub3QgcnVubmluZzogXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltXQVJOSU5HXTogVGltZXRhYmxlIGVudHJ5IGlzIGludmFsaWQ6XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSUlJOiBEaXNwbGF5IGN1cnJlbnQgbGVzc29uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZXRhYmxlRW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjdXJyZW50TGVzc29uXCIpLnRleHQodGltZXRhYmxlRW50cmllc1swXS5nZXRBYmJyZXZpYXRpb24oKSArIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXRhYmxlRW50cmllc1swXS5nZXRUeXBlU3RyaW5nKCkgKyBcIiBAIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXRhYmxlRW50cmllc1swXS5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjY3VycmVudExlc3NvblwiKS50ZXh0KFwiTm8gTGVzc29uIEN1cnJlbnRseVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBGYWlsZWQgdG8gbG9hZCB0aW1ldGFibGU6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRoaXMuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXTogVG9rZW4gaW52YWxpZCwgZm91bmQgZHVyaW5nIHRpbWV0YWJsZSByZXRyaWV2YWwhXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnRpbWV0YWJsZVBvbGwgPSB0aW1ldGFibGVQb2xsO1xuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHVzZXIgaXMgY29ubmVjdGVkIHRvIFNQIFdpLUZpIGFuZCBkaXNwbGF5cyB0aGUgY29ubmVjdGl2aXR5IHN0YXR1c1xuICovXG5mdW5jdGlvbiBzcFdpZmlQb2xsKCkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgcmVxdWVzdCBhY3R1YWxseSBnZXRzIHRoZSByZWFsIEFUUyBwYWdlXG4gICAgICAgICAgICBjb25uZWN0ZWQgPSB0aGlzLnJlc3BvbnNlVVJMLnN0YXJ0c1dpdGgoXCJodHRwczovL215YXRzLnNwLmVkdS5zZ1wiKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEaXNwbGF5IGNvbm5lY3RlZCBzdGF0ZVxuICAgICAgICBpZiAoY29ubmVjdGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogQ29ubmVjdGVkIHRvIFNQIHdpZmlcIik7XG4gICAgICAgICAgICAkKFwiI3dpZmlDb25uZWN0ZWRUZXh0XCIpLnRleHQoXCJDb25uZWN0ZWQgdG8gU1AgV2ktRmlcIik7XG4gICAgICAgICAgICAkKFwiI3dpZmlMb2dvXCIpLmNzcyhcImNvbG9yXCIsIFwiIzMzQzNGMFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBOb3QgY29ubmVjdGVkIHRvIFNQIHdpZmlcIik7XG4gICAgICAgICAgICAkKFwiI3dpZmlDb25uZWN0ZWRUZXh0XCIpLnRleHQoXCJOb3QgY29ubmVjdGVkIHRvIFNQIFdpLUZpXCIpO1xuICAgICAgICAgICAgJChcIiN3aWZpTG9nb1wiKS5jc3MoXCJjb2xvclwiLCBcIiNiYmJcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBTUC5VUkxfQVRTLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcbn1cbmV4cG9ydHMuc3BXaWZpUG9sbCA9IHNwV2lmaVBvbGw7XG4vKipcbiAqIENoZWNrcyBmb3IgY3Jvd2QgZGF0YSBhbmQgZGlzcGxheXMgaXQgaW4gdGhlIGNyb3dkIHRhYlxuICovXG5mdW5jdGlvbiBjcm93ZFBvbGwoKSB7XG4gICAgSGVscGVyLnVzZXJJc0F1dGhlbnRpY2F0ZWQoZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQsIHRva2VuKSB7XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGVkICYmIHRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gSGVscGVyLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiR0VUXCIsIFNQLlVSTF9DUk9XRF9DSEVDSywgdHJ1ZSwgdG9rZW4pO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbkFycmF5ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIEk6IFZhbGlkYXRlIGFsbCBjcm93ZCBlbnRyaWVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyb3dkRW50cmllcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5U3RyaW5nIG9mIGpzb25BcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IEpTT04uc3RyaW5naWZ5KGVudHJ5U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5VmFsaWQgPSBTUC5Dcm93ZEluZm8uaXNWYWxpZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeVZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cnkgPSBTUC5Dcm93ZEluZm8uZnJvbUpTT04oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSUk6IEluc2VydCBhbGwgdmFsaWQgZW50cmllcyBpbnRvIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvd2RFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBDcm93ZCBlbnRyeSBpcyBpbnZhbGlkOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSUlJOiBEaXNwbGF5IGl0IVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGNyb3dkRW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGVudHJ5LmdldE5hbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGVudHJ5LmdldFN0YXR1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBcIiZsdDsgNTAlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBcImxpbWVncmVlblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNQLkNyb3dkTGV2ZWwuU21hbGw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gXCJsaW1lZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IFwiJmx0OyA1MCVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTUC5Dcm93ZExldmVsLk1lZGl1bTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBcImdvbGRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IFwiJmx0OyA3NSVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTUC5Dcm93ZExldmVsLkxhcmdlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9IFwiY3JpbXNvblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gXCImZ3Q7IDc1JVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjY3Jvd2RUYWJsZSA+IHRib2R5Omxhc3QtY2hpbGRcIikuYXBwZW5kKGA8dHI+XG4gICAgICAgICAgICAgIDx0ZD4ke25hbWV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxpIGNsYXNzPVxcXCJmYXMgZmEtdXNlcnNcXFwiIHN0eWxlPVxcXCJjb2xvcjogJHtjb2xvcn1cXFwiPjwvaT4gJHtwZXJjZW50YWdlfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBFcnJvciBoYW5kbGluZyBoZXJlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltFUlJPUl06IFRva2VuIGludmFsaWQsIGZvdW5kIGR1cmluZyBjcm93ZCBmZXRjaCFcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuY3Jvd2RQb2xsID0gY3Jvd2RQb2xsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5jb25zdCBMaXN0ZW5lciA9IHJlcXVpcmUoXCIuL2xpc3RlbmVyc1wiKTtcbmNvbnN0IEhlbHBlciA9IHJlcXVpcmUoXCIuL2hlbHBlclwiKTtcbmNvbnN0IFBvbGxlciA9IHJlcXVpcmUoXCIuL3BvbGxlclwiKTtcbi8qKlxuICogU3RhcnRzIGFsbCBvZiB0aGUgcG9sbGVycywgYmFzaWNhbGx5IGZ1bmN0aW9ucyB0aGF0IG5lZWRzIHRvIHJ1biBwZXJpb2RpY2FsbHlcbiAqL1xuZnVuY3Rpb24gc3RhcnRBbGxQb2xsZXJzKCkge1xuICAgIGNsb2NrUG9sbCgpOyAvLyB0aGlzIGRvZXMgbm90IHVzZSBpbnRlcnZhbCBhcyBpdCBpcyB0aW1lIHNlbnNpdGl2ZVxuICAgIFBvbGxlci5jYWxlbmRhclBvbGwoKTtcbiAgICBQb2xsZXIudGltZXRhYmxlUG9sbCgpO1xuICAgIFBvbGxlci5zcFdpZmlQb2xsKCk7XG4gICAgUG9sbGVyLmNyb3dkUG9sbCgpO1xuICAgIHNldEludGVydmFsKCgpID0+IFBvbGxlci5jYWxlbmRhclBvbGwoKSwgMTAwMCAqIDYwICogNSk7IC8vIDUgbWludXRlIGNhbGVuZGFyIHBvbGxpbmdcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiBQb2xsZXIudGltZXRhYmxlUG9sbCgpLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgdGltZXRhYmxlIHBvbGxpbmdcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiBQb2xsZXIuc3BXaWZpUG9sbCgpLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgd2lmaSBwb2xsaW5nXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gUG9sbGVyLmNyb3dkUG9sbCgpLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgY3Jvd2QgcG9sbGluZ1xufVxuLy8jcmVnaW9uIFBvbGxlcnNcbi8qKlxuICogUmVmcmVzaGVzIHRoZSBjbG9jayBkaXNwbGF5IGV2ZXJ5IDEgc2Vjb25kXG4gKi9cbmZ1bmN0aW9uIGNsb2NrUG9sbCgpIHtcbiAgICAkKFwiI3RpbWVcIikudGV4dChtb21lbnQoKS5mb3JtYXQoXCJISDptbTpzc1wiKSk7XG4gICAgc2V0VGltZW91dChjbG9ja1BvbGwsIDEwMDApOyAvLyAxIHNlY29uZCBwb2xsaW5nXG59XG4vLyNlbmRyZWdpb24gUG9sbGVyc1xuLy8gSW5pdGlhbGlzYXRpb24uIFRoaXMgYmxvY2sgcnVucyB3aGVuIGRvY3VtZW50IGlzIHJlYWR5XG4kKGZ1bmN0aW9uICgpIHtcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBVc2VyIGF1dGhlbnRpY2F0aW9uIGNoZWNrID09PT09PT09PT09PT09PT09PT09XG4gICAgSGVscGVyLnVzZXJJc0F1dGhlbnRpY2F0ZWQoZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgJChcIiNsb2FkaW5nXCIpLnNob3coKTtcbiAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIC8vIFVzZXIgaXMgbG9nZ2VkIGluLCBzaG93IG1haW4gVUkgYW5kIGluaXRpYWxpc2UgcG9sbGVyc1xuICAgICAgICAgICAgJChcIiNtYWluXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjdGFiQmFyXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjYXV0aFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2xvYWRpbmdcIikuaGlkZSgpO1xuICAgICAgICAgICAgc3RhcnRBbGxQb2xsZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBBdHRlbXB0IHJla2V5aW5nIGlmIHVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW5cbiAgICAgICAgICAgIEhlbHBlci5yZWtleVVzZXIoKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVrZXlpbmcgZmFpbGVkLCBkaXNwbGF5IGxvZ2luIFVJIG9ubHlcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtYWluXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiN0YWJCYXJcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2F1dGhcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2xvYWRpbmdcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgb2xkIGxvZ2luIHRva2VuIHN0aWxsIGV4aXN0cyBpbiBzdG9yYWdlLCBwdXJnZSBpdFxuICAgICAgICAgICAgICAgICAgICBIZWxwZXIucHVyZ2VPbGRUb2tlbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IExpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gSW5pdGlhbGlzZSBMb2dpbiBsaXN0ZW5lclxuICAgICQoXCIjbG9naW5CdXR0b25cIikuY2xpY2soKCkgPT4ge1xuICAgICAgICBMaXN0ZW5lci5sb2dpbkxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFN0YXJ0IHVwIHRoZSBwb2xsZXJzLCBhcyB0aGlzIGxhbWJkYSB3aWxsIG9ubHkgYmUgY2FsbGVkIGlmXG4gICAgICAgICAgICAvLyB0aGUgbG9naW4gaXMgc3VjY2Vzc2Z1bFxuICAgICAgICAgICAgc3RhcnRBbGxQb2xsZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIFNldHVwIEFUUyBidXR0b24gbGlzdGVuZXJcbiAgICAkKFwiI2F0c0J1dHRvblwiKS5jbGljaygoKSA9PiB7XG4gICAgICAgIExpc3RlbmVyLmF0c0J1dHRvbkxpc3RlbmVyKCk7XG4gICAgfSk7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBUYWIgTGlzdGVuZXJzID09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAkKFwiI2hvbWVUYWJCdXR0b25cIikuY2xpY2soKCkgPT4ge1xuICAgICAgICBzaG93VGFiKFwiI21haW5cIik7XG4gICAgICAgIGhpZ2hsaWdodFRhYkJ1dHRvbihcIiNob21lVGFiQnV0dG9uXCIpO1xuICAgIH0pO1xuICAgICQoXCIjY3Jvd2RUYWJCdXR0b25cIikuY2xpY2soKCkgPT4ge1xuICAgICAgICBzaG93VGFiKFwiI2Nyb3dkVGFiXCIpO1xuICAgICAgICBoaWdobGlnaHRUYWJCdXR0b24oXCIjY3Jvd2RUYWJCdXR0b25cIik7XG4gICAgfSk7XG4gICAgJChcIiN0aW1ldGFibGVUYWJCdXR0b25cIikuY2xpY2soKCkgPT4ge1xuICAgICAgICBzaG93VGFiKFwiI3RpbWV0YWJsZVRhYlwiKTtcbiAgICAgICAgaGlnaGxpZ2h0VGFiQnV0dG9uKFwiI3RpbWV0YWJsZVRhYkJ1dHRvblwiKTtcbiAgICB9KTtcbiAgICAvLyBIaWdobGlnaHQgdGhlIEhvbWUgVGFiIGJ1dHRvbiBzbyBpdCBsb29rcyBuYXR1cmFsXG4gICAgaGlnaGxpZ2h0VGFiQnV0dG9uKFwiI2hvbWVUYWJCdXR0b25cIik7XG59KTtcbi8vI3JlZ2lvbiBIZWxwZXIgZnVuY3Rpb25zXG4vKipcbiAqIFNob3dzIGEgc2luZ2xlIHRhYiBhbmQgaGlkZXMgYWxsIG90aGVyIHRhYnNcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIHNpbmdsZSB0YWIgdG8gc2hvd1xuICovXG5mdW5jdGlvbiBzaG93VGFiKG5hbWUpIHtcbiAgICBjb25zdCBhbGxUYWJOYW1lcyA9IFtcIiNtYWluXCIsIFwiI2Nyb3dkVGFiXCIsIFwiI3RpbWV0YWJsZVRhYlwiXTtcbiAgICBmb3IgKGNvbnN0IHRhYk5hbWUgb2YgYWxsVGFiTmFtZXMpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IHRhYk5hbWUpIHtcbiAgICAgICAgICAgICQodGFiTmFtZSkuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJCh0YWJOYW1lKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEhpZ2hsaWdodHMgYSBzaW5nbGUgdGFiIGJ1dHRvbiBvdXQgb2YgYWxsIHRoZSBvdGhlciB0YWIgYnV0dG9uc1xuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgdGFiIGJ1dHRvbiB0byBoaWdobGlnaHRcbiAqL1xuZnVuY3Rpb24gaGlnaGxpZ2h0VGFiQnV0dG9uKG5hbWUpIHtcbiAgICAvLyBIaWdobGlnaHQgdGhlIGNvcnJlY3QgYnV0dG9uXG4gICAgY29uc3QgYWxsQnV0dG9uTmFtZXMgPSBbXCIjaG9tZVRhYkJ1dHRvblwiLCBcIiNjcm93ZFRhYkJ1dHRvblwiLCBcIiN0aW1ldGFibGVUYWJCdXR0b25cIl07XG4gICAgZm9yIChjb25zdCBidXR0b25OYW1lIG9mIGFsbEJ1dHRvbk5hbWVzKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9ICQoYnV0dG9uTmFtZSk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkljb24gPSBidXR0b24uZmluZChcImlcIik7XG4gICAgICAgIGlmIChuYW1lID09PSBidXR0b25OYW1lKSB7XG4gICAgICAgICAgICBidXR0b24uYWRkQ2xhc3MoXCJidXR0b24tcHJpbWFyeVwiKTsgLy8gSGlnaGxpZ2h0IHRoYXQgYnV0dG9uXG4gICAgICAgICAgICBidXR0b25JY29uLmNzcyh7IGNvbG9yOiBcIiNmZmZcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIENoYW5nZSB0aG9zZSBidXR0b25zIHRvIHdoaXRlXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmhhc0NsYXNzKFwiYnV0dG9uLXByaW1hcnlcIikpIHtcbiAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlQ2xhc3MoXCJidXR0b24tcHJpbWFyeVwiKTtcbiAgICAgICAgICAgICAgICBidXR0b25JY29uLmNzcyh7IGNvbG9yOiBcIiMzM0MzRjBcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vI2VuZHJlZ2lvbiBIZWxwZXIgZnVuY3Rpb25zXG4iXSwic291cmNlUm9vdCI6IiJ9