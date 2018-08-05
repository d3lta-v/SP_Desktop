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

//#region Constant strings
Object.defineProperty(exports, "__esModule", { value: true });
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
        let valid = true;
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
    console.log("[DEBUG]: Login clicked");
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
            console.log("[DEBUG]: Login failed: ");
            console.log(this.responseText);
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
        console.log("[DEBUG]: Loaded SP Calendar");
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
            console.log("[DEBUG] Requested for timetable with date: " + currentDateString);
            let request = Helper.authenticatedRequest("GET", "https://mobileapps.sp.edu.sg/SPMobileAPI/api/GetStudentTimetableByIdAndDate/" + currentDateString, true, token);
            request.onloadend = function () {
                if (this.status == 200) {
                    console.log(this.responseText);
                    if (this.responseText == SP.TIMETABLE_NO_LESSONS) {
                        // No lessons
                        $('#currentLesson').text("No Lesson");
                    }
                }
                else {
                    console.log("[DEBUG]: Failed to load timetable: ");
                    console.log(this.status);
                    console.log(this.responseText);
                }
            };
            request.send();
        }
        else {
            console.log("[DEBUG]: Token invalid, found during timetable retrieval!");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGF0eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9saXN0ZW5lcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLGtDQUFrQyw2RkFBNkY7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDZGQUE2RjtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx1Q0FBdUMseUJBQXlCO0FBQ2hFO0FBQ0EsMkNBQTJDLDZCQUE2QjtBQUN4RSxLQUFLO0FBQ0w7QUFDQSw0QkFBNEIsa0NBQWtDO0FBQzlEO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWixVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwb3B1cFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9wb3B1cC50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyNyZWdpb24gQ29uc3RhbnQgc3RyaW5nc1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FUlJPUl9BVVRIX0lOVkFMSURfSlNPTiA9IFwiTG9naW4gc2VydmVyIHJldHVybmVkIGFuIGludmFsaWQgcmVzcG9uc2UuIFBsZWFzZSBjb250YWN0IHRoZSBkZXZlbG9wZXIuXCI7XG5leHBvcnRzLkVSUk9SX0FVVEhfSU5WQUxJRF9QQVNTV09SRCA9IFwiSW5jb3JyZWN0IHBhc3N3b3JkIG9yIHVzZXJuYW1lXCI7XG5leHBvcnRzLlRJTUVUQUJMRV9OT19MRVNTT05TID0gJ1t7XCJhYmJyZXZpYXRpb25cIjpcIlwiLFwic3RhcnRUaW1lXCI6XCJcIixcImVuZFRpbWVcIjpcIlwiLFwiZXZlbnRcIjpudWxsLFwidHlwZVwiOlwiXCIsXCJjb2RlXCI6XCJcIixcImxvY2F0aW9uXCI6XCJcIn1dJztcbjtcbi8vI2VuZHJlZ2lvbiBDYWxlbmRhclxuLy8jcmVnaW9uIFVzZXJcbi8qKlxuICogQSBjbGFzcyB0aGF0IGVuY2Fwc3VsYXRlcyB1c2VyIGluZm9ybWF0aW9uLCBzdWNoIGFzIHRoZSB1c2VyJ3NcbiAqIGFjY2VzcyB0b2tlbiBhbmQgbmFtZSwgYW5kIHByb3ZpZGVzIGNvbW1vbiBmdW5jdGlvbmFsaXR5IHN1Y2ggYXNcbiAqIEpTT04gdmFsaWRhdGlvbiBhbmQgY29udmVyc2lvbi5cbiAqL1xuY2xhc3MgVXNlciB7XG4gICAgY29uc3RydWN0b3IoYWNjZXNzVG9rZW4sIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBnZXRBY2Nlc3NUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjZXNzVG9rZW47XG4gICAgfVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuICAgIC8vIGZyb21KU09OIGlzIHVzZWQgdG8gY29udmVydCBhbiBzZXJpYWxpemVkIHZlcnNpb25cbiAgICAvLyBvZiB0aGUgVXNlciB0byBhbiBpbnN0YW5jZSBvZiB0aGUgY2xhc3NcbiAgICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgICAgICBsZXQgcmF3SlNPTiA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIHJldHVybiBuZXcgVXNlcihyYXdKU09OWydhY2Nlc3NfdG9rZW4nXSwgcmF3SlNPTlsnbmFtZSddKTtcbiAgICB9XG4gICAgc3RhdGljIGlzVmFsaWQoanNvbikge1xuICAgICAgICBsZXQgdW52YWxpZGF0ZWRKU09OID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdW52YWxpZGF0ZWRKU09OLmhhc093blByb3BlcnR5KCdhY2Nlc3NfdG9rZW4nKSA/IHZhbGlkID0gdHJ1ZSA6IHZhbGlkID0gZmFsc2U7XG4gICAgICAgIHVudmFsaWRhdGVkSlNPTi5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpID8gdmFsaWQgPSB0cnVlIDogdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH1cbn1cbmV4cG9ydHMuVXNlciA9IFVzZXI7XG4vLyBleHBvcnQgaW50ZXJmYWNlIFVzZXJKU09OIHtcbi8vICAgYWNjZXNzX3Rva2VuOiBzdHJpbmc7XG4vLyAgIHRva2VuX3R5cGU6IHN0cmluZztcbi8vICAgZXhwaXJlc19pbjogbnVtYmVyO1xuLy8gICByb2xlOiBzdHJpbmc7XG4vLyAgIG5hbWU6IHN0cmluZztcbi8vIH07XG4vLyNlbmRyZWdpb24gVXNlclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIEdlbmVyYXRlcyBhbiBhdXRoZW50aWNhdGVkIHJlcXVlc3QgdXNpbmcgYW4gZXhpc3RpbmcgdG9rZW5cbiAqIEBwYXJhbSBtZXRob2QgVGhlIEhUVFAgbWV0aG9kIHRvIHVzZSBmb3IgdGhpcyByZXF1ZXN0XG4gKiBAcGFyYW0gdXJsIFRoZSBVUkwgdG8gdXNlIGZvciB0aGlzIHJlcXVlc3RcbiAqIEBwYXJhbSBhc3luYyBXaGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBkb25lIGFzeW5jaHJvbm91c2x5XG4gKiBAcGFyYW0gdG9rZW4gVGhlIHRva2VuIFdJVEhPVVQgdGhlIFwiQmVhcmVyIFwiIHByZWZpeFxuICovXG5mdW5jdGlvbiBhdXRoZW50aWNhdGVkUmVxdWVzdChtZXRob2QsIHVybCwgYXN5bmMsIHRva2VuKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIGFzeW5jKTtcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG59XG5leHBvcnRzLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0ID0gYXV0aGVudGljYXRlZFJlcXVlc3Q7XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB0b2tlbiBzdG9yZWQgaW4gQ2hyb21lJ3Mgc3RvcmFnZ2UgaXMgYSB2YWxpZFxuICogdG9rZW4gKGkuZS4gdGhlIHVzZXIgaXMgYWxyZWFkeSBhdXRoZW50aWNhdGVkKS5cbiAqIEBwYXJhbSBjYWxsYmFjayBBIGxhbWJkYSB0aGF0IHJldHVybnMgdGhlIGF1dGhlbnRpY2F0ZWQgc3RhdGUgdGhyb3VnaCBhIHBhcmFtZXRlclxuICogQHBhcmFtIHRva2VuIFRoZSBzZXNzaW9uIHRva2VuLCBpZiB0aGUgdXNlciBpcyBpbmRlZWQgYXV0aGVudGljYXRlZC4gRWxzZSwgaXQgcmV0dXJucyB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gdXNlcklzQXV0aGVudGljYXRlZChjYWxsYmFjaykge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCd1c2VyJywgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAvLyBGaXJzdCByb3VuZDogY2hlY2tpbmcgZm9yIGV4aXN0ZW5jZSBvZiB0b2tlblxuICAgICAgICBpZiAocmVzdWx0Wyd1c2VyJ10gJiYgcmVzdWx0Wyd1c2VyJ11bJ2FjY2Vzc1Rva2VuJ10pIHtcbiAgICAgICAgICAgIC8vIFNlY29uZCByb3VuZDogdG9rZW4gdmFsaWRpdHkgY2hlY2tpbmcgd2l0aCBhIHNtYWxsIEFQSSBlbmRwb2ludFxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBhdXRoZW50aWNhdGVkUmVxdWVzdChcIlBPU1RcIiwgXCJodHRwczovL21vYmlsZWFwcHMuc3AuZWR1LnNnL1NQTW9iaWxlQVBJL2FwaS9Db3VudFVucmVhZEl0ZW1cIiwgdHJ1ZSwgcmVzdWx0Wyd1c2VyJ11bJ2FjY2Vzc1Rva2VuJ10pO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUb2tlbiBpcyB2YWxpZCwgcmV0dXJuIGNhbGxiYWNrIHdpdGggdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLCByZXN1bHRbJ3VzZXInXVsnYWNjZXNzVG9rZW4nXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudXNlcklzQXV0aGVudGljYXRlZCA9IHVzZXJJc0F1dGhlbnRpY2F0ZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFNQID0gcmVxdWlyZShcIi4vZGF0YXR5cGVzXCIpO1xuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG4vKipcbiAqIEhvb2tzIHVwIHRvIGEgLmNsaWNrKCkgbGlzdGVuZXIgZm9yIHRoZSBsb2dpbiBldmVudFxuICogQHBhcmFtIHN0YXJ0UG9sbGVycyBBIGNhbGxiYWNrIGZvciB0aGUgbWFpbiBwb3B1cC50cyB0byBpbml0aWFsaXNlIHJlY3VycmluZyBldmVudHMgKGkuZS4gcG9sbGVycylcbiAqL1xuZnVuY3Rpb24gbG9naW5MaXN0ZW5lcihzdGFydFBvbGxlcnMpIHtcbiAgICBjb25zb2xlLmxvZyhcIltERUJVR106IExvZ2luIGNsaWNrZWRcIik7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS90b2tlblwiLCB0cnVlKTtcbiAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9vbGQgY29kZTogdGhpcy5yZWFkeVN0YXRlID09IDQgJiYgXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIC8vIFNhdmUgbmFtZSBhbmQgdG9rZW4gaW50byBDaHJvbWUgc3RvcmFnZVxuICAgICAgICAgICAgaWYgKFNQLlVzZXIuaXNWYWxpZCh0aGlzLnJlc3BvbnNlVGV4dCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IFNQLlVzZXIuZnJvbUpTT04odGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgJ3VzZXInOiB1c2VyIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbREVCVUddOiBMb2dpbiBzdWNjZWVkZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgdGhlIGxvZ2luIGRpYWxvZyBhbmQgc2hvdyB0aGUgbWFpbiBVSVxuICAgICAgICAgICAgICAgICAgICAkKCcjYXV0aCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI21haW4nKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHBvbGxlcnMgYnkgY2FsbGluZyBiYWNrIHRoZSBtYWluIGZpbGUgKHBvcHVwLnRzKVxuICAgICAgICAgICAgICAgICAgICBzdGFydFBvbGxlcnMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgZXJyb3JcbiAgICAgICAgICAgICAgICAkKCcjYXV0aEVycm9yJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoJyNhdXRoRXJyb3InKS50ZXh0KFNQLkVSUk9SX0FVVEhfSU5WQUxJRF9KU09OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIExvZ2luIGZhaWxlZCBpbiBzb21lIHdheVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbREVCVUddOiBMb2dpbiBmYWlsZWQ6IFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIC8vIEVycm9yIGNvZGUgXCIyXCIgbWVhbnMgbG9naW4gZmFpbGVkXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2VPYmplY3QgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZU9iamVjdFtcImVycm9yXCJdID09PSBcIjJcIikgeyAvL05PVEU6IFRISVMgSVMgQSBTVFJJTkchXG4gICAgICAgICAgICAgICAgJCgnI2F1dGhFcnJvcicpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKCcjYXV0aEVycm9yJykudGV4dChTUC5FUlJPUl9BVVRIX0lOVkFMSURfUEFTU1dPUkQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAvLyBDb25zdHJ1Y3QgZmluYWwgcGF5bG9hZFxuICAgIGxldCBwYXlsb2FkID0gXCJncmFudF90eXBlPXBhc3N3b3JkXCIgK1xuICAgICAgICBcIiZ1c2VybmFtZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCgkKCcjdXNlcm5hbWUnKS52YWwoKSkgK1xuICAgICAgICBcIiZwYXNzd29yZD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCgkKCcjcGFzc3dvcmQnKS52YWwoKSkgK1xuICAgICAgICBcIiZkZXZpY2VUb2tlbj1heXlcIjtcbiAgICByZXF1ZXN0LnNlbmQocGF5bG9hZCk7XG59XG5leHBvcnRzLmxvZ2luTGlzdGVuZXIgPSBsb2dpbkxpc3RlbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5jb25zdCBTUCA9IHJlcXVpcmUoXCIuL2RhdGF0eXBlc1wiKTtcbmNvbnN0IExpc3RlbmVyID0gcmVxdWlyZShcIi4vbGlzdGVuZXJzXCIpO1xuY29uc3QgSGVscGVyID0gcmVxdWlyZShcIi4vaGVscGVyXCIpO1xubGV0IGNvdW50ID0gMDtcbmZ1bmN0aW9uIHN0YXJ0QWxsUG9sbGVycygpIHtcbiAgICBjbG9ja1BvbGwoKTsgLy8gdGhpcyBkb2VzIG5vdCB1c2UgaW50ZXJ2YWwgYXMgaXQgaXMgdGltZSBzZW5zaXRpdmVcbiAgICBjYWxlbmRhclBvbGwoKTtcbiAgICB0aW1ldGFibGVQb2xsKCk7XG4gICAgc2V0SW50ZXJ2YWwoY2FsZW5kYXJQb2xsLCAxMDAwICogNjAgKiA1KTsgLy8gNSBtaW51dGUgY2FsZW5kYXIgcG9sbGluZ1xuICAgIHNldEludGVydmFsKHRpbWV0YWJsZVBvbGwsIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSB0aW1ldGFibGUgcG9sbGluZ1xufVxuLy8jcmVnaW9uIFBvbGxlcnNcbmZ1bmN0aW9uIGNsb2NrUG9sbCgpIHtcbiAgICAkKCcjdGltZScpLnRleHQobW9tZW50KCkuZm9ybWF0KCdISDptbTpzcycpKTtcbiAgICBzZXRUaW1lb3V0KGNsb2NrUG9sbCwgMTAwMCk7IC8vIDEgc2Vjb25kIHBvbGxpbmdcbn1cbmZ1bmN0aW9uIGNhbGVuZGFyUG9sbCgpIHtcbiAgICAvLyBHZXQgU1AgQWNhZGVtaWMgQ2FsZW5kYXIgYW5kIHJlYWQgZnJvbSBKU09OXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgLy8gR2V0IGFsbCBvYmplY3RzIFxuICAgICAgICAgICAgbGV0IGFsbENhbGVuZGFyRW50cmllcyA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgbGV0IHJlbGV2YW50RW50cmllcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxDYWxlbmRhckVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnREYXRlID0gRGF0ZS5wYXJzZShhbGxDYWxlbmRhckVudHJpZXNbaV0uc3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kRGF0ZSA9IERhdGUucGFyc2UoYWxsQ2FsZW5kYXJFbnRyaWVzW2ldLmVuZFRpbWUpO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID4gc3RhcnREYXRlICYmIGN1cnJlbnREYXRlIDwgZW5kRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZWxldmFudEVudHJpZXMucHVzaChhbGxDYWxlbmRhckVudHJpZXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNldCBzdGF0dXNcbiAgICAgICAgICAgIGlmIChyZWxldmFudEVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBzY2hvb2xTdGF0ZVN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgcmVsZXZhbnRFbnRyaWVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nICs9IFwiLCBcIjtcbiAgICAgICAgICAgICAgICAgICAgc2Nob29sU3RhdGVTdHJpbmcgKz0gZWxlbWVudC5zdW1tYXJ5O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nID0gc2Nob29sU3RhdGVTdHJpbmcuc3Vic3RyKDIsIHNjaG9vbFN0YXRlU3RyaW5nLmxlbmd0aCk7IC8vIFJlbW92ZSB0aGUgZmlyc3QgMiBjaGFyYWN0ZXJzXG4gICAgICAgICAgICAgICAgJCgnI2N1cnJlbnRTdGF0dXMnKS50ZXh0KHNjaG9vbFN0YXRlU3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNjdXJyZW50U3RhdHVzJykudGV4dChcIk5vIFNjaG9vbCBFdmVudHNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVwZWF0IHJlcXVlc3Qgb25jZSBpdCBpcyBsb2FkZWQgb3IgdW5zdWNjZXNzZnVsbHkgbG9hZGVkXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXTogTG9hZGVkIFNQIENhbGVuZGFyXCIpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS9hcGkvR2V0QWNhZENhbGVuZGFyXCIsIHRydWUpO1xuICAgIHJlcXVlc3Quc2VuZCgpO1xufVxuZnVuY3Rpb24gdGltZXRhYmxlUG9sbCgpIHtcbiAgICAvLyBHZXQgdGltZXRhYmxlIGZvciB0b2RheSBhbmQgc2VlIGlmIHVzZXIgaXMgYXR0ZW5kaW5nIGxlc3NvblxuICAgIC8vIE5vdGU6IG5vIGxlc3NvbiBzdGF0ZTogW3tcImFiYnJldmlhdGlvblwiOlwiXCIsXCJzdGFydFRpbWVcIjpcIlwiLFwiZW5kVGltZVwiOlwiXCIsXCJldmVudFwiOm51bGwsXCJ0eXBlXCI6XCJcIixcImNvZGVcIjpcIlwiLFwibG9jYXRpb25cIjpcIlwifV1cbiAgICBIZWxwZXIudXNlcklzQXV0aGVudGljYXRlZChmdW5jdGlvbiAoYXV0aGVudGljYXRlZCwgdG9rZW4pIHtcbiAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZWQgJiYgdG9rZW4pIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZVN0cmluZyA9IG1vbWVudCgpLmZvcm1hdCgnRERNTVlZJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltERUJVR10gUmVxdWVzdGVkIGZvciB0aW1ldGFibGUgd2l0aCBkYXRlOiBcIiArIGN1cnJlbnREYXRlU3RyaW5nKTtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gSGVscGVyLmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiR0VUXCIsIFwiaHR0cHM6Ly9tb2JpbGVhcHBzLnNwLmVkdS5zZy9TUE1vYmlsZUFQSS9hcGkvR2V0U3R1ZGVudFRpbWV0YWJsZUJ5SWRBbmREYXRlL1wiICsgY3VycmVudERhdGVTdHJpbmcsIHRydWUsIHRva2VuKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNwb25zZVRleHQgPT0gU1AuVElNRVRBQkxFX05PX0xFU1NPTlMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIGxlc3NvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjdXJyZW50TGVzc29uJykudGV4dChcIk5vIExlc3NvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbREVCVUddOiBGYWlsZWQgdG8gbG9hZCB0aW1ldGFibGU6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbREVCVUddOiBUb2tlbiBpbnZhbGlkLCBmb3VuZCBkdXJpbmcgdGltZXRhYmxlIHJldHJpZXZhbCFcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vI2VuZHJlZ2lvbiBQb2xsZXJzXG4vLyBJbml0aWFsaXNhdGlvbiBmb3IgalF1ZXJ5LiBUaGlzIGJsb2NrIHJ1bnMgd2hlbiBkb2N1bWVudCBpcyByZWFkeVxuJChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcXVlcnlJbmZvID0ge1xuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIGN1cnJlbnRXaW5kb3c6IHRydWVcbiAgICB9O1xuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHF1ZXJ5SW5mbywgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICAgICAgLy8gJCgnI3VybCcpLnRleHQodGFic1swXS51cmwpO1xuICAgICAgICAkKCcjdGltZScpLnRleHQobW9tZW50KCkuZm9ybWF0KCdISDptbTpzcycpKTtcbiAgICB9KTtcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiBjb3VudC50b1N0cmluZygpIH0pO1xuICAgICQoJyNjb3VudFVwJykuY2xpY2soKCkgPT4ge1xuICAgICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiAoKytjb3VudCkudG9TdHJpbmcoKSB9KTtcbiAgICB9KTtcbiAgICAvLyAkKCcjY2hhbmdlQmFja2dyb3VuZCcpLmNsaWNrKCgpPT57XG4gICAgLy8gICBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlfSwgZnVuY3Rpb24odGFicykge1xuICAgIC8vICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJzWzBdLmlkLCB7XG4gICAgLy8gICAgICAgY29sb3I6ICcjNTU1NTU1J1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBmdW5jdGlvbihtc2cpIHtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBtZXNzYWdlOlwiLCBtc2cpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0pO1xuICAgIC8vIEZpcnN0IHRoaW5ncyBmaXJzdCwgY2hlY2sgaWYgdXNlciBpcyBhdXRoZW50aWNhdGVkXG4gICAgSGVscGVyLnVzZXJJc0F1dGhlbnRpY2F0ZWQoZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIC8vIFVzZXIgaXMgbG9nZ2VkIGluLCBzaG93IG1haW4gVUkgYW5kIGluaXRpYWxpc2UgcG9sbGVyc1xuICAgICAgICAgICAgJCgnI21haW4nKS5zaG93KCk7XG4gICAgICAgICAgICAkKCcjYXV0aCcpLmhpZGUoKTtcbiAgICAgICAgICAgIHN0YXJ0QWxsUG9sbGVycygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTm90IGF1dGhlbnRpY2F0ZWQsIGRpc3BsYXkgbG9naW4gVUkgb25seVxuICAgICAgICAgICAgJCgnI21haW4nKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcjYXV0aCcpLnNob3coKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEluaXRpYWxpc2UgTG9naW4gbGlzdGVuZXJcbiAgICAkKCcjbG9naW5CdXR0b24nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIExpc3RlbmVyLmxvZ2luTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gU3RhcnQgdXAgdGhlIHBvbGxlcnMsIGFzIHRoaXMgbGFtYmRhIHdpbGwgb25seSBiZSBjYWxsZWQgaWZcbiAgICAgICAgICAgIC8vIHRoZSBsb2dpbiBpcyBzdWNjZXNzZnVsXG4gICAgICAgICAgICBzdGFydEFsbFBvbGxlcnMoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=