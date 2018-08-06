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
                    console.log(this.responseText);
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
                                if (entry.getStartDateTime().getTime() > Date.now() && entry.getEndDateTime().getTime() < Date.now()) {
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
                                console.log("[WARNING]: Timetable entry is invalid:");
                                console.log(element);
                            }
                        }
                        // Stage III: Display current lesson
                        if (timetableEntries.length > 0) {
                            $('#currentLesson').text(timetableEntries[0].getAbbreviation());
                        }
                        else {
                            $('#currentLesson').text("No Lesson");
                        }
                    }
                }
                else {
                    console.log("[WARNING]: Failed to load timetable: ");
                    console.log(this.status);
                    console.log(this.responseText);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGF0eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9saXN0ZW5lcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZGQUE2RjtBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHFGQUFxRjtBQUN0RixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDZGQUE2RjtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx1Q0FBdUMseUJBQXlCO0FBQ2hFO0FBQ0EsMkNBQTJDLDZCQUE2QjtBQUN4RSxLQUFLO0FBQ0w7QUFDQSw0QkFBNEIsa0NBQWtDO0FBQzlEO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWixVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwb3B1cFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9wb3B1cC50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuLy8jcmVnaW9uIENvbnN0YW50IHN0cmluZ3NcbmV4cG9ydHMuRVJST1JfQVVUSF9JTlZBTElEX0pTT04gPSBcIkxvZ2luIHNlcnZlciByZXR1cm5lZCBhbiBpbnZhbGlkIHJlc3BvbnNlLiBQbGVhc2UgY29udGFjdCB0aGUgZGV2ZWxvcGVyLlwiO1xuZXhwb3J0cy5FUlJPUl9BVVRIX0lOVkFMSURfUEFTU1dPUkQgPSBcIkluY29ycmVjdCBwYXNzd29yZCBvciB1c2VybmFtZVwiO1xuZXhwb3J0cy5USU1FVEFCTEVfTk9fTEVTU09OUyA9ICdbe1wiYWJicmV2aWF0aW9uXCI6XCJcIixcInN0YXJ0VGltZVwiOlwiXCIsXCJlbmRUaW1lXCI6XCJcIixcImV2ZW50XCI6bnVsbCxcInR5cGVcIjpcIlwiLFwiY29kZVwiOlwiXCIsXCJsb2NhdGlvblwiOlwiXCJ9XSc7XG47XG4vLyNlbmRyZWdpb24gQ2FsZW5kYXJcbi8vI3JlZ2lvbiBVc2VyXG4vKipcbiAqIEEgY2xhc3MgdGhhdCBlbmNhcHN1bGF0ZXMgdXNlciBpbmZvcm1hdGlvbiwgc3VjaCBhcyB0aGUgdXNlcidzXG4gKiBhY2Nlc3MgdG9rZW4gYW5kIG5hbWUsIGFuZCBwcm92aWRlcyBjb21tb24gZnVuY3Rpb25hbGl0eSBzdWNoIGFzXG4gKiBKU09OIHZhbGlkYXRpb24gYW5kIGNvbnZlcnNpb24uXG4gKi9cbmNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKGFjY2Vzc1Rva2VuLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgZ2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc1Rva2VuO1xuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICAvLyBmcm9tSlNPTiBpcyB1c2VkIHRvIGNvbnZlcnQgYW4gc2VyaWFsaXplZCB2ZXJzaW9uXG4gICAgLy8gb2YgdGhlIFVzZXIgdG8gYW4gaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICAgICAgbGV0IHJhd0pTT04gPSBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICByZXR1cm4gbmV3IFVzZXIocmF3SlNPTlsnYWNjZXNzX3Rva2VuJ10sIHJhd0pTT05bJ25hbWUnXSk7XG4gICAgfVxuICAgIHN0YXRpYyBpc1ZhbGlkKGpzb24pIHtcbiAgICAgICAgbGV0IHVudmFsaWRhdGVkSlNPTiA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB1bnZhbGlkYXRlZEpTT04uaGFzT3duUHJvcGVydHkoJ2FjY2Vzc190b2tlbicpID8gdmFsaWQgPSB0cnVlIDogdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgdW52YWxpZGF0ZWRKU09OLmhhc093blByb3BlcnR5KCduYW1lJykgPyB2YWxpZCA9IHRydWUgOiB2YWxpZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfVxufVxuZXhwb3J0cy5Vc2VyID0gVXNlcjtcbi8vIGV4cG9ydCBpbnRlcmZhY2UgVXNlckpTT04ge1xuLy8gICBhY2Nlc3NfdG9rZW46IHN0cmluZztcbi8vICAgdG9rZW5fdHlwZTogc3RyaW5nO1xuLy8gICBleHBpcmVzX2luOiBudW1iZXI7XG4vLyAgIHJvbGU6IHN0cmluZztcbi8vICAgbmFtZTogc3RyaW5nO1xuLy8gfTtcbi8vI2VuZHJlZ2lvbiBVc2VyXG4vLyNyZWdpb24gVGltZXRhYmxlXG52YXIgVGltZXRhYmxlRW50cnlUeXBlO1xuKGZ1bmN0aW9uIChUaW1ldGFibGVFbnRyeVR5cGUpIHtcbiAgICBUaW1ldGFibGVFbnRyeVR5cGVbXCJMYWJcIl0gPSBcIkxBQlwiO1xuICAgIFRpbWV0YWJsZUVudHJ5VHlwZVtcIkxlY3R1cmVcIl0gPSBcIkxFQ1wiO1xuICAgIFRpbWV0YWJsZUVudHJ5VHlwZVtcIlR1dG9yaWFsXCJdID0gXCJUVVRcIjtcbn0pKFRpbWV0YWJsZUVudHJ5VHlwZSA9IGV4cG9ydHMuVGltZXRhYmxlRW50cnlUeXBlIHx8IChleHBvcnRzLlRpbWV0YWJsZUVudHJ5VHlwZSA9IHt9KSk7XG4vLyBUeXBpY2FsIGVudHJ5OiB7XCJhYmJyZXZpYXRpb25cIjpcIkFNVFwiLFwic3RhcnRUaW1lXCI6XCIxMzowMFwiLFwiZW5kVGltZVwiOlwiMTc6MDBcIixcImV2ZW50XCI6bnVsbCxcInR5cGVcIjpcIkxBQlwiLFwiY29kZVwiOlwiRVQwNzIwXCIsXCJsb2NhdGlvblwiOlwiVDEyNjA1XCJ9XG5jbGFzcyBUaW1ldGFibGVFbnRyeSB7XG4gICAgY29uc3RydWN0b3IoYWJicmV2aWF0aW9uLCBzdGFydFRpbWUsIGVuZFRpbWUsIHR5cGUsIGNvZGUsIGxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuYWJicmV2aWF0aW9uID0gYWJicmV2aWF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZW5kVGltZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIH1cbiAgICBnZXRBYmJyZXZpYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFiYnJldmlhdGlvbjtcbiAgICB9XG4gICAgZ2V0VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgICB9XG4gICAgZ2V0TW9kdWxlQ29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZTtcbiAgICB9XG4gICAgZ2V0TG9jYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2F0aW9uO1xuICAgIH1cbiAgICBnZXRTdGFydERhdGVUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydFRpbWU7XG4gICAgfVxuICAgIGdldEVuZERhdGVUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmRUaW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHBpZWNlIG9mIEpTT04gaW50byBhIFRpbWV0YWJsZUVudHJ5XG4gICAgICogQHBhcmFtIGpzb24gVGhlIEpTT04gdG8gY29udmVydCB0byBhIFRpbWV0YWJsZUVudHJ5XG4gICAgICogQHBhcmFtIGRhdGVTdHJpbmcgVGhlIHN0cmluZyBvZiB0aGUgZGF0ZSwgaW4gRERNTVlZIGZvcm1hdFxuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tSlNPTihqc29uLCBkYXRlU3RyaW5nKSB7XG4gICAgICAgIGxldCByYXdKU09OID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgLy8gUGFyc2UgdGhlIGRhdGUgYW5kIHRpbWUgb2YgdGhlIHRpbWV0YWJsZSBlbnRyeSBmaXJzdFxuICAgICAgICBsZXQgc3RhcnRUaW1lU3RyaW5nID0gcmF3SlNPTlsnc3RhcnRUaW1lJ107XG4gICAgICAgIGxldCBzdGFydFRpbWUgPSBtb21lbnQoZGF0ZVN0cmluZywgXCJERE1NWVlcIik7XG4gICAgICAgIHN0YXJ0VGltZS5ob3VyKHBhcnNlSW50KHN0YXJ0VGltZVN0cmluZy5zdWJzdHIoMCwgMiksIDEwKSk7XG4gICAgICAgIHN0YXJ0VGltZS5taW51dGUocGFyc2VJbnQoc3RhcnRUaW1lU3RyaW5nLnN1YnN0cigzLCA1KSwgMTApKTtcbiAgICAgICAgbGV0IGVuZFRpbWVTdHJpbmcgPSByYXdKU09OWydlbmRUaW1lJ107XG4gICAgICAgIGxldCBlbmRUaW1lID0gbW9tZW50KGRhdGVTdHJpbmcsIFwiRERNTVlZXCIpO1xuICAgICAgICBlbmRUaW1lLmhvdXIocGFyc2VJbnQoZW5kVGltZVN0cmluZy5zdWJzdHIoMCwgMiksIDEwKSk7XG4gICAgICAgIGVuZFRpbWUubWludXRlKHBhcnNlSW50KGVuZFRpbWVTdHJpbmcuc3Vic3RyKDMsIDUpLCAxMCkpO1xuICAgICAgICBsZXQgZW50cnkgPSBuZXcgVGltZXRhYmxlRW50cnkocmF3SlNPTlsnYWJicmV2aWF0aW9uJ10sIHN0YXJ0VGltZS50b0RhdGUoKSwgZW5kVGltZS50b0RhdGUoKSwgcmF3SlNPTlsndHlwZSddLCByYXdKU09OWydjb2RlJ10sIHJhd0pTT05bJ2xvY2F0aW9uJ10pO1xuICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgfVxuICAgIHN0YXRpYyBpc1ZhbGlkKGpzb24pIHtcbiAgICAgICAgbGV0IHVudmFsaWRhdGVkSlNPTiA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB1bnZhbGlkYXRlZEpTT04uaGFzT3duUHJvcGVydHkoJ2FiYnJldmlhdGlvbicpID8gdmFsaWQgPSB0cnVlIDogdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgdW52YWxpZGF0ZWRKU09OLmhhc093blByb3BlcnR5KCdzdGFydFRpbWUnKSA/IHZhbGlkID0gdHJ1ZSA6IHZhbGlkID0gZmFsc2U7XG4gICAgICAgIHVudmFsaWRhdGVkSlNPTi5oYXNPd25Qcm9wZXJ0eSgnZW5kVGltZScpID8gdmFsaWQgPSB0cnVlIDogdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgdW52YWxpZGF0ZWRKU09OLmhhc093blByb3BlcnR5KCd0eXBlJykgPyB2YWxpZCA9IHRydWUgOiB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB1bnZhbGlkYXRlZEpTT04uaGFzT3duUHJvcGVydHkoJ2NvZGUnKSA/IHZhbGlkID0gdHJ1ZSA6IHZhbGlkID0gZmFsc2U7XG4gICAgICAgIHVudmFsaWRhdGVkSlNPTi5oYXNPd25Qcm9wZXJ0eSgnbG9jYXRpb24nKSA/IHZhbGlkID0gdHJ1ZSA6IHZhbGlkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9XG59XG5leHBvcnRzLlRpbWV0YWJsZUVudHJ5ID0gVGltZXRhYmxlRW50cnk7XG4vLyNlbmRyZWdpb24gVGltZXRhYmxlXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogR2VuZXJhdGVzIGFuIGF1dGhlbnRpY2F0ZWQgcmVxdWVzdCB1c2luZyBhbiBleGlzdGluZyB0b2tlblxuICogQHBhcmFtIG1ldGhvZCBUaGUgSFRUUCBtZXRob2QgdG8gdXNlIGZvciB0aGlzIHJlcXVlc3RcbiAqIEBwYXJhbSB1cmwgVGhlIFVSTCB0byB1c2UgZm9yIHRoaXMgcmVxdWVzdFxuICogQHBhcmFtIGFzeW5jIFdoZXRoZXIgdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIGRvbmUgYXN5bmNocm9ub3VzbHlcbiAqIEBwYXJhbSB0b2tlbiBUaGUgdG9rZW4gV0lUSE9VVCB0aGUgXCJCZWFyZXIgXCIgcHJlZml4XG4gKi9cbmZ1bmN0aW9uIGF1dGhlbnRpY2F0ZWRSZXF1ZXN0KG1ldGhvZCwgdXJsLCBhc3luYywgdG9rZW4pIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHJlcXVlc3Qub3BlbihtZXRob2QsIHVybCwgYXN5bmMpO1xuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcbiAgICByZXR1cm4gcmVxdWVzdDtcbn1cbmV4cG9ydHMuYXV0aGVudGljYXRlZFJlcXVlc3QgPSBhdXRoZW50aWNhdGVkUmVxdWVzdDtcbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHRva2VuIHN0b3JlZCBpbiBDaHJvbWUncyBzdG9yYWdnZSBpcyBhIHZhbGlkXG4gKiB0b2tlbiAoaS5lLiB0aGUgdXNlciBpcyBhbHJlYWR5IGF1dGhlbnRpY2F0ZWQpLlxuICogQHBhcmFtIGNhbGxiYWNrIEEgbGFtYmRhIHRoYXQgcmV0dXJucyB0aGUgYXV0aGVudGljYXRlZCBzdGF0ZSB0aHJvdWdoIGEgcGFyYW1ldGVyXG4gKiBAcGFyYW0gdG9rZW4gVGhlIHNlc3Npb24gdG9rZW4sIGlmIHRoZSB1c2VyIGlzIGluZGVlZCBhdXRoZW50aWNhdGVkLiBFbHNlLCBpdCByZXR1cm5zIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiB1c2VySXNBdXRoZW50aWNhdGVkKGNhbGxiYWNrKSB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ3VzZXInLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIC8vIEZpcnN0IHJvdW5kOiBjaGVja2luZyBmb3IgZXhpc3RlbmNlIG9mIHRva2VuXG4gICAgICAgIGlmIChyZXN1bHRbJ3VzZXInXSAmJiByZXN1bHRbJ3VzZXInXVsnYWNjZXNzVG9rZW4nXSkge1xuICAgICAgICAgICAgLy8gU2Vjb25kIHJvdW5kOiB0b2tlbiB2YWxpZGl0eSBjaGVja2luZyB3aXRoIGEgc21hbGwgQVBJIGVuZHBvaW50XG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IGF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiUE9TVFwiLCBcImh0dHBzOi8vbW9iaWxlYXBwcy5zcC5lZHUuc2cvU1BNb2JpbGVBUEkvYXBpL0NvdW50VW5yZWFkSXRlbVwiLCB0cnVlLCByZXN1bHRbJ3VzZXInXVsnYWNjZXNzVG9rZW4nXSk7XG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRva2VuIGlzIHZhbGlkLCByZXR1cm4gY2FsbGJhY2sgd2l0aCB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUsIHJlc3VsdFsndXNlciddWydhY2Nlc3NUb2tlbiddKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhmYWxzZSwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy51c2VySXNBdXRoZW50aWNhdGVkID0gdXNlcklzQXV0aGVudGljYXRlZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgU1AgPSByZXF1aXJlKFwiLi9kYXRhdHlwZXNcIik7XG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbi8qKlxuICogSG9va3MgdXAgdG8gYSAuY2xpY2soKSBsaXN0ZW5lciBmb3IgdGhlIGxvZ2luIGV2ZW50XG4gKiBAcGFyYW0gc3RhcnRQb2xsZXJzIEEgY2FsbGJhY2sgZm9yIHRoZSBtYWluIHBvcHVwLnRzIHRvIGluaXRpYWxpc2UgcmVjdXJyaW5nIGV2ZW50cyAoaS5lLiBwb2xsZXJzKVxuICovXG5mdW5jdGlvbiBsb2dpbkxpc3RlbmVyKHN0YXJ0UG9sbGVycykge1xuICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMb2dpbiBjbGlja2VkXCIpO1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vcGVuKFwiUE9TVFwiLCBcImh0dHBzOi8vbW9iaWxlYXBwcy5zcC5lZHUuc2cvU1BNb2JpbGVBUEkvdG9rZW5cIiwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vb2xkIGNvZGU6IHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIFxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAvLyBTYXZlIG5hbWUgYW5kIHRva2VuIGludG8gQ2hyb21lIHN0b3JhZ2VcbiAgICAgICAgICAgIGlmIChTUC5Vc2VyLmlzVmFsaWQodGhpcy5yZXNwb25zZVRleHQpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBTUC5Vc2VyLmZyb21KU09OKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7ICd1c2VyJzogdXNlciB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXTogTG9naW4gc3VjY2VlZGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIHRoZSBsb2dpbiBkaWFsb2cgYW5kIHNob3cgdGhlIG1haW4gVUlcbiAgICAgICAgICAgICAgICAgICAgJCgnI2F1dGgnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNtYWluJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTdGFydCBwb2xsZXJzIGJ5IGNhbGxpbmcgYmFjayB0aGUgbWFpbiBmaWxlIChwb3B1cC50cylcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRQb2xsZXJzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IGVycm9yXG4gICAgICAgICAgICAgICAgJCgnI2F1dGhFcnJvcicpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKCcjYXV0aEVycm9yJykudGV4dChTUC5FUlJPUl9BVVRIX0lOVkFMSURfSlNPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBMb2dpbiBmYWlsZWQgaW4gc29tZSB3YXlcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMb2dpbiBmYWlsZWQ6IFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgLy8gRXJyb3IgY29kZSBcIjJcIiBtZWFucyBsb2dpbiBmYWlsZWRcbiAgICAgICAgICAgIGxldCByZXNwb25zZU9iamVjdCA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlT2JqZWN0W1wiZXJyb3JcIl0gPT09IFwiMlwiKSB7IC8vTk9URTogVEhJUyBJUyBBIFNUUklORyFcbiAgICAgICAgICAgICAgICAkKCcjYXV0aEVycm9yJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoJyNhdXRoRXJyb3InKS50ZXh0KFNQLkVSUk9SX0FVVEhfSU5WQUxJRF9QQVNTV09SRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIC8vIENvbnN0cnVjdCBmaW5hbCBwYXlsb2FkXG4gICAgbGV0IHBheWxvYWQgPSBcImdyYW50X3R5cGU9cGFzc3dvcmRcIiArXG4gICAgICAgIFwiJnVzZXJuYW1lPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCQoJyN1c2VybmFtZScpLnZhbCgpKSArXG4gICAgICAgIFwiJnBhc3N3b3JkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCQoJyNwYXNzd29yZCcpLnZhbCgpKSArXG4gICAgICAgIFwiJmRldmljZVRva2VuPWF5eVwiO1xuICAgIHJlcXVlc3Quc2VuZChwYXlsb2FkKTtcbn1cbmV4cG9ydHMubG9naW5MaXN0ZW5lciA9IGxvZ2luTGlzdGVuZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbmNvbnN0IFNQID0gcmVxdWlyZShcIi4vZGF0YXR5cGVzXCIpO1xuY29uc3QgTGlzdGVuZXIgPSByZXF1aXJlKFwiLi9saXN0ZW5lcnNcIik7XG5jb25zdCBIZWxwZXIgPSByZXF1aXJlKFwiLi9oZWxwZXJcIik7XG5sZXQgY291bnQgPSAwO1xuZnVuY3Rpb24gc3RhcnRBbGxQb2xsZXJzKCkge1xuICAgIGNsb2NrUG9sbCgpOyAvLyB0aGlzIGRvZXMgbm90IHVzZSBpbnRlcnZhbCBhcyBpdCBpcyB0aW1lIHNlbnNpdGl2ZVxuICAgIGNhbGVuZGFyUG9sbCgpO1xuICAgIHRpbWV0YWJsZVBvbGwoKTtcbiAgICBzZXRJbnRlcnZhbChjYWxlbmRhclBvbGwsIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSBjYWxlbmRhciBwb2xsaW5nXG4gICAgc2V0SW50ZXJ2YWwodGltZXRhYmxlUG9sbCwgMTAwMCAqIDYwICogNSk7IC8vIDUgbWludXRlIHRpbWV0YWJsZSBwb2xsaW5nXG59XG4vLyNyZWdpb24gUG9sbGVyc1xuZnVuY3Rpb24gY2xvY2tQb2xsKCkge1xuICAgICQoJyN0aW1lJykudGV4dChtb21lbnQoKS5mb3JtYXQoJ0hIOm1tOnNzJykpO1xuICAgIHNldFRpbWVvdXQoY2xvY2tQb2xsLCAxMDAwKTsgLy8gMSBzZWNvbmQgcG9sbGluZ1xufVxuZnVuY3Rpb24gY2FsZW5kYXJQb2xsKCkge1xuICAgIC8vIEdldCBTUCBBY2FkZW1pYyBDYWxlbmRhciBhbmQgcmVhZCBmcm9tIEpTT05cbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAvLyBHZXQgYWxsIG9iamVjdHMgXG4gICAgICAgICAgICBsZXQgYWxsQ2FsZW5kYXJFbnRyaWVzID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBsZXQgcmVsZXZhbnRFbnRyaWVzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbENhbGVuZGFyRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBzdGFydERhdGUgPSBEYXRlLnBhcnNlKGFsbENhbGVuZGFyRW50cmllc1tpXS5zdGFydFRpbWUpO1xuICAgICAgICAgICAgICAgIGxldCBlbmREYXRlID0gRGF0ZS5wYXJzZShhbGxDYWxlbmRhckVudHJpZXNbaV0uZW5kVGltZSk7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPiBzdGFydERhdGUgJiYgY3VycmVudERhdGUgPCBlbmREYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5wdXNoKGFsbENhbGVuZGFyRW50cmllc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2V0IHN0YXR1c1xuICAgICAgICAgICAgaWYgKHJlbGV2YW50RW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNjaG9vbFN0YXRlU3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZWxldmFudEVudHJpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2Nob29sU3RhdGVTdHJpbmcgKz0gXCIsIFwiO1xuICAgICAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyArPSBlbGVtZW50LnN1bW1hcnk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2Nob29sU3RhdGVTdHJpbmcgPSBzY2hvb2xTdGF0ZVN0cmluZy5zdWJzdHIoMiwgc2Nob29sU3RhdGVTdHJpbmcubGVuZ3RoKTsgLy8gUmVtb3ZlIHRoZSBmaXJzdCAyIGNoYXJhY3RlcnNcbiAgICAgICAgICAgICAgICAkKCcjY3VycmVudFN0YXR1cycpLnRleHQoc2Nob29sU3RhdGVTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI2N1cnJlbnRTdGF0dXMnKS50ZXh0KFwiTm8gU2Nob29sIEV2ZW50c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXBlYXQgcmVxdWVzdCBvbmNlIGl0IGlzIGxvYWRlZCBvciB1bnN1Y2Nlc3NmdWxseSBsb2FkZWRcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExvYWRlZCBTUCBDYWxlbmRhclwiKTtcbiAgICB9O1xuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vbW9iaWxlYXBwcy5zcC5lZHUuc2cvU1BNb2JpbGVBUEkvYXBpL0dldEFjYWRDYWxlbmRhclwiLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcbn1cbmZ1bmN0aW9uIHRpbWV0YWJsZVBvbGwoKSB7XG4gICAgLy8gR2V0IHRpbWV0YWJsZSBmb3IgdG9kYXkgYW5kIHNlZSBpZiB1c2VyIGlzIGF0dGVuZGluZyBsZXNzb25cbiAgICAvLyBOb3RlOiBubyBsZXNzb24gc3RhdGU6IFt7XCJhYmJyZXZpYXRpb25cIjpcIlwiLFwic3RhcnRUaW1lXCI6XCJcIixcImVuZFRpbWVcIjpcIlwiLFwiZXZlbnRcIjpudWxsLFwidHlwZVwiOlwiXCIsXCJjb2RlXCI6XCJcIixcImxvY2F0aW9uXCI6XCJcIn1dXG4gICAgSGVscGVyLnVzZXJJc0F1dGhlbnRpY2F0ZWQoZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQsIHRva2VuKSB7XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGVkICYmIHRva2VuKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudERhdGVTdHJpbmcgPSBtb21lbnQoKS5mb3JtYXQoJ0RETU1ZWScpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR10gUmVxdWVzdGVkIGZvciB0aW1ldGFibGUgd2l0aCBkYXRlOiBcIiArIGN1cnJlbnREYXRlU3RyaW5nKTtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gSGVscGVyLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiR0VUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS9hcGkvR2V0U3R1ZGVudFRpbWV0YWJsZUJ5SWRBbmREYXRlL1wiICsgY3VycmVudERhdGVTdHJpbmcsIHRydWUsIHRva2VuKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNwb25zZVRleHQgPT0gU1AuVElNRVRBQkxFX05PX0xFU1NPTlMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIGxlc3NvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjdXJyZW50TGVzc29uJykudGV4dChcIk5vIExlc3NvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqc29uQXJyYXkgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIEk6IFZhbGlkYXRlIGFsbCB0aW1ldGFibGUgZW50cmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWV0YWJsZUVudHJpZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IEpTT04uc3RyaW5naWZ5KGpzb25BcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVudHJ5VmFsaWQgPSBTUC5UaW1ldGFibGVFbnRyeS5pc1ZhbGlkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeVZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbnRyeSA9IFNQLlRpbWV0YWJsZUVudHJ5LmZyb21KU09OKGVsZW1lbnQsIGN1cnJlbnREYXRlU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSUk6IEluc2VydCBhbGwgZW50cmllcyBpbnRvIGFycmF5IHdoZXJlIGl0IGlzIGN1cnJlbnRseSBoYXBwZW5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmdldFN0YXJ0RGF0ZVRpbWUoKS5nZXRUaW1lKCkgPiBEYXRlLm5vdygpICYmIGVudHJ5LmdldEVuZERhdGVUaW1lKCkuZ2V0VGltZSgpIDwgRGF0ZS5ub3coKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXRhYmxlRW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMZXNzb24gY3VycmVudGx5IHJ1bm5pbmc6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExlc3NvbiBub3QgcnVubmluZzogXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1dBUk5JTkddOiBUaW1ldGFibGUgZW50cnkgaXMgaW52YWxpZDpcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YWdlIElJSTogRGlzcGxheSBjdXJyZW50IGxlc3NvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWV0YWJsZUVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjdXJyZW50TGVzc29uJykudGV4dCh0aW1ldGFibGVFbnRyaWVzWzBdLmdldEFiYnJldmlhdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjdXJyZW50TGVzc29uJykudGV4dChcIk5vIExlc3NvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbV0FSTklOR106IEZhaWxlZCB0byBsb2FkIHRpbWV0YWJsZTogXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXTogVG9rZW4gaW52YWxpZCwgZm91bmQgZHVyaW5nIHRpbWV0YWJsZSByZXRyaWV2YWwhXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyNlbmRyZWdpb24gUG9sbGVyc1xuLy8gSW5pdGlhbGlzYXRpb24gZm9yIGpRdWVyeS4gVGhpcyBibG9jayBydW5zIHdoZW4gZG9jdW1lbnQgaXMgcmVhZHlcbiQoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5mbyA9IHtcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICBjdXJyZW50V2luZG93OiB0cnVlXG4gICAgfTtcbiAgICBjaHJvbWUudGFicy5xdWVyeShxdWVyeUluZm8sIGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgICAgIC8vICQoJyN1cmwnKS50ZXh0KHRhYnNbMF0udXJsKTtcbiAgICAgICAgJCgnI3RpbWUnKS50ZXh0KG1vbWVudCgpLmZvcm1hdCgnSEg6bW06c3MnKSk7XG4gICAgfSk7XG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogY291bnQudG9TdHJpbmcoKSB9KTtcbiAgICAkKCcjY291bnRVcCcpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogKCsrY291bnQpLnRvU3RyaW5nKCkgfSk7XG4gICAgfSk7XG4gICAgLy8gJCgnI2NoYW5nZUJhY2tncm91bmQnKS5jbGljaygoKT0+e1xuICAgIC8vICAgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0sIGZ1bmN0aW9uKHRhYnMpIHtcbiAgICAvLyAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFic1swXS5pZCwge1xuICAgIC8vICAgICAgIGNvbG9yOiAnIzU1NTU1NSdcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgZnVuY3Rpb24obXNnKSB7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgbWVzc2FnZTpcIiwgbXNnKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgICAvLyBGaXJzdCB0aGluZ3MgZmlyc3QsIGNoZWNrIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZFxuICAgIEhlbHBlci51c2VySXNBdXRoZW50aWNhdGVkKGZ1bmN0aW9uIChhdXRoZW50aWNhdGVkKSB7XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICAvLyBVc2VyIGlzIGxvZ2dlZCBpbiwgc2hvdyBtYWluIFVJIGFuZCBpbml0aWFsaXNlIHBvbGxlcnNcbiAgICAgICAgICAgICQoJyNtYWluJykuc2hvdygpO1xuICAgICAgICAgICAgJCgnI2F1dGgnKS5oaWRlKCk7XG4gICAgICAgICAgICBzdGFydEFsbFBvbGxlcnMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vdCBhdXRoZW50aWNhdGVkLCBkaXNwbGF5IGxvZ2luIFVJIG9ubHlcbiAgICAgICAgICAgICQoJyNtYWluJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnI2F1dGgnKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBJbml0aWFsaXNlIExvZ2luIGxpc3RlbmVyXG4gICAgJCgnI2xvZ2luQnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBMaXN0ZW5lci5sb2dpbkxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFN0YXJ0IHVwIHRoZSBwb2xsZXJzLCBhcyB0aGlzIGxhbWJkYSB3aWxsIG9ubHkgYmUgY2FsbGVkIGlmXG4gICAgICAgICAgICAvLyB0aGUgbG9naW4gaXMgc3VjY2Vzc2Z1bFxuICAgICAgICAgICAgc3RhcnRBbGxQb2xsZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9