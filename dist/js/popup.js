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
const SP = __webpack_require__(/*! ./datatypes */ "./src/datatypes.ts");
const Listener = __webpack_require__(/*! ./listeners */ "./src/listeners.ts");
const Helper = __webpack_require__(/*! ./helper */ "./src/helper.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3RlbmVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbklBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFD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ZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwb3B1cFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9wb3B1cC50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcbmNvbnN0IEhlbHBlciA9IHJlcXVpcmUoXCIuL2hlbHBlclwiKTtcclxuLyoqXHJcbiAqIEhvb2tzIHVwIHRvIGEgLmNsaWNrKCkgbGlzdGVuZXIgZm9yIHRoZSBsb2dpbiBldmVudFxyXG4gKiBAcGFyYW0gc3RhcnRQb2xsZXJzIEEgY2FsbGJhY2sgZm9yIHRoZSBtYWluIHBvcHVwLnRzIHRvIGluaXRpYWxpc2UgcmVjdXJyaW5nIGV2ZW50cyAoaS5lLiBwb2xsZXJzKVxyXG4gKi9cclxuZnVuY3Rpb24gbG9naW5MaXN0ZW5lcihzdGFydFBvbGxlcnMpIHtcclxuICAgIEhlbHBlci51c2VyTG9naW4oJChcIiN1c2VybmFtZVwiKS52YWwoKSwgJChcIiNwYXNzd29yZFwiKS52YWwoKSwgKCkgPT4ge1xyXG4gICAgICAgIC8vIEhpZGUgdGhlIGxvZ2luIGRpYWxvZyBhbmQgc2hvdyB0aGUgbWFpbiBVSVxyXG4gICAgICAgICQoXCIjbWFpblwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiN0YWJCYXJcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjYXV0aFwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNsb2FkaW5nXCIpLmhpZGUoKTtcclxuICAgICAgICAvLyBTdGFydCBwb2xsZXJzIGJ5IGNhbGxpbmcgYmFjayB0aGUgbWFpbiBmaWxlIChwb3B1cC50cylcclxuICAgICAgICBzdGFydFBvbGxlcnMoKTtcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vIERpc3BsYXkgZXJyb3JcclxuICAgICAgICAkKFwiI2F1dGhFcnJvclwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNhdXRoRXJyb3JcIikudGV4dChlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmxvZ2luTGlzdGVuZXIgPSBsb2dpbkxpc3RlbmVyO1xyXG4vKipcclxuICogQSBsaXN0ZW5lciB0byBhdHRhY2ggdG8gYSBidXR0b24gdG8gdHJpZ2dlciB0aGUgQVRTIGludGVyZmFjZVxyXG4gKi9cclxuZnVuY3Rpb24gYXRzQnV0dG9uTGlzdGVuZXIoKSB7XHJcbiAgICAvLyBDYWxsIGJhY2tncm91bmQudHMgdG8gcG9zdCBkYXRhXHJcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6IFwiYXRzLWxpc3RlbmVyXCIgfSk7XHJcbn1cclxuZXhwb3J0cy5hdHNCdXR0b25MaXN0ZW5lciA9IGF0c0J1dHRvbkxpc3RlbmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xyXG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcclxuY29uc3QgU1AgPSByZXF1aXJlKFwiLi9kYXRhdHlwZXNcIik7XHJcbmNvbnN0IExpc3RlbmVyID0gcmVxdWlyZShcIi4vbGlzdGVuZXJzXCIpO1xyXG5jb25zdCBIZWxwZXIgPSByZXF1aXJlKFwiLi9oZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBTdGFydHMgYWxsIG9mIHRoZSBwb2xsZXJzLCBiYXNpY2FsbHkgZnVuY3Rpb25zIHRoYXQgbmVlZHMgdG8gcnVuIHBlcmlvZGljYWxseVxyXG4gKi9cclxuZnVuY3Rpb24gc3RhcnRBbGxQb2xsZXJzKCkge1xyXG4gICAgY2xvY2tQb2xsKCk7IC8vIHRoaXMgZG9lcyBub3QgdXNlIGludGVydmFsIGFzIGl0IGlzIHRpbWUgc2Vuc2l0aXZlXHJcbiAgICBjYWxlbmRhclBvbGwoKTtcclxuICAgIHRpbWV0YWJsZVBvbGwoKTtcclxuICAgIHNwV2lmaVBvbGwoKTtcclxuICAgIGNyb3dkUG9sbCgpO1xyXG4gICAgc2V0SW50ZXJ2YWwoY2FsZW5kYXJQb2xsLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgY2FsZW5kYXIgcG9sbGluZ1xyXG4gICAgc2V0SW50ZXJ2YWwodGltZXRhYmxlUG9sbCwgMTAwMCAqIDYwICogNSk7IC8vIDUgbWludXRlIHRpbWV0YWJsZSBwb2xsaW5nXHJcbiAgICBzZXRJbnRlcnZhbChzcFdpZmlQb2xsLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgd2lmaSBwb2xsaW5nXHJcbiAgICBzZXRJbnRlcnZhbChjcm93ZFBvbGwsIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSBjcm93ZCBwb2xsaW5nXHJcbn1cclxuLy8jcmVnaW9uIFBvbGxlcnNcclxuLyoqXHJcbiAqIFJlZnJlc2hlcyB0aGUgY2xvY2sgZGlzcGxheSBldmVyeSAxIHNlY29uZFxyXG4gKi9cclxuZnVuY3Rpb24gY2xvY2tQb2xsKCkge1xyXG4gICAgJChcIiN0aW1lXCIpLnRleHQobW9tZW50KCkuZm9ybWF0KFwiSEg6bW06c3NcIikpO1xyXG4gICAgc2V0VGltZW91dChjbG9ja1BvbGwsIDEwMDApOyAvLyAxIHNlY29uZCBwb2xsaW5nXHJcbn1cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBldmVudHMgZnJvbSB0aGUgU1AgQ2FsZW5kYXIgQVBJIGFuZCBkaXNwbGF5cyBpdCBpbiB0aGUgbWFpbiB0YWIsIGlmXHJcbiAqIHRoZXJlIGlzIGFuIGV2ZW50IHJpZ2h0IG5vd1xyXG4gKi9cclxuZnVuY3Rpb24gY2FsZW5kYXJQb2xsKCkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgLy8gR2V0IGFsbCBvYmplY3RzXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbENhbGVuZGFyRW50cmllcyA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICBjb25zdCByZWxldmFudEVudHJpZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBhbGxDYWxlbmRhckVudHJpZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IERhdGUucGFyc2UoZW50cnkuc3RhcnRUaW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZERhdGUgPSBEYXRlLnBhcnNlKGVudHJ5LmVuZFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID4gc3RhcnREYXRlICYmIGN1cnJlbnREYXRlIDwgZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTZXQgc3RhdHVzXHJcbiAgICAgICAgICAgIGlmIChyZWxldmFudEVudHJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNjaG9vbFN0YXRlU3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nob29sU3RhdGVTdHJpbmcgKz0gXCIsIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nICs9IGVsZW1lbnQuc3VtbWFyeTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2Nob29sU3RhdGVTdHJpbmcgPSBzY2hvb2xTdGF0ZVN0cmluZy5zdWJzdHIoMiwgc2Nob29sU3RhdGVTdHJpbmcubGVuZ3RoKTsgLy8gUmVtb3ZlIHRoZSBmaXJzdCAyIGNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICQoXCIjY3VycmVudFN0YXR1c1wiKS50ZXh0KHNjaG9vbFN0YXRlU3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY3VycmVudFN0YXR1c1wiKS50ZXh0KFwiTm8gU2Nob29sIEV2ZW50c1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZXBlYXQgcmVxdWVzdCBvbmNlIGl0IGlzIGxvYWRlZCBvciB1bnN1Y2Nlc3NmdWxseSBsb2FkZWRcclxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTG9hZGVkIFNQIENhbGVuZGFyXCIpO1xyXG4gICAgfTtcclxuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vbW9iaWxlYXBwcy5zcC5lZHUuc2cvU1BNb2JpbGVBUEkvYXBpL0dldEFjYWRDYWxlbmRhclwiLCB0cnVlKTtcclxuICAgIHJlcXVlc3Quc2VuZCgpO1xyXG59XHJcbi8qKlxyXG4gKiBHZXRzIHRoZSB0aW1ldGFibGUgZm9yIHRvZGF5IGFuZCBjaGVja3MgaWYgdGhlIHVzZXIgaXMgYXR0ZW5kaW5nIGEgbGVzc29uLlxyXG4gKiBEaXNwbGF5cyB0aGUgbGVzc29uIGlmIGFueSBpbiB0aGUgbWFpbiB0YWJcclxuICovXHJcbmZ1bmN0aW9uIHRpbWV0YWJsZVBvbGwoKSB7XHJcbiAgICBIZWxwZXIudXNlcklzQXV0aGVudGljYXRlZChmdW5jdGlvbiAoYXV0aGVudGljYXRlZCwgdG9rZW4pIHtcclxuICAgICAgICBpZiAoYXV0aGVudGljYXRlZCAmJiB0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZVN0cmluZyA9IG1vbWVudCgpLmZvcm1hdChcIkRETU1ZWVwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IEhlbHBlci5hdXRoZW50aWNhdGVkUmVxdWVzdChcIkdFVFwiLCBTUC5VUkxfVElNRVRBQkxFICsgY3VycmVudERhdGVTdHJpbmcsIHRydWUsIHRva2VuKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBSZXF1ZXN0ZWQgZm9yIHRpbWV0YWJsZSB3aXRoIHJldHVybmVkIGRhdGE6XCIgKyB0aGlzLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VUZXh0ID09PSBTUC5USU1FVEFCTEVfTk9fTEVTU09OUykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBObyBsZXNzb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjY3VycmVudExlc3NvblwiKS50ZXh0KFwiTm8gTGVzc29uc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGpzb25BcnJheSA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJOiBWYWxpZGF0ZSBhbGwgdGltZXRhYmxlIGVudHJpZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZXRhYmxlRW50cmllcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5U3RyaW5nIG9mIGpzb25BcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IEpTT04uc3RyaW5naWZ5KGVudHJ5U3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5VmFsaWQgPSBTUC5UaW1ldGFibGVFbnRyeS5pc1ZhbGlkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5VmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IFNQLlRpbWV0YWJsZUVudHJ5LmZyb21KU09OKGVsZW1lbnQsIGN1cnJlbnREYXRlU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSTogSW5zZXJ0IGFsbCBlbnRyaWVzIGludG8gYXJyYXkgd2hlcmUgaXQgaXMgY3VycmVudGx5IGhhcHBlbmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmdldFN0YXJ0RGF0ZVRpbWUoKSA8IGN1cnJlbnREYXRlVGltZSAmJiBlbnRyeS5nZXRFbmREYXRlVGltZSgpID4gY3VycmVudERhdGVUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWV0YWJsZUVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMZXNzb24gY3VycmVudGx5IHJ1bm5pbmc6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhlbnRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTGVzc29uIG5vdCBydW5uaW5nOiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoZW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltXQVJOSU5HXTogVGltZXRhYmxlIGVudHJ5IGlzIGludmFsaWQ6XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSUk6IERpc3BsYXkgY3VycmVudCBsZXNzb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWV0YWJsZUVudHJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjdXJyZW50TGVzc29uXCIpLnRleHQodGltZXRhYmxlRW50cmllc1swXS5nZXRBYmJyZXZpYXRpb24oKSArIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1ldGFibGVFbnRyaWVzWzBdLmdldFR5cGVTdHJpbmcoKSArIFwiIEAgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWV0YWJsZUVudHJpZXNbMF0uZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2N1cnJlbnRMZXNzb25cIikudGV4dChcIk5vIExlc3NvbiBDdXJyZW50bHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbV0FSTklOR106IEZhaWxlZCB0byBsb2FkIHRpbWV0YWJsZTogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRoaXMucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXTogVG9rZW4gaW52YWxpZCwgZm91bmQgZHVyaW5nIHRpbWV0YWJsZSByZXRyaWV2YWwhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgdGhlIHVzZXIgaXMgY29ubmVjdGVkIHRvIFNQIFdpLUZpIGFuZCBkaXNwbGF5cyB0aGUgY29ubmVjdGl2aXR5IHN0YXR1c1xyXG4gKi9cclxuZnVuY3Rpb24gc3BXaWZpUG9sbCgpIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBjb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiByZXF1ZXN0IGFjdHVhbGx5IGdldHMgdGhlIHJlYWwgQVRTIHBhZ2VcclxuICAgICAgICAgICAgY29ubmVjdGVkID0gdGhpcy5yZXNwb25zZVVSTC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9teWF0cy5zcC5lZHUuc2dcIikgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERpc3BsYXkgY29ubmVjdGVkIHN0YXRlXHJcbiAgICAgICAgaWYgKGNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogQ29ubmVjdGVkIHRvIFNQIHdpZmlcIik7XHJcbiAgICAgICAgICAgICQoXCIjd2lmaUNvbm5lY3RlZFRleHRcIikudGV4dChcIkNvbm5lY3RlZCB0byBTUCBXaS1GaVwiKTtcclxuICAgICAgICAgICAgJChcIiN3aWZpTG9nb1wiKS5jc3MoXCJjb2xvclwiLCBcIiMzM0MzRjBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTm90IGNvbm5lY3RlZCB0byBTUCB3aWZpXCIpO1xyXG4gICAgICAgICAgICAkKFwiI3dpZmlDb25uZWN0ZWRUZXh0XCIpLnRleHQoXCJOb3QgY29ubmVjdGVkIHRvIFNQIFdpLUZpXCIpO1xyXG4gICAgICAgICAgICAkKFwiI3dpZmlMb2dvXCIpLmNzcyhcImNvbG9yXCIsIFwiI2JiYlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIFNQLlVSTF9BVFMsIHRydWUpO1xyXG4gICAgcmVxdWVzdC5zZW5kKCk7XHJcbn1cclxuLyoqXHJcbiAqIENoZWNrcyBmb3IgY3Jvd2QgZGF0YSBhbmQgZGlzcGxheXMgaXQgaW4gdGhlIGNyb3dkIHRhYlxyXG4gKi9cclxuZnVuY3Rpb24gY3Jvd2RQb2xsKCkge1xyXG4gICAgSGVscGVyLnVzZXJJc0F1dGhlbnRpY2F0ZWQoZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQsIHRva2VuKSB7XHJcbiAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZWQgJiYgdG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IEhlbHBlci5hdXRoZW50aWNhdGVkUmVxdWVzdChcIkdFVFwiLCBTUC5VUkxfQ1JPV0RfQ0hFQ0ssIHRydWUsIHRva2VuKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGpzb25BcnJheSA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIEk6IFZhbGlkYXRlIGFsbCBjcm93ZCBlbnRyaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3Jvd2RFbnRyaWVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeVN0cmluZyBvZiBqc29uQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IEpTT04uc3RyaW5naWZ5KGVudHJ5U3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cnlWYWxpZCA9IFNQLkNyb3dkSW5mby5pc1ZhbGlkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnlWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cnkgPSBTUC5Dcm93ZEluZm8uZnJvbUpTT04oZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSTogSW5zZXJ0IGFsbCB2YWxpZCBlbnRyaWVzIGludG8gYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3dkRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltXQVJOSU5HXTogQ3Jvd2QgZW50cnkgaXMgaW52YWxpZDpcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSUlJOiBEaXNwbGF5IGl0IVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgY3Jvd2RFbnRyaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5nZXROYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGVudHJ5LmdldFN0YXR1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGVyY2VudGFnZSA9IFwiJmx0OyA1MCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gXCJsaW1lZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU1AuQ3Jvd2RMZXZlbC5TbWFsbDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9IFwibGltZWdyZWVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IFwiJmx0OyA1MCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU1AuQ3Jvd2RMZXZlbC5NZWRpdW06XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBcImdvbGRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gXCImbHQ7IDc1JVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTUC5Dcm93ZExldmVsLkxhcmdlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gXCJjcmltc29uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IFwiJmd0OyA3NSVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2Nyb3dkVGFibGUgPiB0Ym9keTpsYXN0LWNoaWxkXCIpLmFwcGVuZChgPHRyPlxuICAgICAgICAgICAgICA8dGQ+JHtuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48aSBjbGFzcz1cXFwiZmFzIGZhLXVzZXJzXFxcIiBzdHlsZT1cXFwiY29sb3I6ICR7Y29sb3J9XFxcIj48L2k+ICR7cGVyY2VudGFnZX08L3RkPlxuICAgICAgICAgICAgPC90cj5gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBFcnJvciBoYW5kbGluZyBoZXJlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltFUlJPUl06IFRva2VuIGludmFsaWQsIGZvdW5kIGR1cmluZyBjcm93ZCBmZXRjaCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuLy8jZW5kcmVnaW9uIFBvbGxlcnNcclxuLy8gSW5pdGlhbGlzYXRpb24uIFRoaXMgYmxvY2sgcnVucyB3aGVuIGRvY3VtZW50IGlzIHJlYWR5XHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gVXNlciBhdXRoZW50aWNhdGlvbiBjaGVjayA9PT09PT09PT09PT09PT09PT09PVxyXG4gICAgSGVscGVyLnVzZXJJc0F1dGhlbnRpY2F0ZWQoZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAkKFwiI2xvYWRpbmdcIikuc2hvdygpO1xyXG4gICAgICAgIGlmIChhdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgIC8vIFVzZXIgaXMgbG9nZ2VkIGluLCBzaG93IG1haW4gVUkgYW5kIGluaXRpYWxpc2UgcG9sbGVyc1xyXG4gICAgICAgICAgICAkKFwiI21haW5cIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiI3RhYkJhclwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjYXV0aFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjbG9hZGluZ1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHN0YXJ0QWxsUG9sbGVycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gTm90IGF1dGhlbnRpY2F0ZWQsIGRpc3BsYXkgbG9naW4gVUkgb25seVxyXG4gICAgICAgICAgICAkKFwiI21haW5cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI3RhYkJhclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjYXV0aFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjbG9hZGluZ1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBvbGQgbG9naW4gdG9rZW4gc3RpbGwgZXhpc3RzIGluIHN0b3JhZ2UsIHB1cmdlIGl0XHJcbiAgICAgICAgICAgIEhlbHBlci5wdXJnZU9sZFRva2VuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gTGlzdGVuZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEluaXRpYWxpc2UgTG9naW4gbGlzdGVuZXJcclxuICAgICQoXCIjbG9naW5CdXR0b25cIikuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgIExpc3RlbmVyLmxvZ2luTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBTdGFydCB1cCB0aGUgcG9sbGVycywgYXMgdGhpcyBsYW1iZGEgd2lsbCBvbmx5IGJlIGNhbGxlZCBpZlxyXG4gICAgICAgICAgICAvLyB0aGUgbG9naW4gaXMgc3VjY2Vzc2Z1bFxyXG4gICAgICAgICAgICBzdGFydEFsbFBvbGxlcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gU2V0dXAgQVRTIGJ1dHRvbiBsaXN0ZW5lclxyXG4gICAgJChcIiNhdHNCdXR0b25cIikuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgIExpc3RlbmVyLmF0c0J1dHRvbkxpc3RlbmVyKCk7XHJcbiAgICB9KTtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gVGFiIExpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAkKFwiI2hvbWVUYWJCdXR0b25cIikuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgIHNob3dUYWIoXCIjbWFpblwiKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiNjcm93ZFRhYkJ1dHRvblwiKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgc2hvd1RhYihcIiNjcm93ZFRhYlwiKTtcclxuICAgIH0pO1xyXG59KTtcclxuLy8jcmVnaW9uIEhlbHBlciBmdW5jdGlvbnNcclxuLyoqXHJcbiAqIFNob3dzIGEgc2luZ2xlIHRhYiBhbmQgaGlkZXMgYWxsIG90aGVyIHRhYnNcclxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgc2luZ2xlIHRhYiB0byBzaG93XHJcbiAqL1xyXG5mdW5jdGlvbiBzaG93VGFiKG5hbWUpIHtcclxuICAgIGNvbnN0IGFsbFRhYk5hbWVzID0gW1wiI21haW5cIiwgXCIjY3Jvd2RUYWJcIl07XHJcbiAgICBmb3IgKGNvbnN0IHRhYk5hbWUgb2YgYWxsVGFiTmFtZXMpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gdGFiTmFtZSkge1xyXG4gICAgICAgICAgICAkKHRhYk5hbWUpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICQodGFiTmFtZSkuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyNlbmRyZWdpb24gSGVscGVyIGZ1bmN0aW9uc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9