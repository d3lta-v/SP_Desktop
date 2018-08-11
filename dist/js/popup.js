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
/**
 * Extremely fast and non-cryptographically secure hash function
 * Used to create short and sweet hashes for uniquely ID'ing strings
 * Based roughly on the Java String.hashCode() function
 * @param input Input string to hash
 */
function hash(input) {
    var hash = 0, i, chr;
    if (input.length === 0)
        return hash;
    for (i = 0; i < input.length; i++) {
        chr = input.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
exports.hash = hash;
;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdGVuZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFDQSw4Q0FBOEMs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QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdUNBQXVDLHlCQUF5QjtBQUNoRTtBQUNBLDJDQUEyQyw2QkFBNkI7QUFDeEUsS0FBSztBQUNMO0FBQ0EsNEJBQTRCLGtDQUFrQztBQUM5RDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1osVUFBVTtBQUNWLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwb3B1cFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9wb3B1cC50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIEdlbmVyYXRlcyBhbiBhdXRoZW50aWNhdGVkIHJlcXVlc3QgdXNpbmcgYW4gZXhpc3RpbmcgdG9rZW5cbiAqIEBwYXJhbSBtZXRob2QgVGhlIEhUVFAgbWV0aG9kIHRvIHVzZSBmb3IgdGhpcyByZXF1ZXN0XG4gKiBAcGFyYW0gdXJsIFRoZSBVUkwgdG8gdXNlIGZvciB0aGlzIHJlcXVlc3RcbiAqIEBwYXJhbSBhc3luYyBXaGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBkb25lIGFzeW5jaHJvbm91c2x5XG4gKiBAcGFyYW0gdG9rZW4gVGhlIHRva2VuIFdJVEhPVVQgdGhlIFwiQmVhcmVyIFwiIHByZWZpeFxuICovXG5mdW5jdGlvbiBhdXRoZW50aWNhdGVkUmVxdWVzdChtZXRob2QsIHVybCwgYXN5bmMsIHRva2VuKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIGFzeW5jKTtcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG59XG5leHBvcnRzLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0ID0gYXV0aGVudGljYXRlZFJlcXVlc3Q7XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB0b2tlbiBzdG9yZWQgaW4gQ2hyb21lJ3Mgc3RvcmFnZSBpcyBhIHZhbGlkXG4gKiB0b2tlbiAoaS5lLiB0aGUgdXNlciBpcyBhbHJlYWR5IGF1dGhlbnRpY2F0ZWQpLlxuICogQHBhcmFtIGNhbGxiYWNrIEEgbGFtYmRhIHRoYXQgcmV0dXJucyB0aGUgYXV0aGVudGljYXRlZCBzdGF0ZSB0aHJvdWdoIGEgcGFyYW1ldGVyXG4gKiBAcGFyYW0gdG9rZW4gVGhlIHNlc3Npb24gdG9rZW4sIGlmIHRoZSB1c2VyIGlzIGluZGVlZCBhdXRoZW50aWNhdGVkLiBFbHNlLCBpdCByZXR1cm5zIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiB1c2VySXNBdXRoZW50aWNhdGVkKGNhbGxiYWNrKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCd1c2VyJywgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAvLyBGaXJzdCByb3VuZDogY2hlY2tpbmcgZm9yIGV4aXN0ZW5jZSBvZiB0b2tlblxuICAgICAgICBpZiAocmVzdWx0Wyd1c2VyJ10gJiYgcmVzdWx0Wyd1c2VyJ11bJ2FjY2Vzc1Rva2VuJ10pIHtcbiAgICAgICAgICAgIC8vIFNlY29uZCByb3VuZDogdG9rZW4gdmFsaWRpdHkgY2hlY2tpbmcgd2l0aCBhIHNtYWxsIEFQSSBlbmRwb2ludFxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBhdXRoZW50aWNhdGVkUmVxdWVzdChcIlBPU1RcIiwgXCJodHRwczovL21vYmlsZWFwcHMuc3AuZWR1LnNnL1NQTW9iaWxlQVBJL2FwaS9Db3VudFVucmVhZEl0ZW1cIiwgdHJ1ZSwgcmVzdWx0Wyd1c2VyJ11bJ2FjY2Vzc1Rva2VuJ10pO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUb2tlbiBpcyB2YWxpZCwgcmV0dXJuIGNhbGxiYWNrIHdpdGggdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLCByZXN1bHRbJ3VzZXInXVsnYWNjZXNzVG9rZW4nXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudXNlcklzQXV0aGVudGljYXRlZCA9IHVzZXJJc0F1dGhlbnRpY2F0ZWQ7XG4vKipcbiAqIFJldHJpZXZlcyB0aGUgdXNlcidzIGxvZ2luIHRva2VuIG9ubHkgYW5kIGRvZXMgbm90IHBlcmZvcm0gZnVydGhlciB2YWxpZGF0aW9uXG4gKiBAcGFyYW0gY2FsbGJhY2sgQSBsYW1iZGEgdGhhdCByZXR1cm5zIHRoZSB1c2VyJ3MgdG9rZW5cbiAqL1xuZnVuY3Rpb24gZ2V0VXNlclRva2VuKGNhbGxiYWNrKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCd1c2VyJywgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0Wyd1c2VyJ10gJiYgcmVzdWx0Wyd1c2VyJ11bJ2FjY2Vzc1Rva2VuJ10pIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdFsndXNlciddWydhY2Nlc3NUb2tlbiddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZ2V0VXNlclRva2VuID0gZ2V0VXNlclRva2VuO1xuLyoqXG4gKiBQdXJnZXMgdGhlIG9sZCB1c2VyIHRva2VuIGZyb20gQ2hyb21lJ3MgaW50ZXJuYWwgc3RvcmFnZVxuICovXG5mdW5jdGlvbiBwdXJnZU9sZFRva2VuKCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZSgndXNlcicpO1xufVxuZXhwb3J0cy5wdXJnZU9sZFRva2VuID0gcHVyZ2VPbGRUb2tlbjtcbi8qKlxuICogRXh0cmVtZWx5IGZhc3QgYW5kIG5vbi1jcnlwdG9ncmFwaGljYWxseSBzZWN1cmUgaGFzaCBmdW5jdGlvblxuICogVXNlZCB0byBjcmVhdGUgc2hvcnQgYW5kIHN3ZWV0IGhhc2hlcyBmb3IgdW5pcXVlbHkgSUQnaW5nIHN0cmluZ3NcbiAqIEJhc2VkIHJvdWdobHkgb24gdGhlIEphdmEgU3RyaW5nLmhhc2hDb2RlKCkgZnVuY3Rpb25cbiAqIEBwYXJhbSBpbnB1dCBJbnB1dCBzdHJpbmcgdG8gaGFzaFxuICovXG5mdW5jdGlvbiBoYXNoKGlucHV0KSB7XG4gICAgdmFyIGhhc2ggPSAwLCBpLCBjaHI7XG4gICAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgcmV0dXJuIGhhc2g7XG4gICAgZm9yIChpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNociA9IGlucHV0LmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNocjtcbiAgICAgICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgICB9XG4gICAgcmV0dXJuIGhhc2g7XG59XG5leHBvcnRzLmhhc2ggPSBoYXNoO1xuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBTUCA9IHJlcXVpcmUoXCIuL2RhdGF0eXBlc1wiKTtcbmNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuLyoqXG4gKiBIb29rcyB1cCB0byBhIC5jbGljaygpIGxpc3RlbmVyIGZvciB0aGUgbG9naW4gZXZlbnRcbiAqIEBwYXJhbSBzdGFydFBvbGxlcnMgQSBjYWxsYmFjayBmb3IgdGhlIG1haW4gcG9wdXAudHMgdG8gaW5pdGlhbGlzZSByZWN1cnJpbmcgZXZlbnRzIChpLmUuIHBvbGxlcnMpXG4gKi9cbmZ1bmN0aW9uIGxvZ2luTGlzdGVuZXIoc3RhcnRQb2xsZXJzKSB7XG4gICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExvZ2luIGNsaWNrZWRcIik7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS90b2tlblwiLCB0cnVlKTtcbiAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9vbGQgY29kZTogdGhpcy5yZWFkeVN0YXRlID09IDQgJiYgXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIC8vIFNhdmUgbmFtZSBhbmQgdG9rZW4gaW50byBDaHJvbWUgc3RvcmFnZVxuICAgICAgICAgICAgaWYgKFNQLlVzZXIuaXNWYWxpZCh0aGlzLnJlc3BvbnNlVGV4dCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IFNQLlVzZXIuZnJvbUpTT04odGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7ICd1c2VyJzogdXNlciB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMb2dpbiBzdWNjZWVkZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNhdmUgdGhlIHVzZXJuYW1lIGFuZCBwYXNzd29yZHNcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd1c2VybmFtZSc6ICQoJyN1c2VybmFtZScpLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJzogJCgnI3Bhc3N3b3JkJykudmFsKClcbiAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IFNhdmVkIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBmb3IgZnV0dXJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGlkZSB0aGUgbG9naW4gZGlhbG9nIGFuZCBzaG93IHRoZSBtYWluIFVJXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjYXV0aCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNtYWluJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgcG9sbGVycyBieSBjYWxsaW5nIGJhY2sgdGhlIG1haW4gZmlsZSAocG9wdXAudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFBvbGxlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IGVycm9yXG4gICAgICAgICAgICAgICAgJCgnI2F1dGhFcnJvcicpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKCcjYXV0aEVycm9yJykudGV4dChTUC5FUlJPUl9BVVRIX0lOVkFMSURfSlNPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBMb2dpbiBmYWlsZWQgaW4gc29tZSB3YXlcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMb2dpbiBmYWlsZWQ6IFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgLy8gRXJyb3IgY29kZSBcIjJcIiBtZWFucyBsb2dpbiBmYWlsZWRcbiAgICAgICAgICAgIGxldCByZXNwb25zZU9iamVjdCA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlT2JqZWN0W1wiZXJyb3JcIl0gPT09IFwiMlwiKSB7IC8vTk9URTogVEhJUyBJUyBBIFNUUklORyFcbiAgICAgICAgICAgICAgICAkKCcjYXV0aEVycm9yJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoJyNhdXRoRXJyb3InKS50ZXh0KFNQLkVSUk9SX0FVVEhfSU5WQUxJRF9QQVNTV09SRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIC8vIENvbnN0cnVjdCBmaW5hbCBwYXlsb2FkXG4gICAgbGV0IHBheWxvYWQgPSBcImdyYW50X3R5cGU9cGFzc3dvcmRcIiArXG4gICAgICAgIFwiJnVzZXJuYW1lPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCQoJyN1c2VybmFtZScpLnZhbCgpKSArXG4gICAgICAgIFwiJnBhc3N3b3JkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCQoJyNwYXNzd29yZCcpLnZhbCgpKSArXG4gICAgICAgIFwiJmRldmljZVRva2VuPWF5eVwiO1xuICAgIHJlcXVlc3Quc2VuZChwYXlsb2FkKTtcbn1cbmV4cG9ydHMubG9naW5MaXN0ZW5lciA9IGxvZ2luTGlzdGVuZXI7XG5mdW5jdGlvbiBhdHNCdXR0b25MaXN0ZW5lcigpIHtcbiAgICAvLyBDYWxsIGJhY2tncm91bmQudHMgdG8gcG9zdCBkYXRhXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcImF0cy1saXN0ZW5lclwiIH0pO1xufVxuZXhwb3J0cy5hdHNCdXR0b25MaXN0ZW5lciA9IGF0c0J1dHRvbkxpc3RlbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5jb25zdCBTUCA9IHJlcXVpcmUoXCIuL2RhdGF0eXBlc1wiKTtcbmNvbnN0IExpc3RlbmVyID0gcmVxdWlyZShcIi4vbGlzdGVuZXJzXCIpO1xuY29uc3QgSGVscGVyID0gcmVxdWlyZShcIi4vaGVscGVyXCIpO1xubGV0IGNvdW50ID0gMDtcbmZ1bmN0aW9uIHN0YXJ0QWxsUG9sbGVycygpIHtcbiAgICBjbG9ja1BvbGwoKTsgLy8gdGhpcyBkb2VzIG5vdCB1c2UgaW50ZXJ2YWwgYXMgaXQgaXMgdGltZSBzZW5zaXRpdmVcbiAgICBjYWxlbmRhclBvbGwoKTtcbiAgICB0aW1ldGFibGVQb2xsKCk7XG4gICAgc3BXaWZpUG9sbCgpO1xuICAgIHNldEludGVydmFsKGNhbGVuZGFyUG9sbCwgMTAwMCAqIDYwICogNSk7IC8vIDUgbWludXRlIGNhbGVuZGFyIHBvbGxpbmdcbiAgICBzZXRJbnRlcnZhbCh0aW1ldGFibGVQb2xsLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgdGltZXRhYmxlIHBvbGxpbmdcbiAgICBzZXRJbnRlcnZhbChzcFdpZmlQb2xsLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgd2lmaSBwb2xsaW5nXG59XG4vLyNyZWdpb24gUG9sbGVyc1xuZnVuY3Rpb24gY2xvY2tQb2xsKCkge1xuICAgICQoJyN0aW1lJykudGV4dChtb21lbnQoKS5mb3JtYXQoJ0hIOm1tOnNzJykpO1xuICAgIHNldFRpbWVvdXQoY2xvY2tQb2xsLCAxMDAwKTsgLy8gMSBzZWNvbmQgcG9sbGluZ1xufVxuZnVuY3Rpb24gY2FsZW5kYXJQb2xsKCkge1xuICAgIC8vIEdldCBTUCBBY2FkZW1pYyBDYWxlbmRhciBhbmQgcmVhZCBmcm9tIEpTT05cbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAvLyBHZXQgYWxsIG9iamVjdHMgXG4gICAgICAgICAgICBsZXQgYWxsQ2FsZW5kYXJFbnRyaWVzID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBsZXQgcmVsZXZhbnRFbnRyaWVzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbENhbGVuZGFyRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBzdGFydERhdGUgPSBEYXRlLnBhcnNlKGFsbENhbGVuZGFyRW50cmllc1tpXS5zdGFydFRpbWUpO1xuICAgICAgICAgICAgICAgIGxldCBlbmREYXRlID0gRGF0ZS5wYXJzZShhbGxDYWxlbmRhckVudHJpZXNbaV0uZW5kVGltZSk7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPiBzdGFydERhdGUgJiYgY3VycmVudERhdGUgPCBlbmREYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5wdXNoKGFsbENhbGVuZGFyRW50cmllc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2V0IHN0YXR1c1xuICAgICAgICAgICAgaWYgKHJlbGV2YW50RW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNjaG9vbFN0YXRlU3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZWxldmFudEVudHJpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2Nob29sU3RhdGVTdHJpbmcgKz0gXCIsIFwiO1xuICAgICAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyArPSBlbGVtZW50LnN1bW1hcnk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2Nob29sU3RhdGVTdHJpbmcgPSBzY2hvb2xTdGF0ZVN0cmluZy5zdWJzdHIoMiwgc2Nob29sU3RhdGVTdHJpbmcubGVuZ3RoKTsgLy8gUmVtb3ZlIHRoZSBmaXJzdCAyIGNoYXJhY3RlcnNcbiAgICAgICAgICAgICAgICAkKCcjY3VycmVudFN0YXR1cycpLnRleHQoc2Nob29sU3RhdGVTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI2N1cnJlbnRTdGF0dXMnKS50ZXh0KFwiTm8gU2Nob29sIEV2ZW50c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXBlYXQgcmVxdWVzdCBvbmNlIGl0IGlzIGxvYWRlZCBvciB1bnN1Y2Nlc3NmdWxseSBsb2FkZWRcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExvYWRlZCBTUCBDYWxlbmRhclwiKTtcbiAgICB9O1xuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vbW9iaWxlYXBwcy5zcC5lZHUuc2cvU1BNb2JpbGVBUEkvYXBpL0dldEFjYWRDYWxlbmRhclwiLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcbn1cbi8qKlxuICogR2V0cyB0aGUgdGltZXRhYmxlIGZvciB0b2RheSBhbmQgY2hlY2tzIGlmIHRoZSB1c2VyIGlzIGF0dGVuZGluZyBhIGxlc3NvblxuICovXG5mdW5jdGlvbiB0aW1ldGFibGVQb2xsKCkge1xuICAgIEhlbHBlci51c2VySXNBdXRoZW50aWNhdGVkKGZ1bmN0aW9uIChhdXRoZW50aWNhdGVkLCB0b2tlbikge1xuICAgICAgICBpZiAoYXV0aGVudGljYXRlZCAmJiB0b2tlbikge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRlU3RyaW5nID0gbW9tZW50KCkuZm9ybWF0KCdERE1NWVknKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddIFJlcXVlc3RlZCBmb3IgdGltZXRhYmxlIHdpdGggZGF0ZTogXCIgKyBjdXJyZW50RGF0ZVN0cmluZyk7XG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IEhlbHBlci5hdXRoZW50aWNhdGVkUmVxdWVzdChcIkdFVFwiLCBcImh0dHBzOi8vbW9iaWxlYXBwcy5zcC5lZHUuc2cvU1BNb2JpbGVBUEkvYXBpL0dldFN0dWRlbnRUaW1ldGFibGVCeUlkQW5kRGF0ZS9cIiArXG4gICAgICAgICAgICAgICAgY3VycmVudERhdGVTdHJpbmcsIHRydWUsIHRva2VuKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IFJlcXVlc3RlZCBmb3IgdGltZXRhYmxlIHdpdGggcmV0dXJuZWQgZGF0YTpcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNwb25zZVRleHQgPT0gU1AuVElNRVRBQkxFX05PX0xFU1NPTlMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIGxlc3NvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjdXJyZW50TGVzc29uJykudGV4dChcIk5vIExlc3NvbnNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQganNvbkFycmF5ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJOiBWYWxpZGF0ZSBhbGwgdGltZXRhYmxlIGVudHJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1ldGFibGVFbnRyaWVzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBKU09OLnN0cmluZ2lmeShqc29uQXJyYXlbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbnRyeVZhbGlkID0gU1AuVGltZXRhYmxlRW50cnkuaXNWYWxpZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnlWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW50cnkgPSBTUC5UaW1ldGFibGVFbnRyeS5mcm9tSlNPTihlbGVtZW50LCBjdXJyZW50RGF0ZVN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIElJOiBJbnNlcnQgYWxsIGVudHJpZXMgaW50byBhcnJheSB3aGVyZSBpdCBpcyBjdXJyZW50bHkgaGFwcGVuaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuZ2V0U3RhcnREYXRlVGltZSgpIDwgY3VycmVudERhdGVUaW1lICYmIGVudHJ5LmdldEVuZERhdGVUaW1lKCkgPiBjdXJyZW50RGF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWV0YWJsZUVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTGVzc29uIGN1cnJlbnRseSBydW5uaW5nOiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMZXNzb24gbm90IHJ1bm5pbmc6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbV0FSTklOR106IFRpbWV0YWJsZSBlbnRyeSBpcyBpbnZhbGlkOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIElJSTogRGlzcGxheSBjdXJyZW50IGxlc3NvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWV0YWJsZUVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjdXJyZW50TGVzc29uJykudGV4dCh0aW1ldGFibGVFbnRyaWVzWzBdLmdldEFiYnJldmlhdGlvbigpICsgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1ldGFibGVFbnRyaWVzWzBdLmdldFR5cGVTdHJpbmcoKSArIFwiIEAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1ldGFibGVFbnRyaWVzWzBdLmdldExvY2F0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2N1cnJlbnRMZXNzb24nKS50ZXh0KFwiTm8gTGVzc29uIEN1cnJlbnRseVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBGYWlsZWQgdG8gbG9hZCB0aW1ldGFibGU6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRoaXMuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXTogVG9rZW4gaW52YWxpZCwgZm91bmQgZHVyaW5nIHRpbWV0YWJsZSByZXRyaWV2YWwhXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgdXNlciBpcyBjb25uZWN0ZWQgdG8gU1AgV2ktRmlcbiAqL1xuZnVuY3Rpb24gc3BXaWZpUG9sbCgpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHJlcXVlc3QgYWN0dWFsbHkgZ2V0cyB0aGUgcmVhbCBBVFMgcGFnZVxuICAgICAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VVUkwuc3RhcnRzV2l0aChcImh0dHBzOi8vbXlhdHMuc3AuZWR1LnNnXCIpKSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEVsc2UsIFdpLUZpIGlzIGNvbnNpZGVyZWQgdG8gYmUgbm90IGNvbm5lY3RlZFxuICAgICAgICAgICAgICAgIGNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIERpc3BsYXkgY29ubmVjdGVkIHN0YXRlXG4gICAgICAgIGlmIChjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBDb25uZWN0ZWQgdG8gU1Agd2lmaVwiKTtcbiAgICAgICAgICAgICQoJyN3aWZpQ29ubmVjdGVkVGV4dCcpLnRleHQoXCJDb25uZWN0ZWQgdG8gU1AgV2ktRmlcIik7XG4gICAgICAgICAgICAkKCcjd2lmaUxvZ28nKS5jc3MoJ2NvbG9yJywgJyMzM0MzRjAnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBOb3QgY29ubmVjdGVkIHRvIFNQIHdpZmlcIik7XG4gICAgICAgICAgICAkKCcjd2lmaUNvbm5lY3RlZFRleHQnKS50ZXh0KFwiTm90IGNvbm5lY3RlZCB0byBTUCBXaS1GaVwiKTtcbiAgICAgICAgICAgICQoJyN3aWZpTG9nbycpLmNzcygnY29sb3InLCAnI2JiYicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgU1AuVVJMX0FUUywgdHJ1ZSk7XG4gICAgcmVxdWVzdC5zZW5kKCk7XG59XG4vLyNlbmRyZWdpb24gUG9sbGVyc1xuLy8gSW5pdGlhbGlzYXRpb24gZm9yIGpRdWVyeS4gVGhpcyBibG9jayBydW5zIHdoZW4gZG9jdW1lbnQgaXMgcmVhZHlcbiQoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5mbyA9IHtcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICBjdXJyZW50V2luZG93OiB0cnVlXG4gICAgfTtcbiAgICBjaHJvbWUudGFicy5xdWVyeShxdWVyeUluZm8sIGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgICAgIC8vICQoJyN1cmwnKS50ZXh0KHRhYnNbMF0udXJsKTtcbiAgICAgICAgJCgnI3RpbWUnKS50ZXh0KG1vbWVudCgpLmZvcm1hdCgnSEg6bW06c3MnKSk7XG4gICAgfSk7XG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogY291bnQudG9TdHJpbmcoKSB9KTtcbiAgICAkKCcjY291bnRVcCcpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogKCsrY291bnQpLnRvU3RyaW5nKCkgfSk7XG4gICAgfSk7XG4gICAgLy8gJCgnI2NoYW5nZUJhY2tncm91bmQnKS5jbGljaygoKT0+e1xuICAgIC8vICAgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0sIGZ1bmN0aW9uKHRhYnMpIHtcbiAgICAvLyAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFic1swXS5pZCwge1xuICAgIC8vICAgICAgIGNvbG9yOiAnIzU1NTU1NSdcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgZnVuY3Rpb24obXNnKSB7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgbWVzc2FnZTpcIiwgbXNnKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgICAvLyBGaXJzdCB0aGluZ3MgZmlyc3QsIGNoZWNrIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZFxuICAgIEhlbHBlci51c2VySXNBdXRoZW50aWNhdGVkKGZ1bmN0aW9uIChhdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICQoJyNsb2FkaW5nJykuc2hvdygpO1xuICAgICAgICBpZiAoYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgLy8gVXNlciBpcyBsb2dnZWQgaW4sIHNob3cgbWFpbiBVSSBhbmQgaW5pdGlhbGlzZSBwb2xsZXJzXG4gICAgICAgICAgICAkKCcjbWFpbicpLnNob3coKTtcbiAgICAgICAgICAgICQoJyNhdXRoJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnI2xvYWRpbmcnKS5oaWRlKCk7XG4gICAgICAgICAgICBzdGFydEFsbFBvbGxlcnMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vdCBhdXRoZW50aWNhdGVkLCBkaXNwbGF5IGxvZ2luIFVJIG9ubHlcbiAgICAgICAgICAgICQoJyNtYWluJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnI2F1dGgnKS5zaG93KCk7XG4gICAgICAgICAgICAkKCcjbG9hZGluZycpLmhpZGUoKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBvbGQgbG9naW4gdG9rZW4gc3RpbGwgZXhpc3RzIGluIHN0b3JhZ2UsIHB1cmdlIGl0XG4gICAgICAgICAgICBIZWxwZXIucHVyZ2VPbGRUb2tlbigpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gSW5pdGlhbGlzZSBMb2dpbiBsaXN0ZW5lclxuICAgICQoJyNsb2dpbkJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTGlzdGVuZXIubG9naW5MaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBTdGFydCB1cCB0aGUgcG9sbGVycywgYXMgdGhpcyBsYW1iZGEgd2lsbCBvbmx5IGJlIGNhbGxlZCBpZlxuICAgICAgICAgICAgLy8gdGhlIGxvZ2luIGlzIHN1Y2Nlc3NmdWxcbiAgICAgICAgICAgIHN0YXJ0QWxsUG9sbGVycygpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBTZXR1cCBBVFMgYnV0dG9uIGxpc3RlbmVyXG4gICAgJCgnI2F0c0J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTGlzdGVuZXIuYXRzQnV0dG9uTGlzdGVuZXIoKTtcbiAgICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==