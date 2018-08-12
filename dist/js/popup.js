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
/**
 * Extremely fast and non-cryptographically secure hash function
 * Used to create short and sweet hashes for uniquely ID"ing strings
 * Based roughly on the Java String.hashCode() function
 * @param input Input string to hash
 */
function hash(input) {
    let hashResult = 0;
    let i;
    let chr;
    if (input.length === 0)
        return hashResult;
    for (i = 0; i < input.length; i++) {
        chr = input.charCodeAt(i);
        hashResult = ((hashResult << 5) - hashResult) + chr;
        hashResult |= 0; // Convert to 32bit integer
    }
    return hashResult;
}
exports.hash = hash;


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
                        $("#auth").hide();
                        $("#main").show();
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
    $("#time").text(moment().format("HH:mm:ss"));
    setTimeout(clockPoll, 1000); // 1 second polling
}
/**
 * Retrieves data from the SP Calendar API and displays it
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
 * Gets the timetable for today and checks if the user is attending a lesson
 */
function timetablePoll() {
    Helper.userIsAuthenticated(function (authenticated, token) {
        if (authenticated && token) {
            const currentDateString = moment().format("DDMMYY");
            console.debug("[DEBUG] Requested for timetable with date: " + currentDateString);
            const request = Helper.authenticatedRequest("GET", "https://mobileapps.sp.edu.sg/SPMobileAPI/api/GetStudentTimetableByIdAndDate/" +
                currentDateString, true, token);
            request.onloadend = function () {
                if (this.status === 200) {
                    console.debug("[DEBUG]: Requested for timetable with returned data:");
                    console.debug(this.responseText);
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
//#endregion Pollers
// Initialisation. This block runs when document is ready
$(function () {
    const queryInfo = {
        active: true,
        currentWindow: true,
    };
    chrome.tabs.query(queryInfo, function (tabs) {
        // $("#url").text(tabs[0].url);
        $("#time").text(moment().format("HH:mm:ss"));
    });
    chrome.browserAction.setBadgeText({ text: count.toString() });
    $("#countUp").click(() => {
        chrome.browserAction.setBadgeText({ text: (++count).toString() });
    });
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
        console.log("Crowd clicked");
        showTab("#crowdTab");
    });
});
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdGVuZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFDQSw4Q0FBOEMs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QUNoRTtBQUNBLDJDQUEyQyw2QkFBNkI7QUFDeEUsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicG9wdXBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvcG9wdXAudHNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gYXV0aGVudGljYXRlZCByZXF1ZXN0IHVzaW5nIGFuIGV4aXN0aW5nIHRva2VuXG4gKiBAcGFyYW0gbWV0aG9kIFRoZSBIVFRQIG1ldGhvZCB0byB1c2UgZm9yIHRoaXMgcmVxdWVzdFxuICogQHBhcmFtIHVybCBUaGUgVVJMIHRvIHVzZSBmb3IgdGhpcyByZXF1ZXN0XG4gKiBAcGFyYW0gYXN5bmMgV2hldGhlciB0aGUgcmVxdWVzdCBzaG91bGQgYmUgZG9uZSBhc3luY2hyb25vdXNseVxuICogQHBhcmFtIHRva2VuIFRoZSB0b2tlbiBXSVRIT1VUIHRoZSBcIkJlYXJlciBcIiBwcmVmaXhcbiAqL1xuZnVuY3Rpb24gYXV0aGVudGljYXRlZFJlcXVlc3QobWV0aG9kLCB1cmwsIGFzeW5jLCB0b2tlbikge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIGFzeW5jKTtcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgdG9rZW4pO1xuICAgIHJldHVybiByZXF1ZXN0O1xufVxuZXhwb3J0cy5hdXRoZW50aWNhdGVkUmVxdWVzdCA9IGF1dGhlbnRpY2F0ZWRSZXF1ZXN0O1xuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9rZW4gc3RvcmVkIGluIENocm9tZSdzIHN0b3JhZ2UgaXMgYSB2YWxpZFxuICogdG9rZW4gKGkuZS4gdGhlIHVzZXIgaXMgYWxyZWFkeSBhdXRoZW50aWNhdGVkKS5cbiAqIEBwYXJhbSBjYWxsYmFjayBBIGxhbWJkYSB0aGF0IHJldHVybnMgdGhlIGF1dGhlbnRpY2F0ZWQgc3RhdGUgdGhyb3VnaCBhIHBhcmFtZXRlclxuICogQHBhcmFtIHRva2VuIFRoZSBzZXNzaW9uIHRva2VuLCBpZiB0aGUgdXNlciBpcyBpbmRlZWQgYXV0aGVudGljYXRlZC4gRWxzZSwgaXQgcmV0dXJucyB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gdXNlcklzQXV0aGVudGljYXRlZChjYWxsYmFjaykge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcInVzZXJcIiwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAvLyBGaXJzdCByb3VuZDogY2hlY2tpbmcgZm9yIGV4aXN0ZW5jZSBvZiB0b2tlblxuICAgICAgICBpZiAocmVzdWx0LnVzZXIgJiYgcmVzdWx0LnVzZXIuYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgIC8vIFNlY29uZCByb3VuZDogdG9rZW4gdmFsaWRpdHkgY2hlY2tpbmcgd2l0aCBhIHNtYWxsIEFQSSBlbmRwb2ludFxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiUE9TVFwiLCBcImh0dHBzOi8vbW9iaWxlYXBwcy5zcC5lZHUuc2cvU1BNb2JpbGVBUEkvYXBpL0NvdW50VW5yZWFkSXRlbVwiLCB0cnVlLCByZXN1bHQudXNlci5hY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUb2tlbiBpcyB2YWxpZCwgcmV0dXJuIGNhbGxiYWNrIHdpdGggdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLCByZXN1bHQudXNlci5hY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudXNlcklzQXV0aGVudGljYXRlZCA9IHVzZXJJc0F1dGhlbnRpY2F0ZWQ7XG4vKipcbiAqIFJldHJpZXZlcyB0aGUgdXNlcidzIGxvZ2luIHRva2VuIG9ubHkgYW5kIGRvZXMgbm90IHBlcmZvcm0gZnVydGhlciB2YWxpZGF0aW9uXG4gKiBAcGFyYW0gY2FsbGJhY2sgQSBsYW1iZGEgdGhhdCByZXR1cm5zIHRoZSB1c2VyJ3MgdG9rZW5cbiAqL1xuZnVuY3Rpb24gZ2V0VXNlclRva2VuKGNhbGxiYWNrKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwidXNlclwiLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQudXNlciAmJiByZXN1bHQudXNlci5hY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0LnVzZXIuYWNjZXNzVG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5nZXRVc2VyVG9rZW4gPSBnZXRVc2VyVG9rZW47XG4vKipcbiAqIFB1cmdlcyB0aGUgb2xkIHVzZXIgdG9rZW4gZnJvbSBDaHJvbWUncyBpbnRlcm5hbCBzdG9yYWdlXG4gKi9cbmZ1bmN0aW9uIHB1cmdlT2xkVG9rZW4oKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKFwidXNlclwiKTtcbn1cbmV4cG9ydHMucHVyZ2VPbGRUb2tlbiA9IHB1cmdlT2xkVG9rZW47XG4vKipcbiAqIEV4dHJlbWVseSBmYXN0IGFuZCBub24tY3J5cHRvZ3JhcGhpY2FsbHkgc2VjdXJlIGhhc2ggZnVuY3Rpb25cbiAqIFVzZWQgdG8gY3JlYXRlIHNob3J0IGFuZCBzd2VldCBoYXNoZXMgZm9yIHVuaXF1ZWx5IElEXCJpbmcgc3RyaW5nc1xuICogQmFzZWQgcm91Z2hseSBvbiB0aGUgSmF2YSBTdHJpbmcuaGFzaENvZGUoKSBmdW5jdGlvblxuICogQHBhcmFtIGlucHV0IElucHV0IHN0cmluZyB0byBoYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2goaW5wdXQpIHtcbiAgICBsZXQgaGFzaFJlc3VsdCA9IDA7XG4gICAgbGV0IGk7XG4gICAgbGV0IGNocjtcbiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gaGFzaFJlc3VsdDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2hyID0gaW5wdXQuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaFJlc3VsdCA9ICgoaGFzaFJlc3VsdCA8PCA1KSAtIGhhc2hSZXN1bHQpICsgY2hyO1xuICAgICAgICBoYXNoUmVzdWx0IHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICAgIH1cbiAgICByZXR1cm4gaGFzaFJlc3VsdDtcbn1cbmV4cG9ydHMuaGFzaCA9IGhhc2g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFNQID0gcmVxdWlyZShcIi4vZGF0YXR5cGVzXCIpO1xuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG4vKipcbiAqIEhvb2tzIHVwIHRvIGEgLmNsaWNrKCkgbGlzdGVuZXIgZm9yIHRoZSBsb2dpbiBldmVudFxuICogQHBhcmFtIHN0YXJ0UG9sbGVycyBBIGNhbGxiYWNrIGZvciB0aGUgbWFpbiBwb3B1cC50cyB0byBpbml0aWFsaXNlIHJlY3VycmluZyBldmVudHMgKGkuZS4gcG9sbGVycylcbiAqL1xuZnVuY3Rpb24gbG9naW5MaXN0ZW5lcihzdGFydFBvbGxlcnMpIHtcbiAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTG9naW4gY2xpY2tlZFwiKTtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vcGVuKFwiUE9TVFwiLCBcImh0dHBzOi8vbW9iaWxlYXBwcy5zcC5lZHUuc2cvU1BNb2JpbGVBUEkvdG9rZW5cIiwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIG9sZCBjb2RlOiB0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJlxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgLy8gU2F2ZSBuYW1lIGFuZCB0b2tlbiBpbnRvIENocm9tZSBzdG9yYWdlXG4gICAgICAgICAgICBpZiAoU1AuVXNlci5pc1ZhbGlkKHRoaXMucmVzcG9uc2VUZXh0KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBTUC5Vc2VyLmZyb21KU09OKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyB1c2VyIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExvZ2luIHN1Y2NlZWRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3Jkc1xuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICQoXCIjcGFzc3dvcmRcIikudmFsKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogJChcIiN1c2VybmFtZVwiKS52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IFNhdmVkIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBmb3IgZnV0dXJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGlkZSB0aGUgbG9naW4gZGlhbG9nIGFuZCBzaG93IHRoZSBtYWluIFVJXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2F1dGhcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNtYWluXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHBvbGxlcnMgYnkgY2FsbGluZyBiYWNrIHRoZSBtYWluIGZpbGUgKHBvcHVwLnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRQb2xsZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRGlzcGxheSBlcnJvclxuICAgICAgICAgICAgICAgICQoXCIjYXV0aEVycm9yXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKFwiI2F1dGhFcnJvclwiKS50ZXh0KFNQLkVSUk9SX0FVVEhfSU5WQUxJRF9KU09OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIExvZ2luIGZhaWxlZCBpbiBzb21lIHdheVxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExvZ2luIGZhaWxlZDogXCIpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAvLyBFcnJvciBjb2RlIFwiMlwiIG1lYW5zIGxvZ2luIGZhaWxlZFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VPYmplY3QgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZU9iamVjdC5lcnJvciA9PT0gXCIyXCIpIHsgLy8gTk9URTogVEhJUyBJUyBBIFNUUklORyFcbiAgICAgICAgICAgICAgICAkKFwiI2F1dGhFcnJvclwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJChcIiNhdXRoRXJyb3JcIikudGV4dChTUC5FUlJPUl9BVVRIX0lOVkFMSURfUEFTU1dPUkQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgLy8gQ29uc3RydWN0IGZpbmFsIHBheWxvYWRcbiAgICBjb25zdCBwYXlsb2FkID0gXCJncmFudF90eXBlPXBhc3N3b3JkXCIgK1xuICAgICAgICBcIiZ1c2VybmFtZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCgkKFwiI3VzZXJuYW1lXCIpLnZhbCgpKSArXG4gICAgICAgIFwiJnBhc3N3b3JkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCQoXCIjcGFzc3dvcmRcIikudmFsKCkpICtcbiAgICAgICAgXCImZGV2aWNlVG9rZW49YXl5XCI7XG4gICAgcmVxdWVzdC5zZW5kKHBheWxvYWQpO1xufVxuZXhwb3J0cy5sb2dpbkxpc3RlbmVyID0gbG9naW5MaXN0ZW5lcjtcbmZ1bmN0aW9uIGF0c0J1dHRvbkxpc3RlbmVyKCkge1xuICAgIC8vIENhbGwgYmFja2dyb3VuZC50cyB0byBwb3N0IGRhdGFcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6IFwiYXRzLWxpc3RlbmVyXCIgfSk7XG59XG5leHBvcnRzLmF0c0J1dHRvbkxpc3RlbmVyID0gYXRzQnV0dG9uTGlzdGVuZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbmNvbnN0IFNQID0gcmVxdWlyZShcIi4vZGF0YXR5cGVzXCIpO1xuY29uc3QgTGlzdGVuZXIgPSByZXF1aXJlKFwiLi9saXN0ZW5lcnNcIik7XG5jb25zdCBIZWxwZXIgPSByZXF1aXJlKFwiLi9oZWxwZXJcIik7XG5sZXQgY291bnQgPSAwO1xuZnVuY3Rpb24gc3RhcnRBbGxQb2xsZXJzKCkge1xuICAgIGNsb2NrUG9sbCgpOyAvLyB0aGlzIGRvZXMgbm90IHVzZSBpbnRlcnZhbCBhcyBpdCBpcyB0aW1lIHNlbnNpdGl2ZVxuICAgIGNhbGVuZGFyUG9sbCgpO1xuICAgIHRpbWV0YWJsZVBvbGwoKTtcbiAgICBzcFdpZmlQb2xsKCk7XG4gICAgc2V0SW50ZXJ2YWwoY2FsZW5kYXJQb2xsLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgY2FsZW5kYXIgcG9sbGluZ1xuICAgIHNldEludGVydmFsKHRpbWV0YWJsZVBvbGwsIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSB0aW1ldGFibGUgcG9sbGluZ1xuICAgIHNldEludGVydmFsKHNwV2lmaVBvbGwsIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSB3aWZpIHBvbGxpbmdcbn1cbi8vI3JlZ2lvbiBQb2xsZXJzXG5mdW5jdGlvbiBjbG9ja1BvbGwoKSB7XG4gICAgJChcIiN0aW1lXCIpLnRleHQobW9tZW50KCkuZm9ybWF0KFwiSEg6bW06c3NcIikpO1xuICAgIHNldFRpbWVvdXQoY2xvY2tQb2xsLCAxMDAwKTsgLy8gMSBzZWNvbmQgcG9sbGluZ1xufVxuLyoqXG4gKiBSZXRyaWV2ZXMgZGF0YSBmcm9tIHRoZSBTUCBDYWxlbmRhciBBUEkgYW5kIGRpc3BsYXlzIGl0XG4gKi9cbmZ1bmN0aW9uIGNhbGVuZGFyUG9sbCgpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAvLyBHZXQgYWxsIG9iamVjdHNcbiAgICAgICAgICAgIGNvbnN0IGFsbENhbGVuZGFyRW50cmllcyA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc3QgcmVsZXZhbnRFbnRyaWVzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGFsbENhbGVuZGFyRW50cmllcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IERhdGUucGFyc2UoZW50cnkuc3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmREYXRlID0gRGF0ZS5wYXJzZShlbnRyeS5lbmRUaW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID4gc3RhcnREYXRlICYmIGN1cnJlbnREYXRlIDwgZW5kRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZWxldmFudEVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2V0IHN0YXR1c1xuICAgICAgICAgICAgaWYgKHJlbGV2YW50RW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNjaG9vbFN0YXRlU3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZWxldmFudEVudHJpZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyArPSBcIiwgXCI7XG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nICs9IGVsZW1lbnQuc3VtbWFyeTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyA9IHNjaG9vbFN0YXRlU3RyaW5nLnN1YnN0cigyLCBzY2hvb2xTdGF0ZVN0cmluZy5sZW5ndGgpOyAvLyBSZW1vdmUgdGhlIGZpcnN0IDIgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgICQoXCIjY3VycmVudFN0YXR1c1wiKS50ZXh0KHNjaG9vbFN0YXRlU3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjY3VycmVudFN0YXR1c1wiKS50ZXh0KFwiTm8gU2Nob29sIEV2ZW50c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXBlYXQgcmVxdWVzdCBvbmNlIGl0IGlzIGxvYWRlZCBvciB1bnN1Y2Nlc3NmdWxseSBsb2FkZWRcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExvYWRlZCBTUCBDYWxlbmRhclwiKTtcbiAgICB9O1xuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vbW9iaWxlYXBwcy5zcC5lZHUuc2cvU1BNb2JpbGVBUEkvYXBpL0dldEFjYWRDYWxlbmRhclwiLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcbn1cbi8qKlxuICogR2V0cyB0aGUgdGltZXRhYmxlIGZvciB0b2RheSBhbmQgY2hlY2tzIGlmIHRoZSB1c2VyIGlzIGF0dGVuZGluZyBhIGxlc3NvblxuICovXG5mdW5jdGlvbiB0aW1ldGFibGVQb2xsKCkge1xuICAgIEhlbHBlci51c2VySXNBdXRoZW50aWNhdGVkKGZ1bmN0aW9uIChhdXRoZW50aWNhdGVkLCB0b2tlbikge1xuICAgICAgICBpZiAoYXV0aGVudGljYXRlZCAmJiB0b2tlbikge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGVTdHJpbmcgPSBtb21lbnQoKS5mb3JtYXQoXCJERE1NWVlcIik7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXSBSZXF1ZXN0ZWQgZm9yIHRpbWV0YWJsZSB3aXRoIGRhdGU6IFwiICsgY3VycmVudERhdGVTdHJpbmcpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IEhlbHBlci5hdXRoZW50aWNhdGVkUmVxdWVzdChcIkdFVFwiLCBcImh0dHBzOi8vbW9iaWxlYXBwcy5zcC5lZHUuc2cvU1BNb2JpbGVBUEkvYXBpL0dldFN0dWRlbnRUaW1ldGFibGVCeUlkQW5kRGF0ZS9cIiArXG4gICAgICAgICAgICAgICAgY3VycmVudERhdGVTdHJpbmcsIHRydWUsIHRva2VuKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBSZXF1ZXN0ZWQgZm9yIHRpbWV0YWJsZSB3aXRoIHJldHVybmVkIGRhdGE6XCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VUZXh0ID09PSBTUC5USU1FVEFCTEVfTk9fTEVTU09OUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gbGVzc29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjdXJyZW50TGVzc29uXCIpLnRleHQoXCJObyBMZXNzb25zXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbkFycmF5ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJOiBWYWxpZGF0ZSBhbGwgdGltZXRhYmxlIGVudHJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWV0YWJsZUVudHJpZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnlTdHJpbmcgb2YganNvbkFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IEpTT04uc3RyaW5naWZ5KGVudHJ5U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyeVZhbGlkID0gU1AuVGltZXRhYmxlRW50cnkuaXNWYWxpZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnlWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IFNQLlRpbWV0YWJsZUVudHJ5LmZyb21KU09OKGVsZW1lbnQsIGN1cnJlbnREYXRlU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSUk6IEluc2VydCBhbGwgZW50cmllcyBpbnRvIGFycmF5IHdoZXJlIGl0IGlzIGN1cnJlbnRseSBoYXBwZW5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGVUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmdldFN0YXJ0RGF0ZVRpbWUoKSA8IGN1cnJlbnREYXRlVGltZSAmJiBlbnRyeS5nZXRFbmREYXRlVGltZSgpID4gY3VycmVudERhdGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1ldGFibGVFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExlc3NvbiBjdXJyZW50bHkgcnVubmluZzogXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTGVzc29uIG5vdCBydW5uaW5nOiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBUaW1ldGFibGUgZW50cnkgaXMgaW52YWxpZDpcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSUk6IERpc3BsYXkgY3VycmVudCBsZXNzb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1ldGFibGVFbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2N1cnJlbnRMZXNzb25cIikudGV4dCh0aW1ldGFibGVFbnRyaWVzWzBdLmdldEFiYnJldmlhdGlvbigpICsgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1ldGFibGVFbnRyaWVzWzBdLmdldFR5cGVTdHJpbmcoKSArIFwiIEAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1ldGFibGVFbnRyaWVzWzBdLmdldExvY2F0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjdXJyZW50TGVzc29uXCIpLnRleHQoXCJObyBMZXNzb24gQ3VycmVudGx5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbV0FSTklOR106IEZhaWxlZCB0byBsb2FkIHRpbWV0YWJsZTogXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdOiBUb2tlbiBpbnZhbGlkLCBmb3VuZCBkdXJpbmcgdGltZXRhYmxlIHJldHJpZXZhbCFcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSB1c2VyIGlzIGNvbm5lY3RlZCB0byBTUCBXaS1GaSBhbmQgZGlzcGxheXMgdGhlIGNvbm5lY3Rpdml0eSBzdGF0dXNcbiAqL1xuZnVuY3Rpb24gc3BXaWZpUG9sbCgpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBjb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHJlcXVlc3QgYWN0dWFsbHkgZ2V0cyB0aGUgcmVhbCBBVFMgcGFnZVxuICAgICAgICAgICAgY29ubmVjdGVkID0gdGhpcy5yZXNwb25zZVVSTC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9teWF0cy5zcC5lZHUuc2dcIikgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGlzcGxheSBjb25uZWN0ZWQgc3RhdGVcbiAgICAgICAgaWYgKGNvbm5lY3RlZCkge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IENvbm5lY3RlZCB0byBTUCB3aWZpXCIpO1xuICAgICAgICAgICAgJChcIiN3aWZpQ29ubmVjdGVkVGV4dFwiKS50ZXh0KFwiQ29ubmVjdGVkIHRvIFNQIFdpLUZpXCIpO1xuICAgICAgICAgICAgJChcIiN3aWZpTG9nb1wiKS5jc3MoXCJjb2xvclwiLCBcIiMzM0MzRjBcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTm90IGNvbm5lY3RlZCB0byBTUCB3aWZpXCIpO1xuICAgICAgICAgICAgJChcIiN3aWZpQ29ubmVjdGVkVGV4dFwiKS50ZXh0KFwiTm90IGNvbm5lY3RlZCB0byBTUCBXaS1GaVwiKTtcbiAgICAgICAgICAgICQoXCIjd2lmaUxvZ29cIikuY3NzKFwiY29sb3JcIiwgXCIjYmJiXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgU1AuVVJMX0FUUywgdHJ1ZSk7XG4gICAgcmVxdWVzdC5zZW5kKCk7XG59XG4vLyNlbmRyZWdpb24gUG9sbGVyc1xuLy8gSW5pdGlhbGlzYXRpb24uIFRoaXMgYmxvY2sgcnVucyB3aGVuIGRvY3VtZW50IGlzIHJlYWR5XG4kKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBxdWVyeUluZm8gPSB7XG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgY3VycmVudFdpbmRvdzogdHJ1ZSxcbiAgICB9O1xuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHF1ZXJ5SW5mbywgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICAgICAgLy8gJChcIiN1cmxcIikudGV4dCh0YWJzWzBdLnVybCk7XG4gICAgICAgICQoXCIjdGltZVwiKS50ZXh0KG1vbWVudCgpLmZvcm1hdChcIkhIOm1tOnNzXCIpKTtcbiAgICB9KTtcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiBjb3VudC50b1N0cmluZygpIH0pO1xuICAgICQoXCIjY291bnRVcFwiKS5jbGljaygoKSA9PiB7XG4gICAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6ICgrK2NvdW50KS50b1N0cmluZygpIH0pO1xuICAgIH0pO1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09IFVzZXIgYXV0aGVudGljYXRpb24gY2hlY2sgPT09PT09PT09PT09PT09PT09PT1cbiAgICBIZWxwZXIudXNlcklzQXV0aGVudGljYXRlZChmdW5jdGlvbiAoYXV0aGVudGljYXRlZCkge1xuICAgICAgICAkKFwiI2xvYWRpbmdcIikuc2hvdygpO1xuICAgICAgICBpZiAoYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgLy8gVXNlciBpcyBsb2dnZWQgaW4sIHNob3cgbWFpbiBVSSBhbmQgaW5pdGlhbGlzZSBwb2xsZXJzXG4gICAgICAgICAgICAkKFwiI21haW5cIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiN0YWJCYXJcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiNhdXRoXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjbG9hZGluZ1wiKS5oaWRlKCk7XG4gICAgICAgICAgICBzdGFydEFsbFBvbGxlcnMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vdCBhdXRoZW50aWNhdGVkLCBkaXNwbGF5IGxvZ2luIFVJIG9ubHlcbiAgICAgICAgICAgICQoXCIjbWFpblwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI3RhYkJhclwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI2F1dGhcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiNsb2FkaW5nXCIpLmhpZGUoKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBvbGQgbG9naW4gdG9rZW4gc3RpbGwgZXhpc3RzIGluIHN0b3JhZ2UsIHB1cmdlIGl0XG4gICAgICAgICAgICBIZWxwZXIucHVyZ2VPbGRUb2tlbigpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IExpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gSW5pdGlhbGlzZSBMb2dpbiBsaXN0ZW5lclxuICAgICQoXCIjbG9naW5CdXR0b25cIikuY2xpY2soKCkgPT4ge1xuICAgICAgICBMaXN0ZW5lci5sb2dpbkxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFN0YXJ0IHVwIHRoZSBwb2xsZXJzLCBhcyB0aGlzIGxhbWJkYSB3aWxsIG9ubHkgYmUgY2FsbGVkIGlmXG4gICAgICAgICAgICAvLyB0aGUgbG9naW4gaXMgc3VjY2Vzc2Z1bFxuICAgICAgICAgICAgc3RhcnRBbGxQb2xsZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIFNldHVwIEFUUyBidXR0b24gbGlzdGVuZXJcbiAgICAkKFwiI2F0c0J1dHRvblwiKS5jbGljaygoKSA9PiB7XG4gICAgICAgIExpc3RlbmVyLmF0c0J1dHRvbkxpc3RlbmVyKCk7XG4gICAgfSk7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBUYWIgTGlzdGVuZXJzID09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAkKFwiI2hvbWVUYWJCdXR0b25cIikuY2xpY2soKCkgPT4ge1xuICAgICAgICBzaG93VGFiKFwiI21haW5cIik7XG4gICAgfSk7XG4gICAgJChcIiNjcm93ZFRhYkJ1dHRvblwiKS5jbGljaygoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ3Jvd2QgY2xpY2tlZFwiKTtcbiAgICAgICAgc2hvd1RhYihcIiNjcm93ZFRhYlwiKTtcbiAgICB9KTtcbn0pO1xuLyoqXG4gKiBTaG93cyBhIHNpbmdsZSB0YWIgYW5kIGhpZGVzIGFsbCBvdGhlciB0YWJzXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBzaW5nbGUgdGFiIHRvIHNob3dcbiAqL1xuZnVuY3Rpb24gc2hvd1RhYihuYW1lKSB7XG4gICAgY29uc3QgYWxsVGFiTmFtZXMgPSBbXCIjbWFpblwiLCBcIiNjcm93ZFRhYlwiXTtcbiAgICBmb3IgKGNvbnN0IHRhYk5hbWUgb2YgYWxsVGFiTmFtZXMpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IHRhYk5hbWUpIHtcbiAgICAgICAgICAgICQodGFiTmFtZSkuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJCh0YWJOYW1lKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9