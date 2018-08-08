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
    let request = new XMLHttpRequest();
    request.open(method, url, async);
    request.setRequestHeader('Authorization', 'Bearer ' + token);
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
    chrome.storage.local.get('user', function (result) {
        // First round: checking for existence of token
        if (result['user'] && result['user']['accessToken']) {
            // Second round: token validity checking with a small API endpoint
            let request = authenticatedRequest("POST", "https://mobileapps.sp.edu.sg/SPMobileAPI/api/CountUnreadItem", true, result['user']['accessToken']);
            request.onloadend = function () {
                if (this.status == 200) {
                    // Token is valid, return callback with true
                    callback(true, result['user']['accessToken']);
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
    chrome.storage.local.get('user', function (result) {
        if (result['user'] && result['user']['accessToken']) {
            callback(result['user']['accessToken']);
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
    chrome.storage.local.remove('user');
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
    let request = new XMLHttpRequest();
    request.open("POST", "https://mobileapps.sp.edu.sg/SPMobileAPI/token", true);
    request.onloadend = function () {
        //old code: this.readyState == 4 && 
        if (this.status == 200) {
            // Save name and token into Chrome storage
            if (SP.User.isValid(this.responseText)) {
                let user = SP.User.fromJSON(this.responseText);
                chrome.storage.local.set({ 'user': user }, () => {
                    console.debug("[DEBUG]: Login succeeded");
                    // Save the username and passwords
                    chrome.storage.local.set({ 'username': $('#username').val(),
                        'password': $('#password').val() }, () => {
                        console.debug("[DEBUG]: Saved username and password for future");
                        // Hide the login dialog and show the main UI
                        $('#auth').hide();
                        $('#main').show();
                        // Start pollers by calling back the main file (popup.ts)
                        startPollers();
                    });
                });
            }
            else {
                // Display error
                $('#authError').show();
                $('#authError').text(SP.ERROR_AUTH_INVALID_JSON);
            }
        }
        else {
            // Login failed in some way
            console.debug("[DEBUG]: Login failed: ");
            console.debug(this.responseText);
            // Error code "2" means login failed
            let responseObject = JSON.parse(this.responseText);
            if (responseObject["error"] === "2") { //NOTE: THIS IS A STRING!
                $('#authError').show();
                $('#authError').text(SP.ERROR_AUTH_INVALID_PASSWORD);
            }
        }
    };
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // Construct final payload
    let payload = "grant_type=password" +
        "&username=" + encodeURIComponent($('#username').val()) +
        "&password=" + encodeURIComponent($('#password').val()) +
        "&deviceToken=ayy";
    request.send(payload);
}
exports.loginListener = loginListener;
function atsButtonListener() {
    chrome.storage.local.get(['username', 'password'], function (result) {
        if (result['username'] && result['password']) {
            // postData(SP.URL_ATS_LOGIN, { 'timezoneOffset': -480, 'userid': result['username'], 'password': result['password'] });
        }
        else {
            // callback(undefined);
            chrome.tabs.create({ url: SP.URL_ATS });
            // TODO: Log user out by deleting token, username and password
        }
    });
}
exports.atsButtonListener = atsButtonListener;
function postData(url, data) {
    chrome.tabs.create({ url: chrome.runtime.getURL("ats_popup.html") }, function (tab) {
        var handler = function (tabId, changeInfo) {
            if (tabId === tab.id && changeInfo.status === "complete") {
                chrome.tabs.onUpdated.removeListener(handler);
                chrome.tabs.sendMessage(tabId, { url: url, data: data });
            }
        };
        // in case we're faster than page load (usually):
        chrome.tabs.onUpdated.addListener(handler);
        // just in case we're too late with the listener:
        if (tab.id) {
            chrome.tabs.sendMessage(tab.id, { url: url, data: data });
        }
        else {
            console.error("[ERROR]: Tab ID is null!");
        }
    });
}


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
    $('#time').text(moment().format('HH:mm:ss'));
    setTimeout(clockPoll, 1000); // 1 second polling
}
function calendarPoll() {
    // Get SP Academic Calendar and read from JSON
    let request = new XMLHttpRequest();
    request.onloadend = function () {
        if (this.status == 200) {
            // Get all objects 
            let allCalendarEntries = JSON.parse(this.responseText);
            let relevantEntries = [];
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
                let schoolStateString = "";
                relevantEntries.forEach(element => {
                    schoolStateString += ", ";
                    schoolStateString += element.summary;
                });
                schoolStateString = schoolStateString.substr(2, schoolStateString.length); // Remove the first 2 characters
                $('#currentStatus').text(schoolStateString);
            }
            else {
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
            let request = Helper.authenticatedRequest("GET", "https://mobileapps.sp.edu.sg/SPMobileAPI/api/GetStudentTimetableByIdAndDate/" +
                currentDateString, true, token);
            request.onloadend = function () {
                if (this.status == 200) {
                    console.debug("[DEBUG]: Requested for timetable with returned data:");
                    console.debug(this.responseText);
                    if (this.responseText == SP.TIMETABLE_NO_LESSONS) {
                        // No lessons
                        $('#currentLesson').text("No Lessons");
                    }
                    else {
                        let jsonArray = JSON.parse(this.responseText);
                        // Stage I: Validate all timetable entries
                        let timetableEntries = [];
                        for (let i = 0; i < jsonArray.length; i++) {
                            const element = JSON.stringify(jsonArray[i]);
                            let entryValid = SP.TimetableEntry.isValid(element);
                            if (entryValid) {
                                let entry = SP.TimetableEntry.fromJSON(element, currentDateString);
                                // Stage II: Insert all entries into array where it is currently happening
                                let currentDateTime = new Date();
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
                            $('#currentLesson').text(timetableEntries[0].getAbbreviation() + " " +
                                timetableEntries[0].getTypeString() + " @ " +
                                timetableEntries[0].getLocation());
                        }
                        else {
                            $('#currentLesson').text("No Lesson Currently");
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
 * Checks if the user is connected to SP Wi-Fi
 */
function spWifiPoll() {
    let request = new XMLHttpRequest();
    request.onloadend = function () {
        let connected = false;
        if (this.status == 200) {
            // Check if request actually gets the real ATS page
            if (this.responseURL.startsWith("https://myats.sp.edu.sg")) {
                connected = true;
            }
            else {
                // Else, Wi-Fi is considered to be not connected
                connected = false;
            }
        }
        // Display connected state
        if (connected) {
            console.debug("[DEBUG]: Connected to SP wifi");
            $('#wifiConnectedText').text("Connected to SP Wi-Fi");
            $('#wifiLogo').css('color', '#33C3F0');
        }
        else {
            console.debug("[DEBUG]: Not connected to SP wifi");
            $('#wifiConnectedText').text("Not connected to SP Wi-Fi");
            $('#wifiLogo').css('color', '#bbb');
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
        }
        else {
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdGVuZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFDQSw4Q0FBOEMs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdUNBQXVDLHlCQUF5QjtBQUNoRTtBQUNBLDJDQUEyQyw2QkFBNkI7QUFDeEUsS0FBSztBQUNMO0FBQ0EsNEJBQTRCLGtDQUFrQztBQUM5RDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1osVUFBVTtBQUNWLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwb3B1cFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9wb3B1cC50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIEdlbmVyYXRlcyBhbiBhdXRoZW50aWNhdGVkIHJlcXVlc3QgdXNpbmcgYW4gZXhpc3RpbmcgdG9rZW5cbiAqIEBwYXJhbSBtZXRob2QgVGhlIEhUVFAgbWV0aG9kIHRvIHVzZSBmb3IgdGhpcyByZXF1ZXN0XG4gKiBAcGFyYW0gdXJsIFRoZSBVUkwgdG8gdXNlIGZvciB0aGlzIHJlcXVlc3RcbiAqIEBwYXJhbSBhc3luYyBXaGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBkb25lIGFzeW5jaHJvbm91c2x5XG4gKiBAcGFyYW0gdG9rZW4gVGhlIHRva2VuIFdJVEhPVVQgdGhlIFwiQmVhcmVyIFwiIHByZWZpeFxuICovXG5mdW5jdGlvbiBhdXRoZW50aWNhdGVkUmVxdWVzdChtZXRob2QsIHVybCwgYXN5bmMsIHRva2VuKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIGFzeW5jKTtcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG59XG5leHBvcnRzLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0ID0gYXV0aGVudGljYXRlZFJlcXVlc3Q7XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB0b2tlbiBzdG9yZWQgaW4gQ2hyb21lJ3Mgc3RvcmFnZSBpcyBhIHZhbGlkXG4gKiB0b2tlbiAoaS5lLiB0aGUgdXNlciBpcyBhbHJlYWR5IGF1dGhlbnRpY2F0ZWQpLlxuICogQHBhcmFtIGNhbGxiYWNrIEEgbGFtYmRhIHRoYXQgcmV0dXJucyB0aGUgYXV0aGVudGljYXRlZCBzdGF0ZSB0aHJvdWdoIGEgcGFyYW1ldGVyXG4gKiBAcGFyYW0gdG9rZW4gVGhlIHNlc3Npb24gdG9rZW4sIGlmIHRoZSB1c2VyIGlzIGluZGVlZCBhdXRoZW50aWNhdGVkLiBFbHNlLCBpdCByZXR1cm5zIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiB1c2VySXNBdXRoZW50aWNhdGVkKGNhbGxiYWNrKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCd1c2VyJywgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAvLyBGaXJzdCByb3VuZDogY2hlY2tpbmcgZm9yIGV4aXN0ZW5jZSBvZiB0b2tlblxuICAgICAgICBpZiAocmVzdWx0Wyd1c2VyJ10gJiYgcmVzdWx0Wyd1c2VyJ11bJ2FjY2Vzc1Rva2VuJ10pIHtcbiAgICAgICAgICAgIC8vIFNlY29uZCByb3VuZDogdG9rZW4gdmFsaWRpdHkgY2hlY2tpbmcgd2l0aCBhIHNtYWxsIEFQSSBlbmRwb2ludFxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBhdXRoZW50aWNhdGVkUmVxdWVzdChcIlBPU1RcIiwgXCJodHRwczovL21vYmlsZWFwcHMuc3AuZWR1LnNnL1NQTW9iaWxlQVBJL2FwaS9Db3VudFVucmVhZEl0ZW1cIiwgdHJ1ZSwgcmVzdWx0Wyd1c2VyJ11bJ2FjY2Vzc1Rva2VuJ10pO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUb2tlbiBpcyB2YWxpZCwgcmV0dXJuIGNhbGxiYWNrIHdpdGggdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLCByZXN1bHRbJ3VzZXInXVsnYWNjZXNzVG9rZW4nXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudXNlcklzQXV0aGVudGljYXRlZCA9IHVzZXJJc0F1dGhlbnRpY2F0ZWQ7XG4vKipcbiAqIFJldHJpZXZlcyB0aGUgdXNlcidzIGxvZ2luIHRva2VuIG9ubHkgYW5kIGRvZXMgbm90IHBlcmZvcm0gZnVydGhlciB2YWxpZGF0aW9uXG4gKiBAcGFyYW0gY2FsbGJhY2sgQSBsYW1iZGEgdGhhdCByZXR1cm5zIHRoZSB1c2VyJ3MgdG9rZW5cbiAqL1xuZnVuY3Rpb24gZ2V0VXNlclRva2VuKGNhbGxiYWNrKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCd1c2VyJywgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0Wyd1c2VyJ10gJiYgcmVzdWx0Wyd1c2VyJ11bJ2FjY2Vzc1Rva2VuJ10pIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdFsndXNlciddWydhY2Nlc3NUb2tlbiddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZ2V0VXNlclRva2VuID0gZ2V0VXNlclRva2VuO1xuLyoqXG4gKiBQdXJnZXMgdGhlIG9sZCB1c2VyIHRva2VuIGZyb20gQ2hyb21lJ3MgaW50ZXJuYWwgc3RvcmFnZVxuICovXG5mdW5jdGlvbiBwdXJnZU9sZFRva2VuKCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZSgndXNlcicpO1xufVxuZXhwb3J0cy5wdXJnZU9sZFRva2VuID0gcHVyZ2VPbGRUb2tlbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgU1AgPSByZXF1aXJlKFwiLi9kYXRhdHlwZXNcIik7XG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbi8qKlxuICogSG9va3MgdXAgdG8gYSAuY2xpY2soKSBsaXN0ZW5lciBmb3IgdGhlIGxvZ2luIGV2ZW50XG4gKiBAcGFyYW0gc3RhcnRQb2xsZXJzIEEgY2FsbGJhY2sgZm9yIHRoZSBtYWluIHBvcHVwLnRzIHRvIGluaXRpYWxpc2UgcmVjdXJyaW5nIGV2ZW50cyAoaS5lLiBwb2xsZXJzKVxuICovXG5mdW5jdGlvbiBsb2dpbkxpc3RlbmVyKHN0YXJ0UG9sbGVycykge1xuICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMb2dpbiBjbGlja2VkXCIpO1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vcGVuKFwiUE9TVFwiLCBcImh0dHBzOi8vbW9iaWxlYXBwcy5zcC5lZHUuc2cvU1BNb2JpbGVBUEkvdG9rZW5cIiwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vb2xkIGNvZGU6IHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIFxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAvLyBTYXZlIG5hbWUgYW5kIHRva2VuIGludG8gQ2hyb21lIHN0b3JhZ2VcbiAgICAgICAgICAgIGlmIChTUC5Vc2VyLmlzVmFsaWQodGhpcy5yZXNwb25zZVRleHQpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBTUC5Vc2VyLmZyb21KU09OKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyAndXNlcic6IHVzZXIgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTG9naW4gc3VjY2VlZGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSB1c2VybmFtZSBhbmQgcGFzc3dvcmRzXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7ICd1c2VybmFtZSc6ICQoJyN1c2VybmFtZScpLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJzogJCgnI3Bhc3N3b3JkJykudmFsKCkgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IFNhdmVkIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBmb3IgZnV0dXJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGlkZSB0aGUgbG9naW4gZGlhbG9nIGFuZCBzaG93IHRoZSBtYWluIFVJXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjYXV0aCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNtYWluJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgcG9sbGVycyBieSBjYWxsaW5nIGJhY2sgdGhlIG1haW4gZmlsZSAocG9wdXAudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFBvbGxlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IGVycm9yXG4gICAgICAgICAgICAgICAgJCgnI2F1dGhFcnJvcicpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKCcjYXV0aEVycm9yJykudGV4dChTUC5FUlJPUl9BVVRIX0lOVkFMSURfSlNPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBMb2dpbiBmYWlsZWQgaW4gc29tZSB3YXlcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMb2dpbiBmYWlsZWQ6IFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgLy8gRXJyb3IgY29kZSBcIjJcIiBtZWFucyBsb2dpbiBmYWlsZWRcbiAgICAgICAgICAgIGxldCByZXNwb25zZU9iamVjdCA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlT2JqZWN0W1wiZXJyb3JcIl0gPT09IFwiMlwiKSB7IC8vTk9URTogVEhJUyBJUyBBIFNUUklORyFcbiAgICAgICAgICAgICAgICAkKCcjYXV0aEVycm9yJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoJyNhdXRoRXJyb3InKS50ZXh0KFNQLkVSUk9SX0FVVEhfSU5WQUxJRF9QQVNTV09SRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIC8vIENvbnN0cnVjdCBmaW5hbCBwYXlsb2FkXG4gICAgbGV0IHBheWxvYWQgPSBcImdyYW50X3R5cGU9cGFzc3dvcmRcIiArXG4gICAgICAgIFwiJnVzZXJuYW1lPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCQoJyN1c2VybmFtZScpLnZhbCgpKSArXG4gICAgICAgIFwiJnBhc3N3b3JkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCQoJyNwYXNzd29yZCcpLnZhbCgpKSArXG4gICAgICAgIFwiJmRldmljZVRva2VuPWF5eVwiO1xuICAgIHJlcXVlc3Quc2VuZChwYXlsb2FkKTtcbn1cbmV4cG9ydHMubG9naW5MaXN0ZW5lciA9IGxvZ2luTGlzdGVuZXI7XG5mdW5jdGlvbiBhdHNCdXR0b25MaXN0ZW5lcigpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWyd1c2VybmFtZScsICdwYXNzd29yZCddLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHRbJ3VzZXJuYW1lJ10gJiYgcmVzdWx0WydwYXNzd29yZCddKSB7XG4gICAgICAgICAgICAvLyBwb3N0RGF0YShTUC5VUkxfQVRTX0xPR0lOLCB7ICd0aW1lem9uZU9mZnNldCc6IC00ODAsICd1c2VyaWQnOiByZXN1bHRbJ3VzZXJuYW1lJ10sICdwYXNzd29yZCc6IHJlc3VsdFsncGFzc3dvcmQnXSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNhbGxiYWNrKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBjaHJvbWUudGFicy5jcmVhdGUoeyB1cmw6IFNQLlVSTF9BVFMgfSk7XG4gICAgICAgICAgICAvLyBUT0RPOiBMb2cgdXNlciBvdXQgYnkgZGVsZXRpbmcgdG9rZW4sIHVzZXJuYW1lIGFuZCBwYXNzd29yZFxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmF0c0J1dHRvbkxpc3RlbmVyID0gYXRzQnV0dG9uTGlzdGVuZXI7XG5mdW5jdGlvbiBwb3N0RGF0YSh1cmwsIGRhdGEpIHtcbiAgICBjaHJvbWUudGFicy5jcmVhdGUoeyB1cmw6IGNocm9tZS5ydW50aW1lLmdldFVSTChcImF0c19wb3B1cC5odG1sXCIpIH0sIGZ1bmN0aW9uICh0YWIpIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAodGFiSWQsIGNoYW5nZUluZm8pIHtcbiAgICAgICAgICAgIGlmICh0YWJJZCA9PT0gdGFiLmlkICYmIGNoYW5nZUluZm8uc3RhdHVzID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgICAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQucmVtb3ZlTGlzdGVuZXIoaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgdXJsOiB1cmwsIGRhdGE6IGRhdGEgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGluIGNhc2Ugd2UncmUgZmFzdGVyIHRoYW4gcGFnZSBsb2FkICh1c3VhbGx5KTpcbiAgICAgICAgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKGhhbmRsZXIpO1xuICAgICAgICAvLyBqdXN0IGluIGNhc2Ugd2UncmUgdG9vIGxhdGUgd2l0aCB0aGUgbGlzdGVuZXI6XG4gICAgICAgIGlmICh0YWIuaWQpIHtcbiAgICAgICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgeyB1cmw6IHVybCwgZGF0YTogZGF0YSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdOiBUYWIgSUQgaXMgbnVsbCFcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcbmNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuY29uc3QgU1AgPSByZXF1aXJlKFwiLi9kYXRhdHlwZXNcIik7XG5jb25zdCBMaXN0ZW5lciA9IHJlcXVpcmUoXCIuL2xpc3RlbmVyc1wiKTtcbmNvbnN0IEhlbHBlciA9IHJlcXVpcmUoXCIuL2hlbHBlclwiKTtcbmxldCBjb3VudCA9IDA7XG5mdW5jdGlvbiBzdGFydEFsbFBvbGxlcnMoKSB7XG4gICAgY2xvY2tQb2xsKCk7IC8vIHRoaXMgZG9lcyBub3QgdXNlIGludGVydmFsIGFzIGl0IGlzIHRpbWUgc2Vuc2l0aXZlXG4gICAgY2FsZW5kYXJQb2xsKCk7XG4gICAgdGltZXRhYmxlUG9sbCgpO1xuICAgIHNwV2lmaVBvbGwoKTtcbiAgICBzZXRJbnRlcnZhbChjYWxlbmRhclBvbGwsIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSBjYWxlbmRhciBwb2xsaW5nXG4gICAgc2V0SW50ZXJ2YWwodGltZXRhYmxlUG9sbCwgMTAwMCAqIDYwICogNSk7IC8vIDUgbWludXRlIHRpbWV0YWJsZSBwb2xsaW5nXG4gICAgc2V0SW50ZXJ2YWwoc3BXaWZpUG9sbCwgMTAwMCAqIDYwICogNSk7IC8vIDUgbWludXRlIHdpZmkgcG9sbGluZ1xufVxuLy8jcmVnaW9uIFBvbGxlcnNcbmZ1bmN0aW9uIGNsb2NrUG9sbCgpIHtcbiAgICAkKCcjdGltZScpLnRleHQobW9tZW50KCkuZm9ybWF0KCdISDptbTpzcycpKTtcbiAgICBzZXRUaW1lb3V0KGNsb2NrUG9sbCwgMTAwMCk7IC8vIDEgc2Vjb25kIHBvbGxpbmdcbn1cbmZ1bmN0aW9uIGNhbGVuZGFyUG9sbCgpIHtcbiAgICAvLyBHZXQgU1AgQWNhZGVtaWMgQ2FsZW5kYXIgYW5kIHJlYWQgZnJvbSBKU09OXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgLy8gR2V0IGFsbCBvYmplY3RzIFxuICAgICAgICAgICAgbGV0IGFsbENhbGVuZGFyRW50cmllcyA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgbGV0IHJlbGV2YW50RW50cmllcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxDYWxlbmRhckVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnREYXRlID0gRGF0ZS5wYXJzZShhbGxDYWxlbmRhckVudHJpZXNbaV0uc3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kRGF0ZSA9IERhdGUucGFyc2UoYWxsQ2FsZW5kYXJFbnRyaWVzW2ldLmVuZFRpbWUpO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID4gc3RhcnREYXRlICYmIGN1cnJlbnREYXRlIDwgZW5kRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZWxldmFudEVudHJpZXMucHVzaChhbGxDYWxlbmRhckVudHJpZXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNldCBzdGF0dXNcbiAgICAgICAgICAgIGlmIChyZWxldmFudEVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBzY2hvb2xTdGF0ZVN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgcmVsZXZhbnRFbnRyaWVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nICs9IFwiLCBcIjtcbiAgICAgICAgICAgICAgICAgICAgc2Nob29sU3RhdGVTdHJpbmcgKz0gZWxlbWVudC5zdW1tYXJ5O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nID0gc2Nob29sU3RhdGVTdHJpbmcuc3Vic3RyKDIsIHNjaG9vbFN0YXRlU3RyaW5nLmxlbmd0aCk7IC8vIFJlbW92ZSB0aGUgZmlyc3QgMiBjaGFyYWN0ZXJzXG4gICAgICAgICAgICAgICAgJCgnI2N1cnJlbnRTdGF0dXMnKS50ZXh0KHNjaG9vbFN0YXRlU3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNjdXJyZW50U3RhdHVzJykudGV4dChcIk5vIFNjaG9vbCBFdmVudHNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVwZWF0IHJlcXVlc3Qgb25jZSBpdCBpcyBsb2FkZWQgb3IgdW5zdWNjZXNzZnVsbHkgbG9hZGVkXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMb2FkZWQgU1AgQ2FsZW5kYXJcIik7XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgXCJodHRwczovL21vYmlsZWFwcHMuc3AuZWR1LnNnL1NQTW9iaWxlQVBJL2FwaS9HZXRBY2FkQ2FsZW5kYXJcIiwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5zZW5kKCk7XG59XG4vKipcbiAqIEdldHMgdGhlIHRpbWV0YWJsZSBmb3IgdG9kYXkgYW5kIGNoZWNrcyBpZiB0aGUgdXNlciBpcyBhdHRlbmRpbmcgYSBsZXNzb25cbiAqL1xuZnVuY3Rpb24gdGltZXRhYmxlUG9sbCgpIHtcbiAgICBIZWxwZXIudXNlcklzQXV0aGVudGljYXRlZChmdW5jdGlvbiAoYXV0aGVudGljYXRlZCwgdG9rZW4pIHtcbiAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZWQgJiYgdG9rZW4pIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZVN0cmluZyA9IG1vbWVudCgpLmZvcm1hdCgnRERNTVlZJyk7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXSBSZXF1ZXN0ZWQgZm9yIHRpbWV0YWJsZSB3aXRoIGRhdGU6IFwiICsgY3VycmVudERhdGVTdHJpbmcpO1xuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBIZWxwZXIuYXV0aGVudGljYXRlZFJlcXVlc3QoXCJHRVRcIiwgXCJodHRwczovL21vYmlsZWFwcHMuc3AuZWR1LnNnL1NQTW9iaWxlQVBJL2FwaS9HZXRTdHVkZW50VGltZXRhYmxlQnlJZEFuZERhdGUvXCIgK1xuICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlU3RyaW5nLCB0cnVlLCB0b2tlbik7XG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBSZXF1ZXN0ZWQgZm9yIHRpbWV0YWJsZSB3aXRoIHJldHVybmVkIGRhdGE6XCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VUZXh0ID09IFNQLlRJTUVUQUJMRV9OT19MRVNTT05TKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBObyBsZXNzb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY3VycmVudExlc3NvbicpLnRleHQoXCJObyBMZXNzb25zXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzb25BcnJheSA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSTogVmFsaWRhdGUgYWxsIHRpbWV0YWJsZSBlbnRyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGltZXRhYmxlRW50cmllcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gSlNPTi5zdHJpbmdpZnkoanNvbkFycmF5W2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW50cnlWYWxpZCA9IFNQLlRpbWV0YWJsZUVudHJ5LmlzVmFsaWQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5VmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVudHJ5ID0gU1AuVGltZXRhYmxlRW50cnkuZnJvbUpTT04oZWxlbWVudCwgY3VycmVudERhdGVTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSTogSW5zZXJ0IGFsbCBlbnRyaWVzIGludG8gYXJyYXkgd2hlcmUgaXQgaXMgY3VycmVudGx5IGhhcHBlbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudERhdGVUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmdldFN0YXJ0RGF0ZVRpbWUoKSA8IGN1cnJlbnREYXRlVGltZSAmJiBlbnRyeS5nZXRFbmREYXRlVGltZSgpID4gY3VycmVudERhdGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1ldGFibGVFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExlc3NvbiBjdXJyZW50bHkgcnVubmluZzogXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTGVzc29uIG5vdCBydW5uaW5nOiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBUaW1ldGFibGUgZW50cnkgaXMgaW52YWxpZDpcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSUk6IERpc3BsYXkgY3VycmVudCBsZXNzb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1ldGFibGVFbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjY3VycmVudExlc3NvbicpLnRleHQodGltZXRhYmxlRW50cmllc1swXS5nZXRBYmJyZXZpYXRpb24oKSArIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXRhYmxlRW50cmllc1swXS5nZXRUeXBlU3RyaW5nKCkgKyBcIiBAIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXRhYmxlRW50cmllc1swXS5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjdXJyZW50TGVzc29uJykudGV4dChcIk5vIExlc3NvbiBDdXJyZW50bHlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltXQVJOSU5HXTogRmFpbGVkIHRvIGxvYWQgdGltZXRhYmxlOiBcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltFUlJPUl06IFRva2VuIGludmFsaWQsIGZvdW5kIGR1cmluZyB0aW1ldGFibGUgcmV0cmlldmFsIVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHVzZXIgaXMgY29ubmVjdGVkIHRvIFNQIFdpLUZpXG4gKi9cbmZ1bmN0aW9uIHNwV2lmaVBvbGwoKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiByZXF1ZXN0IGFjdHVhbGx5IGdldHMgdGhlIHJlYWwgQVRTIHBhZ2VcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc3BvbnNlVVJMLnN0YXJ0c1dpdGgoXCJodHRwczovL215YXRzLnNwLmVkdS5zZ1wiKSkge1xuICAgICAgICAgICAgICAgIGNvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBFbHNlLCBXaS1GaSBpcyBjb25zaWRlcmVkIHRvIGJlIG5vdCBjb25uZWN0ZWRcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBEaXNwbGF5IGNvbm5lY3RlZCBzdGF0ZVxuICAgICAgICBpZiAoY29ubmVjdGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogQ29ubmVjdGVkIHRvIFNQIHdpZmlcIik7XG4gICAgICAgICAgICAkKCcjd2lmaUNvbm5lY3RlZFRleHQnKS50ZXh0KFwiQ29ubmVjdGVkIHRvIFNQIFdpLUZpXCIpO1xuICAgICAgICAgICAgJCgnI3dpZmlMb2dvJykuY3NzKCdjb2xvcicsICcjMzNDM0YwJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTm90IGNvbm5lY3RlZCB0byBTUCB3aWZpXCIpO1xuICAgICAgICAgICAgJCgnI3dpZmlDb25uZWN0ZWRUZXh0JykudGV4dChcIk5vdCBjb25uZWN0ZWQgdG8gU1AgV2ktRmlcIik7XG4gICAgICAgICAgICAkKCcjd2lmaUxvZ28nKS5jc3MoJ2NvbG9yJywgJyNiYmInKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIFNQLlVSTF9BVFMsIHRydWUpO1xuICAgIHJlcXVlc3Quc2VuZCgpO1xufVxuLy8jZW5kcmVnaW9uIFBvbGxlcnNcbi8vIEluaXRpYWxpc2F0aW9uIGZvciBqUXVlcnkuIFRoaXMgYmxvY2sgcnVucyB3aGVuIGRvY3VtZW50IGlzIHJlYWR5XG4kKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBxdWVyeUluZm8gPSB7XG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgY3VycmVudFdpbmRvdzogdHJ1ZVxuICAgIH07XG4gICAgY2hyb21lLnRhYnMucXVlcnkocXVlcnlJbmZvLCBmdW5jdGlvbiAodGFicykge1xuICAgICAgICAvLyAkKCcjdXJsJykudGV4dCh0YWJzWzBdLnVybCk7XG4gICAgICAgICQoJyN0aW1lJykudGV4dChtb21lbnQoKS5mb3JtYXQoJ0hIOm1tOnNzJykpO1xuICAgIH0pO1xuICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6IGNvdW50LnRvU3RyaW5nKCkgfSk7XG4gICAgJCgnI2NvdW50VXAnKS5jbGljaygoKSA9PiB7XG4gICAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6ICgrK2NvdW50KS50b1N0cmluZygpIH0pO1xuICAgIH0pO1xuICAgIC8vICQoJyNjaGFuZ2VCYWNrZ3JvdW5kJykuY2xpY2soKCk9PntcbiAgICAvLyAgIGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWV9LCBmdW5jdGlvbih0YWJzKSB7XG4gICAgLy8gICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYnNbMF0uaWQsIHtcbiAgICAvLyAgICAgICBjb2xvcjogJyM1NTU1NTUnXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGZ1bmN0aW9uKG1zZykge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IG1lc3NhZ2U6XCIsIG1zZyk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG4gICAgLy8gRmlyc3QgdGhpbmdzIGZpcnN0LCBjaGVjayBpZiB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAgICBIZWxwZXIudXNlcklzQXV0aGVudGljYXRlZChmdW5jdGlvbiAoYXV0aGVudGljYXRlZCkge1xuICAgICAgICAkKCcjbG9hZGluZycpLnNob3coKTtcbiAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIC8vIFVzZXIgaXMgbG9nZ2VkIGluLCBzaG93IG1haW4gVUkgYW5kIGluaXRpYWxpc2UgcG9sbGVyc1xuICAgICAgICAgICAgJCgnI21haW4nKS5zaG93KCk7XG4gICAgICAgICAgICAkKCcjYXV0aCcpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJyNsb2FkaW5nJykuaGlkZSgpO1xuICAgICAgICAgICAgc3RhcnRBbGxQb2xsZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBOb3QgYXV0aGVudGljYXRlZCwgZGlzcGxheSBsb2dpbiBVSSBvbmx5XG4gICAgICAgICAgICAkKCcjbWFpbicpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJyNhdXRoJykuc2hvdygpO1xuICAgICAgICAgICAgJCgnI2xvYWRpbmcnKS5oaWRlKCk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgb2xkIGxvZ2luIHRva2VuIHN0aWxsIGV4aXN0cyBpbiBzdG9yYWdlLCBwdXJnZSBpdFxuICAgICAgICAgICAgSGVscGVyLnB1cmdlT2xkVG9rZW4oKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEluaXRpYWxpc2UgTG9naW4gbGlzdGVuZXJcbiAgICAkKCcjbG9naW5CdXR0b24nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIExpc3RlbmVyLmxvZ2luTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gU3RhcnQgdXAgdGhlIHBvbGxlcnMsIGFzIHRoaXMgbGFtYmRhIHdpbGwgb25seSBiZSBjYWxsZWQgaWZcbiAgICAgICAgICAgIC8vIHRoZSBsb2dpbiBpcyBzdWNjZXNzZnVsXG4gICAgICAgICAgICBzdGFydEFsbFBvbGxlcnMoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gU2V0dXAgQVRTIGJ1dHRvbiBsaXN0ZW5lclxuICAgICQoJyNhdHNCdXR0b24nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIExpc3RlbmVyLmF0c0J1dHRvbkxpc3RlbmVyKCk7XG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=