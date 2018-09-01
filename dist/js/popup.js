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
                // Sort entries by importance (using colorId)
                relevantEntries.sort((a, b) => {
                    if (a.colorId > b.colorId) {
                        return 1;
                    }
                    else if (a.colorId < b.colorId) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });
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
    Helper.getUserToken((token) => {
        if (token) {
            const currentDateString = moment().format("DDMMYY");
            const request = Helper.authenticatedRequest("GET", SP.URL_TIMETABLE + currentDateString, true, token);
            request.onloadend = function () {
                if (this.status === 200) {
                    console.debug("[DEBUG]: Requested for timetable with returned data:" + this.responseText);
                    if (this.responseText === SP.TIMETABLE_NO_LESSONS) {
                        // No lessons
                        $("#currentLesson").text("No Lessons");
                        $("#timetable > tbody:last-child").append(`<tr>
                <td>No lessons for today</td>
                <td>&#x2013;&#x2013;:&#x2013;&#x2013; to &#x2013;&#x2013;:&#x2013;&#x2013;</td>
              </tr>`);
                    }
                    else {
                        const jsonArray = JSON.parse(this.responseText);
                        // Stage I: Validate all timetable entries
                        const timetableEntries = [];
                        let currentLesson;
                        for (const entryString of jsonArray) {
                            const element = JSON.stringify(entryString);
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
                                }
                                else {
                                    console.debug("[DEBUG]: Lesson not running: ");
                                    console.debug(entry);
                                }
                                timetableEntries.push(entry);
                            }
                            else {
                                console.warn("[WARNING]: Timetable entry is invalid:");
                                console.warn(element);
                            }
                        }
                        // Stage III: Display current lesson
                        if (currentLesson) {
                            $("#currentLesson").text(currentLesson.getAbbreviation() + " " +
                                currentLesson.getTypeString() + " @ " +
                                currentLesson.getLocation());
                        }
                        else {
                            $("#currentLesson").text("No Lesson Currently");
                        }
                        // Stage IV: Display all lessons in the timetable tab
                        for (const entry of timetableEntries) {
                            const moduleName = entry.getAbbreviation();
                            const lessonType = entry.getTypeString();
                            const location = entry.getLocation();
                            const startDateTime = entry.getStartDateTime();
                            const endDateTime = entry.getEndDateTime();
                            const lessonInfo = moduleName + " " + lessonType + " @ " + location;
                            const lessonTiming = moment(startDateTime).format("HH:mm") + " to " +
                                moment(endDateTime).format("HH:mm");
                            $("#timetable > tbody:last-child").append(`<tr>
                <td>${lessonInfo}</td>
                <td>${lessonTiming}</td>
              </tr>`);
                        }
                    }
                }
                else {
                    if (this.status === 417) {
                        // Timetable is not available yet
                        $("#currentLesson").text("Timetable not yet available");
                        $("#timetable > tbody:last-child").append(`<tr>
                <td>Timetable not yet available</td>
                <td>&#x2013;&#x2013;:&#x2013;&#x2013; to &#x2013;&#x2013;:&#x2013;&#x2013;</td>
              </tr>`);
                    }
                    else {
                        console.warn("[WARNING]: Failed to load timetable: ");
                        console.warn(this.status);
                        console.warn(this.responseText);
                        // TODO: Add error telemetry here
                    }
                }
            };
            request.send();
        }
        else {
            console.error("[ERROR]: Token not found, occured during timetable retrieval!");
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
        else if (this.status === 401) {
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
    Helper.getUserToken((token) => {
        if (token) {
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
            console.error("[ERROR]: Token not found, occured during crowd fetch!");
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
                    Helper.showLoginUIAndPurgeToken();
                }
                else {
                    // Show main UI and initialise pollers
                    $("#main").show();
                    $("#tabBar").show();
                    $("#auth").hide();
                    $("#loading").hide();
                    startAllPollers();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3RlbmVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVCQUF1QjtBQUN2RDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsMEZBQTBGO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVEsU0FBUyxRQUFRLFlBQVksUUFBUSxTQUFTLFFBQVE7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFdBQVc7QUFDakMsc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUSxTQUFTLFFBQVEsWUFBWSxRQUFRLFNBQVMsUUFBUTtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsS0FBSztBQUN6Qiw2REFBNkQsTUFBTSxVQUFVLFdBQVc7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqUUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsNkRBQTZEO0FBQzdELDBEQUEwRDtBQUMxRCx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1CQUFtQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBvcHVwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL3BvcHVwLnRzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuY29uc3QgSGVscGVyID0gcmVxdWlyZShcIi4vaGVscGVyXCIpO1xuLyoqXG4gKiBIb29rcyB1cCB0byBhIC5jbGljaygpIGxpc3RlbmVyIGZvciB0aGUgbG9naW4gZXZlbnRcbiAqIEBwYXJhbSBmaW5pc2hlZCBBIGNhbGxiYWNrIGZvciB0aGUgbWFpbiBwb3B1cC50cyB0byBpbml0aWFsaXNlIHJlY3VycmluZyBldmVudHMgKGkuZS4gcG9sbGVycylcbiAqL1xuZnVuY3Rpb24gbG9naW5MaXN0ZW5lcihmaW5pc2hlZCkge1xuICAgIEhlbHBlci51c2VyTG9naW4oJChcIiN1c2VybmFtZVwiKS52YWwoKSwgJChcIiNwYXNzd29yZFwiKS52YWwoKSwgKCkgPT4ge1xuICAgICAgICAvLyBIaWRlIHRoZSBsb2dpbiBkaWFsb2cgYW5kIHNob3cgdGhlIG1haW4gVUlcbiAgICAgICAgJChcIiNtYWluXCIpLnNob3coKTtcbiAgICAgICAgJChcIiN0YWJCYXJcIikuc2hvdygpO1xuICAgICAgICAkKFwiI2F1dGhcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2xvYWRpbmdcIikuaGlkZSgpO1xuICAgICAgICAvLyBTdGFydCBwb2xsZXJzIGJ5IGNhbGxpbmcgYmFjayB0aGUgbWFpbiBmaWxlIChwb3B1cC50cylcbiAgICAgICAgZmluaXNoZWQoKTtcbiAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gRGlzcGxheSBlcnJvclxuICAgICAgICAkKFwiI2F1dGhFcnJvclwiKS5zaG93KCk7XG4gICAgICAgICQoXCIjYXV0aEVycm9yXCIpLnRleHQoZXJyb3IpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5sb2dpbkxpc3RlbmVyID0gbG9naW5MaXN0ZW5lcjtcbi8qKlxuICogQSBsaXN0ZW5lciB0byBhdHRhY2ggdG8gYSBidXR0b24gdG8gdHJpZ2dlciB0aGUgQVRTIGludGVyZmFjZVxuICovXG5mdW5jdGlvbiBhdHNCdXR0b25MaXN0ZW5lcigpIHtcbiAgICAvLyBDYWxsIGJhY2tncm91bmQudHMgdG8gcG9zdCBkYXRhXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcImF0cy1saXN0ZW5lclwiIH0pO1xufVxuZXhwb3J0cy5hdHNCdXR0b25MaXN0ZW5lciA9IGF0c0J1dHRvbkxpc3RlbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBTUCA9IHJlcXVpcmUoXCIuL2RhdGF0eXBlc1wiKTtcbmNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuY29uc3QgSGVscGVyID0gcmVxdWlyZShcIi4vaGVscGVyXCIpO1xuY29uc3QgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcbi8qKlxuICogUmV0cmlldmVzIGV2ZW50cyBmcm9tIHRoZSBTUCBDYWxlbmRhciBBUEkgYW5kIGRpc3BsYXlzIGl0IGluIHRoZSBtYWluIHRhYiwgaWZcbiAqIHRoZXJlIGlzIGFuIGV2ZW50IHJpZ2h0IG5vd1xuICovXG5mdW5jdGlvbiBjYWxlbmRhclBvbGwoKSB7XG4gICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExvYWRpbmcgU1AgQ2FsZW5kYXJcIik7XG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgLy8gR2V0IGFsbCBvYmplY3RzXG4gICAgICAgICAgICBjb25zdCBhbGxDYWxlbmRhckVudHJpZXMgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnN0IHJlbGV2YW50RW50cmllcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBhbGxDYWxlbmRhckVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydERhdGUgPSBEYXRlLnBhcnNlKGVudHJ5LnN0YXJ0VGltZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kRGF0ZSA9IERhdGUucGFyc2UoZW50cnkuZW5kVGltZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+IHN0YXJ0RGF0ZSAmJiBjdXJyZW50RGF0ZSA8IGVuZERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsZXZhbnRFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNldCBzdGF0dXNcbiAgICAgICAgICAgIGlmIChyZWxldmFudEVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIFNvcnQgZW50cmllcyBieSBpbXBvcnRhbmNlICh1c2luZyBjb2xvcklkKVxuICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmNvbG9ySWQgPiBiLmNvbG9ySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGEuY29sb3JJZCA8IGIuY29sb3JJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsZXQgc2Nob29sU3RhdGVTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nICs9IFwiLCBcIjtcbiAgICAgICAgICAgICAgICAgICAgc2Nob29sU3RhdGVTdHJpbmcgKz0gZWxlbWVudC5zdW1tYXJ5O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nID0gc2Nob29sU3RhdGVTdHJpbmcuc3Vic3RyKDIsIHNjaG9vbFN0YXRlU3RyaW5nLmxlbmd0aCk7IC8vIFJlbW92ZSB0aGUgZmlyc3QgMiBjaGFyYWN0ZXJzXG4gICAgICAgICAgICAgICAgJChcIiNjdXJyZW50U3RhdHVzXCIpLnRleHQoc2Nob29sU3RhdGVTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNjdXJyZW50U3RhdHVzXCIpLnRleHQoXCJObyBTY2hvb2wgRXZlbnRzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgXCJodHRwczovL21vYmlsZWFwcHMuc3AuZWR1LnNnL1NQTW9iaWxlQVBJL2FwaS9HZXRBY2FkQ2FsZW5kYXJcIiwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5zZW5kKCk7XG59XG5leHBvcnRzLmNhbGVuZGFyUG9sbCA9IGNhbGVuZGFyUG9sbDtcbi8qKlxuICogR2V0cyB0aGUgdGltZXRhYmxlIGZvciB0b2RheSBhbmQgY2hlY2tzIGlmIHRoZSB1c2VyIGlzIGF0dGVuZGluZyBhIGxlc3Nvbi5cbiAqIERpc3BsYXlzIHRoZSBsZXNzb24gaWYgYW55IGluIHRoZSBtYWluIHRhYlxuICovXG5mdW5jdGlvbiB0aW1ldGFibGVQb2xsKCkge1xuICAgIEhlbHBlci5nZXRVc2VyVG9rZW4oKHRva2VuKSA9PiB7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGVTdHJpbmcgPSBtb21lbnQoKS5mb3JtYXQoXCJERE1NWVlcIik7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gSGVscGVyLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiR0VUXCIsIFNQLlVSTF9USU1FVEFCTEUgKyBjdXJyZW50RGF0ZVN0cmluZywgdHJ1ZSwgdG9rZW4pO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IFJlcXVlc3RlZCBmb3IgdGltZXRhYmxlIHdpdGggcmV0dXJuZWQgZGF0YTpcIiArIHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VUZXh0ID09PSBTUC5USU1FVEFCTEVfTk9fTEVTU09OUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gbGVzc29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjdXJyZW50TGVzc29uXCIpLnRleHQoXCJObyBMZXNzb25zXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN0aW1ldGFibGUgPiB0Ym9keTpsYXN0LWNoaWxkXCIpLmFwcGVuZChgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5ObyBsZXNzb25zIGZvciB0b2RheTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiYjeDIwMTM7JiN4MjAxMzs6JiN4MjAxMzsmI3gyMDEzOyB0byAmI3gyMDEzOyYjeDIwMTM7OiYjeDIwMTM7JiN4MjAxMzs8L3RkPlxuICAgICAgICAgICAgICA8L3RyPmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbkFycmF5ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJOiBWYWxpZGF0ZSBhbGwgdGltZXRhYmxlIGVudHJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWV0YWJsZUVudHJpZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TGVzc29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeVN0cmluZyBvZiBqc29uQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gSlNPTi5zdHJpbmdpZnkoZW50cnlTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5VmFsaWQgPSBTUC5UaW1ldGFibGVFbnRyeS5pc1ZhbGlkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeVZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gU1AuVGltZXRhYmxlRW50cnkuZnJvbUpTT04oZWxlbWVudCwgY3VycmVudERhdGVTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSTogSW5zZXJ0IGFsbCBlbnRyaWVzIGludG8gYXJyYXkgd2hlcmUgaXQgaXMgY3VycmVudGx5IGhhcHBlbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuZ2V0U3RhcnREYXRlVGltZSgpIDwgY3VycmVudERhdGVUaW1lICYmIGVudHJ5LmdldEVuZERhdGVUaW1lKCkgPiBjdXJyZW50RGF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRpbWV0YWJsZUVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGVzc29uID0gZW50cnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTGVzc29uIGN1cnJlbnRseSBydW5uaW5nOiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMZXNzb24gbm90IHJ1bm5pbmc6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWV0YWJsZUVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbV0FSTklOR106IFRpbWV0YWJsZSBlbnRyeSBpcyBpbnZhbGlkOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIElJSTogRGlzcGxheSBjdXJyZW50IGxlc3NvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRMZXNzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2N1cnJlbnRMZXNzb25cIikudGV4dChjdXJyZW50TGVzc29uLmdldEFiYnJldmlhdGlvbigpICsgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGVzc29uLmdldFR5cGVTdHJpbmcoKSArIFwiIEAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGVzc29uLmdldExvY2F0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjdXJyZW50TGVzc29uXCIpLnRleHQoXCJObyBMZXNzb24gQ3VycmVudGx5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSVY6IERpc3BsYXkgYWxsIGxlc3NvbnMgaW4gdGhlIHRpbWV0YWJsZSB0YWJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGltZXRhYmxlRW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZU5hbWUgPSBlbnRyeS5nZXRBYmJyZXZpYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZXNzb25UeXBlID0gZW50cnkuZ2V0VHlwZVN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZW50cnkuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydERhdGVUaW1lID0gZW50cnkuZ2V0U3RhcnREYXRlVGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZERhdGVUaW1lID0gZW50cnkuZ2V0RW5kRGF0ZVRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZXNzb25JbmZvID0gbW9kdWxlTmFtZSArIFwiIFwiICsgbGVzc29uVHlwZSArIFwiIEAgXCIgKyBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZXNzb25UaW1pbmcgPSBtb21lbnQoc3RhcnREYXRlVGltZSkuZm9ybWF0KFwiSEg6bW1cIikgKyBcIiB0byBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbWVudChlbmREYXRlVGltZSkuZm9ybWF0KFwiSEg6bW1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN0aW1ldGFibGUgPiB0Ym9keTpsYXN0LWNoaWxkXCIpLmFwcGVuZChgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD4ke2xlc3NvbkluZm99PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHtsZXNzb25UaW1pbmd9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSA0MTcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRpbWV0YWJsZSBpcyBub3QgYXZhaWxhYmxlIHlldFxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjdXJyZW50TGVzc29uXCIpLnRleHQoXCJUaW1ldGFibGUgbm90IHlldCBhdmFpbGFibGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3RpbWV0YWJsZSA+IHRib2R5Omxhc3QtY2hpbGRcIikuYXBwZW5kKGA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlRpbWV0YWJsZSBub3QgeWV0IGF2YWlsYWJsZTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiYjeDIwMTM7JiN4MjAxMzs6JiN4MjAxMzsmI3gyMDEzOyB0byAmI3gyMDEzOyYjeDIwMTM7OiYjeDIwMTM7JiN4MjAxMzs8L3RkPlxuICAgICAgICAgICAgICA8L3RyPmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBGYWlsZWQgdG8gbG9hZCB0aW1ldGFibGU6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQWRkIGVycm9yIHRlbGVtZXRyeSBoZXJlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXTogVG9rZW4gbm90IGZvdW5kLCBvY2N1cmVkIGR1cmluZyB0aW1ldGFibGUgcmV0cmlldmFsIVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy50aW1ldGFibGVQb2xsID0gdGltZXRhYmxlUG9sbDtcbi8qKlxuICogQ2hlY2tzIGlmIHRoZSB1c2VyIGlzIGNvbm5lY3RlZCB0byBTUCBXaS1GaSBhbmQgZGlzcGxheXMgdGhlIGNvbm5lY3Rpdml0eSBzdGF0dXNcbiAqL1xuZnVuY3Rpb24gc3BXaWZpUG9sbCgpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBjb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHJlcXVlc3QgYWN0dWFsbHkgZ2V0cyB0aGUgcmVhbCBBVFMgcGFnZVxuICAgICAgICAgICAgY29ubmVjdGVkID0gdGhpcy5yZXNwb25zZVVSTC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9teWF0cy5zcC5lZHUuc2dcIikgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgLy8gVXNlciBpcyBub3QgYXV0aGVudGljYXRlZCwgYXR0ZW1wdCByZWtleVxuICAgICAgICAgICAgLy8gTk9URTogZG9uJ3QgYm90aGVyIHRyeWluZyB0byByZWtleSB3aXRoIG90aGVyIGZ1bmN0aW9ucywgYXMgYWxsIHRoZXNlXG4gICAgICAgICAgICAvLyBmdW5jdGlvbnMgYXJlIHJ1biBpbiBwYXJhbGxlbCwgc28gZG9pbmcgcmVrZXlpbmcgZnJvbSBvbmUgd291bGQgZG9cbiAgICAgICAgICAgIEhlbHBlci5yZWtleVVzZXIoKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgcmVrZXkgZmFpbGVkXG4gICAgICAgICAgICAgICAgICAgIEhlbHBlci5zaG93TG9naW5VSUFuZFB1cmdlVG9rZW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEaXNwbGF5IGNvbm5lY3RlZCBzdGF0ZVxuICAgICAgICBpZiAoY29ubmVjdGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogQ29ubmVjdGVkIHRvIFNQIHdpZmlcIik7XG4gICAgICAgICAgICAkKFwiI3dpZmlDb25uZWN0ZWRUZXh0XCIpLnRleHQoXCJDb25uZWN0ZWQgdG8gU1AgV2ktRmlcIik7XG4gICAgICAgICAgICAkKFwiI3dpZmlMb2dvXCIpLmNzcyhcImNvbG9yXCIsIFwiIzMzQzNGMFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBOb3QgY29ubmVjdGVkIHRvIFNQIHdpZmlcIik7XG4gICAgICAgICAgICAkKFwiI3dpZmlDb25uZWN0ZWRUZXh0XCIpLnRleHQoXCJOb3QgY29ubmVjdGVkIHRvIFNQIFdpLUZpXCIpO1xuICAgICAgICAgICAgJChcIiN3aWZpTG9nb1wiKS5jc3MoXCJjb2xvclwiLCBcIiNiYmJcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBTUC5VUkxfQVRTLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcbn1cbmV4cG9ydHMuc3BXaWZpUG9sbCA9IHNwV2lmaVBvbGw7XG4vKipcbiAqIENoZWNrcyBmb3IgY3Jvd2QgZGF0YSBhbmQgZGlzcGxheXMgaXQgaW4gdGhlIGNyb3dkIHRhYlxuICovXG5mdW5jdGlvbiBjcm93ZFBvbGwoKSB7XG4gICAgSGVscGVyLmdldFVzZXJUb2tlbigodG9rZW4pID0+IHtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gSGVscGVyLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiR0VUXCIsIFNQLlVSTF9DUk9XRF9DSEVDSywgdHJ1ZSwgdG9rZW4pO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbkFycmF5ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIEk6IFZhbGlkYXRlIGFsbCBjcm93ZCBlbnRyaWVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyb3dkRW50cmllcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5U3RyaW5nIG9mIGpzb25BcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IEpTT04uc3RyaW5naWZ5KGVudHJ5U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5VmFsaWQgPSBTUC5Dcm93ZEluZm8uaXNWYWxpZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeVZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cnkgPSBTUC5Dcm93ZEluZm8uZnJvbUpTT04oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSUk6IEluc2VydCBhbGwgdmFsaWQgZW50cmllcyBpbnRvIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvd2RFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBDcm93ZCBKU09OIGlzIGludmFsaWQ6XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSUk6IERpc3BsYXkgaXQhXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgY3Jvd2RFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZW50cnkuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZW50cnkuZ2V0U3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGVyY2VudGFnZSA9IFwiJmx0OyA1MCVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IFwibGltZWdyZWVuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU1AuQ3Jvd2RMZXZlbC5TbWFsbDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBcImxpbWVncmVlblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gXCImbHQ7IDUwJVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNQLkNyb3dkTGV2ZWwuTWVkaXVtOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9IFwiZ29sZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gXCImbHQ7IDc1JVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNQLkNyb3dkTGV2ZWwuTGFyZ2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gXCJjcmltc29uXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBcIiZndDsgNzUlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjcm93ZFRhYmxlID4gdGJvZHk6bGFzdC1jaGlsZFwiKS5hcHBlbmQoYDx0cj5cbiAgICAgICAgICAgICAgPHRkPiR7bmFtZX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGkgY2xhc3M9XFxcImZhcyBmYS11c2Vyc1xcXCIgc3R5bGU9XFxcImNvbG9yOiAke2NvbG9yfVxcXCI+PC9pPiAke3BlcmNlbnRhZ2V9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEVycm9yIGhhbmRsaW5nIGhlcmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXTogVG9rZW4gbm90IGZvdW5kLCBvY2N1cmVkIGR1cmluZyBjcm93ZCBmZXRjaCFcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuY3Jvd2RQb2xsID0gY3Jvd2RQb2xsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5jb25zdCBMaXN0ZW5lciA9IHJlcXVpcmUoXCIuL2xpc3RlbmVyc1wiKTtcbmNvbnN0IEhlbHBlciA9IHJlcXVpcmUoXCIuL2hlbHBlclwiKTtcbmNvbnN0IFBvbGxlciA9IHJlcXVpcmUoXCIuL3BvbGxlclwiKTtcbi8qKlxuICogU3RhcnRzIGFsbCBvZiB0aGUgcG9sbGVycywgYmFzaWNhbGx5IGZ1bmN0aW9ucyB0aGF0IG5lZWRzIHRvIHJ1biBwZXJpb2RpY2FsbHlcbiAqL1xuZnVuY3Rpb24gc3RhcnRBbGxQb2xsZXJzKCkge1xuICAgIGNsb2NrUG9sbCgpOyAvLyB0aGlzIGRvZXMgbm90IHVzZSBpbnRlcnZhbCBhcyBpdCBpcyB0aW1lIHNlbnNpdGl2ZVxuICAgIFBvbGxlci5jYWxlbmRhclBvbGwoKTtcbiAgICBQb2xsZXIudGltZXRhYmxlUG9sbCgpO1xuICAgIFBvbGxlci5zcFdpZmlQb2xsKCk7XG4gICAgUG9sbGVyLmNyb3dkUG9sbCgpO1xuICAgIHNldEludGVydmFsKCgpID0+IFBvbGxlci5jYWxlbmRhclBvbGwoKSwgMTAwMCAqIDYwICogNSk7IC8vIDUgbWludXRlIGNhbGVuZGFyIHBvbGxpbmdcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiBQb2xsZXIudGltZXRhYmxlUG9sbCgpLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgdGltZXRhYmxlIHBvbGxpbmdcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiBQb2xsZXIuc3BXaWZpUG9sbCgpLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgd2lmaSBwb2xsaW5nXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gUG9sbGVyLmNyb3dkUG9sbCgpLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgY3Jvd2QgcG9sbGluZ1xufVxuLy8jcmVnaW9uIFBvbGxlcnNcbi8qKlxuICogUmVmcmVzaGVzIHRoZSBjbG9jayBkaXNwbGF5IGV2ZXJ5IDEgc2Vjb25kXG4gKi9cbmZ1bmN0aW9uIGNsb2NrUG9sbCgpIHtcbiAgICAkKFwiI3RpbWVcIikudGV4dChtb21lbnQoKS5mb3JtYXQoXCJISDptbTpzc1wiKSk7XG4gICAgc2V0VGltZW91dChjbG9ja1BvbGwsIDEwMDApOyAvLyAxIHNlY29uZCBwb2xsaW5nXG59XG4vLyNlbmRyZWdpb24gUG9sbGVyc1xuLy8gSW5pdGlhbGlzYXRpb24uIFRoaXMgYmxvY2sgcnVucyB3aGVuIGRvY3VtZW50IGlzIHJlYWR5XG4kKGZ1bmN0aW9uICgpIHtcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBVc2VyIGF1dGhlbnRpY2F0aW9uIGNoZWNrID09PT09PT09PT09PT09PT09PT09XG4gICAgSGVscGVyLnVzZXJJc0F1dGhlbnRpY2F0ZWQoZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgJChcIiNsb2FkaW5nXCIpLnNob3coKTtcbiAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIC8vIFVzZXIgaXMgbG9nZ2VkIGluLCBzaG93IG1haW4gVUkgYW5kIGluaXRpYWxpc2UgcG9sbGVyc1xuICAgICAgICAgICAgJChcIiNtYWluXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjdGFiQmFyXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjYXV0aFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2xvYWRpbmdcIikuaGlkZSgpO1xuICAgICAgICAgICAgc3RhcnRBbGxQb2xsZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBBdHRlbXB0IHJla2V5aW5nIGlmIHVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW5cbiAgICAgICAgICAgIEhlbHBlci5yZWtleVVzZXIoKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgSGVscGVyLnNob3dMb2dpblVJQW5kUHVyZ2VUb2tlbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBtYWluIFVJIGFuZCBpbml0aWFsaXNlIHBvbGxlcnNcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtYWluXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiN0YWJCYXJcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2F1dGhcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2xvYWRpbmdcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBzdGFydEFsbFBvbGxlcnMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBMaXN0ZW5lcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIEluaXRpYWxpc2UgTG9naW4gbGlzdGVuZXJcbiAgICAkKFwiI2xvZ2luQnV0dG9uXCIpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgTGlzdGVuZXIubG9naW5MaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBTdGFydCB1cCB0aGUgcG9sbGVycywgYXMgdGhpcyBsYW1iZGEgd2lsbCBvbmx5IGJlIGNhbGxlZCBpZlxuICAgICAgICAgICAgLy8gdGhlIGxvZ2luIGlzIHN1Y2Nlc3NmdWxcbiAgICAgICAgICAgIHN0YXJ0QWxsUG9sbGVycygpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBTZXR1cCBBVFMgYnV0dG9uIGxpc3RlbmVyXG4gICAgJChcIiNhdHNCdXR0b25cIikuY2xpY2soKCkgPT4ge1xuICAgICAgICBMaXN0ZW5lci5hdHNCdXR0b25MaXN0ZW5lcigpO1xuICAgIH0pO1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gVGFiIExpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgJChcIiNob21lVGFiQnV0dG9uXCIpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgc2hvd1RhYihcIiNtYWluXCIpO1xuICAgICAgICBoaWdobGlnaHRUYWJCdXR0b24oXCIjaG9tZVRhYkJ1dHRvblwiKTtcbiAgICB9KTtcbiAgICAkKFwiI2Nyb3dkVGFiQnV0dG9uXCIpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgc2hvd1RhYihcIiNjcm93ZFRhYlwiKTtcbiAgICAgICAgaGlnaGxpZ2h0VGFiQnV0dG9uKFwiI2Nyb3dkVGFiQnV0dG9uXCIpO1xuICAgIH0pO1xuICAgICQoXCIjdGltZXRhYmxlVGFiQnV0dG9uXCIpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgc2hvd1RhYihcIiN0aW1ldGFibGVUYWJcIik7XG4gICAgICAgIGhpZ2hsaWdodFRhYkJ1dHRvbihcIiN0aW1ldGFibGVUYWJCdXR0b25cIik7XG4gICAgfSk7XG4gICAgLy8gSGlnaGxpZ2h0IHRoZSBIb21lIFRhYiBidXR0b24gc28gaXQgbG9va3MgbmF0dXJhbFxuICAgIGhpZ2hsaWdodFRhYkJ1dHRvbihcIiNob21lVGFiQnV0dG9uXCIpO1xufSk7XG4vLyNyZWdpb24gSGVscGVyIGZ1bmN0aW9uc1xuLyoqXG4gKiBTaG93cyBhIHNpbmdsZSB0YWIgYW5kIGhpZGVzIGFsbCBvdGhlciB0YWJzXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBzaW5nbGUgdGFiIHRvIHNob3dcbiAqL1xuZnVuY3Rpb24gc2hvd1RhYihuYW1lKSB7XG4gICAgY29uc3QgYWxsVGFiTmFtZXMgPSBbXCIjbWFpblwiLCBcIiNjcm93ZFRhYlwiLCBcIiN0aW1ldGFibGVUYWJcIl07XG4gICAgZm9yIChjb25zdCB0YWJOYW1lIG9mIGFsbFRhYk5hbWVzKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB0YWJOYW1lKSB7XG4gICAgICAgICAgICAkKHRhYk5hbWUpLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICQodGFiTmFtZSkuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBIaWdobGlnaHRzIGEgc2luZ2xlIHRhYiBidXR0b24gb3V0IG9mIGFsbCB0aGUgb3RoZXIgdGFiIGJ1dHRvbnNcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIHRhYiBidXR0b24gdG8gaGlnaGxpZ2h0XG4gKi9cbmZ1bmN0aW9uIGhpZ2hsaWdodFRhYkJ1dHRvbihuYW1lKSB7XG4gICAgLy8gSGlnaGxpZ2h0IHRoZSBjb3JyZWN0IGJ1dHRvblxuICAgIGNvbnN0IGFsbEJ1dHRvbk5hbWVzID0gW1wiI2hvbWVUYWJCdXR0b25cIiwgXCIjY3Jvd2RUYWJCdXR0b25cIiwgXCIjdGltZXRhYmxlVGFiQnV0dG9uXCJdO1xuICAgIGZvciAoY29uc3QgYnV0dG9uTmFtZSBvZiBhbGxCdXR0b25OYW1lcykge1xuICAgICAgICBjb25zdCBidXR0b24gPSAkKGJ1dHRvbk5hbWUpO1xuICAgICAgICBjb25zdCBidXR0b25JY29uID0gYnV0dG9uLmZpbmQoXCJpXCIpO1xuICAgICAgICBpZiAobmFtZSA9PT0gYnV0dG9uTmFtZSkge1xuICAgICAgICAgICAgYnV0dG9uLmFkZENsYXNzKFwiYnV0dG9uLXByaW1hcnlcIik7IC8vIEhpZ2hsaWdodCB0aGF0IGJ1dHRvblxuICAgICAgICAgICAgYnV0dG9uSWNvbi5jc3MoeyBjb2xvcjogXCIjZmZmXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBDaGFuZ2UgdGhvc2UgYnV0dG9ucyB0byB3aGl0ZVxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5oYXNDbGFzcyhcImJ1dHRvbi1wcmltYXJ5XCIpKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUNsYXNzKFwiYnV0dG9uLXByaW1hcnlcIik7XG4gICAgICAgICAgICAgICAgYnV0dG9uSWNvbi5jc3MoeyBjb2xvcjogXCIjMzNDM0YwXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyNlbmRyZWdpb24gSGVscGVyIGZ1bmN0aW9uc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==