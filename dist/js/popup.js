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
                    chrome.storage.local.set({
                        'username': $('#username').val(),
                        'password': $('#password').val()
                    }, () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdGVuZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFDQSw4Q0FBOEMs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QUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsWUFBWTtBQUNaLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicG9wdXBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvcG9wdXAudHNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gYXV0aGVudGljYXRlZCByZXF1ZXN0IHVzaW5nIGFuIGV4aXN0aW5nIHRva2VuXG4gKiBAcGFyYW0gbWV0aG9kIFRoZSBIVFRQIG1ldGhvZCB0byB1c2UgZm9yIHRoaXMgcmVxdWVzdFxuICogQHBhcmFtIHVybCBUaGUgVVJMIHRvIHVzZSBmb3IgdGhpcyByZXF1ZXN0XG4gKiBAcGFyYW0gYXN5bmMgV2hldGhlciB0aGUgcmVxdWVzdCBzaG91bGQgYmUgZG9uZSBhc3luY2hyb25vdXNseVxuICogQHBhcmFtIHRva2VuIFRoZSB0b2tlbiBXSVRIT1VUIHRoZSBcIkJlYXJlciBcIiBwcmVmaXhcbiAqL1xuZnVuY3Rpb24gYXV0aGVudGljYXRlZFJlcXVlc3QobWV0aG9kLCB1cmwsIGFzeW5jLCB0b2tlbikge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCBhc3luYyk7XG4gICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuICAgIHJldHVybiByZXF1ZXN0O1xufVxuZXhwb3J0cy5hdXRoZW50aWNhdGVkUmVxdWVzdCA9IGF1dGhlbnRpY2F0ZWRSZXF1ZXN0O1xuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9rZW4gc3RvcmVkIGluIENocm9tZSdzIHN0b3JhZ2UgaXMgYSB2YWxpZFxuICogdG9rZW4gKGkuZS4gdGhlIHVzZXIgaXMgYWxyZWFkeSBhdXRoZW50aWNhdGVkKS5cbiAqIEBwYXJhbSBjYWxsYmFjayBBIGxhbWJkYSB0aGF0IHJldHVybnMgdGhlIGF1dGhlbnRpY2F0ZWQgc3RhdGUgdGhyb3VnaCBhIHBhcmFtZXRlclxuICogQHBhcmFtIHRva2VuIFRoZSBzZXNzaW9uIHRva2VuLCBpZiB0aGUgdXNlciBpcyBpbmRlZWQgYXV0aGVudGljYXRlZC4gRWxzZSwgaXQgcmV0dXJucyB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gdXNlcklzQXV0aGVudGljYXRlZChjYWxsYmFjaykge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndXNlcicsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgLy8gRmlyc3Qgcm91bmQ6IGNoZWNraW5nIGZvciBleGlzdGVuY2Ugb2YgdG9rZW5cbiAgICAgICAgaWYgKHJlc3VsdFsndXNlciddICYmIHJlc3VsdFsndXNlciddWydhY2Nlc3NUb2tlbiddKSB7XG4gICAgICAgICAgICAvLyBTZWNvbmQgcm91bmQ6IHRva2VuIHZhbGlkaXR5IGNoZWNraW5nIHdpdGggYSBzbWFsbCBBUEkgZW5kcG9pbnRcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gYXV0aGVudGljYXRlZFJlcXVlc3QoXCJQT1NUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS9hcGkvQ291bnRVbnJlYWRJdGVtXCIsIHRydWUsIHJlc3VsdFsndXNlciddWydhY2Nlc3NUb2tlbiddKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9rZW4gaXMgdmFsaWQsIHJldHVybiBjYWxsYmFjayB3aXRoIHRydWVcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSwgcmVzdWx0Wyd1c2VyJ11bJ2FjY2Vzc1Rva2VuJ10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlLCB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnVzZXJJc0F1dGhlbnRpY2F0ZWQgPSB1c2VySXNBdXRoZW50aWNhdGVkO1xuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHVzZXIncyBsb2dpbiB0b2tlbiBvbmx5IGFuZCBkb2VzIG5vdCBwZXJmb3JtIGZ1cnRoZXIgdmFsaWRhdGlvblxuICogQHBhcmFtIGNhbGxiYWNrIEEgbGFtYmRhIHRoYXQgcmV0dXJucyB0aGUgdXNlcidzIHRva2VuXG4gKi9cbmZ1bmN0aW9uIGdldFVzZXJUb2tlbihjYWxsYmFjaykge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndXNlcicsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdFsndXNlciddICYmIHJlc3VsdFsndXNlciddWydhY2Nlc3NUb2tlbiddKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhyZXN1bHRbJ3VzZXInXVsnYWNjZXNzVG9rZW4nXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmdldFVzZXJUb2tlbiA9IGdldFVzZXJUb2tlbjtcbi8qKlxuICogUHVyZ2VzIHRoZSBvbGQgdXNlciB0b2tlbiBmcm9tIENocm9tZSdzIGludGVybmFsIHN0b3JhZ2VcbiAqL1xuZnVuY3Rpb24gcHVyZ2VPbGRUb2tlbigpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoJ3VzZXInKTtcbn1cbmV4cG9ydHMucHVyZ2VPbGRUb2tlbiA9IHB1cmdlT2xkVG9rZW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFNQID0gcmVxdWlyZShcIi4vZGF0YXR5cGVzXCIpO1xuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG4vKipcbiAqIEhvb2tzIHVwIHRvIGEgLmNsaWNrKCkgbGlzdGVuZXIgZm9yIHRoZSBsb2dpbiBldmVudFxuICogQHBhcmFtIHN0YXJ0UG9sbGVycyBBIGNhbGxiYWNrIGZvciB0aGUgbWFpbiBwb3B1cC50cyB0byBpbml0aWFsaXNlIHJlY3VycmluZyBldmVudHMgKGkuZS4gcG9sbGVycylcbiAqL1xuZnVuY3Rpb24gbG9naW5MaXN0ZW5lcihzdGFydFBvbGxlcnMpIHtcbiAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTG9naW4gY2xpY2tlZFwiKTtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHJlcXVlc3Qub3BlbihcIlBPU1RcIiwgXCJodHRwczovL21vYmlsZWFwcHMuc3AuZWR1LnNnL1NQTW9iaWxlQVBJL3Rva2VuXCIsIHRydWUpO1xuICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvL29sZCBjb2RlOiB0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiBcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgLy8gU2F2ZSBuYW1lIGFuZCB0b2tlbiBpbnRvIENocm9tZSBzdG9yYWdlXG4gICAgICAgICAgICBpZiAoU1AuVXNlci5pc1ZhbGlkKHRoaXMucmVzcG9uc2VUZXh0KSkge1xuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gU1AuVXNlci5mcm9tSlNPTih0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgJ3VzZXInOiB1c2VyIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExvZ2luIHN1Y2NlZWRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3Jkc1xuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJuYW1lJzogJCgnI3VzZXJuYW1lJykudmFsKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAncGFzc3dvcmQnOiAkKCcjcGFzc3dvcmQnKS52YWwoKVxuICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogU2F2ZWQgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGZvciBmdXR1cmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIHRoZSBsb2dpbiBkaWFsb2cgYW5kIHNob3cgdGhlIG1haW4gVUlcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNhdXRoJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI21haW4nKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFydCBwb2xsZXJzIGJ5IGNhbGxpbmcgYmFjayB0aGUgbWFpbiBmaWxlIChwb3B1cC50cylcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0UG9sbGVycygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgZXJyb3JcbiAgICAgICAgICAgICAgICAkKCcjYXV0aEVycm9yJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoJyNhdXRoRXJyb3InKS50ZXh0KFNQLkVSUk9SX0FVVEhfSU5WQUxJRF9KU09OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIExvZ2luIGZhaWxlZCBpbiBzb21lIHdheVxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExvZ2luIGZhaWxlZDogXCIpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAvLyBFcnJvciBjb2RlIFwiMlwiIG1lYW5zIGxvZ2luIGZhaWxlZFxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlT2JqZWN0ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2VPYmplY3RbXCJlcnJvclwiXSA9PT0gXCIyXCIpIHsgLy9OT1RFOiBUSElTIElTIEEgU1RSSU5HIVxuICAgICAgICAgICAgICAgICQoJyNhdXRoRXJyb3InKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJCgnI2F1dGhFcnJvcicpLnRleHQoU1AuRVJST1JfQVVUSF9JTlZBTElEX1BBU1NXT1JEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgLy8gQ29uc3RydWN0IGZpbmFsIHBheWxvYWRcbiAgICBsZXQgcGF5bG9hZCA9IFwiZ3JhbnRfdHlwZT1wYXNzd29yZFwiICtcbiAgICAgICAgXCImdXNlcm5hbWU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoJCgnI3VzZXJuYW1lJykudmFsKCkpICtcbiAgICAgICAgXCImcGFzc3dvcmQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoJCgnI3Bhc3N3b3JkJykudmFsKCkpICtcbiAgICAgICAgXCImZGV2aWNlVG9rZW49YXl5XCI7XG4gICAgcmVxdWVzdC5zZW5kKHBheWxvYWQpO1xufVxuZXhwb3J0cy5sb2dpbkxpc3RlbmVyID0gbG9naW5MaXN0ZW5lcjtcbmZ1bmN0aW9uIGF0c0J1dHRvbkxpc3RlbmVyKCkge1xuICAgIC8vIENhbGwgYmFja2dyb3VuZC50cyB0byBwb3N0IGRhdGFcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6IFwiYXRzLWxpc3RlbmVyXCIgfSk7XG59XG5leHBvcnRzLmF0c0J1dHRvbkxpc3RlbmVyID0gYXRzQnV0dG9uTGlzdGVuZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbmNvbnN0IFNQID0gcmVxdWlyZShcIi4vZGF0YXR5cGVzXCIpO1xuY29uc3QgTGlzdGVuZXIgPSByZXF1aXJlKFwiLi9saXN0ZW5lcnNcIik7XG5jb25zdCBIZWxwZXIgPSByZXF1aXJlKFwiLi9oZWxwZXJcIik7XG5sZXQgY291bnQgPSAwO1xuZnVuY3Rpb24gc3RhcnRBbGxQb2xsZXJzKCkge1xuICAgIGNsb2NrUG9sbCgpOyAvLyB0aGlzIGRvZXMgbm90IHVzZSBpbnRlcnZhbCBhcyBpdCBpcyB0aW1lIHNlbnNpdGl2ZVxuICAgIGNhbGVuZGFyUG9sbCgpO1xuICAgIHRpbWV0YWJsZVBvbGwoKTtcbiAgICBzcFdpZmlQb2xsKCk7XG4gICAgc2V0SW50ZXJ2YWwoY2FsZW5kYXJQb2xsLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgY2FsZW5kYXIgcG9sbGluZ1xuICAgIHNldEludGVydmFsKHRpbWV0YWJsZVBvbGwsIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSB0aW1ldGFibGUgcG9sbGluZ1xuICAgIHNldEludGVydmFsKHNwV2lmaVBvbGwsIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSB3aWZpIHBvbGxpbmdcbn1cbi8vI3JlZ2lvbiBQb2xsZXJzXG5mdW5jdGlvbiBjbG9ja1BvbGwoKSB7XG4gICAgJCgnI3RpbWUnKS50ZXh0KG1vbWVudCgpLmZvcm1hdCgnSEg6bW06c3MnKSk7XG4gICAgc2V0VGltZW91dChjbG9ja1BvbGwsIDEwMDApOyAvLyAxIHNlY29uZCBwb2xsaW5nXG59XG5mdW5jdGlvbiBjYWxlbmRhclBvbGwoKSB7XG4gICAgLy8gR2V0IFNQIEFjYWRlbWljIENhbGVuZGFyIGFuZCByZWFkIGZyb20gSlNPTlxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIC8vIEdldCBhbGwgb2JqZWN0cyBcbiAgICAgICAgICAgIGxldCBhbGxDYWxlbmRhckVudHJpZXMgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGxldCByZWxldmFudEVudHJpZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQ2FsZW5kYXJFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0RGF0ZSA9IERhdGUucGFyc2UoYWxsQ2FsZW5kYXJFbnRyaWVzW2ldLnN0YXJ0VGltZSk7XG4gICAgICAgICAgICAgICAgbGV0IGVuZERhdGUgPSBEYXRlLnBhcnNlKGFsbENhbGVuZGFyRW50cmllc1tpXS5lbmRUaW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+IHN0YXJ0RGF0ZSAmJiBjdXJyZW50RGF0ZSA8IGVuZERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsZXZhbnRFbnRyaWVzLnB1c2goYWxsQ2FsZW5kYXJFbnRyaWVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgc3RhdHVzXG4gICAgICAgICAgICBpZiAocmVsZXZhbnRFbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgc2Nob29sU3RhdGVTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyArPSBcIiwgXCI7XG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nICs9IGVsZW1lbnQuc3VtbWFyeTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyA9IHNjaG9vbFN0YXRlU3RyaW5nLnN1YnN0cigyLCBzY2hvb2xTdGF0ZVN0cmluZy5sZW5ndGgpOyAvLyBSZW1vdmUgdGhlIGZpcnN0IDIgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgICQoJyNjdXJyZW50U3RhdHVzJykudGV4dChzY2hvb2xTdGF0ZVN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjY3VycmVudFN0YXR1cycpLnRleHQoXCJObyBTY2hvb2wgRXZlbnRzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlcGVhdCByZXF1ZXN0IG9uY2UgaXQgaXMgbG9hZGVkIG9yIHVuc3VjY2Vzc2Z1bGx5IGxvYWRlZFxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTG9hZGVkIFNQIENhbGVuZGFyXCIpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS9hcGkvR2V0QWNhZENhbGVuZGFyXCIsIHRydWUpO1xuICAgIHJlcXVlc3Quc2VuZCgpO1xufVxuLyoqXG4gKiBHZXRzIHRoZSB0aW1ldGFibGUgZm9yIHRvZGF5IGFuZCBjaGVja3MgaWYgdGhlIHVzZXIgaXMgYXR0ZW5kaW5nIGEgbGVzc29uXG4gKi9cbmZ1bmN0aW9uIHRpbWV0YWJsZVBvbGwoKSB7XG4gICAgSGVscGVyLnVzZXJJc0F1dGhlbnRpY2F0ZWQoZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQsIHRva2VuKSB7XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGVkICYmIHRva2VuKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudERhdGVTdHJpbmcgPSBtb21lbnQoKS5mb3JtYXQoJ0RETU1ZWScpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR10gUmVxdWVzdGVkIGZvciB0aW1ldGFibGUgd2l0aCBkYXRlOiBcIiArIGN1cnJlbnREYXRlU3RyaW5nKTtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gSGVscGVyLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiR0VUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS9hcGkvR2V0U3R1ZGVudFRpbWV0YWJsZUJ5SWRBbmREYXRlL1wiICtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZVN0cmluZywgdHJ1ZSwgdG9rZW4pO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogUmVxdWVzdGVkIGZvciB0aW1ldGFibGUgd2l0aCByZXR1cm5lZCBkYXRhOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc3BvbnNlVGV4dCA9PSBTUC5USU1FVEFCTEVfTk9fTEVTU09OUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gbGVzc29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2N1cnJlbnRMZXNzb24nKS50ZXh0KFwiTm8gTGVzc29uc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqc29uQXJyYXkgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIEk6IFZhbGlkYXRlIGFsbCB0aW1ldGFibGUgZW50cmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWV0YWJsZUVudHJpZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IEpTT04uc3RyaW5naWZ5KGpzb25BcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVudHJ5VmFsaWQgPSBTUC5UaW1ldGFibGVFbnRyeS5pc1ZhbGlkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeVZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbnRyeSA9IFNQLlRpbWV0YWJsZUVudHJ5LmZyb21KU09OKGVsZW1lbnQsIGN1cnJlbnREYXRlU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSUk6IEluc2VydCBhbGwgZW50cmllcyBpbnRvIGFycmF5IHdoZXJlIGl0IGlzIGN1cnJlbnRseSBoYXBwZW5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRlVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5nZXRTdGFydERhdGVUaW1lKCkgPCBjdXJyZW50RGF0ZVRpbWUgJiYgZW50cnkuZ2V0RW5kRGF0ZVRpbWUoKSA+IGN1cnJlbnREYXRlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXRhYmxlRW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMZXNzb24gY3VycmVudGx5IHJ1bm5pbmc6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExlc3NvbiBub3QgcnVubmluZzogXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltXQVJOSU5HXTogVGltZXRhYmxlIGVudHJ5IGlzIGludmFsaWQ6XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSUlJOiBEaXNwbGF5IGN1cnJlbnQgbGVzc29uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZXRhYmxlRW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2N1cnJlbnRMZXNzb24nKS50ZXh0KHRpbWV0YWJsZUVudHJpZXNbMF0uZ2V0QWJicmV2aWF0aW9uKCkgKyBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWV0YWJsZUVudHJpZXNbMF0uZ2V0VHlwZVN0cmluZygpICsgXCIgQCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWV0YWJsZUVudHJpZXNbMF0uZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjY3VycmVudExlc3NvbicpLnRleHQoXCJObyBMZXNzb24gQ3VycmVudGx5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbV0FSTklOR106IEZhaWxlZCB0byBsb2FkIHRpbWV0YWJsZTogXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdOiBUb2tlbiBpbnZhbGlkLCBmb3VuZCBkdXJpbmcgdGltZXRhYmxlIHJldHJpZXZhbCFcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSB1c2VyIGlzIGNvbm5lY3RlZCB0byBTUCBXaS1GaVxuICovXG5mdW5jdGlvbiBzcFdpZmlQb2xsKCkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBjb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgcmVxdWVzdCBhY3R1YWxseSBnZXRzIHRoZSByZWFsIEFUUyBwYWdlXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNwb25zZVVSTC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9teWF0cy5zcC5lZHUuc2dcIikpIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRWxzZSwgV2ktRmkgaXMgY29uc2lkZXJlZCB0byBiZSBub3QgY29ubmVjdGVkXG4gICAgICAgICAgICAgICAgY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGlzcGxheSBjb25uZWN0ZWQgc3RhdGVcbiAgICAgICAgaWYgKGNvbm5lY3RlZCkge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IENvbm5lY3RlZCB0byBTUCB3aWZpXCIpO1xuICAgICAgICAgICAgJCgnI3dpZmlDb25uZWN0ZWRUZXh0JykudGV4dChcIkNvbm5lY3RlZCB0byBTUCBXaS1GaVwiKTtcbiAgICAgICAgICAgICQoJyN3aWZpTG9nbycpLmNzcygnY29sb3InLCAnIzMzQzNGMCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IE5vdCBjb25uZWN0ZWQgdG8gU1Agd2lmaVwiKTtcbiAgICAgICAgICAgICQoJyN3aWZpQ29ubmVjdGVkVGV4dCcpLnRleHQoXCJOb3QgY29ubmVjdGVkIHRvIFNQIFdpLUZpXCIpO1xuICAgICAgICAgICAgJCgnI3dpZmlMb2dvJykuY3NzKCdjb2xvcicsICcjYmJiJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBTUC5VUkxfQVRTLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcbn1cbi8vI2VuZHJlZ2lvbiBQb2xsZXJzXG4vLyBJbml0aWFsaXNhdGlvbiBmb3IgalF1ZXJ5LiBUaGlzIGJsb2NrIHJ1bnMgd2hlbiBkb2N1bWVudCBpcyByZWFkeVxuJChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcXVlcnlJbmZvID0ge1xuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIGN1cnJlbnRXaW5kb3c6IHRydWVcbiAgICB9O1xuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHF1ZXJ5SW5mbywgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICAgICAgLy8gJCgnI3VybCcpLnRleHQodGFic1swXS51cmwpO1xuICAgICAgICAkKCcjdGltZScpLnRleHQobW9tZW50KCkuZm9ybWF0KCdISDptbTpzcycpKTtcbiAgICB9KTtcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiBjb3VudC50b1N0cmluZygpIH0pO1xuICAgICQoJyNjb3VudFVwJykuY2xpY2soKCkgPT4ge1xuICAgICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiAoKytjb3VudCkudG9TdHJpbmcoKSB9KTtcbiAgICB9KTtcbiAgICAvLyAkKCcjY2hhbmdlQmFja2dyb3VuZCcpLmNsaWNrKCgpPT57XG4gICAgLy8gICBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlfSwgZnVuY3Rpb24odGFicykge1xuICAgIC8vICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJzWzBdLmlkLCB7XG4gICAgLy8gICAgICAgY29sb3I6ICcjNTU1NTU1J1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBmdW5jdGlvbihtc2cpIHtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBtZXNzYWdlOlwiLCBtc2cpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0pO1xuICAgIC8vIEZpcnN0IHRoaW5ncyBmaXJzdCwgY2hlY2sgaWYgdXNlciBpcyBhdXRoZW50aWNhdGVkXG4gICAgSGVscGVyLnVzZXJJc0F1dGhlbnRpY2F0ZWQoZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgJCgnI2xvYWRpbmcnKS5zaG93KCk7XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICAvLyBVc2VyIGlzIGxvZ2dlZCBpbiwgc2hvdyBtYWluIFVJIGFuZCBpbml0aWFsaXNlIHBvbGxlcnNcbiAgICAgICAgICAgICQoJyNtYWluJykuc2hvdygpO1xuICAgICAgICAgICAgJCgnI2F1dGgnKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcjbG9hZGluZycpLmhpZGUoKTtcbiAgICAgICAgICAgIHN0YXJ0QWxsUG9sbGVycygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTm90IGF1dGhlbnRpY2F0ZWQsIGRpc3BsYXkgbG9naW4gVUkgb25seVxuICAgICAgICAgICAgJCgnI21haW4nKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcjYXV0aCcpLnNob3coKTtcbiAgICAgICAgICAgICQoJyNsb2FkaW5nJykuaGlkZSgpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIG9sZCBsb2dpbiB0b2tlbiBzdGlsbCBleGlzdHMgaW4gc3RvcmFnZSwgcHVyZ2UgaXRcbiAgICAgICAgICAgIEhlbHBlci5wdXJnZU9sZFRva2VuKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBJbml0aWFsaXNlIExvZ2luIGxpc3RlbmVyXG4gICAgJCgnI2xvZ2luQnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBMaXN0ZW5lci5sb2dpbkxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFN0YXJ0IHVwIHRoZSBwb2xsZXJzLCBhcyB0aGlzIGxhbWJkYSB3aWxsIG9ubHkgYmUgY2FsbGVkIGlmXG4gICAgICAgICAgICAvLyB0aGUgbG9naW4gaXMgc3VjY2Vzc2Z1bFxuICAgICAgICAgICAgc3RhcnRBbGxQb2xsZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIFNldHVwIEFUUyBidXR0b24gbGlzdGVuZXJcbiAgICAkKCcjYXRzQnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBMaXN0ZW5lci5hdHNCdXR0b25MaXN0ZW5lcigpO1xuICAgIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9