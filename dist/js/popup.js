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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3RlbmVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVCQUF1QjtBQUN2RDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsMEZBQTBGO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVEsU0FBUyxRQUFRLFlBQVksUUFBUSxTQUFTLFFBQVE7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFdBQVc7QUFDakMsc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEtBQUs7QUFDekIsNkRBQTZELE1BQU0sVUFBVSxXQUFXO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdFBBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVELDZEQUE2RDtBQUM3RCwwREFBMEQ7QUFDMUQseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtQkFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwb3B1cFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9wb3B1cC50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcbmNvbnN0IEhlbHBlciA9IHJlcXVpcmUoXCIuL2hlbHBlclwiKTtcclxuLyoqXHJcbiAqIEhvb2tzIHVwIHRvIGEgLmNsaWNrKCkgbGlzdGVuZXIgZm9yIHRoZSBsb2dpbiBldmVudFxyXG4gKiBAcGFyYW0gZmluaXNoZWQgQSBjYWxsYmFjayBmb3IgdGhlIG1haW4gcG9wdXAudHMgdG8gaW5pdGlhbGlzZSByZWN1cnJpbmcgZXZlbnRzIChpLmUuIHBvbGxlcnMpXHJcbiAqL1xyXG5mdW5jdGlvbiBsb2dpbkxpc3RlbmVyKGZpbmlzaGVkKSB7XHJcbiAgICBIZWxwZXIudXNlckxvZ2luKCQoXCIjdXNlcm5hbWVcIikudmFsKCksICQoXCIjcGFzc3dvcmRcIikudmFsKCksICgpID0+IHtcclxuICAgICAgICAvLyBIaWRlIHRoZSBsb2dpbiBkaWFsb2cgYW5kIHNob3cgdGhlIG1haW4gVUlcclxuICAgICAgICAkKFwiI21haW5cIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjdGFiQmFyXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI2F1dGhcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjbG9hZGluZ1wiKS5oaWRlKCk7XHJcbiAgICAgICAgLy8gU3RhcnQgcG9sbGVycyBieSBjYWxsaW5nIGJhY2sgdGhlIG1haW4gZmlsZSAocG9wdXAudHMpXHJcbiAgICAgICAgZmluaXNoZWQoKTtcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vIERpc3BsYXkgZXJyb3JcclxuICAgICAgICAkKFwiI2F1dGhFcnJvclwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNhdXRoRXJyb3JcIikudGV4dChlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmxvZ2luTGlzdGVuZXIgPSBsb2dpbkxpc3RlbmVyO1xyXG4vKipcclxuICogQSBsaXN0ZW5lciB0byBhdHRhY2ggdG8gYSBidXR0b24gdG8gdHJpZ2dlciB0aGUgQVRTIGludGVyZmFjZVxyXG4gKi9cclxuZnVuY3Rpb24gYXRzQnV0dG9uTGlzdGVuZXIoKSB7XHJcbiAgICAvLyBDYWxsIGJhY2tncm91bmQudHMgdG8gcG9zdCBkYXRhXHJcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6IFwiYXRzLWxpc3RlbmVyXCIgfSk7XHJcbn1cclxuZXhwb3J0cy5hdHNCdXR0b25MaXN0ZW5lciA9IGF0c0J1dHRvbkxpc3RlbmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBTUCA9IHJlcXVpcmUoXCIuL2RhdGF0eXBlc1wiKTtcclxuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcbmNvbnN0IEhlbHBlciA9IHJlcXVpcmUoXCIuL2hlbHBlclwiKTtcclxuY29uc3QgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcclxuLyoqXHJcbiAqIFJldHJpZXZlcyBldmVudHMgZnJvbSB0aGUgU1AgQ2FsZW5kYXIgQVBJIGFuZCBkaXNwbGF5cyBpdCBpbiB0aGUgbWFpbiB0YWIsIGlmXHJcbiAqIHRoZXJlIGlzIGFuIGV2ZW50IHJpZ2h0IG5vd1xyXG4gKi9cclxuZnVuY3Rpb24gY2FsZW5kYXJQb2xsKCkge1xyXG4gICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExvYWRpbmcgU1AgQ2FsZW5kYXJcIik7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAvLyBHZXQgYWxsIG9iamVjdHNcclxuICAgICAgICAgICAgY29uc3QgYWxsQ2FsZW5kYXJFbnRyaWVzID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbGV2YW50RW50cmllcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGFsbENhbGVuZGFyRW50cmllcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gRGF0ZS5wYXJzZShlbnRyeS5zdGFydFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kRGF0ZSA9IERhdGUucGFyc2UoZW50cnkuZW5kVGltZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPiBzdGFydERhdGUgJiYgY3VycmVudERhdGUgPCBlbmREYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVsZXZhbnRFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNldCBzdGF0dXNcclxuICAgICAgICAgICAgaWYgKHJlbGV2YW50RW50cmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTb3J0IGVudHJpZXMgYnkgaW1wb3J0YW5jZSAodXNpbmcgY29sb3JJZClcclxuICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEuY29sb3JJZCA+IGIuY29sb3JJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYS5jb2xvcklkIDwgYi5jb2xvcklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNjaG9vbFN0YXRlU3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nob29sU3RhdGVTdHJpbmcgKz0gXCIsIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nICs9IGVsZW1lbnQuc3VtbWFyeTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2Nob29sU3RhdGVTdHJpbmcgPSBzY2hvb2xTdGF0ZVN0cmluZy5zdWJzdHIoMiwgc2Nob29sU3RhdGVTdHJpbmcubGVuZ3RoKTsgLy8gUmVtb3ZlIHRoZSBmaXJzdCAyIGNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICQoXCIjY3VycmVudFN0YXR1c1wiKS50ZXh0KHNjaG9vbFN0YXRlU3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY3VycmVudFN0YXR1c1wiKS50ZXh0KFwiTm8gU2Nob29sIEV2ZW50c1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgXCJodHRwczovL21vYmlsZWFwcHMuc3AuZWR1LnNnL1NQTW9iaWxlQVBJL2FwaS9HZXRBY2FkQ2FsZW5kYXJcIiwgdHJ1ZSk7XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxufVxyXG5leHBvcnRzLmNhbGVuZGFyUG9sbCA9IGNhbGVuZGFyUG9sbDtcclxuLyoqXHJcbiAqIEdldHMgdGhlIHRpbWV0YWJsZSBmb3IgdG9kYXkgYW5kIGNoZWNrcyBpZiB0aGUgdXNlciBpcyBhdHRlbmRpbmcgYSBsZXNzb24uXHJcbiAqIERpc3BsYXlzIHRoZSBsZXNzb24gaWYgYW55IGluIHRoZSBtYWluIHRhYlxyXG4gKi9cclxuZnVuY3Rpb24gdGltZXRhYmxlUG9sbCgpIHtcclxuICAgIEhlbHBlci51c2VySXNBdXRoZW50aWNhdGVkKGZ1bmN0aW9uIChhdXRoZW50aWNhdGVkLCB0b2tlbikge1xyXG4gICAgICAgIGlmIChhdXRoZW50aWNhdGVkICYmIHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlU3RyaW5nID0gbW9tZW50KCkuZm9ybWF0KFwiRERNTVlZXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gSGVscGVyLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiR0VUXCIsIFNQLlVSTF9USU1FVEFCTEUgKyBjdXJyZW50RGF0ZVN0cmluZywgdHJ1ZSwgdG9rZW4pO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IFJlcXVlc3RlZCBmb3IgdGltZXRhYmxlIHdpdGggcmV0dXJuZWQgZGF0YTpcIiArIHRoaXMucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNwb25zZVRleHQgPT09IFNQLlRJTUVUQUJMRV9OT19MRVNTT05TKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIGxlc3NvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjdXJyZW50TGVzc29uXCIpLnRleHQoXCJObyBMZXNzb25zXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3RpbWV0YWJsZSA+IHRib2R5Omxhc3QtY2hpbGRcIikuYXBwZW5kKGA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPk5vIGxlc3NvbnMgZm9yIHRvZGF5PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JiN4MjAxMzsmI3gyMDEzOzomI3gyMDEzOyYjeDIwMTM7IHRvICYjeDIwMTM7JiN4MjAxMzs6JiN4MjAxMzsmI3gyMDEzOzwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uQXJyYXkgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSTogVmFsaWRhdGUgYWxsIHRpbWV0YWJsZSBlbnRyaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWV0YWJsZUVudHJpZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRMZXNzb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnlTdHJpbmcgb2YganNvbkFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gSlNPTi5zdHJpbmdpZnkoZW50cnlTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cnlWYWxpZCA9IFNQLlRpbWV0YWJsZUVudHJ5LmlzVmFsaWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnlWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gU1AuVGltZXRhYmxlRW50cnkuZnJvbUpTT04oZWxlbWVudCwgY3VycmVudERhdGVTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIElJOiBJbnNlcnQgYWxsIGVudHJpZXMgaW50byBhcnJheSB3aGVyZSBpdCBpcyBjdXJyZW50bHkgaGFwcGVuaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGVUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuZ2V0U3RhcnREYXRlVGltZSgpIDwgY3VycmVudERhdGVUaW1lICYmIGVudHJ5LmdldEVuZERhdGVUaW1lKCkgPiBjdXJyZW50RGF0ZVRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGltZXRhYmxlRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudExlc3NvbiA9IGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTGVzc29uIGN1cnJlbnRseSBydW5uaW5nOiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoZW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExlc3NvbiBub3QgcnVubmluZzogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXRhYmxlRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltXQVJOSU5HXTogVGltZXRhYmxlIGVudHJ5IGlzIGludmFsaWQ6XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSUk6IERpc3BsYXkgY3VycmVudCBsZXNzb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRMZXNzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjY3VycmVudExlc3NvblwiKS50ZXh0KGN1cnJlbnRMZXNzb24uZ2V0QWJicmV2aWF0aW9uKCkgKyBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudExlc3Nvbi5nZXRUeXBlU3RyaW5nKCkgKyBcIiBAIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGVzc29uLmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjdXJyZW50TGVzc29uXCIpLnRleHQoXCJObyBMZXNzb24gQ3VycmVudGx5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIElWOiBEaXNwbGF5IGFsbCBsZXNzb25zIGluIHRoZSB0aW1ldGFibGUgdGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGltZXRhYmxlRW50cmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlTmFtZSA9IGVudHJ5LmdldEFiYnJldmlhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVzc29uVHlwZSA9IGVudHJ5LmdldFR5cGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZW50cnkuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0RGF0ZVRpbWUgPSBlbnRyeS5nZXRTdGFydERhdGVUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmREYXRlVGltZSA9IGVudHJ5LmdldEVuZERhdGVUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZXNzb25JbmZvID0gbW9kdWxlTmFtZSArIFwiIFwiICsgbGVzc29uVHlwZSArIFwiIEAgXCIgKyBsb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlc3NvblRpbWluZyA9IG1vbWVudChzdGFydERhdGVUaW1lKS5mb3JtYXQoXCJISDptbVwiKSArIFwiIHRvIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb21lbnQoZW5kRGF0ZVRpbWUpLmZvcm1hdChcIkhIOm1tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN0aW1ldGFibGUgPiB0Ym9keTpsYXN0LWNoaWxkXCIpLmFwcGVuZChgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD4ke2xlc3NvbkluZm99PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHtsZXNzb25UaW1pbmd9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltXQVJOSU5HXTogRmFpbGVkIHRvIGxvYWQgdGltZXRhYmxlOiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRoaXMuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdOiBUb2tlbiBpbnZhbGlkLCBmb3VuZCBkdXJpbmcgdGltZXRhYmxlIHJldHJpZXZhbCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy50aW1ldGFibGVQb2xsID0gdGltZXRhYmxlUG9sbDtcclxuLyoqXHJcbiAqIENoZWNrcyBpZiB0aGUgdXNlciBpcyBjb25uZWN0ZWQgdG8gU1AgV2ktRmkgYW5kIGRpc3BsYXlzIHRoZSBjb25uZWN0aXZpdHkgc3RhdHVzXHJcbiAqL1xyXG5mdW5jdGlvbiBzcFdpZmlQb2xsKCkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHJlcXVlc3QgYWN0dWFsbHkgZ2V0cyB0aGUgcmVhbCBBVFMgcGFnZVxyXG4gICAgICAgICAgICBjb25uZWN0ZWQgPSB0aGlzLnJlc3BvbnNlVVJMLnN0YXJ0c1dpdGgoXCJodHRwczovL215YXRzLnNwLmVkdS5zZ1wiKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAvLyBVc2VyIGlzIG5vdCBhdXRoZW50aWNhdGVkLCBhdHRlbXB0IHJla2V5XHJcbiAgICAgICAgICAgIC8vIE5PVEU6IGRvbid0IGJvdGhlciB0cnlpbmcgdG8gcmVrZXkgd2l0aCBvdGhlciBmdW5jdGlvbnMsIGFzIGFsbCB0aGVzZVxyXG4gICAgICAgICAgICAvLyBmdW5jdGlvbnMgYXJlIHJ1biBpbiBwYXJhbGxlbCwgc28gZG9pbmcgcmVrZXlpbmcgZnJvbSBvbmUgd291bGQgZG9cclxuICAgICAgICAgICAgSGVscGVyLnJla2V5VXNlcigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgcmVrZXkgZmFpbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgSGVscGVyLnNob3dMb2dpblVJQW5kUHVyZ2VUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRGlzcGxheSBjb25uZWN0ZWQgc3RhdGVcclxuICAgICAgICBpZiAoY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBDb25uZWN0ZWQgdG8gU1Agd2lmaVwiKTtcclxuICAgICAgICAgICAgJChcIiN3aWZpQ29ubmVjdGVkVGV4dFwiKS50ZXh0KFwiQ29ubmVjdGVkIHRvIFNQIFdpLUZpXCIpO1xyXG4gICAgICAgICAgICAkKFwiI3dpZmlMb2dvXCIpLmNzcyhcImNvbG9yXCIsIFwiIzMzQzNGMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBOb3QgY29ubmVjdGVkIHRvIFNQIHdpZmlcIik7XHJcbiAgICAgICAgICAgICQoXCIjd2lmaUNvbm5lY3RlZFRleHRcIikudGV4dChcIk5vdCBjb25uZWN0ZWQgdG8gU1AgV2ktRmlcIik7XHJcbiAgICAgICAgICAgICQoXCIjd2lmaUxvZ29cIikuY3NzKFwiY29sb3JcIiwgXCIjYmJiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgU1AuVVJMX0FUUywgdHJ1ZSk7XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxufVxyXG5leHBvcnRzLnNwV2lmaVBvbGwgPSBzcFdpZmlQb2xsO1xyXG4vKipcclxuICogQ2hlY2tzIGZvciBjcm93ZCBkYXRhIGFuZCBkaXNwbGF5cyBpdCBpbiB0aGUgY3Jvd2QgdGFiXHJcbiAqL1xyXG5mdW5jdGlvbiBjcm93ZFBvbGwoKSB7XHJcbiAgICBIZWxwZXIudXNlcklzQXV0aGVudGljYXRlZChmdW5jdGlvbiAoYXV0aGVudGljYXRlZCwgdG9rZW4pIHtcclxuICAgICAgICBpZiAoYXV0aGVudGljYXRlZCAmJiB0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gSGVscGVyLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiR0VUXCIsIFNQLlVSTF9DUk9XRF9DSEVDSywgdHJ1ZSwgdG9rZW4pO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbkFycmF5ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSTogVmFsaWRhdGUgYWxsIGNyb3dkIGVudHJpZXNcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjcm93ZEVudHJpZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5U3RyaW5nIG9mIGpzb25BcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gSlNPTi5zdHJpbmdpZnkoZW50cnlTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyeVZhbGlkID0gU1AuQ3Jvd2RJbmZvLmlzVmFsaWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeVZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IFNQLkNyb3dkSW5mby5mcm9tSlNPTihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIElJOiBJbnNlcnQgYWxsIHZhbGlkIGVudHJpZXMgaW50byBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvd2RFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBDcm93ZCBKU09OIGlzIGludmFsaWQ6XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIElJSTogRGlzcGxheSBpdCFcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGNyb3dkRW50cmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZW50cnkuZ2V0TmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBlbnRyeS5nZXRTdGF0dXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBcIiZsdDsgNTAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IFwibGltZWdyZWVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNQLkNyb3dkTGV2ZWwuU21hbGw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBcImxpbWVncmVlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBcIiZsdDsgNTAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNQLkNyb3dkTGV2ZWwuTWVkaXVtOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gXCJnb2xkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IFwiJmx0OyA3NSVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU1AuQ3Jvd2RMZXZlbC5MYXJnZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9IFwiY3JpbXNvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBcIiZndDsgNzUlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjcm93ZFRhYmxlID4gdGJvZHk6bGFzdC1jaGlsZFwiKS5hcHBlbmQoYDx0cj5cbiAgICAgICAgICAgICAgPHRkPiR7bmFtZX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGkgY2xhc3M9XFxcImZhcyBmYS11c2Vyc1xcXCIgc3R5bGU9XFxcImNvbG9yOiAke2NvbG9yfVxcXCI+PC9pPiAke3BlcmNlbnRhZ2V9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogRXJyb3IgaGFuZGxpbmcgaGVyZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdOiBUb2tlbiBpbnZhbGlkLCBmb3VuZCBkdXJpbmcgY3Jvd2QgZmV0Y2ghXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuY3Jvd2RQb2xsID0gY3Jvd2RQb2xsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xyXG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcclxuY29uc3QgTGlzdGVuZXIgPSByZXF1aXJlKFwiLi9saXN0ZW5lcnNcIik7XHJcbmNvbnN0IEhlbHBlciA9IHJlcXVpcmUoXCIuL2hlbHBlclwiKTtcclxuY29uc3QgUG9sbGVyID0gcmVxdWlyZShcIi4vcG9sbGVyXCIpO1xyXG4vKipcclxuICogU3RhcnRzIGFsbCBvZiB0aGUgcG9sbGVycywgYmFzaWNhbGx5IGZ1bmN0aW9ucyB0aGF0IG5lZWRzIHRvIHJ1biBwZXJpb2RpY2FsbHlcclxuICovXHJcbmZ1bmN0aW9uIHN0YXJ0QWxsUG9sbGVycygpIHtcclxuICAgIGNsb2NrUG9sbCgpOyAvLyB0aGlzIGRvZXMgbm90IHVzZSBpbnRlcnZhbCBhcyBpdCBpcyB0aW1lIHNlbnNpdGl2ZVxyXG4gICAgUG9sbGVyLmNhbGVuZGFyUG9sbCgpO1xyXG4gICAgUG9sbGVyLnRpbWV0YWJsZVBvbGwoKTtcclxuICAgIFBvbGxlci5zcFdpZmlQb2xsKCk7XHJcbiAgICBQb2xsZXIuY3Jvd2RQb2xsKCk7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiBQb2xsZXIuY2FsZW5kYXJQb2xsKCksIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSBjYWxlbmRhciBwb2xsaW5nXHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiBQb2xsZXIudGltZXRhYmxlUG9sbCgpLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgdGltZXRhYmxlIHBvbGxpbmdcclxuICAgIHNldEludGVydmFsKCgpID0+IFBvbGxlci5zcFdpZmlQb2xsKCksIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSB3aWZpIHBvbGxpbmdcclxuICAgIHNldEludGVydmFsKCgpID0+IFBvbGxlci5jcm93ZFBvbGwoKSwgMTAwMCAqIDYwICogNSk7IC8vIDUgbWludXRlIGNyb3dkIHBvbGxpbmdcclxufVxyXG4vLyNyZWdpb24gUG9sbGVyc1xyXG4vKipcclxuICogUmVmcmVzaGVzIHRoZSBjbG9jayBkaXNwbGF5IGV2ZXJ5IDEgc2Vjb25kXHJcbiAqL1xyXG5mdW5jdGlvbiBjbG9ja1BvbGwoKSB7XHJcbiAgICAkKFwiI3RpbWVcIikudGV4dChtb21lbnQoKS5mb3JtYXQoXCJISDptbTpzc1wiKSk7XHJcbiAgICBzZXRUaW1lb3V0KGNsb2NrUG9sbCwgMTAwMCk7IC8vIDEgc2Vjb25kIHBvbGxpbmdcclxufVxyXG4vLyNlbmRyZWdpb24gUG9sbGVyc1xyXG4vLyBJbml0aWFsaXNhdGlvbi4gVGhpcyBibG9jayBydW5zIHdoZW4gZG9jdW1lbnQgaXMgcmVhZHlcclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBVc2VyIGF1dGhlbnRpY2F0aW9uIGNoZWNrID09PT09PT09PT09PT09PT09PT09XHJcbiAgICBIZWxwZXIudXNlcklzQXV0aGVudGljYXRlZChmdW5jdGlvbiAoYXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICQoXCIjbG9hZGluZ1wiKS5zaG93KCk7XHJcbiAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICAgLy8gVXNlciBpcyBsb2dnZWQgaW4sIHNob3cgbWFpbiBVSSBhbmQgaW5pdGlhbGlzZSBwb2xsZXJzXHJcbiAgICAgICAgICAgICQoXCIjbWFpblwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjdGFiQmFyXCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIiNhdXRoXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIiNsb2FkaW5nXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgc3RhcnRBbGxQb2xsZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBBdHRlbXB0IHJla2V5aW5nIGlmIHVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW5cclxuICAgICAgICAgICAgSGVscGVyLnJla2V5VXNlcigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgSGVscGVyLnNob3dMb2dpblVJQW5kUHVyZ2VUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBtYWluIFVJIGFuZCBpbml0aWFsaXNlIHBvbGxlcnNcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21haW5cIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdGFiQmFyXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2F1dGhcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbG9hZGluZ1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRBbGxQb2xsZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IExpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBJbml0aWFsaXNlIExvZ2luIGxpc3RlbmVyXHJcbiAgICAkKFwiI2xvZ2luQnV0dG9uXCIpLmNsaWNrKCgpID0+IHtcclxuICAgICAgICBMaXN0ZW5lci5sb2dpbkxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gU3RhcnQgdXAgdGhlIHBvbGxlcnMsIGFzIHRoaXMgbGFtYmRhIHdpbGwgb25seSBiZSBjYWxsZWQgaWZcclxuICAgICAgICAgICAgLy8gdGhlIGxvZ2luIGlzIHN1Y2Nlc3NmdWxcclxuICAgICAgICAgICAgc3RhcnRBbGxQb2xsZXJzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIFNldHVwIEFUUyBidXR0b24gbGlzdGVuZXJcclxuICAgICQoXCIjYXRzQnV0dG9uXCIpLmNsaWNrKCgpID0+IHtcclxuICAgICAgICBMaXN0ZW5lci5hdHNCdXR0b25MaXN0ZW5lcigpO1xyXG4gICAgfSk7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IFRhYiBMaXN0ZW5lcnMgPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgJChcIiNob21lVGFiQnV0dG9uXCIpLmNsaWNrKCgpID0+IHtcclxuICAgICAgICBzaG93VGFiKFwiI21haW5cIik7XHJcbiAgICAgICAgaGlnaGxpZ2h0VGFiQnV0dG9uKFwiI2hvbWVUYWJCdXR0b25cIik7XHJcbiAgICB9KTtcclxuICAgICQoXCIjY3Jvd2RUYWJCdXR0b25cIikuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgIHNob3dUYWIoXCIjY3Jvd2RUYWJcIik7XHJcbiAgICAgICAgaGlnaGxpZ2h0VGFiQnV0dG9uKFwiI2Nyb3dkVGFiQnV0dG9uXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI3RpbWV0YWJsZVRhYkJ1dHRvblwiKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgc2hvd1RhYihcIiN0aW1ldGFibGVUYWJcIik7XHJcbiAgICAgICAgaGlnaGxpZ2h0VGFiQnV0dG9uKFwiI3RpbWV0YWJsZVRhYkJ1dHRvblwiKTtcclxuICAgIH0pO1xyXG4gICAgLy8gSGlnaGxpZ2h0IHRoZSBIb21lIFRhYiBidXR0b24gc28gaXQgbG9va3MgbmF0dXJhbFxyXG4gICAgaGlnaGxpZ2h0VGFiQnV0dG9uKFwiI2hvbWVUYWJCdXR0b25cIik7XHJcbn0pO1xyXG4vLyNyZWdpb24gSGVscGVyIGZ1bmN0aW9uc1xyXG4vKipcclxuICogU2hvd3MgYSBzaW5nbGUgdGFiIGFuZCBoaWRlcyBhbGwgb3RoZXIgdGFic1xyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBzaW5nbGUgdGFiIHRvIHNob3dcclxuICovXHJcbmZ1bmN0aW9uIHNob3dUYWIobmFtZSkge1xyXG4gICAgY29uc3QgYWxsVGFiTmFtZXMgPSBbXCIjbWFpblwiLCBcIiNjcm93ZFRhYlwiLCBcIiN0aW1ldGFibGVUYWJcIl07XHJcbiAgICBmb3IgKGNvbnN0IHRhYk5hbWUgb2YgYWxsVGFiTmFtZXMpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gdGFiTmFtZSkge1xyXG4gICAgICAgICAgICAkKHRhYk5hbWUpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICQodGFiTmFtZSkuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogSGlnaGxpZ2h0cyBhIHNpbmdsZSB0YWIgYnV0dG9uIG91dCBvZiBhbGwgdGhlIG90aGVyIHRhYiBidXR0b25zXHJcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIHRhYiBidXR0b24gdG8gaGlnaGxpZ2h0XHJcbiAqL1xyXG5mdW5jdGlvbiBoaWdobGlnaHRUYWJCdXR0b24obmFtZSkge1xyXG4gICAgLy8gSGlnaGxpZ2h0IHRoZSBjb3JyZWN0IGJ1dHRvblxyXG4gICAgY29uc3QgYWxsQnV0dG9uTmFtZXMgPSBbXCIjaG9tZVRhYkJ1dHRvblwiLCBcIiNjcm93ZFRhYkJ1dHRvblwiLCBcIiN0aW1ldGFibGVUYWJCdXR0b25cIl07XHJcbiAgICBmb3IgKGNvbnN0IGJ1dHRvbk5hbWUgb2YgYWxsQnV0dG9uTmFtZXMpIHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSAkKGJ1dHRvbk5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkljb24gPSBidXR0b24uZmluZChcImlcIik7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IGJ1dHRvbk5hbWUpIHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZENsYXNzKFwiYnV0dG9uLXByaW1hcnlcIik7IC8vIEhpZ2hsaWdodCB0aGF0IGJ1dHRvblxyXG4gICAgICAgICAgICBidXR0b25JY29uLmNzcyh7IGNvbG9yOiBcIiNmZmZcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIENoYW5nZSB0aG9zZSBidXR0b25zIHRvIHdoaXRlXHJcbiAgICAgICAgICAgIGlmIChidXR0b24uaGFzQ2xhc3MoXCJidXR0b24tcHJpbWFyeVwiKSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUNsYXNzKFwiYnV0dG9uLXByaW1hcnlcIik7XHJcbiAgICAgICAgICAgICAgICBidXR0b25JY29uLmNzcyh7IGNvbG9yOiBcIiMzM0MzRjBcIiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyNlbmRyZWdpb24gSGVscGVyIGZ1bmN0aW9uc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9