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

/***/ "./src/helper.ts":
/*!***********************!*\
  !*** ./src/helper.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates an authenticated request using an existing token
 * @param method The HTTP method to use for this request
 * @param url The URL to use for this request
 * @param async Whether the request should be done asynchronously
 * @param token The token WITHOUT the "Bearer " prefix
 */
function authenticatedRequest(method, url, async, token) {
    const request = new XMLHttpRequest();
    request.open(method, url, async);
    request.setRequestHeader("Authorization", "Bearer " + token);
    return request;
}
exports.authenticatedRequest = authenticatedRequest;
/**
 * Checks if the current token stored in Chrome's storage is a valid
 * token (i.e. the user is already authenticated).
 * @param callback A lambda that returns the authenticated state through a parameter
 * @param token The session token, if the user is indeed authenticated. Else, it returns undefined
 */
function userIsAuthenticated(callback) {
    chrome.storage.local.get("user", function (result) {
        // First round: checking for existence of token
        if (result.user && result.user.accessToken) {
            // Second round: token validity checking with a small API endpoint
            const request = authenticatedRequest("POST", "https://mobileapps.sp.edu.sg/SPMobileAPI/api/CountUnreadItem", true, result.user.accessToken);
            request.onloadend = function () {
                if (this.status === 200) {
                    // Token is valid, return callback with true
                    callback(true, result.user.accessToken);
                }
            };
            request.send();
        }
        else {
            callback(false, undefined);
        }
    });
}
exports.userIsAuthenticated = userIsAuthenticated;
/**
 * Retrieves the user's login token only and does not perform further validation
 * @param callback A lambda that returns the user's token
 */
function getUserToken(callback) {
    chrome.storage.local.get("user", function (result) {
        if (result.user && result.user.accessToken) {
            callback(result.user.accessToken);
        }
        else {
            callback(undefined);
        }
    });
}
exports.getUserToken = getUserToken;
/**
 * Purges the old user token from Chrome's internal storage
 */
function purgeOldToken() {
    chrome.storage.local.remove("user");
}
exports.purgeOldToken = purgeOldToken;


/***/ }),

/***/ "./src/listeners.ts":
/*!**************************!*\
  !*** ./src/listeners.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const SP = __webpack_require__(/*! ./datatypes */ "./src/datatypes.ts");
const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Hooks up to a .click() listener for the login event
 * @param startPollers A callback for the main popup.ts to initialise recurring events (i.e. pollers)
 */
function loginListener(startPollers) {
    console.debug("[DEBUG]: Login clicked");
    const request = new XMLHttpRequest();
    request.open("POST", "https://mobileapps.sp.edu.sg/SPMobileAPI/token", true);
    request.onloadend = function () {
        // old code: this.readyState == 4 &&
        if (this.status === 200) {
            // Save name and token into Chrome storage
            if (SP.User.isValid(this.responseText)) {
                const user = SP.User.fromJSON(this.responseText);
                chrome.storage.local.set({ user }, () => {
                    console.debug("[DEBUG]: Login succeeded");
                    // Save the username and passwords
                    chrome.storage.local.set({
                        password: $("#password").val(),
                        username: $("#username").val(),
                    }, () => {
                        console.debug("[DEBUG]: Saved username and password for future");
                        // Hide the login dialog and show the main UI
                        $("#main").show();
                        $("#tabBar").show();
                        $("#auth").hide();
                        $("#loading").hide();
                        // Start pollers by calling back the main file (popup.ts)
                        startPollers();
                    });
                });
            }
            else {
                // Display error
                $("#authError").show();
                $("#authError").text(SP.ERROR_AUTH_INVALID_JSON);
            }
        }
        else {
            // Login failed in some way
            console.debug("[DEBUG]: Login failed: ");
            console.debug(this.responseText);
            // Error code "2" means login failed
            const responseObject = JSON.parse(this.responseText);
            if (responseObject.error === "2") { // NOTE: THIS IS A STRING!
                $("#authError").show();
                $("#authError").text(SP.ERROR_AUTH_INVALID_PASSWORD);
            }
        }
    };
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Construct final payload
    const payload = "grant_type=password" +
        "&username=" + encodeURIComponent($("#username").val()) +
        "&password=" + encodeURIComponent($("#password").val()) +
        "&deviceToken=ayy";
    request.send(payload);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdGVuZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1QkFBdUI7QUFDdkQ7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFDOUMsMkNBQTJDO0FBQzNDLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEtBQUs7QUFDekIsNkRBQTZELE1BQU0sVUFBVSxXQUFXO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwb3B1cFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9wb3B1cC50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIEdlbmVyYXRlcyBhbiBhdXRoZW50aWNhdGVkIHJlcXVlc3QgdXNpbmcgYW4gZXhpc3RpbmcgdG9rZW5cbiAqIEBwYXJhbSBtZXRob2QgVGhlIEhUVFAgbWV0aG9kIHRvIHVzZSBmb3IgdGhpcyByZXF1ZXN0XG4gKiBAcGFyYW0gdXJsIFRoZSBVUkwgdG8gdXNlIGZvciB0aGlzIHJlcXVlc3RcbiAqIEBwYXJhbSBhc3luYyBXaGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBkb25lIGFzeW5jaHJvbm91c2x5XG4gKiBAcGFyYW0gdG9rZW4gVGhlIHRva2VuIFdJVEhPVVQgdGhlIFwiQmVhcmVyIFwiIHByZWZpeFxuICovXG5mdW5jdGlvbiBhdXRoZW50aWNhdGVkUmVxdWVzdChtZXRob2QsIHVybCwgYXN5bmMsIHRva2VuKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHJlcXVlc3Qub3BlbihtZXRob2QsIHVybCwgYXN5bmMpO1xuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyB0b2tlbik7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG59XG5leHBvcnRzLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0ID0gYXV0aGVudGljYXRlZFJlcXVlc3Q7XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB0b2tlbiBzdG9yZWQgaW4gQ2hyb21lJ3Mgc3RvcmFnZSBpcyBhIHZhbGlkXG4gKiB0b2tlbiAoaS5lLiB0aGUgdXNlciBpcyBhbHJlYWR5IGF1dGhlbnRpY2F0ZWQpLlxuICogQHBhcmFtIGNhbGxiYWNrIEEgbGFtYmRhIHRoYXQgcmV0dXJucyB0aGUgYXV0aGVudGljYXRlZCBzdGF0ZSB0aHJvdWdoIGEgcGFyYW1ldGVyXG4gKiBAcGFyYW0gdG9rZW4gVGhlIHNlc3Npb24gdG9rZW4sIGlmIHRoZSB1c2VyIGlzIGluZGVlZCBhdXRoZW50aWNhdGVkLiBFbHNlLCBpdCByZXR1cm5zIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiB1c2VySXNBdXRoZW50aWNhdGVkKGNhbGxiYWNrKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwidXNlclwiLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIC8vIEZpcnN0IHJvdW5kOiBjaGVja2luZyBmb3IgZXhpc3RlbmNlIG9mIHRva2VuXG4gICAgICAgIGlmIChyZXN1bHQudXNlciAmJiByZXN1bHQudXNlci5hY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgLy8gU2Vjb25kIHJvdW5kOiB0b2tlbiB2YWxpZGl0eSBjaGVja2luZyB3aXRoIGEgc21hbGwgQVBJIGVuZHBvaW50XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXV0aGVudGljYXRlZFJlcXVlc3QoXCJQT1NUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS9hcGkvQ291bnRVbnJlYWRJdGVtXCIsIHRydWUsIHJlc3VsdC51c2VyLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRva2VuIGlzIHZhbGlkLCByZXR1cm4gY2FsbGJhY2sgd2l0aCB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUsIHJlc3VsdC51c2VyLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhmYWxzZSwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy51c2VySXNBdXRoZW50aWNhdGVkID0gdXNlcklzQXV0aGVudGljYXRlZDtcbi8qKlxuICogUmV0cmlldmVzIHRoZSB1c2VyJ3MgbG9naW4gdG9rZW4gb25seSBhbmQgZG9lcyBub3QgcGVyZm9ybSBmdXJ0aGVyIHZhbGlkYXRpb25cbiAqIEBwYXJhbSBjYWxsYmFjayBBIGxhbWJkYSB0aGF0IHJldHVybnMgdGhlIHVzZXIncyB0b2tlblxuICovXG5mdW5jdGlvbiBnZXRVc2VyVG9rZW4oY2FsbGJhY2spIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoXCJ1c2VyXCIsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC51c2VyICYmIHJlc3VsdC51c2VyLmFjY2Vzc1Rva2VuKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQudXNlci5hY2Nlc3NUb2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmdldFVzZXJUb2tlbiA9IGdldFVzZXJUb2tlbjtcbi8qKlxuICogUHVyZ2VzIHRoZSBvbGQgdXNlciB0b2tlbiBmcm9tIENocm9tZSdzIGludGVybmFsIHN0b3JhZ2VcbiAqL1xuZnVuY3Rpb24gcHVyZ2VPbGRUb2tlbigpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoXCJ1c2VyXCIpO1xufVxuZXhwb3J0cy5wdXJnZU9sZFRva2VuID0gcHVyZ2VPbGRUb2tlbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgU1AgPSByZXF1aXJlKFwiLi9kYXRhdHlwZXNcIik7XG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbi8qKlxuICogSG9va3MgdXAgdG8gYSAuY2xpY2soKSBsaXN0ZW5lciBmb3IgdGhlIGxvZ2luIGV2ZW50XG4gKiBAcGFyYW0gc3RhcnRQb2xsZXJzIEEgY2FsbGJhY2sgZm9yIHRoZSBtYWluIHBvcHVwLnRzIHRvIGluaXRpYWxpc2UgcmVjdXJyaW5nIGV2ZW50cyAoaS5lLiBwb2xsZXJzKVxuICovXG5mdW5jdGlvbiBsb2dpbkxpc3RlbmVyKHN0YXJ0UG9sbGVycykge1xuICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMb2dpbiBjbGlja2VkXCIpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS90b2tlblwiLCB0cnVlKTtcbiAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gb2xkIGNvZGU6IHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAvLyBTYXZlIG5hbWUgYW5kIHRva2VuIGludG8gQ2hyb21lIHN0b3JhZ2VcbiAgICAgICAgICAgIGlmIChTUC5Vc2VyLmlzVmFsaWQodGhpcy5yZXNwb25zZVRleHQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IFNQLlVzZXIuZnJvbUpTT04odGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHVzZXIgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTG9naW4gc3VjY2VlZGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSB1c2VybmFtZSBhbmQgcGFzc3dvcmRzXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJChcIiNwYXNzd29yZFwiKS52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAkKFwiI3VzZXJuYW1lXCIpLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogU2F2ZWQgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGZvciBmdXR1cmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIHRoZSBsb2dpbiBkaWFsb2cgYW5kIHNob3cgdGhlIG1haW4gVUlcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbWFpblwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3RhYkJhclwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2F1dGhcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNsb2FkaW5nXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHBvbGxlcnMgYnkgY2FsbGluZyBiYWNrIHRoZSBtYWluIGZpbGUgKHBvcHVwLnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRQb2xsZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRGlzcGxheSBlcnJvclxuICAgICAgICAgICAgICAgICQoXCIjYXV0aEVycm9yXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKFwiI2F1dGhFcnJvclwiKS50ZXh0KFNQLkVSUk9SX0FVVEhfSU5WQUxJRF9KU09OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIExvZ2luIGZhaWxlZCBpbiBzb21lIHdheVxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExvZ2luIGZhaWxlZDogXCIpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAvLyBFcnJvciBjb2RlIFwiMlwiIG1lYW5zIGxvZ2luIGZhaWxlZFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VPYmplY3QgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZU9iamVjdC5lcnJvciA9PT0gXCIyXCIpIHsgLy8gTk9URTogVEhJUyBJUyBBIFNUUklORyFcbiAgICAgICAgICAgICAgICAkKFwiI2F1dGhFcnJvclwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJChcIiNhdXRoRXJyb3JcIikudGV4dChTUC5FUlJPUl9BVVRIX0lOVkFMSURfUEFTU1dPUkQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgLy8gQ29uc3RydWN0IGZpbmFsIHBheWxvYWRcbiAgICBjb25zdCBwYXlsb2FkID0gXCJncmFudF90eXBlPXBhc3N3b3JkXCIgK1xuICAgICAgICBcIiZ1c2VybmFtZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCgkKFwiI3VzZXJuYW1lXCIpLnZhbCgpKSArXG4gICAgICAgIFwiJnBhc3N3b3JkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCQoXCIjcGFzc3dvcmRcIikudmFsKCkpICtcbiAgICAgICAgXCImZGV2aWNlVG9rZW49YXl5XCI7XG4gICAgcmVxdWVzdC5zZW5kKHBheWxvYWQpO1xufVxuZXhwb3J0cy5sb2dpbkxpc3RlbmVyID0gbG9naW5MaXN0ZW5lcjtcbi8qKlxuICogQSBsaXN0ZW5lciB0byBhdHRhY2ggdG8gYSBidXR0b24gdG8gdHJpZ2dlciB0aGUgQVRTIGludGVyZmFjZVxuICovXG5mdW5jdGlvbiBhdHNCdXR0b25MaXN0ZW5lcigpIHtcbiAgICAvLyBDYWxsIGJhY2tncm91bmQudHMgdG8gcG9zdCBkYXRhXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcImF0cy1saXN0ZW5lclwiIH0pO1xufVxuZXhwb3J0cy5hdHNCdXR0b25MaXN0ZW5lciA9IGF0c0J1dHRvbkxpc3RlbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5jb25zdCBTUCA9IHJlcXVpcmUoXCIuL2RhdGF0eXBlc1wiKTtcbmNvbnN0IExpc3RlbmVyID0gcmVxdWlyZShcIi4vbGlzdGVuZXJzXCIpO1xuY29uc3QgSGVscGVyID0gcmVxdWlyZShcIi4vaGVscGVyXCIpO1xuLyoqXG4gKiBTdGFydHMgYWxsIG9mIHRoZSBwb2xsZXJzLCBiYXNpY2FsbHkgZnVuY3Rpb25zIHRoYXQgbmVlZHMgdG8gcnVuIHBlcmlvZGljYWxseVxuICovXG5mdW5jdGlvbiBzdGFydEFsbFBvbGxlcnMoKSB7XG4gICAgY2xvY2tQb2xsKCk7IC8vIHRoaXMgZG9lcyBub3QgdXNlIGludGVydmFsIGFzIGl0IGlzIHRpbWUgc2Vuc2l0aXZlXG4gICAgY2FsZW5kYXJQb2xsKCk7XG4gICAgdGltZXRhYmxlUG9sbCgpO1xuICAgIHNwV2lmaVBvbGwoKTtcbiAgICBjcm93ZFBvbGwoKTtcbiAgICBzZXRJbnRlcnZhbChjYWxlbmRhclBvbGwsIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSBjYWxlbmRhciBwb2xsaW5nXG4gICAgc2V0SW50ZXJ2YWwodGltZXRhYmxlUG9sbCwgMTAwMCAqIDYwICogNSk7IC8vIDUgbWludXRlIHRpbWV0YWJsZSBwb2xsaW5nXG4gICAgc2V0SW50ZXJ2YWwoc3BXaWZpUG9sbCwgMTAwMCAqIDYwICogNSk7IC8vIDUgbWludXRlIHdpZmkgcG9sbGluZ1xuICAgIHNldEludGVydmFsKGNyb3dkUG9sbCwgMTAwMCAqIDYwICogNSk7IC8vIDUgbWludXRlIGNyb3dkIHBvbGxpbmdcbn1cbi8vI3JlZ2lvbiBQb2xsZXJzXG4vKipcbiAqIFJlZnJlc2hlcyB0aGUgY2xvY2sgZGlzcGxheSBldmVyeSAxIHNlY29uZFxuICovXG5mdW5jdGlvbiBjbG9ja1BvbGwoKSB7XG4gICAgJChcIiN0aW1lXCIpLnRleHQobW9tZW50KCkuZm9ybWF0KFwiSEg6bW06c3NcIikpO1xuICAgIHNldFRpbWVvdXQoY2xvY2tQb2xsLCAxMDAwKTsgLy8gMSBzZWNvbmQgcG9sbGluZ1xufVxuLyoqXG4gKiBSZXRyaWV2ZXMgZXZlbnRzIGZyb20gdGhlIFNQIENhbGVuZGFyIEFQSSBhbmQgZGlzcGxheXMgaXQgaW4gdGhlIG1haW4gdGFiLCBpZlxuICogdGhlcmUgaXMgYW4gZXZlbnQgcmlnaHQgbm93XG4gKi9cbmZ1bmN0aW9uIGNhbGVuZGFyUG9sbCgpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAvLyBHZXQgYWxsIG9iamVjdHNcbiAgICAgICAgICAgIGNvbnN0IGFsbENhbGVuZGFyRW50cmllcyA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc3QgcmVsZXZhbnRFbnRyaWVzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGFsbENhbGVuZGFyRW50cmllcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IERhdGUucGFyc2UoZW50cnkuc3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmREYXRlID0gRGF0ZS5wYXJzZShlbnRyeS5lbmRUaW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID4gc3RhcnREYXRlICYmIGN1cnJlbnREYXRlIDwgZW5kRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZWxldmFudEVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2V0IHN0YXR1c1xuICAgICAgICAgICAgaWYgKHJlbGV2YW50RW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNjaG9vbFN0YXRlU3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZWxldmFudEVudHJpZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyArPSBcIiwgXCI7XG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nICs9IGVsZW1lbnQuc3VtbWFyeTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyA9IHNjaG9vbFN0YXRlU3RyaW5nLnN1YnN0cigyLCBzY2hvb2xTdGF0ZVN0cmluZy5sZW5ndGgpOyAvLyBSZW1vdmUgdGhlIGZpcnN0IDIgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgICQoXCIjY3VycmVudFN0YXR1c1wiKS50ZXh0KHNjaG9vbFN0YXRlU3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjY3VycmVudFN0YXR1c1wiKS50ZXh0KFwiTm8gU2Nob29sIEV2ZW50c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXBlYXQgcmVxdWVzdCBvbmNlIGl0IGlzIGxvYWRlZCBvciB1bnN1Y2Nlc3NmdWxseSBsb2FkZWRcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExvYWRlZCBTUCBDYWxlbmRhclwiKTtcbiAgICB9O1xuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vbW9iaWxlYXBwcy5zcC5lZHUuc2cvU1BNb2JpbGVBUEkvYXBpL0dldEFjYWRDYWxlbmRhclwiLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcbn1cbi8qKlxuICogR2V0cyB0aGUgdGltZXRhYmxlIGZvciB0b2RheSBhbmQgY2hlY2tzIGlmIHRoZSB1c2VyIGlzIGF0dGVuZGluZyBhIGxlc3Nvbi5cbiAqIERpc3BsYXlzIHRoZSBsZXNzb24gaWYgYW55IGluIHRoZSBtYWluIHRhYlxuICovXG5mdW5jdGlvbiB0aW1ldGFibGVQb2xsKCkge1xuICAgIEhlbHBlci51c2VySXNBdXRoZW50aWNhdGVkKGZ1bmN0aW9uIChhdXRoZW50aWNhdGVkLCB0b2tlbikge1xuICAgICAgICBpZiAoYXV0aGVudGljYXRlZCAmJiB0b2tlbikge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGVTdHJpbmcgPSBtb21lbnQoKS5mb3JtYXQoXCJERE1NWVlcIik7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gSGVscGVyLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiR0VUXCIsIFNQLlVSTF9USU1FVEFCTEUgKyBjdXJyZW50RGF0ZVN0cmluZywgdHJ1ZSwgdG9rZW4pO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IFJlcXVlc3RlZCBmb3IgdGltZXRhYmxlIHdpdGggcmV0dXJuZWQgZGF0YTpcIiArIHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VUZXh0ID09PSBTUC5USU1FVEFCTEVfTk9fTEVTU09OUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gbGVzc29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjdXJyZW50TGVzc29uXCIpLnRleHQoXCJObyBMZXNzb25zXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbkFycmF5ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJOiBWYWxpZGF0ZSBhbGwgdGltZXRhYmxlIGVudHJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWV0YWJsZUVudHJpZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnlTdHJpbmcgb2YganNvbkFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IEpTT04uc3RyaW5naWZ5KGVudHJ5U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyeVZhbGlkID0gU1AuVGltZXRhYmxlRW50cnkuaXNWYWxpZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnlWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IFNQLlRpbWV0YWJsZUVudHJ5LmZyb21KU09OKGVsZW1lbnQsIGN1cnJlbnREYXRlU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSUk6IEluc2VydCBhbGwgZW50cmllcyBpbnRvIGFycmF5IHdoZXJlIGl0IGlzIGN1cnJlbnRseSBoYXBwZW5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGVUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmdldFN0YXJ0RGF0ZVRpbWUoKSA8IGN1cnJlbnREYXRlVGltZSAmJiBlbnRyeS5nZXRFbmREYXRlVGltZSgpID4gY3VycmVudERhdGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1ldGFibGVFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExlc3NvbiBjdXJyZW50bHkgcnVubmluZzogXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTGVzc29uIG5vdCBydW5uaW5nOiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBUaW1ldGFibGUgZW50cnkgaXMgaW52YWxpZDpcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSUk6IERpc3BsYXkgY3VycmVudCBsZXNzb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1ldGFibGVFbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2N1cnJlbnRMZXNzb25cIikudGV4dCh0aW1ldGFibGVFbnRyaWVzWzBdLmdldEFiYnJldmlhdGlvbigpICsgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1ldGFibGVFbnRyaWVzWzBdLmdldFR5cGVTdHJpbmcoKSArIFwiIEAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1ldGFibGVFbnRyaWVzWzBdLmdldExvY2F0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjdXJyZW50TGVzc29uXCIpLnRleHQoXCJObyBMZXNzb24gQ3VycmVudGx5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbV0FSTklOR106IEZhaWxlZCB0byBsb2FkIHRpbWV0YWJsZTogXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdOiBUb2tlbiBpbnZhbGlkLCBmb3VuZCBkdXJpbmcgdGltZXRhYmxlIHJldHJpZXZhbCFcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSB1c2VyIGlzIGNvbm5lY3RlZCB0byBTUCBXaS1GaSBhbmQgZGlzcGxheXMgdGhlIGNvbm5lY3Rpdml0eSBzdGF0dXNcbiAqL1xuZnVuY3Rpb24gc3BXaWZpUG9sbCgpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBjb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHJlcXVlc3QgYWN0dWFsbHkgZ2V0cyB0aGUgcmVhbCBBVFMgcGFnZVxuICAgICAgICAgICAgY29ubmVjdGVkID0gdGhpcy5yZXNwb25zZVVSTC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9teWF0cy5zcC5lZHUuc2dcIikgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGlzcGxheSBjb25uZWN0ZWQgc3RhdGVcbiAgICAgICAgaWYgKGNvbm5lY3RlZCkge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IENvbm5lY3RlZCB0byBTUCB3aWZpXCIpO1xuICAgICAgICAgICAgJChcIiN3aWZpQ29ubmVjdGVkVGV4dFwiKS50ZXh0KFwiQ29ubmVjdGVkIHRvIFNQIFdpLUZpXCIpO1xuICAgICAgICAgICAgJChcIiN3aWZpTG9nb1wiKS5jc3MoXCJjb2xvclwiLCBcIiMzM0MzRjBcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTm90IGNvbm5lY3RlZCB0byBTUCB3aWZpXCIpO1xuICAgICAgICAgICAgJChcIiN3aWZpQ29ubmVjdGVkVGV4dFwiKS50ZXh0KFwiTm90IGNvbm5lY3RlZCB0byBTUCBXaS1GaVwiKTtcbiAgICAgICAgICAgICQoXCIjd2lmaUxvZ29cIikuY3NzKFwiY29sb3JcIiwgXCIjYmJiXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgU1AuVVJMX0FUUywgdHJ1ZSk7XG4gICAgcmVxdWVzdC5zZW5kKCk7XG59XG4vKipcbiAqIENoZWNrcyBmb3IgY3Jvd2QgZGF0YSBhbmQgZGlzcGxheXMgaXQgaW4gdGhlIGNyb3dkIHRhYlxuICovXG5mdW5jdGlvbiBjcm93ZFBvbGwoKSB7XG4gICAgSGVscGVyLnVzZXJJc0F1dGhlbnRpY2F0ZWQoZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQsIHRva2VuKSB7XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGVkICYmIHRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gSGVscGVyLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiR0VUXCIsIFNQLlVSTF9DUk9XRF9DSEVDSywgdHJ1ZSwgdG9rZW4pO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbkFycmF5ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIEk6IFZhbGlkYXRlIGFsbCBjcm93ZCBlbnRyaWVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyb3dkRW50cmllcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5U3RyaW5nIG9mIGpzb25BcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IEpTT04uc3RyaW5naWZ5KGVudHJ5U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5VmFsaWQgPSBTUC5Dcm93ZEluZm8uaXNWYWxpZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeVZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cnkgPSBTUC5Dcm93ZEluZm8uZnJvbUpTT04oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSUk6IEluc2VydCBhbGwgdmFsaWQgZW50cmllcyBpbnRvIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvd2RFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBDcm93ZCBlbnRyeSBpcyBpbnZhbGlkOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSUlJOiBEaXNwbGF5IGl0IVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGNyb3dkRW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGVudHJ5LmdldE5hbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGVudHJ5LmdldFN0YXR1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBcIiZsdDsgNTAlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBcImxpbWVncmVlblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNQLkNyb3dkTGV2ZWwuU21hbGw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gXCJsaW1lZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IFwiJmx0OyA1MCVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTUC5Dcm93ZExldmVsLk1lZGl1bTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBcImdvbGRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IFwiJmx0OyA3NSVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTUC5Dcm93ZExldmVsLkxhcmdlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9IFwiY3JpbXNvblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gXCImZ3Q7IDc1JVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjY3Jvd2RUYWJsZSA+IHRib2R5Omxhc3QtY2hpbGRcIikuYXBwZW5kKGA8dHI+XG4gICAgICAgICAgICAgIDx0ZD4ke25hbWV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxpIGNsYXNzPVxcXCJmYXMgZmEtdXNlcnNcXFwiIHN0eWxlPVxcXCJjb2xvcjogJHtjb2xvcn1cXFwiPjwvaT4gJHtwZXJjZW50YWdlfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBFcnJvciBoYW5kbGluZyBoZXJlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltFUlJPUl06IFRva2VuIGludmFsaWQsIGZvdW5kIGR1cmluZyBjcm93ZCBmZXRjaCFcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vI2VuZHJlZ2lvbiBQb2xsZXJzXG4vLyBJbml0aWFsaXNhdGlvbi4gVGhpcyBibG9jayBydW5zIHdoZW4gZG9jdW1lbnQgaXMgcmVhZHlcbiQoZnVuY3Rpb24gKCkge1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09IFVzZXIgYXV0aGVudGljYXRpb24gY2hlY2sgPT09PT09PT09PT09PT09PT09PT1cbiAgICBIZWxwZXIudXNlcklzQXV0aGVudGljYXRlZChmdW5jdGlvbiAoYXV0aGVudGljYXRlZCkge1xuICAgICAgICAkKFwiI2xvYWRpbmdcIikuc2hvdygpO1xuICAgICAgICBpZiAoYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgLy8gVXNlciBpcyBsb2dnZWQgaW4sIHNob3cgbWFpbiBVSSBhbmQgaW5pdGlhbGlzZSBwb2xsZXJzXG4gICAgICAgICAgICAkKFwiI21haW5cIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiN0YWJCYXJcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiNhdXRoXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbG9hZGluZ1wiKS5oaWRlKCk7XG4gICAgICAgICAgICBzdGFydEFsbFBvbGxlcnMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vdCBhdXRoZW50aWNhdGVkLCBkaXNwbGF5IGxvZ2luIFVJIG9ubHlcbiAgICAgICAgICAgICQoXCIjbWFpblwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI3RhYkJhclwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2F1dGhcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiNsb2FkaW5nXCIpLmhpZGUoKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBvbGQgbG9naW4gdG9rZW4gc3RpbGwgZXhpc3RzIGluIHN0b3JhZ2UsIHB1cmdlIGl0XG4gICAgICAgICAgICBIZWxwZXIucHVyZ2VPbGRUb2tlbigpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IExpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gSW5pdGlhbGlzZSBMb2dpbiBsaXN0ZW5lclxuICAgICQoXCIjbG9naW5CdXR0b25cIikuY2xpY2soKCkgPT4ge1xuICAgICAgICBMaXN0ZW5lci5sb2dpbkxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFN0YXJ0IHVwIHRoZSBwb2xsZXJzLCBhcyB0aGlzIGxhbWJkYSB3aWxsIG9ubHkgYmUgY2FsbGVkIGlmXG4gICAgICAgICAgICAvLyB0aGUgbG9naW4gaXMgc3VjY2Vzc2Z1bFxuICAgICAgICAgICAgc3RhcnRBbGxQb2xsZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIFNldHVwIEFUUyBidXR0b24gbGlzdGVuZXJcbiAgICAkKFwiI2F0c0J1dHRvblwiKS5jbGljaygoKSA9PiB7XG4gICAgICAgIExpc3RlbmVyLmF0c0J1dHRvbkxpc3RlbmVyKCk7XG4gICAgfSk7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBUYWIgTGlzdGVuZXJzID09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAkKFwiI2hvbWVUYWJCdXR0b25cIikuY2xpY2soKCkgPT4ge1xuICAgICAgICBzaG93VGFiKFwiI21haW5cIik7XG4gICAgfSk7XG4gICAgJChcIiNjcm93ZFRhYkJ1dHRvblwiKS5jbGljaygoKSA9PiB7XG4gICAgICAgIHNob3dUYWIoXCIjY3Jvd2RUYWJcIik7XG4gICAgfSk7XG59KTtcbi8vI3JlZ2lvbiBIZWxwZXIgZnVuY3Rpb25zXG4vKipcbiAqIFNob3dzIGEgc2luZ2xlIHRhYiBhbmQgaGlkZXMgYWxsIG90aGVyIHRhYnNcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIHNpbmdsZSB0YWIgdG8gc2hvd1xuICovXG5mdW5jdGlvbiBzaG93VGFiKG5hbWUpIHtcbiAgICBjb25zdCBhbGxUYWJOYW1lcyA9IFtcIiNtYWluXCIsIFwiI2Nyb3dkVGFiXCJdO1xuICAgIGZvciAoY29uc3QgdGFiTmFtZSBvZiBhbGxUYWJOYW1lcykge1xuICAgICAgICBpZiAobmFtZSA9PT0gdGFiTmFtZSkge1xuICAgICAgICAgICAgJCh0YWJOYW1lKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkKHRhYk5hbWUpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vI2VuZHJlZ2lvbiBIZWxwZXIgZnVuY3Rpb25zXG4iXSwic291cmNlUm9vdCI6IiJ9