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
exports.URL_ATS = "https://myats.sp.edu.sg/psc/cs90atstd/EMPLOYEE/HRMS/s/WEBLIB_A_ATS.ISCRIPT1.FieldFormula.IScript_SubmitAttendance";
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
function atsButtonListener() {
    chrome.tabs.create({ url: SP.URL_ATS });
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
/**
 * Checks if the user is connected to SP Wi-Fi
 */
function spWifiPoll() {
    let request = new XMLHttpRequest();
    request.onloadend = function () {
        let connected = false;
        if (this.status == 200) {
            // Check if request actually gets the real ATS page
            console.log(this.responseURL);
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
            $('#wifiLogo').css('color', 'black');
        }
        else {
            console.debug("[DEBUG]: Not connected to SP wifi");
            $('#wifiConnectedText').text("Not connected to SP Wi-Fi");
            $('#wifiLogo').css('color', 'gray');
        }
    };
    request.open("HEAD", SP.URL_ATS, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGF0eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9saXN0ZW5lcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZGQUE2RjtBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMscUZBQXFGO0FBQ3RGLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xJQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGVBQWU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFDOUMsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQkFBK0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsMEZBQTBGO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNCQUFzQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHVDQUF1Qyx5QkFBeUI7QUFDaEU7QUFDQSwyQ0FBMkMsNkJBQTZCO0FBQ3hFLEtBQUs7QUFDTDtBQUNBLDRCQUE0QixrQ0FBa0M7QUFDOUQ7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsWUFBWTtBQUNaLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicG9wdXBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvcG9wdXAudHNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcbi8vI3JlZ2lvbiBDb25zdGFudCBzdHJpbmdzXG5leHBvcnRzLkVSUk9SX0FVVEhfSU5WQUxJRF9KU09OID0gXCJMb2dpbiBzZXJ2ZXIgcmV0dXJuZWQgYW4gaW52YWxpZCByZXNwb25zZS4gUGxlYXNlIGNvbnRhY3QgdGhlIGRldmVsb3Blci5cIjtcbmV4cG9ydHMuRVJST1JfQVVUSF9JTlZBTElEX1BBU1NXT1JEID0gXCJJbmNvcnJlY3QgcGFzc3dvcmQgb3IgdXNlcm5hbWVcIjtcbmV4cG9ydHMuVElNRVRBQkxFX05PX0xFU1NPTlMgPSAnW3tcImFiYnJldmlhdGlvblwiOlwiXCIsXCJzdGFydFRpbWVcIjpcIlwiLFwiZW5kVGltZVwiOlwiXCIsXCJldmVudFwiOm51bGwsXCJ0eXBlXCI6XCJcIixcImNvZGVcIjpcIlwiLFwibG9jYXRpb25cIjpcIlwifV0nO1xuZXhwb3J0cy5VUkxfQVRTID0gXCJodHRwczovL215YXRzLnNwLmVkdS5zZy9wc2MvY3M5MGF0c3RkL0VNUExPWUVFL0hSTVMvcy9XRUJMSUJfQV9BVFMuSVNDUklQVDEuRmllbGRGb3JtdWxhLklTY3JpcHRfU3VibWl0QXR0ZW5kYW5jZVwiO1xuO1xuLy8jZW5kcmVnaW9uIENhbGVuZGFyXG4vLyNyZWdpb24gVXNlclxuLyoqXG4gKiBBIGNsYXNzIHRoYXQgZW5jYXBzdWxhdGVzIHVzZXIgaW5mb3JtYXRpb24sIHN1Y2ggYXMgdGhlIHVzZXInc1xuICogYWNjZXNzIHRva2VuIGFuZCBuYW1lLCBhbmQgcHJvdmlkZXMgY29tbW9uIGZ1bmN0aW9uYWxpdHkgc3VjaCBhc1xuICogSlNPTiB2YWxpZGF0aW9uIGFuZCBjb252ZXJzaW9uLlxuICovXG5jbGFzcyBVc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihhY2Nlc3NUb2tlbiwgbmFtZSkge1xuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIGdldEFjY2Vzc1Rva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NUb2tlbjtcbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG4gICAgLy8gZnJvbUpTT04gaXMgdXNlZCB0byBjb252ZXJ0IGFuIHNlcmlhbGl6ZWQgdmVyc2lvblxuICAgIC8vIG9mIHRoZSBVc2VyIHRvIGFuIGluc3RhbmNlIG9mIHRoZSBjbGFzc1xuICAgIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgICAgIGxldCByYXdKU09OID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgcmV0dXJuIG5ldyBVc2VyKHJhd0pTT05bJ2FjY2Vzc190b2tlbiddLCByYXdKU09OWyduYW1lJ10pO1xuICAgIH1cbiAgICBzdGF0aWMgaXNWYWxpZChqc29uKSB7XG4gICAgICAgIGxldCB1bnZhbGlkYXRlZEpTT04gPSBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgdW52YWxpZGF0ZWRKU09OLmhhc093blByb3BlcnR5KCdhY2Nlc3NfdG9rZW4nKSA/IHZhbGlkID0gdHJ1ZSA6IHZhbGlkID0gZmFsc2U7XG4gICAgICAgIHVudmFsaWRhdGVkSlNPTi5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpID8gdmFsaWQgPSB0cnVlIDogdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH1cbn1cbmV4cG9ydHMuVXNlciA9IFVzZXI7XG4vLyBleHBvcnQgaW50ZXJmYWNlIFVzZXJKU09OIHtcbi8vICAgYWNjZXNzX3Rva2VuOiBzdHJpbmc7XG4vLyAgIHRva2VuX3R5cGU6IHN0cmluZztcbi8vICAgZXhwaXJlc19pbjogbnVtYmVyO1xuLy8gICByb2xlOiBzdHJpbmc7XG4vLyAgIG5hbWU6IHN0cmluZztcbi8vIH07XG4vLyNlbmRyZWdpb24gVXNlclxuLy8jcmVnaW9uIFRpbWV0YWJsZVxudmFyIFRpbWV0YWJsZUVudHJ5VHlwZTtcbihmdW5jdGlvbiAoVGltZXRhYmxlRW50cnlUeXBlKSB7XG4gICAgVGltZXRhYmxlRW50cnlUeXBlW1wiTGFiXCJdID0gXCJMQUJcIjtcbiAgICBUaW1ldGFibGVFbnRyeVR5cGVbXCJMZWN0dXJlXCJdID0gXCJMRUNcIjtcbiAgICBUaW1ldGFibGVFbnRyeVR5cGVbXCJUdXRvcmlhbFwiXSA9IFwiVFVUXCI7XG59KShUaW1ldGFibGVFbnRyeVR5cGUgPSBleHBvcnRzLlRpbWV0YWJsZUVudHJ5VHlwZSB8fCAoZXhwb3J0cy5UaW1ldGFibGVFbnRyeVR5cGUgPSB7fSkpO1xuLy8gVHlwaWNhbCBlbnRyeToge1wiYWJicmV2aWF0aW9uXCI6XCJBTVRcIixcInN0YXJ0VGltZVwiOlwiMTM6MDBcIixcImVuZFRpbWVcIjpcIjE3OjAwXCIsXCJldmVudFwiOm51bGwsXCJ0eXBlXCI6XCJMQUJcIixcImNvZGVcIjpcIkVUMDcyMFwiLFwibG9jYXRpb25cIjpcIlQxMjYwNVwifVxuY2xhc3MgVGltZXRhYmxlRW50cnkge1xuICAgIGNvbnN0cnVjdG9yKGFiYnJldmlhdGlvbiwgc3RhcnRUaW1lLCBlbmRUaW1lLCB0eXBlLCBjb2RlLCBsb2NhdGlvbikge1xuICAgICAgICB0aGlzLmFiYnJldmlhdGlvbiA9IGFiYnJldmlhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IGVuZFRpbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB9XG4gICAgZ2V0QWJicmV2aWF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hYmJyZXZpYXRpb247XG4gICAgfVxuICAgIGdldFR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfVxuICAgIGdldFR5cGVTdHJpbmcoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFRpbWV0YWJsZUVudHJ5VHlwZS5MYWI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGFiXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRpbWV0YWJsZUVudHJ5VHlwZS5MZWN0dXJlOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxlY3R1cmVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGltZXRhYmxlRW50cnlUeXBlLlR1dG9yaWFsOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlR1dG9yaWFsXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TW9kdWxlQ29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZTtcbiAgICB9XG4gICAgZ2V0TG9jYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2F0aW9uO1xuICAgIH1cbiAgICBnZXRTdGFydERhdGVUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydFRpbWU7XG4gICAgfVxuICAgIGdldEVuZERhdGVUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmRUaW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHBpZWNlIG9mIEpTT04gaW50byBhIFRpbWV0YWJsZUVudHJ5XG4gICAgICogQHBhcmFtIGpzb24gVGhlIEpTT04gdG8gY29udmVydCB0byBhIFRpbWV0YWJsZUVudHJ5XG4gICAgICogQHBhcmFtIGRhdGVTdHJpbmcgVGhlIHN0cmluZyBvZiB0aGUgZGF0ZSwgaW4gRERNTVlZIGZvcm1hdFxuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tSlNPTihqc29uLCBkYXRlU3RyaW5nKSB7XG4gICAgICAgIGxldCByYXdKU09OID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgLy8gUGFyc2UgdGhlIGRhdGUgYW5kIHRpbWUgb2YgdGhlIHRpbWV0YWJsZSBlbnRyeSBmaXJzdFxuICAgICAgICBsZXQgc3RhcnRUaW1lU3RyaW5nID0gcmF3SlNPTlsnc3RhcnRUaW1lJ107XG4gICAgICAgIGxldCBzdGFydFRpbWUgPSBtb21lbnQoZGF0ZVN0cmluZywgXCJERE1NWVlcIik7XG4gICAgICAgIHN0YXJ0VGltZS5ob3VyKHBhcnNlSW50KHN0YXJ0VGltZVN0cmluZy5zdWJzdHIoMCwgMiksIDEwKSk7XG4gICAgICAgIHN0YXJ0VGltZS5taW51dGUocGFyc2VJbnQoc3RhcnRUaW1lU3RyaW5nLnN1YnN0cigzLCA1KSwgMTApKTtcbiAgICAgICAgbGV0IGVuZFRpbWVTdHJpbmcgPSByYXdKU09OWydlbmRUaW1lJ107XG4gICAgICAgIGxldCBlbmRUaW1lID0gbW9tZW50KGRhdGVTdHJpbmcsIFwiRERNTVlZXCIpO1xuICAgICAgICBlbmRUaW1lLmhvdXIocGFyc2VJbnQoZW5kVGltZVN0cmluZy5zdWJzdHIoMCwgMiksIDEwKSk7XG4gICAgICAgIGVuZFRpbWUubWludXRlKHBhcnNlSW50KGVuZFRpbWVTdHJpbmcuc3Vic3RyKDMsIDUpLCAxMCkpO1xuICAgICAgICBsZXQgZW50cnkgPSBuZXcgVGltZXRhYmxlRW50cnkocmF3SlNPTlsnYWJicmV2aWF0aW9uJ10sIHN0YXJ0VGltZS50b0RhdGUoKSwgZW5kVGltZS50b0RhdGUoKSwgcmF3SlNPTlsndHlwZSddLCByYXdKU09OWydjb2RlJ10sIHJhd0pTT05bJ2xvY2F0aW9uJ10pO1xuICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgfVxuICAgIHN0YXRpYyBpc1ZhbGlkKGpzb24pIHtcbiAgICAgICAgbGV0IHVudmFsaWRhdGVkSlNPTiA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB1bnZhbGlkYXRlZEpTT04uaGFzT3duUHJvcGVydHkoJ2FiYnJldmlhdGlvbicpID8gdmFsaWQgPSB0cnVlIDogdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgdW52YWxpZGF0ZWRKU09OLmhhc093blByb3BlcnR5KCdzdGFydFRpbWUnKSA/IHZhbGlkID0gdHJ1ZSA6IHZhbGlkID0gZmFsc2U7XG4gICAgICAgIHVudmFsaWRhdGVkSlNPTi5oYXNPd25Qcm9wZXJ0eSgnZW5kVGltZScpID8gdmFsaWQgPSB0cnVlIDogdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgdW52YWxpZGF0ZWRKU09OLmhhc093blByb3BlcnR5KCd0eXBlJykgPyB2YWxpZCA9IHRydWUgOiB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB1bnZhbGlkYXRlZEpTT04uaGFzT3duUHJvcGVydHkoJ2NvZGUnKSA/IHZhbGlkID0gdHJ1ZSA6IHZhbGlkID0gZmFsc2U7XG4gICAgICAgIHVudmFsaWRhdGVkSlNPTi5oYXNPd25Qcm9wZXJ0eSgnbG9jYXRpb24nKSA/IHZhbGlkID0gdHJ1ZSA6IHZhbGlkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9XG59XG5leHBvcnRzLlRpbWV0YWJsZUVudHJ5ID0gVGltZXRhYmxlRW50cnk7XG4vLyNlbmRyZWdpb24gVGltZXRhYmxlXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogR2VuZXJhdGVzIGFuIGF1dGhlbnRpY2F0ZWQgcmVxdWVzdCB1c2luZyBhbiBleGlzdGluZyB0b2tlblxuICogQHBhcmFtIG1ldGhvZCBUaGUgSFRUUCBtZXRob2QgdG8gdXNlIGZvciB0aGlzIHJlcXVlc3RcbiAqIEBwYXJhbSB1cmwgVGhlIFVSTCB0byB1c2UgZm9yIHRoaXMgcmVxdWVzdFxuICogQHBhcmFtIGFzeW5jIFdoZXRoZXIgdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIGRvbmUgYXN5bmNocm9ub3VzbHlcbiAqIEBwYXJhbSB0b2tlbiBUaGUgdG9rZW4gV0lUSE9VVCB0aGUgXCJCZWFyZXIgXCIgcHJlZml4XG4gKi9cbmZ1bmN0aW9uIGF1dGhlbnRpY2F0ZWRSZXF1ZXN0KG1ldGhvZCwgdXJsLCBhc3luYywgdG9rZW4pIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHJlcXVlc3Qub3BlbihtZXRob2QsIHVybCwgYXN5bmMpO1xuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcbiAgICByZXR1cm4gcmVxdWVzdDtcbn1cbmV4cG9ydHMuYXV0aGVudGljYXRlZFJlcXVlc3QgPSBhdXRoZW50aWNhdGVkUmVxdWVzdDtcbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHRva2VuIHN0b3JlZCBpbiBDaHJvbWUncyBzdG9yYWdnZSBpcyBhIHZhbGlkXG4gKiB0b2tlbiAoaS5lLiB0aGUgdXNlciBpcyBhbHJlYWR5IGF1dGhlbnRpY2F0ZWQpLlxuICogQHBhcmFtIGNhbGxiYWNrIEEgbGFtYmRhIHRoYXQgcmV0dXJucyB0aGUgYXV0aGVudGljYXRlZCBzdGF0ZSB0aHJvdWdoIGEgcGFyYW1ldGVyXG4gKiBAcGFyYW0gdG9rZW4gVGhlIHNlc3Npb24gdG9rZW4sIGlmIHRoZSB1c2VyIGlzIGluZGVlZCBhdXRoZW50aWNhdGVkLiBFbHNlLCBpdCByZXR1cm5zIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiB1c2VySXNBdXRoZW50aWNhdGVkKGNhbGxiYWNrKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCd1c2VyJywgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAvLyBGaXJzdCByb3VuZDogY2hlY2tpbmcgZm9yIGV4aXN0ZW5jZSBvZiB0b2tlblxuICAgICAgICBpZiAocmVzdWx0Wyd1c2VyJ10gJiYgcmVzdWx0Wyd1c2VyJ11bJ2FjY2Vzc1Rva2VuJ10pIHtcbiAgICAgICAgICAgIC8vIFNlY29uZCByb3VuZDogdG9rZW4gdmFsaWRpdHkgY2hlY2tpbmcgd2l0aCBhIHNtYWxsIEFQSSBlbmRwb2ludFxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBhdXRoZW50aWNhdGVkUmVxdWVzdChcIlBPU1RcIiwgXCJodHRwczovL21vYmlsZWFwcHMuc3AuZWR1LnNnL1NQTW9iaWxlQVBJL2FwaS9Db3VudFVucmVhZEl0ZW1cIiwgdHJ1ZSwgcmVzdWx0Wyd1c2VyJ11bJ2FjY2Vzc1Rva2VuJ10pO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUb2tlbiBpcyB2YWxpZCwgcmV0dXJuIGNhbGxiYWNrIHdpdGggdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLCByZXN1bHRbJ3VzZXInXVsnYWNjZXNzVG9rZW4nXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudXNlcklzQXV0aGVudGljYXRlZCA9IHVzZXJJc0F1dGhlbnRpY2F0ZWQ7XG4vKipcbiAqIFB1cmdlcyB0aGUgb2xkIHVzZXIgdG9rZW4gZnJvbSBDaHJvbWUncyBpbnRlcm5hbCBzdG9yYWdlXG4gKi9cbmZ1bmN0aW9uIHB1cmdlT2xkVG9rZW4oKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKCd1c2VyJyk7XG59XG5leHBvcnRzLnB1cmdlT2xkVG9rZW4gPSBwdXJnZU9sZFRva2VuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBTUCA9IHJlcXVpcmUoXCIuL2RhdGF0eXBlc1wiKTtcbmNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuLyoqXG4gKiBIb29rcyB1cCB0byBhIC5jbGljaygpIGxpc3RlbmVyIGZvciB0aGUgbG9naW4gZXZlbnRcbiAqIEBwYXJhbSBzdGFydFBvbGxlcnMgQSBjYWxsYmFjayBmb3IgdGhlIG1haW4gcG9wdXAudHMgdG8gaW5pdGlhbGlzZSByZWN1cnJpbmcgZXZlbnRzIChpLmUuIHBvbGxlcnMpXG4gKi9cbmZ1bmN0aW9uIGxvZ2luTGlzdGVuZXIoc3RhcnRQb2xsZXJzKSB7XG4gICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExvZ2luIGNsaWNrZWRcIik7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS90b2tlblwiLCB0cnVlKTtcbiAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9vbGQgY29kZTogdGhpcy5yZWFkeVN0YXRlID09IDQgJiYgXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIC8vIFNhdmUgbmFtZSBhbmQgdG9rZW4gaW50byBDaHJvbWUgc3RvcmFnZVxuICAgICAgICAgICAgaWYgKFNQLlVzZXIuaXNWYWxpZCh0aGlzLnJlc3BvbnNlVGV4dCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IFNQLlVzZXIuZnJvbUpTT04odGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7ICd1c2VyJzogdXNlciB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXTogTG9naW4gc3VjY2VlZGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIHRoZSBsb2dpbiBkaWFsb2cgYW5kIHNob3cgdGhlIG1haW4gVUlcbiAgICAgICAgICAgICAgICAgICAgJCgnI2F1dGgnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNtYWluJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTdGFydCBwb2xsZXJzIGJ5IGNhbGxpbmcgYmFjayB0aGUgbWFpbiBmaWxlIChwb3B1cC50cylcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRQb2xsZXJzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IGVycm9yXG4gICAgICAgICAgICAgICAgJCgnI2F1dGhFcnJvcicpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKCcjYXV0aEVycm9yJykudGV4dChTUC5FUlJPUl9BVVRIX0lOVkFMSURfSlNPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBMb2dpbiBmYWlsZWQgaW4gc29tZSB3YXlcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBMb2dpbiBmYWlsZWQ6IFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgLy8gRXJyb3IgY29kZSBcIjJcIiBtZWFucyBsb2dpbiBmYWlsZWRcbiAgICAgICAgICAgIGxldCByZXNwb25zZU9iamVjdCA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlT2JqZWN0W1wiZXJyb3JcIl0gPT09IFwiMlwiKSB7IC8vTk9URTogVEhJUyBJUyBBIFNUUklORyFcbiAgICAgICAgICAgICAgICAkKCcjYXV0aEVycm9yJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoJyNhdXRoRXJyb3InKS50ZXh0KFNQLkVSUk9SX0FVVEhfSU5WQUxJRF9QQVNTV09SRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIC8vIENvbnN0cnVjdCBmaW5hbCBwYXlsb2FkXG4gICAgbGV0IHBheWxvYWQgPSBcImdyYW50X3R5cGU9cGFzc3dvcmRcIiArXG4gICAgICAgIFwiJnVzZXJuYW1lPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCQoJyN1c2VybmFtZScpLnZhbCgpKSArXG4gICAgICAgIFwiJnBhc3N3b3JkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCQoJyNwYXNzd29yZCcpLnZhbCgpKSArXG4gICAgICAgIFwiJmRldmljZVRva2VuPWF5eVwiO1xuICAgIHJlcXVlc3Quc2VuZChwYXlsb2FkKTtcbn1cbmV4cG9ydHMubG9naW5MaXN0ZW5lciA9IGxvZ2luTGlzdGVuZXI7XG5mdW5jdGlvbiBhdHNCdXR0b25MaXN0ZW5lcigpIHtcbiAgICBjaHJvbWUudGFicy5jcmVhdGUoeyB1cmw6IFNQLlVSTF9BVFMgfSk7XG59XG5leHBvcnRzLmF0c0J1dHRvbkxpc3RlbmVyID0gYXRzQnV0dG9uTGlzdGVuZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbmNvbnN0IFNQID0gcmVxdWlyZShcIi4vZGF0YXR5cGVzXCIpO1xuY29uc3QgTGlzdGVuZXIgPSByZXF1aXJlKFwiLi9saXN0ZW5lcnNcIik7XG5jb25zdCBIZWxwZXIgPSByZXF1aXJlKFwiLi9oZWxwZXJcIik7XG5sZXQgY291bnQgPSAwO1xuZnVuY3Rpb24gc3RhcnRBbGxQb2xsZXJzKCkge1xuICAgIGNsb2NrUG9sbCgpOyAvLyB0aGlzIGRvZXMgbm90IHVzZSBpbnRlcnZhbCBhcyBpdCBpcyB0aW1lIHNlbnNpdGl2ZVxuICAgIGNhbGVuZGFyUG9sbCgpO1xuICAgIHRpbWV0YWJsZVBvbGwoKTtcbiAgICBzcFdpZmlQb2xsKCk7XG4gICAgc2V0SW50ZXJ2YWwoY2FsZW5kYXJQb2xsLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgY2FsZW5kYXIgcG9sbGluZ1xuICAgIHNldEludGVydmFsKHRpbWV0YWJsZVBvbGwsIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSB0aW1ldGFibGUgcG9sbGluZ1xuICAgIHNldEludGVydmFsKHNwV2lmaVBvbGwsIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSB3aWZpIHBvbGxpbmdcbn1cbi8vI3JlZ2lvbiBQb2xsZXJzXG5mdW5jdGlvbiBjbG9ja1BvbGwoKSB7XG4gICAgJCgnI3RpbWUnKS50ZXh0KG1vbWVudCgpLmZvcm1hdCgnSEg6bW06c3MnKSk7XG4gICAgc2V0VGltZW91dChjbG9ja1BvbGwsIDEwMDApOyAvLyAxIHNlY29uZCBwb2xsaW5nXG59XG5mdW5jdGlvbiBjYWxlbmRhclBvbGwoKSB7XG4gICAgLy8gR2V0IFNQIEFjYWRlbWljIENhbGVuZGFyIGFuZCByZWFkIGZyb20gSlNPTlxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIC8vIEdldCBhbGwgb2JqZWN0cyBcbiAgICAgICAgICAgIGxldCBhbGxDYWxlbmRhckVudHJpZXMgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGxldCByZWxldmFudEVudHJpZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQ2FsZW5kYXJFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0RGF0ZSA9IERhdGUucGFyc2UoYWxsQ2FsZW5kYXJFbnRyaWVzW2ldLnN0YXJ0VGltZSk7XG4gICAgICAgICAgICAgICAgbGV0IGVuZERhdGUgPSBEYXRlLnBhcnNlKGFsbENhbGVuZGFyRW50cmllc1tpXS5lbmRUaW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+IHN0YXJ0RGF0ZSAmJiBjdXJyZW50RGF0ZSA8IGVuZERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsZXZhbnRFbnRyaWVzLnB1c2goYWxsQ2FsZW5kYXJFbnRyaWVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgc3RhdHVzXG4gICAgICAgICAgICBpZiAocmVsZXZhbnRFbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgc2Nob29sU3RhdGVTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyArPSBcIiwgXCI7XG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nICs9IGVsZW1lbnQuc3VtbWFyeTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyA9IHNjaG9vbFN0YXRlU3RyaW5nLnN1YnN0cigyLCBzY2hvb2xTdGF0ZVN0cmluZy5sZW5ndGgpOyAvLyBSZW1vdmUgdGhlIGZpcnN0IDIgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgICQoJyNjdXJyZW50U3RhdHVzJykudGV4dChzY2hvb2xTdGF0ZVN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjY3VycmVudFN0YXR1cycpLnRleHQoXCJObyBTY2hvb2wgRXZlbnRzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlcGVhdCByZXF1ZXN0IG9uY2UgaXQgaXMgbG9hZGVkIG9yIHVuc3VjY2Vzc2Z1bGx5IGxvYWRlZFxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTG9hZGVkIFNQIENhbGVuZGFyXCIpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS9hcGkvR2V0QWNhZENhbGVuZGFyXCIsIHRydWUpO1xuICAgIHJlcXVlc3Quc2VuZCgpO1xufVxuLyoqXG4gKiBHZXRzIHRoZSB0aW1ldGFibGUgZm9yIHRvZGF5IGFuZCBjaGVja3MgaWYgdGhlIHVzZXIgaXMgYXR0ZW5kaW5nIGEgbGVzc29uXG4gKi9cbmZ1bmN0aW9uIHRpbWV0YWJsZVBvbGwoKSB7XG4gICAgSGVscGVyLnVzZXJJc0F1dGhlbnRpY2F0ZWQoZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQsIHRva2VuKSB7XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGVkICYmIHRva2VuKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudERhdGVTdHJpbmcgPSBtb21lbnQoKS5mb3JtYXQoJ0RETU1ZWScpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR10gUmVxdWVzdGVkIGZvciB0aW1ldGFibGUgd2l0aCBkYXRlOiBcIiArIGN1cnJlbnREYXRlU3RyaW5nKTtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gSGVscGVyLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiR0VUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS9hcGkvR2V0U3R1ZGVudFRpbWV0YWJsZUJ5SWRBbmREYXRlL1wiICtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZVN0cmluZywgdHJ1ZSwgdG9rZW4pO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogUmVxdWVzdGVkIGZvciB0aW1ldGFibGUgd2l0aCByZXR1cm5lZCBkYXRhOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc3BvbnNlVGV4dCA9PSBTUC5USU1FVEFCTEVfTk9fTEVTU09OUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gbGVzc29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2N1cnJlbnRMZXNzb24nKS50ZXh0KFwiTm8gTGVzc29uXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzb25BcnJheSA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhZ2UgSTogVmFsaWRhdGUgYWxsIHRpbWV0YWJsZSBlbnRyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGltZXRhYmxlRW50cmllcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gSlNPTi5zdHJpbmdpZnkoanNvbkFycmF5W2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW50cnlWYWxpZCA9IFNQLlRpbWV0YWJsZUVudHJ5LmlzVmFsaWQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5VmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVudHJ5ID0gU1AuVGltZXRhYmxlRW50cnkuZnJvbUpTT04oZWxlbWVudCwgY3VycmVudERhdGVTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSTogSW5zZXJ0IGFsbCBlbnRyaWVzIGludG8gYXJyYXkgd2hlcmUgaXQgaXMgY3VycmVudGx5IGhhcHBlbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudERhdGVUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmdldFN0YXJ0RGF0ZVRpbWUoKSA8IGN1cnJlbnREYXRlVGltZSAmJiBlbnRyeS5nZXRFbmREYXRlVGltZSgpID4gY3VycmVudERhdGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1ldGFibGVFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IExlc3NvbiBjdXJyZW50bHkgcnVubmluZzogXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiW0RFQlVHXTogTGVzc29uIG5vdCBydW5uaW5nOiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBUaW1ldGFibGUgZW50cnkgaXMgaW52YWxpZDpcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFnZSBJSUk6IERpc3BsYXkgY3VycmVudCBsZXNzb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1ldGFibGVFbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjY3VycmVudExlc3NvbicpLnRleHQodGltZXRhYmxlRW50cmllc1swXS5nZXRBYmJyZXZpYXRpb24oKSArIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXRhYmxlRW50cmllc1swXS5nZXRUeXBlU3RyaW5nKCkgKyBcIiBAIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXRhYmxlRW50cmllc1swXS5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjdXJyZW50TGVzc29uJykudGV4dChcIk5vIExlc3NvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkddOiBGYWlsZWQgdG8gbG9hZCB0aW1ldGFibGU6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRoaXMuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXTogVG9rZW4gaW52YWxpZCwgZm91bmQgZHVyaW5nIHRpbWV0YWJsZSByZXRyaWV2YWwhXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgdXNlciBpcyBjb25uZWN0ZWQgdG8gU1AgV2ktRmlcbiAqL1xuZnVuY3Rpb24gc3BXaWZpUG9sbCgpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHJlcXVlc3QgYWN0dWFsbHkgZ2V0cyB0aGUgcmVhbCBBVFMgcGFnZVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVVSTCk7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNwb25zZVVSTC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9teWF0cy5zcC5lZHUuc2dcIikpIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRWxzZSwgV2ktRmkgaXMgY29uc2lkZXJlZCB0byBiZSBub3QgY29ubmVjdGVkXG4gICAgICAgICAgICAgICAgY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGlzcGxheSBjb25uZWN0ZWQgc3RhdGVcbiAgICAgICAgaWYgKGNvbm5lY3RlZCkge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIltERUJVR106IENvbm5lY3RlZCB0byBTUCB3aWZpXCIpO1xuICAgICAgICAgICAgJCgnI3dpZmlDb25uZWN0ZWRUZXh0JykudGV4dChcIkNvbm5lY3RlZCB0byBTUCBXaS1GaVwiKTtcbiAgICAgICAgICAgICQoJyN3aWZpTG9nbycpLmNzcygnY29sb3InLCAnYmxhY2snKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJbREVCVUddOiBOb3QgY29ubmVjdGVkIHRvIFNQIHdpZmlcIik7XG4gICAgICAgICAgICAkKCcjd2lmaUNvbm5lY3RlZFRleHQnKS50ZXh0KFwiTm90IGNvbm5lY3RlZCB0byBTUCBXaS1GaVwiKTtcbiAgICAgICAgICAgICQoJyN3aWZpTG9nbycpLmNzcygnY29sb3InLCAnZ3JheScpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJIRUFEXCIsIFNQLlVSTF9BVFMsIHRydWUpO1xuICAgIHJlcXVlc3Quc2VuZCgpO1xufVxuLy8jZW5kcmVnaW9uIFBvbGxlcnNcbi8vIEluaXRpYWxpc2F0aW9uIGZvciBqUXVlcnkuIFRoaXMgYmxvY2sgcnVucyB3aGVuIGRvY3VtZW50IGlzIHJlYWR5XG4kKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBxdWVyeUluZm8gPSB7XG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgY3VycmVudFdpbmRvdzogdHJ1ZVxuICAgIH07XG4gICAgY2hyb21lLnRhYnMucXVlcnkocXVlcnlJbmZvLCBmdW5jdGlvbiAodGFicykge1xuICAgICAgICAvLyAkKCcjdXJsJykudGV4dCh0YWJzWzBdLnVybCk7XG4gICAgICAgICQoJyN0aW1lJykudGV4dChtb21lbnQoKS5mb3JtYXQoJ0hIOm1tOnNzJykpO1xuICAgIH0pO1xuICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6IGNvdW50LnRvU3RyaW5nKCkgfSk7XG4gICAgJCgnI2NvdW50VXAnKS5jbGljaygoKSA9PiB7XG4gICAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6ICgrK2NvdW50KS50b1N0cmluZygpIH0pO1xuICAgIH0pO1xuICAgIC8vICQoJyNjaGFuZ2VCYWNrZ3JvdW5kJykuY2xpY2soKCk9PntcbiAgICAvLyAgIGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWV9LCBmdW5jdGlvbih0YWJzKSB7XG4gICAgLy8gICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYnNbMF0uaWQsIHtcbiAgICAvLyAgICAgICBjb2xvcjogJyM1NTU1NTUnXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGZ1bmN0aW9uKG1zZykge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IG1lc3NhZ2U6XCIsIG1zZyk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG4gICAgLy8gRmlyc3QgdGhpbmdzIGZpcnN0LCBjaGVjayBpZiB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAgICBIZWxwZXIudXNlcklzQXV0aGVudGljYXRlZChmdW5jdGlvbiAoYXV0aGVudGljYXRlZCkge1xuICAgICAgICAkKCcjbG9hZGluZycpLnNob3coKTtcbiAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIC8vIFVzZXIgaXMgbG9nZ2VkIGluLCBzaG93IG1haW4gVUkgYW5kIGluaXRpYWxpc2UgcG9sbGVyc1xuICAgICAgICAgICAgJCgnI21haW4nKS5zaG93KCk7XG4gICAgICAgICAgICAkKCcjYXV0aCcpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJyNsb2FkaW5nJykuaGlkZSgpO1xuICAgICAgICAgICAgc3RhcnRBbGxQb2xsZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBOb3QgYXV0aGVudGljYXRlZCwgZGlzcGxheSBsb2dpbiBVSSBvbmx5XG4gICAgICAgICAgICAkKCcjbWFpbicpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJyNhdXRoJykuc2hvdygpO1xuICAgICAgICAgICAgJCgnI2xvYWRpbmcnKS5oaWRlKCk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgb2xkIGxvZ2luIHRva2VuIHN0aWxsIGV4aXN0cyBpbiBzdG9yYWdlLCBwdXJnZSBpdFxuICAgICAgICAgICAgSGVscGVyLnB1cmdlT2xkVG9rZW4oKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEluaXRpYWxpc2UgTG9naW4gbGlzdGVuZXJcbiAgICAkKCcjbG9naW5CdXR0b24nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIExpc3RlbmVyLmxvZ2luTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gU3RhcnQgdXAgdGhlIHBvbGxlcnMsIGFzIHRoaXMgbGFtYmRhIHdpbGwgb25seSBiZSBjYWxsZWQgaWZcbiAgICAgICAgICAgIC8vIHRoZSBsb2dpbiBpcyBzdWNjZXNzZnVsXG4gICAgICAgICAgICBzdGFydEFsbFBvbGxlcnMoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gU2V0dXAgQVRTIGJ1dHRvbiBsaXN0ZW5lclxuICAgICQoJyNhdHNCdXR0b24nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIExpc3RlbmVyLmF0c0J1dHRvbkxpc3RlbmVyKCk7XG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=