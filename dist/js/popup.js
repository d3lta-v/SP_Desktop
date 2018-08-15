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
 * @param startPollers A callback for the main popup.ts to initialise recurring events (i.e. pollers)
 */
function loginListener(startPollers) {
    Helper.userLogin($("#username").val(), $("#password").val(), () => {
        // Hide the login dialog and show the main UI
        $("#main").show();
        $("#tabBar").show();
        $("#auth").hide();
        $("#loading").hide();
        // Start pollers by calling back the main file (popup.ts)
        startPollers();
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
function showTab(name) {
    const allTabNames = ["#main", "#crowdTab"];
    for (const tabName of allTabNames) {
        if (name === tabName) {
            $(tabName).show();
        }
        else {
            $(tabName).hide();
        }
    }
}
//#endregion Helper functions


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3RlbmVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVCQUF1QjtBQUN2RDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsS0FBSztBQUN6Qiw2REFBNkQsTUFBTSxVQUFVLFdBQVc7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6TUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsNkRBQTZEO0FBQzdELDBEQUEwRDtBQUMxRCx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicG9wdXBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvcG9wdXAudHNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xyXG5jb25zdCBIZWxwZXIgPSByZXF1aXJlKFwiLi9oZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBIb29rcyB1cCB0byBhIC5jbGljaygpIGxpc3RlbmVyIGZvciB0aGUgbG9naW4gZXZlbnRcclxuICogQHBhcmFtIHN0YXJ0UG9sbGVycyBBIGNhbGxiYWNrIGZvciB0aGUgbWFpbiBwb3B1cC50cyB0byBpbml0aWFsaXNlIHJlY3VycmluZyBldmVudHMgKGkuZS4gcG9sbGVycylcclxuICovXHJcbmZ1bmN0aW9uIGxvZ2luTGlzdGVuZXIoc3RhcnRQb2xsZXJzKSB7XHJcbiAgICBIZWxwZXIudXNlckxvZ2luKCQoXCIjdXNlcm5hbWVcIikudmFsKCksICQoXCIjcGFzc3dvcmRcIikudmFsKCksICgpID0+IHtcclxuICAgICAgICAvLyBIaWRlIHRoZSBsb2dpbiBkaWFsb2cgYW5kIHNob3cgdGhlIG1haW4gVUlcclxuICAgICAgICAkKFwiI21haW5cIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjdGFiQmFyXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI2F1dGhcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjbG9hZGluZ1wiKS5oaWRlKCk7XHJcbiAgICAgICAgLy8gU3RhcnQgcG9sbGVycyBieSBjYWxsaW5nIGJhY2sgdGhlIG1haW4gZmlsZSAocG9wdXAudHMpXHJcbiAgICAgICAgc3RhcnRQb2xsZXJzKCk7XHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBEaXNwbGF5IGVycm9yXHJcbiAgICAgICAgJChcIiNhdXRoRXJyb3JcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjYXV0aEVycm9yXCIpLnRleHQoZXJyb3IpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5sb2dpbkxpc3RlbmVyID0gbG9naW5MaXN0ZW5lcjtcclxuLyoqXHJcbiAqIEEgbGlzdGVuZXIgdG8gYXR0YWNoIHRvIGEgYnV0dG9uIHRvIHRyaWdnZXIgdGhlIEFUUyBpbnRlcmZhY2VcclxuICovXHJcbmZ1bmN0aW9uIGF0c0J1dHRvbkxpc3RlbmVyKCkge1xyXG4gICAgLy8gQ2FsbCBiYWNrZ3JvdW5kLnRzIHRvIHBvc3QgZGF0YVxyXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcImF0cy1saXN0ZW5lclwiIH0pO1xyXG59XHJcbmV4cG9ydHMuYXRzQnV0dG9uTGlzdGVuZXIgPSBhdHNCdXR0b25MaXN0ZW5lcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgU1AgPSByZXF1aXJlKFwiLi9kYXRhdHlwZXNcIik7XHJcbmNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xyXG5jb25zdCBIZWxwZXIgPSByZXF1aXJlKFwiLi9oZWxwZXJcIik7XHJcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgZXZlbnRzIGZyb20gdGhlIFNQIENhbGVuZGFyIEFQSSBhbmQgZGlzcGxheXMgaXQgaW4gdGhlIG1haW4gdGFiLCBpZlxyXG4gKiB0aGVyZSBpcyBhbiBldmVudCByaWdodCBub3dcclxuICovXHJcbmZ1bmN0aW9uIGNhbGVuZGFyUG9sbCgpIHtcclxuICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMb2FkaW5nIFNQIENhbGVuZGFyXCIpO1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgLy8gR2V0IGFsbCBvYmplY3RzXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbENhbGVuZGFyRW50cmllcyA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICBjb25zdCByZWxldmFudEVudHJpZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBhbGxDYWxlbmRhckVudHJpZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IERhdGUucGFyc2UoZW50cnkuc3RhcnRUaW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZERhdGUgPSBEYXRlLnBhcnNlKGVudHJ5LmVuZFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID4gc3RhcnREYXRlICYmIGN1cnJlbnREYXRlIDwgZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTZXQgc3RhdHVzXHJcbiAgICAgICAgICAgIGlmIChyZWxldmFudEVudHJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNjaG9vbFN0YXRlU3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nob29sU3RhdGVTdHJpbmcgKz0gXCIsIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nICs9IGVsZW1lbnQuc3VtbWFyeTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2Nob29sU3RhdGVTdHJpbmcgPSBzY2hvb2xTdGF0ZVN0cmluZy5zdWJzdHIoMiwgc2Nob29sU3RhdGVTdHJpbmcubGVuZ3RoKTsgLy8gUmVtb3ZlIHRoZSBmaXJzdCAyIGNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICQoXCIjY3VycmVudFN0YXR1c1wiKS50ZXh0KHNjaG9vbFN0YXRlU3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY3VycmVudFN0YXR1c1wiKS50ZXh0KFwiTm8gU2Nob29sIEV2ZW50c1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgXCJodHRwczovL21vYmlsZWFwcHMuc3AuZWR1LnNnL1NQTW9iaWxlQVBJL2FwaS9HZXRBY2FkQ2FsZW5kYXJcIiwgdHJ1ZSk7XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxufVxyXG5leHBvcnRzLmNhbGVuZGFyUG9sbCA9IGNhbGVuZGFyUG9sbDtcclxuLyoqXHJcbiAqIEdldHMgdGhlIHRpbWV0YWJsZSBmb3IgdG9kYXkgYW5kIGNoZWNrcyBpZiB0aGUgdXNlciBpcyBhdHRlbmRpbmcgYSBsZXNzb24uXHJcbiAqIERpc3BsYXlzIHRoZSBsZXNzb24gaWYgYW55IGluIHRoZSBtYWluIHRhYlxyXG4gKi9cclxuZnVuY3Rpb24gdGltZXRhYmxlUG9sbCgpIHtcclxuICAgIEhlbHBlci51c2VySXNBdXRoZW50aWNhdGVkKGZ1bmN0aW9uIChhdXRoZW50aWNhdGVkLCB0b2tlbikge1xyXG4gICAgICAgIGlmIChhdXRoZW50aWNhdGVkICYmIHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlU3RyaW5nID0gbW9tZW50KCkuZm9ybWF0KFwiRERNTVlZXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gSGVscGVyLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiR0VUXCIsIFNQLlVSTF9USU1FVEFCTEUgKyBjdXJyZW50RGF0ZVN0cmluZywgdHJ1ZSwgdG9rZW4pO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IFJlcXVlc3RlZCBmb3IgdGltZXRhYmxlIHdpdGggcmV0dXJuZWQgZGF0YTpcIiArIHRoaXMucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNwb25zZVRleHQgPT09IFNQLlRJTUVUQUJMRV9OT19MRVNTT05TKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIGxlc3NvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjdXJyZW50TGVzc29uXCIpLnRleHQoXCJObyBMZXNzb25zXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbkFycmF5ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIEk6IFZhbGlkYXRlIGFsbCB0aW1ldGFibGUgZW50cmllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1ldGFibGVFbnRyaWVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnlTdHJpbmcgb2YganNvbkFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gSlNPTi5zdHJpbmdpZnkoZW50cnlTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cnlWYWxpZCA9IFNQLlRpbWV0YWJsZUVudHJ5LmlzVmFsaWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnlWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gU1AuVGltZXRhYmxlRW50cnkuZnJvbUpTT04oZWxlbWVudCwgY3VycmVudERhdGVTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIElJOiBJbnNlcnQgYWxsIGVudHJpZXMgaW50byBhcnJheSB3aGVyZSBpdCBpcyBjdXJyZW50bHkgaGFwcGVuaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGVUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuZ2V0U3RhcnREYXRlVGltZSgpIDwgY3VycmVudERhdGVUaW1lICYmIGVudHJ5LmdldEVuZERhdGVUaW1lKCkgPiBjdXJyZW50RGF0ZVRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXRhYmxlRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExlc3NvbiBjdXJyZW50bHkgcnVubmluZzogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMZXNzb24gbm90IHJ1bm5pbmc6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhlbnRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBUaW1ldGFibGUgZW50cnkgaXMgaW52YWxpZDpcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIElJSTogRGlzcGxheSBjdXJyZW50IGxlc3NvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZXRhYmxlRW50cmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2N1cnJlbnRMZXNzb25cIikudGV4dCh0aW1ldGFibGVFbnRyaWVzWzBdLmdldEFiYnJldmlhdGlvbigpICsgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWV0YWJsZUVudHJpZXNbMF0uZ2V0VHlwZVN0cmluZygpICsgXCIgQCBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXRhYmxlRW50cmllc1swXS5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjY3VycmVudExlc3NvblwiKS50ZXh0KFwiTm8gTGVzc29uIEN1cnJlbnRseVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltXQVJOSU5HXTogRmFpbGVkIHRvIGxvYWQgdGltZXRhYmxlOiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRoaXMuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdOiBUb2tlbiBpbnZhbGlkLCBmb3VuZCBkdXJpbmcgdGltZXRhYmxlIHJldHJpZXZhbCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy50aW1ldGFibGVQb2xsID0gdGltZXRhYmxlUG9sbDtcclxuLyoqXHJcbiAqIENoZWNrcyBpZiB0aGUgdXNlciBpcyBjb25uZWN0ZWQgdG8gU1AgV2ktRmkgYW5kIGRpc3BsYXlzIHRoZSBjb25uZWN0aXZpdHkgc3RhdHVzXHJcbiAqL1xyXG5mdW5jdGlvbiBzcFdpZmlQb2xsKCkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHJlcXVlc3QgYWN0dWFsbHkgZ2V0cyB0aGUgcmVhbCBBVFMgcGFnZVxyXG4gICAgICAgICAgICBjb25uZWN0ZWQgPSB0aGlzLnJlc3BvbnNlVVJMLnN0YXJ0c1dpdGgoXCJodHRwczovL215YXRzLnNwLmVkdS5zZ1wiKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRGlzcGxheSBjb25uZWN0ZWQgc3RhdGVcclxuICAgICAgICBpZiAoY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBDb25uZWN0ZWQgdG8gU1Agd2lmaVwiKTtcclxuICAgICAgICAgICAgJChcIiN3aWZpQ29ubmVjdGVkVGV4dFwiKS50ZXh0KFwiQ29ubmVjdGVkIHRvIFNQIFdpLUZpXCIpO1xyXG4gICAgICAgICAgICAkKFwiI3dpZmlMb2dvXCIpLmNzcyhcImNvbG9yXCIsIFwiIzMzQzNGMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBOb3QgY29ubmVjdGVkIHRvIFNQIHdpZmlcIik7XHJcbiAgICAgICAgICAgICQoXCIjd2lmaUNvbm5lY3RlZFRleHRcIikudGV4dChcIk5vdCBjb25uZWN0ZWQgdG8gU1AgV2ktRmlcIik7XHJcbiAgICAgICAgICAgICQoXCIjd2lmaUxvZ29cIikuY3NzKFwiY29sb3JcIiwgXCIjYmJiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgU1AuVVJMX0FUUywgdHJ1ZSk7XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxufVxyXG5leHBvcnRzLnNwV2lmaVBvbGwgPSBzcFdpZmlQb2xsO1xyXG4vKipcclxuICogQ2hlY2tzIGZvciBjcm93ZCBkYXRhIGFuZCBkaXNwbGF5cyBpdCBpbiB0aGUgY3Jvd2QgdGFiXHJcbiAqL1xyXG5mdW5jdGlvbiBjcm93ZFBvbGwoKSB7XHJcbiAgICBIZWxwZXIudXNlcklzQXV0aGVudGljYXRlZChmdW5jdGlvbiAoYXV0aGVudGljYXRlZCwgdG9rZW4pIHtcclxuICAgICAgICBpZiAoYXV0aGVudGljYXRlZCAmJiB0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gSGVscGVyLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiR0VUXCIsIFNQLlVSTF9DUk9XRF9DSEVDSywgdHJ1ZSwgdG9rZW4pO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbkFycmF5ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSTogVmFsaWRhdGUgYWxsIGNyb3dkIGVudHJpZXNcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjcm93ZEVudHJpZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5U3RyaW5nIG9mIGpzb25BcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gSlNPTi5zdHJpbmdpZnkoZW50cnlTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyeVZhbGlkID0gU1AuQ3Jvd2RJbmZvLmlzVmFsaWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeVZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IFNQLkNyb3dkSW5mby5mcm9tSlNPTihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIElJOiBJbnNlcnQgYWxsIHZhbGlkIGVudHJpZXMgaW50byBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvd2RFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBDcm93ZCBlbnRyeSBpcyBpbnZhbGlkOlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSUk6IERpc3BsYXkgaXQhXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBjcm93ZEVudHJpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGVudHJ5LmdldE5hbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZW50cnkuZ2V0U3RhdHVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwZXJjZW50YWdlID0gXCImbHQ7IDUwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBcImxpbWVncmVlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTUC5Dcm93ZExldmVsLlNtYWxsOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gXCJsaW1lZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gXCImbHQ7IDUwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTUC5Dcm93ZExldmVsLk1lZGl1bTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9IFwiZ29sZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBcIiZsdDsgNzUlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNQLkNyb3dkTGV2ZWwuTGFyZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBcImNyaW1zb25cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gXCImZ3Q7IDc1JVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjY3Jvd2RUYWJsZSA+IHRib2R5Omxhc3QtY2hpbGRcIikuYXBwZW5kKGA8dHI+XG4gICAgICAgICAgICAgIDx0ZD4ke25hbWV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxpIGNsYXNzPVxcXCJmYXMgZmEtdXNlcnNcXFwiIHN0eWxlPVxcXCJjb2xvcjogJHtjb2xvcn1cXFwiPjwvaT4gJHtwZXJjZW50YWdlfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPmApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEVycm9yIGhhbmRsaW5nIGhlcmVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXTogVG9rZW4gaW52YWxpZCwgZm91bmQgZHVyaW5nIGNyb3dkIGZldGNoIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyb3dkUG9sbCA9IGNyb3dkUG9sbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcclxuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcbmNvbnN0IExpc3RlbmVyID0gcmVxdWlyZShcIi4vbGlzdGVuZXJzXCIpO1xyXG5jb25zdCBIZWxwZXIgPSByZXF1aXJlKFwiLi9oZWxwZXJcIik7XHJcbmNvbnN0IFBvbGxlciA9IHJlcXVpcmUoXCIuL3BvbGxlclwiKTtcclxuLyoqXHJcbiAqIFN0YXJ0cyBhbGwgb2YgdGhlIHBvbGxlcnMsIGJhc2ljYWxseSBmdW5jdGlvbnMgdGhhdCBuZWVkcyB0byBydW4gcGVyaW9kaWNhbGx5XHJcbiAqL1xyXG5mdW5jdGlvbiBzdGFydEFsbFBvbGxlcnMoKSB7XHJcbiAgICBjbG9ja1BvbGwoKTsgLy8gdGhpcyBkb2VzIG5vdCB1c2UgaW50ZXJ2YWwgYXMgaXQgaXMgdGltZSBzZW5zaXRpdmVcclxuICAgIFBvbGxlci5jYWxlbmRhclBvbGwoKTtcclxuICAgIFBvbGxlci50aW1ldGFibGVQb2xsKCk7XHJcbiAgICBQb2xsZXIuc3BXaWZpUG9sbCgpO1xyXG4gICAgUG9sbGVyLmNyb3dkUG9sbCgpO1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gUG9sbGVyLmNhbGVuZGFyUG9sbCgpLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgY2FsZW5kYXIgcG9sbGluZ1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gUG9sbGVyLnRpbWV0YWJsZVBvbGwoKSwgMTAwMCAqIDYwICogNSk7IC8vIDUgbWludXRlIHRpbWV0YWJsZSBwb2xsaW5nXHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiBQb2xsZXIuc3BXaWZpUG9sbCgpLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgd2lmaSBwb2xsaW5nXHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiBQb2xsZXIuY3Jvd2RQb2xsKCksIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSBjcm93ZCBwb2xsaW5nXHJcbn1cclxuLy8jcmVnaW9uIFBvbGxlcnNcclxuLyoqXHJcbiAqIFJlZnJlc2hlcyB0aGUgY2xvY2sgZGlzcGxheSBldmVyeSAxIHNlY29uZFxyXG4gKi9cclxuZnVuY3Rpb24gY2xvY2tQb2xsKCkge1xyXG4gICAgJChcIiN0aW1lXCIpLnRleHQobW9tZW50KCkuZm9ybWF0KFwiSEg6bW06c3NcIikpO1xyXG4gICAgc2V0VGltZW91dChjbG9ja1BvbGwsIDEwMDApOyAvLyAxIHNlY29uZCBwb2xsaW5nXHJcbn1cclxuLy8jZW5kcmVnaW9uIFBvbGxlcnNcclxuLy8gSW5pdGlhbGlzYXRpb24uIFRoaXMgYmxvY2sgcnVucyB3aGVuIGRvY3VtZW50IGlzIHJlYWR5XHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gVXNlciBhdXRoZW50aWNhdGlvbiBjaGVjayA9PT09PT09PT09PT09PT09PT09PVxyXG4gICAgSGVscGVyLnVzZXJJc0F1dGhlbnRpY2F0ZWQoZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAkKFwiI2xvYWRpbmdcIikuc2hvdygpO1xyXG4gICAgICAgIGlmIChhdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgIC8vIFVzZXIgaXMgbG9nZ2VkIGluLCBzaG93IG1haW4gVUkgYW5kIGluaXRpYWxpc2UgcG9sbGVyc1xyXG4gICAgICAgICAgICAkKFwiI21haW5cIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiI3RhYkJhclwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjYXV0aFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjbG9hZGluZ1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHN0YXJ0QWxsUG9sbGVycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gTm90IGF1dGhlbnRpY2F0ZWQsIGRpc3BsYXkgbG9naW4gVUkgb25seVxyXG4gICAgICAgICAgICAkKFwiI21haW5cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI3RhYkJhclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjYXV0aFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjbG9hZGluZ1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBvbGQgbG9naW4gdG9rZW4gc3RpbGwgZXhpc3RzIGluIHN0b3JhZ2UsIHB1cmdlIGl0XHJcbiAgICAgICAgICAgIEhlbHBlci5wdXJnZU9sZFRva2VuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gTGlzdGVuZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEluaXRpYWxpc2UgTG9naW4gbGlzdGVuZXJcclxuICAgICQoXCIjbG9naW5CdXR0b25cIikuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgIExpc3RlbmVyLmxvZ2luTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBTdGFydCB1cCB0aGUgcG9sbGVycywgYXMgdGhpcyBsYW1iZGEgd2lsbCBvbmx5IGJlIGNhbGxlZCBpZlxyXG4gICAgICAgICAgICAvLyB0aGUgbG9naW4gaXMgc3VjY2Vzc2Z1bFxyXG4gICAgICAgICAgICBzdGFydEFsbFBvbGxlcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gU2V0dXAgQVRTIGJ1dHRvbiBsaXN0ZW5lclxyXG4gICAgJChcIiNhdHNCdXR0b25cIikuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgIExpc3RlbmVyLmF0c0J1dHRvbkxpc3RlbmVyKCk7XHJcbiAgICB9KTtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gVGFiIExpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAkKFwiI2hvbWVUYWJCdXR0b25cIikuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgIHNob3dUYWIoXCIjbWFpblwiKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiNjcm93ZFRhYkJ1dHRvblwiKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgc2hvd1RhYihcIiNjcm93ZFRhYlwiKTtcclxuICAgIH0pO1xyXG59KTtcclxuLy8jcmVnaW9uIEhlbHBlciBmdW5jdGlvbnNcclxuLyoqXHJcbiAqIFNob3dzIGEgc2luZ2xlIHRhYiBhbmQgaGlkZXMgYWxsIG90aGVyIHRhYnNcclxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgc2luZ2xlIHRhYiB0byBzaG93XHJcbiAqL1xyXG5mdW5jdGlvbiBzaG93VGFiKG5hbWUpIHtcclxuICAgIGNvbnN0IGFsbFRhYk5hbWVzID0gW1wiI21haW5cIiwgXCIjY3Jvd2RUYWJcIl07XHJcbiAgICBmb3IgKGNvbnN0IHRhYk5hbWUgb2YgYWxsVGFiTmFtZXMpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gdGFiTmFtZSkge1xyXG4gICAgICAgICAgICAkKHRhYk5hbWUpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICQodGFiTmFtZSkuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyNlbmRyZWdpb24gSGVscGVyIGZ1bmN0aW9uc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9