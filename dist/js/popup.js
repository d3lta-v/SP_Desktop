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
// Initialisation for jQuery. This block runs when document is ready
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
    // $("#changeBackground").click(()=>{
    //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, {
    //       color: "#555555"
    //     },
    //     function(msg) {
    //       console.log("result message:", msg);
    //     });
    //   });
    // });
    // First things first, check if user is authenticated
    Helper.userIsAuthenticated(function (authenticated) {
        $("#loading").show();
        if (authenticated) {
            // User is logged in, show main UI and initialise pollers
            $("#main").show();
            $("#auth").hide();
            $("#loading").hide();
            startAllPollers();
        }
        else {
            // Not authenticated, display login UI only
            $("#main").hide();
            $("#auth").show();
            $("#loading").hide();
            // If the old login token still exists in storage, purge it
            Helper.purgeOldToken();
        }
    });
    // Initialise Login listener
    $("#loginButton").click(function () {
        Listener.loginListener(function () {
            // Start up the pollers, as this lambda will only be called if
            // the login is successful
            startAllPollers();
        });
    });
    // Setup ATS button listener
    $("#atsButton").click(function () {
        Listener.atsButtonListener();
    });
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdGVuZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1QkFBdUI7QUFDdkQ7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFDOUMsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdUNBQXVDLHlCQUF5QjtBQUNoRTtBQUNBLDJDQUEyQyw2QkFBNkI7QUFDeEUsS0FBSztBQUNMO0FBQ0EsNEJBQTRCLGtDQUFrQztBQUM5RDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1osVUFBVTtBQUNWLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwb3B1cFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9wb3B1cC50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIEdlbmVyYXRlcyBhbiBhdXRoZW50aWNhdGVkIHJlcXVlc3QgdXNpbmcgYW4gZXhpc3RpbmcgdG9rZW5cbiAqIEBwYXJhbSBtZXRob2QgVGhlIEhUVFAgbWV0aG9kIHRvIHVzZSBmb3IgdGhpcyByZXF1ZXN0XG4gKiBAcGFyYW0gdXJsIFRoZSBVUkwgdG8gdXNlIGZvciB0aGlzIHJlcXVlc3RcbiAqIEBwYXJhbSBhc3luYyBXaGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBkb25lIGFzeW5jaHJvbm91c2x5XG4gKiBAcGFyYW0gdG9rZW4gVGhlIHRva2VuIFdJVEhPVVQgdGhlIFwiQmVhcmVyIFwiIHByZWZpeFxuICovXG5mdW5jdGlvbiBhdXRoZW50aWNhdGVkUmVxdWVzdChtZXRob2QsIHVybCwgYXN5bmMsIHRva2VuKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHJlcXVlc3Qub3BlbihtZXRob2QsIHVybCwgYXN5bmMpO1xuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyB0b2tlbik7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG59XG5leHBvcnRzLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0ID0gYXV0aGVudGljYXRlZFJlcXVlc3Q7XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB0b2tlbiBzdG9yZWQgaW4gQ2hyb21lJ3Mgc3RvcmFnZSBpcyBhIHZhbGlkXG4gKiB0b2tlbiAoaS5lLiB0aGUgdXNlciBpcyBhbHJlYWR5IGF1dGhlbnRpY2F0ZWQpLlxuICogQHBhcmFtIGNhbGxiYWNrIEEgbGFtYmRhIHRoYXQgcmV0dXJucyB0aGUgYXV0aGVudGljYXRlZCBzdGF0ZSB0aHJvdWdoIGEgcGFyYW1ldGVyXG4gKiBAcGFyYW0gdG9rZW4gVGhlIHNlc3Npb24gdG9rZW4sIGlmIHRoZSB1c2VyIGlzIGluZGVlZCBhdXRoZW50aWNhdGVkLiBFbHNlLCBpdCByZXR1cm5zIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiB1c2VySXNBdXRoZW50aWNhdGVkKGNhbGxiYWNrKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwidXNlclwiLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIC8vIEZpcnN0IHJvdW5kOiBjaGVja2luZyBmb3IgZXhpc3RlbmNlIG9mIHRva2VuXG4gICAgICAgIGlmIChyZXN1bHQudXNlciAmJiByZXN1bHQudXNlci5hY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgLy8gU2Vjb25kIHJvdW5kOiB0b2tlbiB2YWxpZGl0eSBjaGVja2luZyB3aXRoIGEgc21hbGwgQVBJIGVuZHBvaW50XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXV0aGVudGljYXRlZFJlcXVlc3QoXCJQT1NUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS9hcGkvQ291bnRVbnJlYWRJdGVtXCIsIHRydWUsIHJlc3VsdC51c2VyLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRva2VuIGlzIHZhbGlkLCByZXR1cm4gY2FsbGJhY2sgd2l0aCB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUsIHJlc3VsdC51c2VyLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhmYWxzZSwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy51c2VySXNBdXRoZW50aWNhdGVkID0gdXNlcklzQXV0aGVudGljYXRlZDtcbi8qKlxuICogUmV0cmlldmVzIHRoZSB1c2VyJ3MgbG9naW4gdG9rZW4gb25seSBhbmQgZG9lcyBub3QgcGVyZm9ybSBmdXJ0aGVyIHZhbGlkYXRpb25cbiAqIEBwYXJhbSBjYWxsYmFjayBBIGxhbWJkYSB0aGF0IHJldHVybnMgdGhlIHVzZXIncyB0b2tlblxuICovXG5mdW5jdGlvbiBnZXRVc2VyVG9rZW4oY2FsbGJhY2spIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoXCJ1c2VyXCIsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC51c2VyICYmIHJlc3VsdC51c2VyLmFjY2Vzc1Rva2VuKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQudXNlci5hY2Nlc3NUb2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmdldFVzZXJUb2tlbiA9IGdldFVzZXJUb2tlbjtcbi8qKlxuICogUHVyZ2VzIHRoZSBvbGQgdXNlciB0b2tlbiBmcm9tIENocm9tZSdzIGludGVybmFsIHN0b3JhZ2VcbiAqL1xuZnVuY3Rpb24gcHVyZ2VPbGRUb2tlbigpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoXCJ1c2VyXCIpO1xufVxuZXhwb3J0cy5wdXJnZU9sZFRva2VuID0gcHVyZ2VPbGRUb2tlbjtcbi8qKlxuICogRXh0cmVtZWx5IGZhc3QgYW5kIG5vbi1jcnlwdG9ncmFwaGljYWxseSBzZWN1cmUgaGFzaCBmdW5jdGlvblxuICogVXNlZCB0byBjcmVhdGUgc2hvcnQgYW5kIHN3ZWV0IGhhc2hlcyBmb3IgdW5pcXVlbHkgSURcImluZyBzdHJpbmdzXG4gKiBCYXNlZCByb3VnaGx5IG9uIHRoZSBKYXZhIFN0cmluZy5oYXNoQ29kZSgpIGZ1bmN0aW9uXG4gKiBAcGFyYW0gaW5wdXQgSW5wdXQgc3RyaW5nIHRvIGhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaChpbnB1dCkge1xuICAgIGxldCBoYXNoUmVzdWx0ID0gMDtcbiAgICBsZXQgaTtcbiAgICBsZXQgY2hyO1xuICAgIGlmIChpbnB1dC5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiBoYXNoUmVzdWx0O1xuICAgIGZvciAoaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjaHIgPSBpbnB1dC5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoUmVzdWx0ID0gKChoYXNoUmVzdWx0IDw8IDUpIC0gaGFzaFJlc3VsdCkgKyBjaHI7XG4gICAgICAgIGhhc2hSZXN1bHQgfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gICAgfVxuICAgIHJldHVybiBoYXNoUmVzdWx0O1xufVxuZXhwb3J0cy5oYXNoID0gaGFzaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgU1AgPSByZXF1aXJlKFwiLi9kYXRhdHlwZXNcIik7XG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbi8qKlxuICogSG9va3MgdXAgdG8gYSAuY2xpY2soKSBsaXN0ZW5lciBmb3IgdGhlIGxvZ2luIGV2ZW50XG4gKiBAcGFyYW0gc3RhcnRQb2xsZXJzIEEgY2FsbGJhY2sgZm9yIHRoZSBtYWluIHBvcHVwLnRzIHRvIGluaXRpYWxpc2UgcmVjdXJyaW5nIGV2ZW50cyAoaS5lLiBwb2xsZXJzKVxuICovXG5mdW5jdGlvbiBsb2dpbkxpc3RlbmVyKHN0YXJ0UG9sbGVycykge1xuICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMb2dpbiBjbGlja2VkXCIpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS90b2tlblwiLCB0cnVlKTtcbiAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gb2xkIGNvZGU6IHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAvLyBTYXZlIG5hbWUgYW5kIHRva2VuIGludG8gQ2hyb21lIHN0b3JhZ2VcbiAgICAgICAgICAgIGlmIChTUC5Vc2VyLmlzVmFsaWQodGhpcy5yZXNwb25zZVRleHQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IFNQLlVzZXIuZnJvbUpTT04odGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHVzZXIgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTG9naW4gc3VjY2VlZGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSB1c2VybmFtZSBhbmQgcGFzc3dvcmRzXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJChcIiNwYXNzd29yZFwiKS52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAkKFwiI3VzZXJuYW1lXCIpLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogU2F2ZWQgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGZvciBmdXR1cmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIHRoZSBsb2dpbiBkaWFsb2cgYW5kIHNob3cgdGhlIG1haW4gVUlcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYXV0aFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI21haW5cIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgcG9sbGVycyBieSBjYWxsaW5nIGJhY2sgdGhlIG1haW4gZmlsZSAocG9wdXAudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFBvbGxlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IGVycm9yXG4gICAgICAgICAgICAgICAgJChcIiNhdXRoRXJyb3JcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoXCIjYXV0aEVycm9yXCIpLnRleHQoU1AuRVJST1JfQVVUSF9JTlZBTElEX0pTT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTG9naW4gZmFpbGVkIGluIHNvbWUgd2F5XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTG9naW4gZmFpbGVkOiBcIik7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIC8vIEVycm9yIGNvZGUgXCIyXCIgbWVhbnMgbG9naW4gZmFpbGVkXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZU9iamVjdCA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlT2JqZWN0LmVycm9yID09PSBcIjJcIikgeyAvLyBOT1RFOiBUSElTIElTIEEgU1RSSU5HIVxuICAgICAgICAgICAgICAgICQoXCIjYXV0aEVycm9yXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKFwiI2F1dGhFcnJvclwiKS50ZXh0KFNQLkVSUk9SX0FVVEhfSU5WQUxJRF9QQVNTV09SRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICAvLyBDb25zdHJ1Y3QgZmluYWwgcGF5bG9hZFxuICAgIGNvbnN0IHBheWxvYWQgPSBcImdyYW50X3R5cGU9cGFzc3dvcmRcIiArXG4gICAgICAgIFwiJnVzZXJuYW1lPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCQoXCIjdXNlcm5hbWVcIikudmFsKCkpICtcbiAgICAgICAgXCImcGFzc3dvcmQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoJChcIiNwYXNzd29yZFwiKS52YWwoKSkgK1xuICAgICAgICBcIiZkZXZpY2VUb2tlbj1heXlcIjtcbiAgICByZXF1ZXN0LnNlbmQocGF5bG9hZCk7XG59XG5leHBvcnRzLmxvZ2luTGlzdGVuZXIgPSBsb2dpbkxpc3RlbmVyO1xuZnVuY3Rpb24gYXRzQnV0dG9uTGlzdGVuZXIoKSB7XG4gICAgLy8gQ2FsbCBiYWNrZ3JvdW5kLnRzIHRvIHBvc3QgZGF0YVxuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogXCJhdHMtbGlzdGVuZXJcIiB9KTtcbn1cbmV4cG9ydHMuYXRzQnV0dG9uTGlzdGVuZXIgPSBhdHNCdXR0b25MaXN0ZW5lcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcbmNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuY29uc3QgU1AgPSByZXF1aXJlKFwiLi9kYXRhdHlwZXNcIik7XG5jb25zdCBMaXN0ZW5lciA9IHJlcXVpcmUoXCIuL2xpc3RlbmVyc1wiKTtcbmNvbnN0IEhlbHBlciA9IHJlcXVpcmUoXCIuL2hlbHBlclwiKTtcbmxldCBjb3VudCA9IDA7XG5mdW5jdGlvbiBzdGFydEFsbFBvbGxlcnMoKSB7XG4gICAgY2xvY2tQb2xsKCk7IC8vIHRoaXMgZG9lcyBub3QgdXNlIGludGVydmFsIGFzIGl0IGlzIHRpbWUgc2Vuc2l0aXZlXG4gICAgY2FsZW5kYXJQb2xsKCk7XG4gICAgdGltZXRhYmxlUG9sbCgpO1xuICAgIHNwV2lmaVBvbGwoKTtcbiAgICBzZXRJbnRlcnZhbChjYWxlbmRhclBvbGwsIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSBjYWxlbmRhciBwb2xsaW5nXG4gICAgc2V0SW50ZXJ2YWwodGltZXRhYmxlUG9sbCwgMTAwMCAqIDYwICogNSk7IC8vIDUgbWludXRlIHRpbWV0YWJsZSBwb2xsaW5nXG4gICAgc2V0SW50ZXJ2YWwoc3BXaWZpUG9sbCwgMTAwMCAqIDYwICogNSk7IC8vIDUgbWludXRlIHdpZmkgcG9sbGluZ1xufVxuLy8jcmVnaW9uIFBvbGxlcnNcbmZ1bmN0aW9uIGNsb2NrUG9sbCgpIHtcbiAgICAkKFwiI3RpbWVcIikudGV4dChtb21lbnQoKS5mb3JtYXQoXCJISDptbTpzc1wiKSk7XG4gICAgc2V0VGltZW91dChjbG9ja1BvbGwsIDEwMDApOyAvLyAxIHNlY29uZCBwb2xsaW5nXG59XG4vKipcbiAqIFJldHJpZXZlcyBkYXRhIGZyb20gdGhlIFNQIENhbGVuZGFyIEFQSSBhbmQgZGlzcGxheXMgaXRcbiAqL1xuZnVuY3Rpb24gY2FsZW5kYXJQb2xsKCkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIC8vIEdldCBhbGwgb2JqZWN0c1xuICAgICAgICAgICAgY29uc3QgYWxsQ2FsZW5kYXJFbnRyaWVzID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zdCByZWxldmFudEVudHJpZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgYWxsQ2FsZW5kYXJFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gRGF0ZS5wYXJzZShlbnRyeS5zdGFydFRpbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZERhdGUgPSBEYXRlLnBhcnNlKGVudHJ5LmVuZFRpbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPiBzdGFydERhdGUgJiYgY3VycmVudERhdGUgPCBlbmREYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgc3RhdHVzXG4gICAgICAgICAgICBpZiAocmVsZXZhbnRFbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgc2Nob29sU3RhdGVTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nICs9IFwiLCBcIjtcbiAgICAgICAgICAgICAgICAgICAgc2Nob29sU3RhdGVTdHJpbmcgKz0gZWxlbWVudC5zdW1tYXJ5O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nID0gc2Nob29sU3RhdGVTdHJpbmcuc3Vic3RyKDIsIHNjaG9vbFN0YXRlU3RyaW5nLmxlbmd0aCk7IC8vIFJlbW92ZSB0aGUgZmlyc3QgMiBjaGFyYWN0ZXJzXG4gICAgICAgICAgICAgICAgJChcIiNjdXJyZW50U3RhdHVzXCIpLnRleHQoc2Nob29sU3RhdGVTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNjdXJyZW50U3RhdHVzXCIpLnRleHQoXCJObyBTY2hvb2wgRXZlbnRzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlcGVhdCByZXF1ZXN0IG9uY2UgaXQgaXMgbG9hZGVkIG9yIHVuc3VjY2Vzc2Z1bGx5IGxvYWRlZFxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTG9hZGVkIFNQIENhbGVuZGFyXCIpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS9hcGkvR2V0QWNhZENhbGVuZGFyXCIsIHRydWUpO1xuICAgIHJlcXVlc3Quc2VuZCgpO1xufVxuLyoqXG4gKiBHZXRzIHRoZSB0aW1ldGFibGUgZm9yIHRvZGF5IGFuZCBjaGVja3MgaWYgdGhlIHVzZXIgaXMgYXR0ZW5kaW5nIGEgbGVzc29uXG4gKi9cbmZ1bmN0aW9uIHRpbWV0YWJsZVBvbGwoKSB7XG4gICAgSGVscGVyLnVzZXJJc0F1dGhlbnRpY2F0ZWQoZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQsIHRva2VuKSB7XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGVkICYmIHRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZVN0cmluZyA9IG1vbWVudCgpLmZvcm1hdChcIkRETU1ZWVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddIFJlcXVlc3RlZCBmb3IgdGltZXRhYmxlIHdpdGggZGF0ZTogXCIgKyBjdXJyZW50RGF0ZVN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gSGVscGVyLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiR0VUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS9hcGkvR2V0U3R1ZGVudFRpbWV0YWJsZUJ5SWRBbmREYXRlL1wiICtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZVN0cmluZywgdHJ1ZSwgdG9rZW4pO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IFJlcXVlc3RlZCBmb3IgdGltZXRhYmxlIHdpdGggcmV0dXJuZWQgZGF0YTpcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNwb25zZVRleHQgPT09IFNQLlRJTUVUQUJMRV9OT19MRVNTT05TKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBObyBsZXNzb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2N1cnJlbnRMZXNzb25cIikudGV4dChcIk5vIExlc3NvbnNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uQXJyYXkgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIEk6IFZhbGlkYXRlIGFsbCB0aW1ldGFibGUgZW50cmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZXRhYmxlRW50cmllcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeVN0cmluZyBvZiBqc29uQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gSlNPTi5zdHJpbmdpZnkoZW50cnlTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5VmFsaWQgPSBTUC5UaW1ldGFibGVFbnRyeS5pc1ZhbGlkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeVZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gU1AuVGltZXRhYmxlRW50cnkuZnJvbUpTT04oZWxlbWVudCwgY3VycmVudERhdGVTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSTogSW5zZXJ0IGFsbCBlbnRyaWVzIGludG8gYXJyYXkgd2hlcmUgaXQgaXMgY3VycmVudGx5IGhhcHBlbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuZ2V0U3RhcnREYXRlVGltZSgpIDwgY3VycmVudERhdGVUaW1lICYmIGVudHJ5LmdldEVuZERhdGVUaW1lKCkgPiBjdXJyZW50RGF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWV0YWJsZUVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTGVzc29uIGN1cnJlbnRseSBydW5uaW5nOiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMZXNzb24gbm90IHJ1bm5pbmc6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbV0FSTklOR106IFRpbWV0YWJsZSBlbnRyeSBpcyBpbnZhbGlkOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIElJSTogRGlzcGxheSBjdXJyZW50IGxlc3NvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWV0YWJsZUVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjY3VycmVudExlc3NvblwiKS50ZXh0KHRpbWV0YWJsZUVudHJpZXNbMF0uZ2V0QWJicmV2aWF0aW9uKCkgKyBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWV0YWJsZUVudHJpZXNbMF0uZ2V0VHlwZVN0cmluZygpICsgXCIgQCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWV0YWJsZUVudHJpZXNbMF0uZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2N1cnJlbnRMZXNzb25cIikudGV4dChcIk5vIExlc3NvbiBDdXJyZW50bHlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltXQVJOSU5HXTogRmFpbGVkIHRvIGxvYWQgdGltZXRhYmxlOiBcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltFUlJPUl06IFRva2VuIGludmFsaWQsIGZvdW5kIGR1cmluZyB0aW1ldGFibGUgcmV0cmlldmFsIVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHVzZXIgaXMgY29ubmVjdGVkIHRvIFNQIFdpLUZpIGFuZCBkaXNwbGF5cyB0aGUgY29ubmVjdGl2aXR5IHN0YXR1c1xuICovXG5mdW5jdGlvbiBzcFdpZmlQb2xsKCkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgcmVxdWVzdCBhY3R1YWxseSBnZXRzIHRoZSByZWFsIEFUUyBwYWdlXG4gICAgICAgICAgICBjb25uZWN0ZWQgPSB0aGlzLnJlc3BvbnNlVVJMLnN0YXJ0c1dpdGgoXCJodHRwczovL215YXRzLnNwLmVkdS5zZ1wiKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEaXNwbGF5IGNvbm5lY3RlZCBzdGF0ZVxuICAgICAgICBpZiAoY29ubmVjdGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogQ29ubmVjdGVkIHRvIFNQIHdpZmlcIik7XG4gICAgICAgICAgICAkKFwiI3dpZmlDb25uZWN0ZWRUZXh0XCIpLnRleHQoXCJDb25uZWN0ZWQgdG8gU1AgV2ktRmlcIik7XG4gICAgICAgICAgICAkKFwiI3dpZmlMb2dvXCIpLmNzcyhcImNvbG9yXCIsIFwiIzMzQzNGMFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBOb3QgY29ubmVjdGVkIHRvIFNQIHdpZmlcIik7XG4gICAgICAgICAgICAkKFwiI3dpZmlDb25uZWN0ZWRUZXh0XCIpLnRleHQoXCJOb3QgY29ubmVjdGVkIHRvIFNQIFdpLUZpXCIpO1xuICAgICAgICAgICAgJChcIiN3aWZpTG9nb1wiKS5jc3MoXCJjb2xvclwiLCBcIiNiYmJcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBTUC5VUkxfQVRTLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcbn1cbi8vI2VuZHJlZ2lvbiBQb2xsZXJzXG4vLyBJbml0aWFsaXNhdGlvbiBmb3IgalF1ZXJ5LiBUaGlzIGJsb2NrIHJ1bnMgd2hlbiBkb2N1bWVudCBpcyByZWFkeVxuJChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcXVlcnlJbmZvID0ge1xuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIGN1cnJlbnRXaW5kb3c6IHRydWUsXG4gICAgfTtcbiAgICBjaHJvbWUudGFicy5xdWVyeShxdWVyeUluZm8sIGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgICAgIC8vICQoXCIjdXJsXCIpLnRleHQodGFic1swXS51cmwpO1xuICAgICAgICAkKFwiI3RpbWVcIikudGV4dChtb21lbnQoKS5mb3JtYXQoXCJISDptbTpzc1wiKSk7XG4gICAgfSk7XG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogY291bnQudG9TdHJpbmcoKSB9KTtcbiAgICAkKFwiI2NvdW50VXBcIikuY2xpY2soKCkgPT4ge1xuICAgICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiAoKytjb3VudCkudG9TdHJpbmcoKSB9KTtcbiAgICB9KTtcbiAgICAvLyAkKFwiI2NoYW5nZUJhY2tncm91bmRcIikuY2xpY2soKCk9PntcbiAgICAvLyAgIGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWV9LCBmdW5jdGlvbih0YWJzKSB7XG4gICAgLy8gICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYnNbMF0uaWQsIHtcbiAgICAvLyAgICAgICBjb2xvcjogXCIjNTU1NTU1XCJcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgZnVuY3Rpb24obXNnKSB7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgbWVzc2FnZTpcIiwgbXNnKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgICAvLyBGaXJzdCB0aGluZ3MgZmlyc3QsIGNoZWNrIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZFxuICAgIEhlbHBlci51c2VySXNBdXRoZW50aWNhdGVkKGZ1bmN0aW9uIChhdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICQoXCIjbG9hZGluZ1wiKS5zaG93KCk7XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICAvLyBVc2VyIGlzIGxvZ2dlZCBpbiwgc2hvdyBtYWluIFVJIGFuZCBpbml0aWFsaXNlIHBvbGxlcnNcbiAgICAgICAgICAgICQoXCIjbWFpblwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiI2F1dGhcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiNsb2FkaW5nXCIpLmhpZGUoKTtcbiAgICAgICAgICAgIHN0YXJ0QWxsUG9sbGVycygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTm90IGF1dGhlbnRpY2F0ZWQsIGRpc3BsYXkgbG9naW4gVUkgb25seVxuICAgICAgICAgICAgJChcIiNtYWluXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjYXV0aFwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiI2xvYWRpbmdcIikuaGlkZSgpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIG9sZCBsb2dpbiB0b2tlbiBzdGlsbCBleGlzdHMgaW4gc3RvcmFnZSwgcHVyZ2UgaXRcbiAgICAgICAgICAgIEhlbHBlci5wdXJnZU9sZFRva2VuKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBJbml0aWFsaXNlIExvZ2luIGxpc3RlbmVyXG4gICAgJChcIiNsb2dpbkJ1dHRvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIExpc3RlbmVyLmxvZ2luTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gU3RhcnQgdXAgdGhlIHBvbGxlcnMsIGFzIHRoaXMgbGFtYmRhIHdpbGwgb25seSBiZSBjYWxsZWQgaWZcbiAgICAgICAgICAgIC8vIHRoZSBsb2dpbiBpcyBzdWNjZXNzZnVsXG4gICAgICAgICAgICBzdGFydEFsbFBvbGxlcnMoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gU2V0dXAgQVRTIGJ1dHRvbiBsaXN0ZW5lclxuICAgICQoXCIjYXRzQnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTGlzdGVuZXIuYXRzQnV0dG9uTGlzdGVuZXIoKTtcbiAgICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==