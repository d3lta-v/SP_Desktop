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

/***/ "./src/datatypes.ts":
/*!**************************!*\
  !*** ./src/datatypes.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
//#region Constant strings
exports.ERROR_AUTH_INVALID_JSON = "Login server returned an invalid response. Please contact the developer.";
exports.ERROR_AUTH_INVALID_PASSWORD = "Incorrect password or username";
exports.TIMETABLE_NO_LESSONS = '[{"abbreviation":"","startTime":"","endTime":"","event":null,"type":"","code":"","location":""}]';
;
//#endregion Calendar
//#region User
/**
 * A class that encapsulates user information, such as the user's
 * access token and name, and provides common functionality such as
 * JSON validation and conversion.
 */
class User {
    constructor(accessToken, name) {
        this.accessToken = accessToken;
        this.name = name;
    }
    getAccessToken() {
        return this.accessToken;
    }
    getName() {
        return this.name;
    }
    // fromJSON is used to convert an serialized version
    // of the User to an instance of the class
    static fromJSON(json) {
        let rawJSON = JSON.parse(json);
        return new User(rawJSON['access_token'], rawJSON['name']);
    }
    static isValid(json) {
        let unvalidatedJSON = JSON.parse(json);
        let valid = false;
        unvalidatedJSON.hasOwnProperty('access_token') ? valid = true : valid = false;
        unvalidatedJSON.hasOwnProperty('name') ? valid = true : valid = false;
        return valid;
    }
}
exports.User = User;
// export interface UserJSON {
//   access_token: string;
//   token_type: string;
//   expires_in: number;
//   role: string;
//   name: string;
// };
//#endregion User
//#region Timetable
var TimetableEntryType;
(function (TimetableEntryType) {
    TimetableEntryType["Lab"] = "LAB";
    TimetableEntryType["Lecture"] = "LEC";
    TimetableEntryType["Tutorial"] = "TUT";
})(TimetableEntryType = exports.TimetableEntryType || (exports.TimetableEntryType = {}));
// Typical entry: {"abbreviation":"AMT","startTime":"13:00","endTime":"17:00","event":null,"type":"LAB","code":"ET0720","location":"T12605"}
class TimetableEntry {
    constructor(abbreviation, startTime, endTime, type, code, location) {
        this.abbreviation = abbreviation;
        this.startTime = startTime;
        this.endTime = endTime;
        this.type = type;
        this.code = code;
        this.location = location;
    }
    getAbbreviation() {
        return this.abbreviation;
    }
    getType() {
        return this.type;
    }
    getTypeString() {
        switch (this.type) {
            case TimetableEntryType.Lab:
                return "Lab";
                break;
            case TimetableEntryType.Lecture:
                return "Lecture";
                break;
            case TimetableEntryType.Tutorial:
                return "Tutorial";
                break;
        }
    }
    getModuleCode() {
        return this.code;
    }
    getLocation() {
        return this.location;
    }
    getStartDateTime() {
        return this.startTime;
    }
    getEndDateTime() {
        return this.endTime;
    }
    /**
     * Converts a piece of JSON into a TimetableEntry
     * @param json The JSON to convert to a TimetableEntry
     * @param dateString The string of the date, in DDMMYY format
     */
    static fromJSON(json, dateString) {
        let rawJSON = JSON.parse(json);
        // Parse the date and time of the timetable entry first
        let startTimeString = rawJSON['startTime'];
        let startTime = moment(dateString, "DDMMYY");
        startTime.hour(parseInt(startTimeString.substr(0, 2), 10));
        startTime.minute(parseInt(startTimeString.substr(3, 5), 10));
        let endTimeString = rawJSON['endTime'];
        let endTime = moment(dateString, "DDMMYY");
        endTime.hour(parseInt(endTimeString.substr(0, 2), 10));
        endTime.minute(parseInt(endTimeString.substr(3, 5), 10));
        let entry = new TimetableEntry(rawJSON['abbreviation'], startTime.toDate(), endTime.toDate(), rawJSON['type'], rawJSON['code'], rawJSON['location']);
        return entry;
    }
    static isValid(json) {
        let unvalidatedJSON = JSON.parse(json);
        let valid = false;
        unvalidatedJSON.hasOwnProperty('abbreviation') ? valid = true : valid = false;
        unvalidatedJSON.hasOwnProperty('startTime') ? valid = true : valid = false;
        unvalidatedJSON.hasOwnProperty('endTime') ? valid = true : valid = false;
        unvalidatedJSON.hasOwnProperty('type') ? valid = true : valid = false;
        unvalidatedJSON.hasOwnProperty('code') ? valid = true : valid = false;
        unvalidatedJSON.hasOwnProperty('location') ? valid = true : valid = false;
        return valid;
    }
}
exports.TimetableEntry = TimetableEntry;
//#endregion Timetable


/***/ }),

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
 * Checks if the current token stored in Chrome's storagge is a valid
 * token (i.e. the user is already authenticated).
 * @param callback A lambda that returns the authenticated state through a parameter
 * @param token The session token, if the user is indeed authenticated. Else, it returns undefined
 */
function userIsAuthenticated(callback) {
    chrome.storage.sync.get('user', function (result) {
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
                chrome.storage.sync.set({ 'user': user }, () => {
                    console.log("[DEBUG]: Login succeeded");
                    // Hide the login dialog and show the main UI
                    $('#auth').hide();
                    $('#main').show();
                    // Start pollers by calling back the main file (popup.ts)
                    startPollers();
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
    setInterval(calendarPoll, 1000 * 60 * 5); // 5 minute calendar polling
    setInterval(timetablePoll, 1000 * 60 * 5); // 5 minute timetable polling
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
function timetablePoll() {
    // Get timetable for today and see if user is attending lesson
    // Note: no lesson state: [{"abbreviation":"","startTime":"","endTime":"","event":null,"type":"","code":"","location":""}]
    Helper.userIsAuthenticated(function (authenticated, token) {
        if (authenticated && token) {
            let currentDateString = moment().format('DDMMYY');
            console.debug("[DEBUG] Requested for timetable with date: " + currentDateString);
            let request = Helper.authenticatedRequest("GET", "https://mobileapps.sp.edu.sg/SPMobileAPI/api/GetStudentTimetableByIdAndDate/" + currentDateString, true, token);
            request.onloadend = function () {
                if (this.status == 200) {
                    console.debug("[DEBUG]: Requested for timetable with returned data:");
                    console.debug(this.responseText);
                    if (this.responseText == SP.TIMETABLE_NO_LESSONS) {
                        // No lessons
                        $('#currentLesson').text("No Lesson");
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
                                console.log("Current time: " + new Date());
                                console.log("Start date" + entry.getStartDateTime());
                                console.log("End time: " + entry.getEndDateTime());
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
                            $('#currentLesson').text(timetableEntries[0].getAbbreviation() + " " + timetableEntries[0].getTypeString() + " @ " + timetableEntries[0].getLocation());
                        }
                        else {
                            $('#currentLesson').text("No Lesson");
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
        if (authenticated) {
            // User is logged in, show main UI and initialise pollers
            $('#main').show();
            $('#auth').hide();
            startAllPollers();
        }
        else {
            // Not authenticated, display login UI only
            $('#main').hide();
            $('#auth').show();
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
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGF0eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9saXN0ZW5lcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZGQUE2RjtBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHFGQUFxRjtBQUN0RixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqSUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQkFBK0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsMEZBQTBGO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNkZBQTZGO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsc0JBQXNCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx1Q0FBdUMseUJBQXlCO0FBQ2hFO0FBQ0EsMkNBQTJDLDZCQUE2QjtBQUN4RSxLQUFLO0FBQ0w7QUFDQSw0QkFBNEIsa0NBQWtDO0FBQzlEO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWixVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwb3B1cFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9wb3B1cC50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuLy8jcmVnaW9uIENvbnN0YW50IHN0cmluZ3NcbmV4cG9ydHMuRVJST1JfQVVUSF9JTlZBTElEX0pTT04gPSBcIkxvZ2luIHNlcnZlciByZXR1cm5lZCBhbiBpbnZhbGlkIHJlc3BvbnNlLiBQbGVhc2UgY29udGFjdCB0aGUgZGV2ZWxvcGVyLlwiO1xuZXhwb3J0cy5FUlJPUl9BVVRIX0lOVkFMSURfUEFTU1dPUkQgPSBcIkluY29ycmVjdCBwYXNzd29yZCBvciB1c2VybmFtZVwiO1xuZXhwb3J0cy5USU1FVEFCTEVfTk9fTEVTU09OUyA9ICdbe1wiYWJicmV2aWF0aW9uXCI6XCJcIixcInN0YXJ0VGltZVwiOlwiXCIsXCJlbmRUaW1lXCI6XCJcIixcImV2ZW50XCI6bnVsbCxcInR5cGVcIjpcIlwiLFwiY29kZVwiOlwiXCIsXCJsb2NhdGlvblwiOlwiXCJ9XSc7XG47XG4vLyNlbmRyZWdpb24gQ2FsZW5kYXJcbi8vI3JlZ2lvbiBVc2VyXG4vKipcbiAqIEEgY2xhc3MgdGhhdCBlbmNhcHN1bGF0ZXMgdXNlciBpbmZvcm1hdGlvbiwgc3VjaCBhcyB0aGUgdXNlcidzXG4gKiBhY2Nlc3MgdG9rZW4gYW5kIG5hbWUsIGFuZCBwcm92aWRlcyBjb21tb24gZnVuY3Rpb25hbGl0eSBzdWNoIGFzXG4gKiBKU09OIHZhbGlkYXRpb24gYW5kIGNvbnZlcnNpb24uXG4gKi9cbmNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKGFjY2Vzc1Rva2VuLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgZ2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc1Rva2VuO1xuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICAvLyBmcm9tSlNPTiBpcyB1c2VkIHRvIGNvbnZlcnQgYW4gc2VyaWFsaXplZCB2ZXJzaW9uXG4gICAgLy8gb2YgdGhlIFVzZXIgdG8gYW4gaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICAgICAgbGV0IHJhd0pTT04gPSBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICByZXR1cm4gbmV3IFVzZXIocmF3SlNPTlsnYWNjZXNzX3Rva2VuJ10sIHJhd0pTT05bJ25hbWUnXSk7XG4gICAgfVxuICAgIHN0YXRpYyBpc1ZhbGlkKGpzb24pIHtcbiAgICAgICAgbGV0IHVudmFsaWRhdGVkSlNPTiA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB1bnZhbGlkYXRlZEpTT04uaGFzT3duUHJvcGVydHkoJ2FjY2Vzc190b2tlbicpID8gdmFsaWQgPSB0cnVlIDogdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgdW52YWxpZGF0ZWRKU09OLmhhc093blByb3BlcnR5KCduYW1lJykgPyB2YWxpZCA9IHRydWUgOiB2YWxpZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfVxufVxuZXhwb3J0cy5Vc2VyID0gVXNlcjtcbi8vIGV4cG9ydCBpbnRlcmZhY2UgVXNlckpTT04ge1xuLy8gICBhY2Nlc3NfdG9rZW46IHN0cmluZztcbi8vICAgdG9rZW5fdHlwZTogc3RyaW5nO1xuLy8gICBleHBpcmVzX2luOiBudW1iZXI7XG4vLyAgIHJvbGU6IHN0cmluZztcbi8vICAgbmFtZTogc3RyaW5nO1xuLy8gfTtcbi8vI2VuZHJlZ2lvbiBVc2VyXG4vLyNyZWdpb24gVGltZXRhYmxlXG52YXIgVGltZXRhYmxlRW50cnlUeXBlO1xuKGZ1bmN0aW9uIChUaW1ldGFibGVFbnRyeVR5cGUpIHtcbiAgICBUaW1ldGFibGVFbnRyeVR5cGVbXCJMYWJcIl0gPSBcIkxBQlwiO1xuICAgIFRpbWV0YWJsZUVudHJ5VHlwZVtcIkxlY3R1cmVcIl0gPSBcIkxFQ1wiO1xuICAgIFRpbWV0YWJsZUVudHJ5VHlwZVtcIlR1dG9yaWFsXCJdID0gXCJUVVRcIjtcbn0pKFRpbWV0YWJsZUVudHJ5VHlwZSA9IGV4cG9ydHMuVGltZXRhYmxlRW50cnlUeXBlIHx8IChleHBvcnRzLlRpbWV0YWJsZUVudHJ5VHlwZSA9IHt9KSk7XG4vLyBUeXBpY2FsIGVudHJ5OiB7XCJhYmJyZXZpYXRpb25cIjpcIkFNVFwiLFwic3RhcnRUaW1lXCI6XCIxMzowMFwiLFwiZW5kVGltZVwiOlwiMTc6MDBcIixcImV2ZW50XCI6bnVsbCxcInR5cGVcIjpcIkxBQlwiLFwiY29kZVwiOlwiRVQwNzIwXCIsXCJsb2NhdGlvblwiOlwiVDEyNjA1XCJ9XG5jbGFzcyBUaW1ldGFibGVFbnRyeSB7XG4gICAgY29uc3RydWN0b3IoYWJicmV2aWF0aW9uLCBzdGFydFRpbWUsIGVuZFRpbWUsIHR5cGUsIGNvZGUsIGxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuYWJicmV2aWF0aW9uID0gYWJicmV2aWF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZW5kVGltZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIH1cbiAgICBnZXRBYmJyZXZpYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFiYnJldmlhdGlvbjtcbiAgICB9XG4gICAgZ2V0VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgICB9XG4gICAgZ2V0VHlwZVN0cmluZygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVGltZXRhYmxlRW50cnlUeXBlLkxhYjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMYWJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGltZXRhYmxlRW50cnlUeXBlLkxlY3R1cmU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGVjdHVyZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUaW1ldGFibGVFbnRyeVR5cGUuVHV0b3JpYWw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHV0b3JpYWxcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRNb2R1bGVDb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2RlO1xuICAgIH1cbiAgICBnZXRMb2NhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYXRpb247XG4gICAgfVxuICAgIGdldFN0YXJ0RGF0ZVRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0VGltZTtcbiAgICB9XG4gICAgZ2V0RW5kRGF0ZVRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZFRpbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgcGllY2Ugb2YgSlNPTiBpbnRvIGEgVGltZXRhYmxlRW50cnlcbiAgICAgKiBAcGFyYW0ganNvbiBUaGUgSlNPTiB0byBjb252ZXJ0IHRvIGEgVGltZXRhYmxlRW50cnlcbiAgICAgKiBAcGFyYW0gZGF0ZVN0cmluZyBUaGUgc3RyaW5nIG9mIHRoZSBkYXRlLCBpbiBERE1NWVkgZm9ybWF0XG4gICAgICovXG4gICAgc3RhdGljIGZyb21KU09OKGpzb24sIGRhdGVTdHJpbmcpIHtcbiAgICAgICAgbGV0IHJhd0pTT04gPSBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICAvLyBQYXJzZSB0aGUgZGF0ZSBhbmQgdGltZSBvZiB0aGUgdGltZXRhYmxlIGVudHJ5IGZpcnN0XG4gICAgICAgIGxldCBzdGFydFRpbWVTdHJpbmcgPSByYXdKU09OWydzdGFydFRpbWUnXTtcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IG1vbWVudChkYXRlU3RyaW5nLCBcIkRETU1ZWVwiKTtcbiAgICAgICAgc3RhcnRUaW1lLmhvdXIocGFyc2VJbnQoc3RhcnRUaW1lU3RyaW5nLnN1YnN0cigwLCAyKSwgMTApKTtcbiAgICAgICAgc3RhcnRUaW1lLm1pbnV0ZShwYXJzZUludChzdGFydFRpbWVTdHJpbmcuc3Vic3RyKDMsIDUpLCAxMCkpO1xuICAgICAgICBsZXQgZW5kVGltZVN0cmluZyA9IHJhd0pTT05bJ2VuZFRpbWUnXTtcbiAgICAgICAgbGV0IGVuZFRpbWUgPSBtb21lbnQoZGF0ZVN0cmluZywgXCJERE1NWVlcIik7XG4gICAgICAgIGVuZFRpbWUuaG91cihwYXJzZUludChlbmRUaW1lU3RyaW5nLnN1YnN0cigwLCAyKSwgMTApKTtcbiAgICAgICAgZW5kVGltZS5taW51dGUocGFyc2VJbnQoZW5kVGltZVN0cmluZy5zdWJzdHIoMywgNSksIDEwKSk7XG4gICAgICAgIGxldCBlbnRyeSA9IG5ldyBUaW1ldGFibGVFbnRyeShyYXdKU09OWydhYmJyZXZpYXRpb24nXSwgc3RhcnRUaW1lLnRvRGF0ZSgpLCBlbmRUaW1lLnRvRGF0ZSgpLCByYXdKU09OWyd0eXBlJ10sIHJhd0pTT05bJ2NvZGUnXSwgcmF3SlNPTlsnbG9jYXRpb24nXSk7XG4gICAgICAgIHJldHVybiBlbnRyeTtcbiAgICB9XG4gICAgc3RhdGljIGlzVmFsaWQoanNvbikge1xuICAgICAgICBsZXQgdW52YWxpZGF0ZWRKU09OID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgICAgIHVudmFsaWRhdGVkSlNPTi5oYXNPd25Qcm9wZXJ0eSgnYWJicmV2aWF0aW9uJykgPyB2YWxpZCA9IHRydWUgOiB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB1bnZhbGlkYXRlZEpTT04uaGFzT3duUHJvcGVydHkoJ3N0YXJ0VGltZScpID8gdmFsaWQgPSB0cnVlIDogdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgdW52YWxpZGF0ZWRKU09OLmhhc093blByb3BlcnR5KCdlbmRUaW1lJykgPyB2YWxpZCA9IHRydWUgOiB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB1bnZhbGlkYXRlZEpTT04uaGFzT3duUHJvcGVydHkoJ3R5cGUnKSA/IHZhbGlkID0gdHJ1ZSA6IHZhbGlkID0gZmFsc2U7XG4gICAgICAgIHVudmFsaWRhdGVkSlNPTi5oYXNPd25Qcm9wZXJ0eSgnY29kZScpID8gdmFsaWQgPSB0cnVlIDogdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgdW52YWxpZGF0ZWRKU09OLmhhc093blByb3BlcnR5KCdsb2NhdGlvbicpID8gdmFsaWQgPSB0cnVlIDogdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH1cbn1cbmV4cG9ydHMuVGltZXRhYmxlRW50cnkgPSBUaW1ldGFibGVFbnRyeTtcbi8vI2VuZHJlZ2lvbiBUaW1ldGFibGVcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gYXV0aGVudGljYXRlZCByZXF1ZXN0IHVzaW5nIGFuIGV4aXN0aW5nIHRva2VuXG4gKiBAcGFyYW0gbWV0aG9kIFRoZSBIVFRQIG1ldGhvZCB0byB1c2UgZm9yIHRoaXMgcmVxdWVzdFxuICogQHBhcmFtIHVybCBUaGUgVVJMIHRvIHVzZSBmb3IgdGhpcyByZXF1ZXN0XG4gKiBAcGFyYW0gYXN5bmMgV2hldGhlciB0aGUgcmVxdWVzdCBzaG91bGQgYmUgZG9uZSBhc3luY2hyb25vdXNseVxuICogQHBhcmFtIHRva2VuIFRoZSB0b2tlbiBXSVRIT1VUIHRoZSBcIkJlYXJlciBcIiBwcmVmaXhcbiAqL1xuZnVuY3Rpb24gYXV0aGVudGljYXRlZFJlcXVlc3QobWV0aG9kLCB1cmwsIGFzeW5jLCB0b2tlbikge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCBhc3luYyk7XG4gICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuICAgIHJldHVybiByZXF1ZXN0O1xufVxuZXhwb3J0cy5hdXRoZW50aWNhdGVkUmVxdWVzdCA9IGF1dGhlbnRpY2F0ZWRSZXF1ZXN0O1xuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9rZW4gc3RvcmVkIGluIENocm9tZSdzIHN0b3JhZ2dlIGlzIGEgdmFsaWRcbiAqIHRva2VuIChpLmUuIHRoZSB1c2VyIGlzIGFscmVhZHkgYXV0aGVudGljYXRlZCkuXG4gKiBAcGFyYW0gY2FsbGJhY2sgQSBsYW1iZGEgdGhhdCByZXR1cm5zIHRoZSBhdXRoZW50aWNhdGVkIHN0YXRlIHRocm91Z2ggYSBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB0b2tlbiBUaGUgc2Vzc2lvbiB0b2tlbiwgaWYgdGhlIHVzZXIgaXMgaW5kZWVkIGF1dGhlbnRpY2F0ZWQuIEVsc2UsIGl0IHJldHVybnMgdW5kZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIHVzZXJJc0F1dGhlbnRpY2F0ZWQoY2FsbGJhY2spIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgndXNlcicsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgLy8gRmlyc3Qgcm91bmQ6IGNoZWNraW5nIGZvciBleGlzdGVuY2Ugb2YgdG9rZW5cbiAgICAgICAgaWYgKHJlc3VsdFsndXNlciddICYmIHJlc3VsdFsndXNlciddWydhY2Nlc3NUb2tlbiddKSB7XG4gICAgICAgICAgICAvLyBTZWNvbmQgcm91bmQ6IHRva2VuIHZhbGlkaXR5IGNoZWNraW5nIHdpdGggYSBzbWFsbCBBUEkgZW5kcG9pbnRcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gYXV0aGVudGljYXRlZFJlcXVlc3QoXCJQT1NUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS9hcGkvQ291bnRVbnJlYWRJdGVtXCIsIHRydWUsIHJlc3VsdFsndXNlciddWydhY2Nlc3NUb2tlbiddKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9rZW4gaXMgdmFsaWQsIHJldHVybiBjYWxsYmFjayB3aXRoIHRydWVcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSwgcmVzdWx0Wyd1c2VyJ11bJ2FjY2Vzc1Rva2VuJ10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlLCB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnVzZXJJc0F1dGhlbnRpY2F0ZWQgPSB1c2VySXNBdXRoZW50aWNhdGVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBTUCA9IHJlcXVpcmUoXCIuL2RhdGF0eXBlc1wiKTtcbmNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuLyoqXG4gKiBIb29rcyB1cCB0byBhIC5jbGljaygpIGxpc3RlbmVyIGZvciB0aGUgbG9naW4gZXZlbnRcbiAqIEBwYXJhbSBzdGFydFBvbGxlcnMgQSBjYWxsYmFjayBmb3IgdGhlIG1haW4gcG9wdXAudHMgdG8gaW5pdGlhbGlzZSByZWN1cnJpbmcgZXZlbnRzIChpLmUuIHBvbGxlcnMpXG4gKi9cbmZ1bmN0aW9uIGxvZ2luTGlzdGVuZXIoc3RhcnRQb2xsZXJzKSB7XG4gICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExvZ2luIGNsaWNrZWRcIik7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS90b2tlblwiLCB0cnVlKTtcbiAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9vbGQgY29kZTogdGhpcy5yZWFkeVN0YXRlID09IDQgJiYgXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIC8vIFNhdmUgbmFtZSBhbmQgdG9rZW4gaW50byBDaHJvbWUgc3RvcmFnZVxuICAgICAgICAgICAgaWYgKFNQLlVzZXIuaXNWYWxpZCh0aGlzLnJlc3BvbnNlVGV4dCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IFNQLlVzZXIuZnJvbUpTT04odGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgJ3VzZXInOiB1c2VyIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbREVCVUddOiBMb2dpbiBzdWNjZWVkZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgdGhlIGxvZ2luIGRpYWxvZyBhbmQgc2hvdyB0aGUgbWFpbiBVSVxuICAgICAgICAgICAgICAgICAgICAkKCcjYXV0aCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI21haW4nKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHBvbGxlcnMgYnkgY2FsbGluZyBiYWNrIHRoZSBtYWluIGZpbGUgKHBvcHVwLnRzKVxuICAgICAgICAgICAgICAgICAgICBzdGFydFBvbGxlcnMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgZXJyb3JcbiAgICAgICAgICAgICAgICAkKCcjYXV0aEVycm9yJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoJyNhdXRoRXJyb3InKS50ZXh0KFNQLkVSUk9SX0FVVEhfSU5WQUxJRF9KU09OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIExvZ2luIGZhaWxlZCBpbiBzb21lIHdheVxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExvZ2luIGZhaWxlZDogXCIpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAvLyBFcnJvciBjb2RlIFwiMlwiIG1lYW5zIGxvZ2luIGZhaWxlZFxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlT2JqZWN0ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2VPYmplY3RbXCJlcnJvclwiXSA9PT0gXCIyXCIpIHsgLy9OT1RFOiBUSElTIElTIEEgU1RSSU5HIVxuICAgICAgICAgICAgICAgICQoJyNhdXRoRXJyb3InKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJCgnI2F1dGhFcnJvcicpLnRleHQoU1AuRVJST1JfQVVUSF9JTlZBTElEX1BBU1NXT1JEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgLy8gQ29uc3RydWN0IGZpbmFsIHBheWxvYWRcbiAgICBsZXQgcGF5bG9hZCA9IFwiZ3JhbnRfdHlwZT1wYXNzd29yZFwiICtcbiAgICAgICAgXCImdXNlcm5hbWU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoJCgnI3VzZXJuYW1lJykudmFsKCkpICtcbiAgICAgICAgXCImcGFzc3dvcmQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoJCgnI3Bhc3N3b3JkJykudmFsKCkpICtcbiAgICAgICAgXCImZGV2aWNlVG9rZW49YXl5XCI7XG4gICAgcmVxdWVzdC5zZW5kKHBheWxvYWQpO1xufVxuZXhwb3J0cy5sb2dpbkxpc3RlbmVyID0gbG9naW5MaXN0ZW5lcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcbmNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuY29uc3QgU1AgPSByZXF1aXJlKFwiLi9kYXRhdHlwZXNcIik7XG5jb25zdCBMaXN0ZW5lciA9IHJlcXVpcmUoXCIuL2xpc3RlbmVyc1wiKTtcbmNvbnN0IEhlbHBlciA9IHJlcXVpcmUoXCIuL2hlbHBlclwiKTtcbmxldCBjb3VudCA9IDA7XG5mdW5jdGlvbiBzdGFydEFsbFBvbGxlcnMoKSB7XG4gICAgY2xvY2tQb2xsKCk7IC8vIHRoaXMgZG9lcyBub3QgdXNlIGludGVydmFsIGFzIGl0IGlzIHRpbWUgc2Vuc2l0aXZlXG4gICAgY2FsZW5kYXJQb2xsKCk7XG4gICAgdGltZXRhYmxlUG9sbCgpO1xuICAgIHNldEludGVydmFsKGNhbGVuZGFyUG9sbCwgMTAwMCAqIDYwICogNSk7IC8vIDUgbWludXRlIGNhbGVuZGFyIHBvbGxpbmdcbiAgICBzZXRJbnRlcnZhbCh0aW1ldGFibGVQb2xsLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgdGltZXRhYmxlIHBvbGxpbmdcbn1cbi8vI3JlZ2lvbiBQb2xsZXJzXG5mdW5jdGlvbiBjbG9ja1BvbGwoKSB7XG4gICAgJCgnI3RpbWUnKS50ZXh0KG1vbWVudCgpLmZvcm1hdCgnSEg6bW06c3MnKSk7XG4gICAgc2V0VGltZW91dChjbG9ja1BvbGwsIDEwMDApOyAvLyAxIHNlY29uZCBwb2xsaW5nXG59XG5mdW5jdGlvbiBjYWxlbmRhclBvbGwoKSB7XG4gICAgLy8gR2V0IFNQIEFjYWRlbWljIENhbGVuZGFyIGFuZCByZWFkIGZyb20gSlNPTlxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIC8vIEdldCBhbGwgb2JqZWN0cyBcbiAgICAgICAgICAgIGxldCBhbGxDYWxlbmRhckVudHJpZXMgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGxldCByZWxldmFudEVudHJpZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQ2FsZW5kYXJFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0RGF0ZSA9IERhdGUucGFyc2UoYWxsQ2FsZW5kYXJFbnRyaWVzW2ldLnN0YXJ0VGltZSk7XG4gICAgICAgICAgICAgICAgbGV0IGVuZERhdGUgPSBEYXRlLnBhcnNlKGFsbENhbGVuZGFyRW50cmllc1tpXS5lbmRUaW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+IHN0YXJ0RGF0ZSAmJiBjdXJyZW50RGF0ZSA8IGVuZERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsZXZhbnRFbnRyaWVzLnB1c2goYWxsQ2FsZW5kYXJFbnRyaWVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgc3RhdHVzXG4gICAgICAgICAgICBpZiAocmVsZXZhbnRFbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgc2Nob29sU3RhdGVTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyArPSBcIiwgXCI7XG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nICs9IGVsZW1lbnQuc3VtbWFyeTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyA9IHNjaG9vbFN0YXRlU3RyaW5nLnN1YnN0cigyLCBzY2hvb2xTdGF0ZVN0cmluZy5sZW5ndGgpOyAvLyBSZW1vdmUgdGhlIGZpcnN0IDIgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgICQoJyNjdXJyZW50U3RhdHVzJykudGV4dChzY2hvb2xTdGF0ZVN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjY3VycmVudFN0YXR1cycpLnRleHQoXCJObyBTY2hvb2wgRXZlbnRzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlcGVhdCByZXF1ZXN0IG9uY2UgaXQgaXMgbG9hZGVkIG9yIHVuc3VjY2Vzc2Z1bGx5IGxvYWRlZFxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTG9hZGVkIFNQIENhbGVuZGFyXCIpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS9hcGkvR2V0QWNhZENhbGVuZGFyXCIsIHRydWUpO1xuICAgIHJlcXVlc3Quc2VuZCgpO1xufVxuZnVuY3Rpb24gdGltZXRhYmxlUG9sbCgpIHtcbiAgICAvLyBHZXQgdGltZXRhYmxlIGZvciB0b2RheSBhbmQgc2VlIGlmIHVzZXIgaXMgYXR0ZW5kaW5nIGxlc3NvblxuICAgIC8vIE5vdGU6IG5vIGxlc3NvbiBzdGF0ZTogW3tcImFiYnJldmlhdGlvblwiOlwiXCIsXCJzdGFydFRpbWVcIjpcIlwiLFwiZW5kVGltZVwiOlwiXCIsXCJldmVudFwiOm51bGwsXCJ0eXBlXCI6XCJcIixcImNvZGVcIjpcIlwiLFwibG9jYXRpb25cIjpcIlwifV1cbiAgICBIZWxwZXIudXNlcklzQXV0aGVudGljYXRlZChmdW5jdGlvbiAoYXV0aGVudGljYXRlZCwgdG9rZW4pIHtcbiAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZWQgJiYgdG9rZW4pIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZVN0cmluZyA9IG1vbWVudCgpLmZvcm1hdCgnRERNTVlZJyk7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXSBSZXF1ZXN0ZWQgZm9yIHRpbWV0YWJsZSB3aXRoIGRhdGU6IFwiICsgY3VycmVudERhdGVTdHJpbmcpO1xuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBIZWxwZXIuYXV0aGVudGljYXRlZFJlcXVlc3QoXCJHRVRcIiwgXCJodHRwczovL21vYmlsZWFwcHMuc3AuZWR1LnNnL1NQTW9iaWxlQVBJL2FwaS9HZXRTdHVkZW50VGltZXRhYmxlQnlJZEFuZERhdGUvXCIgKyBjdXJyZW50RGF0ZVN0cmluZywgdHJ1ZSwgdG9rZW4pO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogUmVxdWVzdGVkIGZvciB0aW1ldGFibGUgd2l0aCByZXR1cm5lZCBkYXRhOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc3BvbnNlVGV4dCA9PSBTUC5USU1FVEFCTEVfTk9fTEVTU09OUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gbGVzc29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2N1cnJlbnRMZXNzb24nKS50ZXh0KFwiTm8gTGVzc29uXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzb25BcnJheSA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSTogVmFsaWRhdGUgYWxsIHRpbWV0YWJsZSBlbnRyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGltZXRhYmxlRW50cmllcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gSlNPTi5zdHJpbmdpZnkoanNvbkFycmF5W2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW50cnlWYWxpZCA9IFNQLlRpbWV0YWJsZUVudHJ5LmlzVmFsaWQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5VmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVudHJ5ID0gU1AuVGltZXRhYmxlRW50cnkuZnJvbUpTT04oZWxlbWVudCwgY3VycmVudERhdGVTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSTogSW5zZXJ0IGFsbCBlbnRyaWVzIGludG8gYXJyYXkgd2hlcmUgaXQgaXMgY3VycmVudGx5IGhhcHBlbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgdGltZTogXCIgKyBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdGFydCBkYXRlXCIgKyBlbnRyeS5nZXRTdGFydERhdGVUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVuZCB0aW1lOiBcIiArIGVudHJ5LmdldEVuZERhdGVUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudERhdGVUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmdldFN0YXJ0RGF0ZVRpbWUoKSA8IGN1cnJlbnREYXRlVGltZSAmJiBlbnRyeS5nZXRFbmREYXRlVGltZSgpID4gY3VycmVudERhdGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1ldGFibGVFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExlc3NvbiBjdXJyZW50bHkgcnVubmluZzogXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTGVzc29uIG5vdCBydW5uaW5nOiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBUaW1ldGFibGUgZW50cnkgaXMgaW52YWxpZDpcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSUk6IERpc3BsYXkgY3VycmVudCBsZXNzb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1ldGFibGVFbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjY3VycmVudExlc3NvbicpLnRleHQodGltZXRhYmxlRW50cmllc1swXS5nZXRBYmJyZXZpYXRpb24oKSArIFwiIFwiICsgdGltZXRhYmxlRW50cmllc1swXS5nZXRUeXBlU3RyaW5nKCkgKyBcIiBAIFwiICsgdGltZXRhYmxlRW50cmllc1swXS5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjdXJyZW50TGVzc29uJykudGV4dChcIk5vIExlc3NvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBGYWlsZWQgdG8gbG9hZCB0aW1ldGFibGU6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRoaXMuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXTogVG9rZW4gaW52YWxpZCwgZm91bmQgZHVyaW5nIHRpbWV0YWJsZSByZXRyaWV2YWwhXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyNlbmRyZWdpb24gUG9sbGVyc1xuLy8gSW5pdGlhbGlzYXRpb24gZm9yIGpRdWVyeS4gVGhpcyBibG9jayBydW5zIHdoZW4gZG9jdW1lbnQgaXMgcmVhZHlcbiQoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5mbyA9IHtcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICBjdXJyZW50V2luZG93OiB0cnVlXG4gICAgfTtcbiAgICBjaHJvbWUudGFicy5xdWVyeShxdWVyeUluZm8sIGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgICAgIC8vICQoJyN1cmwnKS50ZXh0KHRhYnNbMF0udXJsKTtcbiAgICAgICAgJCgnI3RpbWUnKS50ZXh0KG1vbWVudCgpLmZvcm1hdCgnSEg6bW06c3MnKSk7XG4gICAgfSk7XG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogY291bnQudG9TdHJpbmcoKSB9KTtcbiAgICAkKCcjY291bnRVcCcpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogKCsrY291bnQpLnRvU3RyaW5nKCkgfSk7XG4gICAgfSk7XG4gICAgLy8gJCgnI2NoYW5nZUJhY2tncm91bmQnKS5jbGljaygoKT0+e1xuICAgIC8vICAgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0sIGZ1bmN0aW9uKHRhYnMpIHtcbiAgICAvLyAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFic1swXS5pZCwge1xuICAgIC8vICAgICAgIGNvbG9yOiAnIzU1NTU1NSdcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgZnVuY3Rpb24obXNnKSB7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgbWVzc2FnZTpcIiwgbXNnKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgICAvLyBGaXJzdCB0aGluZ3MgZmlyc3QsIGNoZWNrIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZFxuICAgIEhlbHBlci51c2VySXNBdXRoZW50aWNhdGVkKGZ1bmN0aW9uIChhdXRoZW50aWNhdGVkKSB7XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICAvLyBVc2VyIGlzIGxvZ2dlZCBpbiwgc2hvdyBtYWluIFVJIGFuZCBpbml0aWFsaXNlIHBvbGxlcnNcbiAgICAgICAgICAgICQoJyNtYWluJykuc2hvdygpO1xuICAgICAgICAgICAgJCgnI2F1dGgnKS5oaWRlKCk7XG4gICAgICAgICAgICBzdGFydEFsbFBvbGxlcnMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vdCBhdXRoZW50aWNhdGVkLCBkaXNwbGF5IGxvZ2luIFVJIG9ubHlcbiAgICAgICAgICAgICQoJyNtYWluJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnI2F1dGgnKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBJbml0aWFsaXNlIExvZ2luIGxpc3RlbmVyXG4gICAgJCgnI2xvZ2luQnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBMaXN0ZW5lci5sb2dpbkxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFN0YXJ0IHVwIHRoZSBwb2xsZXJzLCBhcyB0aGlzIGxhbWJkYSB3aWxsIG9ubHkgYmUgY2FsbGVkIGlmXG4gICAgICAgICAgICAvLyB0aGUgbG9naW4gaXMgc3VjY2Vzc2Z1bFxuICAgICAgICAgICAgc3RhcnRBbGxQb2xsZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9