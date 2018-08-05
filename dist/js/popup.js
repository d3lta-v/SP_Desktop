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
 */
function loginListener() {
    console.log("[DEBUG]: Login clicked");
    let request = new XMLHttpRequest();
    request.open("POST", "https://mobileapps.sp.edu.sg/SPMobileAPI/token", true);
    request.onloadend = function () {
        //this.readyState == 4 && 
        if (this.status == 200) {
            // Save name and token into Chrome storage
            if (SP.User.isValid(this.responseText)) {
                let user = SP.User.fromJSON(this.responseText);
                chrome.storage.sync.set({ 'user': user }, () => {
                    console.log("[DEBUG]: Login succeeded");
                    // Get rid of the "auth" <div> as we don't need this login dialog anymore
                    $('#auth').hide();
                    $('#main').show();
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
            if (responseObject["error"] === 2) {
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
const Listener = __webpack_require__(/*! ./listeners */ "./src/listeners.ts");
const Helper = __webpack_require__(/*! ./helper */ "./src/helper.ts");
let count = 0;
// Functions
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
        setTimeout(calendarPoll, 1000 * 60 * 5); // 5 min polling
    };
    request.open("GET", "https://mobileapps.sp.edu.sg/SPMobileAPI/api/GetAcadCalendar", true);
    request.send();
}
function timetablePoll() {
    // Get timetable for today and see if user is attending lesson
    Helper.userIsAuthenticated(function (authenticated, token) {
        if (authenticated && token) {
            let currentDateString = moment().format('DDMMYY');
            console.log("[DEBUG] Requested for timetable with date: " + currentDateString);
            let request = Helper.authenticatedRequest("GET", "https://mobileapps.sp.edu.sg/SPMobileAPI/api/GetStudentTimetableByIdAndDate/" + currentDateString, true, token);
            request.onloadend = function () {
                if (this.status == 200) {
                    console.log(this.responseText);
                }
                else {
                    console.log("[DEBUG]: Failed to load timetable: ");
                    console.log(this.responseText);
                }
            };
            request.send();
        }
    });
}
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
            clockPoll();
            calendarPoll();
            timetablePoll();
            setInterval(timetablePoll, 1000 * 60 * 5); // 5 minute timetable polling
        }
        else {
            // Not authenticated, display login UI
            $('#main').hide();
            $('#auth').show();
        }
    });
    // Initialise Login listener
    $('#loginButton').click(Listener.loginListener);
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGF0eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9saXN0ZW5lcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtCQUErQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiwwRkFBMEY7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx1Q0FBdUMseUJBQXlCO0FBQ2hFO0FBQ0EsMkNBQTJDLDZCQUE2QjtBQUN4RSxLQUFLO0FBQ0w7QUFDQSw0QkFBNEIsa0NBQWtDO0FBQzlEO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWixVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicG9wdXBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvcG9wdXAudHNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8jcmVnaW9uIENvbnN0YW50IHN0cmluZ3Ncbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRVJST1JfQVVUSF9JTlZBTElEX0pTT04gPSBcIkxvZ2luIHNlcnZlciByZXR1cm5lZCBhbiBpbnZhbGlkIHJlc3BvbnNlLiBQbGVhc2UgY29udGFjdCB0aGUgZGV2ZWxvcGVyLlwiO1xuZXhwb3J0cy5FUlJPUl9BVVRIX0lOVkFMSURfUEFTU1dPUkQgPSBcIkluY29ycmVjdCBwYXNzd29yZCBvciB1c2VybmFtZVwiO1xuO1xuLy8jZW5kcmVnaW9uIENhbGVuZGFyXG4vLyNyZWdpb24gVXNlclxuLyoqXG4gKiBBIGNsYXNzIHRoYXQgZW5jYXBzdWxhdGVzIHVzZXIgaW5mb3JtYXRpb24sIHN1Y2ggYXMgdGhlIHVzZXInc1xuICogYWNjZXNzIHRva2VuIGFuZCBuYW1lLCBhbmQgcHJvdmlkZXMgY29tbW9uIGZ1bmN0aW9uYWxpdHkgc3VjaCBhc1xuICogSlNPTiB2YWxpZGF0aW9uIGFuZCBjb252ZXJzaW9uLlxuICovXG5jbGFzcyBVc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihhY2Nlc3NUb2tlbiwgbmFtZSkge1xuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIGdldEFjY2Vzc1Rva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NUb2tlbjtcbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG4gICAgLy8gZnJvbUpTT04gaXMgdXNlZCB0byBjb252ZXJ0IGFuIHNlcmlhbGl6ZWQgdmVyc2lvblxuICAgIC8vIG9mIHRoZSBVc2VyIHRvIGFuIGluc3RhbmNlIG9mIHRoZSBjbGFzc1xuICAgIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgICAgIGxldCByYXdKU09OID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgcmV0dXJuIG5ldyBVc2VyKHJhd0pTT05bJ2FjY2Vzc190b2tlbiddLCByYXdKU09OWyduYW1lJ10pO1xuICAgIH1cbiAgICBzdGF0aWMgaXNWYWxpZChqc29uKSB7XG4gICAgICAgIGxldCB1bnZhbGlkYXRlZEpTT04gPSBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICB1bnZhbGlkYXRlZEpTT04uaGFzT3duUHJvcGVydHkoJ2FjY2Vzc190b2tlbicpID8gdmFsaWQgPSB0cnVlIDogdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgdW52YWxpZGF0ZWRKU09OLmhhc093blByb3BlcnR5KCduYW1lJykgPyB2YWxpZCA9IHRydWUgOiB2YWxpZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfVxufVxuZXhwb3J0cy5Vc2VyID0gVXNlcjtcbi8vIGV4cG9ydCBpbnRlcmZhY2UgVXNlckpTT04ge1xuLy8gICBhY2Nlc3NfdG9rZW46IHN0cmluZztcbi8vICAgdG9rZW5fdHlwZTogc3RyaW5nO1xuLy8gICBleHBpcmVzX2luOiBudW1iZXI7XG4vLyAgIHJvbGU6IHN0cmluZztcbi8vICAgbmFtZTogc3RyaW5nO1xuLy8gfTtcbi8vI2VuZHJlZ2lvbiBVc2VyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogR2VuZXJhdGVzIGFuIGF1dGhlbnRpY2F0ZWQgcmVxdWVzdCB1c2luZyBhbiBleGlzdGluZyB0b2tlblxuICogQHBhcmFtIG1ldGhvZCBUaGUgSFRUUCBtZXRob2QgdG8gdXNlIGZvciB0aGlzIHJlcXVlc3RcbiAqIEBwYXJhbSB1cmwgVGhlIFVSTCB0byB1c2UgZm9yIHRoaXMgcmVxdWVzdFxuICogQHBhcmFtIGFzeW5jIFdoZXRoZXIgdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIGRvbmUgYXN5bmNocm9ub3VzbHlcbiAqIEBwYXJhbSB0b2tlbiBUaGUgdG9rZW4gV0lUSE9VVCB0aGUgXCJCZWFyZXIgXCIgcHJlZml4XG4gKi9cbmZ1bmN0aW9uIGF1dGhlbnRpY2F0ZWRSZXF1ZXN0KG1ldGhvZCwgdXJsLCBhc3luYywgdG9rZW4pIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHJlcXVlc3Qub3BlbihtZXRob2QsIHVybCwgYXN5bmMpO1xuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcbiAgICByZXR1cm4gcmVxdWVzdDtcbn1cbmV4cG9ydHMuYXV0aGVudGljYXRlZFJlcXVlc3QgPSBhdXRoZW50aWNhdGVkUmVxdWVzdDtcbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHRva2VuIHN0b3JlZCBpbiBDaHJvbWUncyBzdG9yYWdnZSBpcyBhIHZhbGlkXG4gKiB0b2tlbiAoaS5lLiB0aGUgdXNlciBpcyBhbHJlYWR5IGF1dGhlbnRpY2F0ZWQpLlxuICogQHBhcmFtIGNhbGxiYWNrIEEgbGFtYmRhIHRoYXQgcmV0dXJucyB0aGUgYXV0aGVudGljYXRlZCBzdGF0ZSB0aHJvdWdoIGEgcGFyYW1ldGVyXG4gKiBAcGFyYW0gdG9rZW4gVGhlIHNlc3Npb24gdG9rZW4sIGlmIHRoZSB1c2VyIGlzIGluZGVlZCBhdXRoZW50aWNhdGVkLiBFbHNlLCBpdCByZXR1cm5zIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiB1c2VySXNBdXRoZW50aWNhdGVkKGNhbGxiYWNrKSB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ3VzZXInLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIC8vIEZpcnN0IHJvdW5kOiBjaGVja2luZyBmb3IgZXhpc3RlbmNlIG9mIHRva2VuXG4gICAgICAgIGlmIChyZXN1bHRbJ3VzZXInXSAmJiByZXN1bHRbJ3VzZXInXVsnYWNjZXNzVG9rZW4nXSkge1xuICAgICAgICAgICAgLy8gU2Vjb25kIHJvdW5kOiB0b2tlbiB2YWxpZGl0eSBjaGVja2luZyB3aXRoIGEgc21hbGwgQVBJIGVuZHBvaW50XG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IGF1dGhlbnRpY2F0ZWRSZXF1ZXN0KFwiUE9TVFwiLCBcImh0dHBzOi8vbW9iaWxlYXBwcy5zcC5lZHUuc2cvU1BNb2JpbGVBUEkvYXBpL0NvdW50VW5yZWFkSXRlbVwiLCB0cnVlLCByZXN1bHRbJ3VzZXInXVsnYWNjZXNzVG9rZW4nXSk7XG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRva2VuIGlzIHZhbGlkLCByZXR1cm4gY2FsbGJhY2sgd2l0aCB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUsIHJlc3VsdFsndXNlciddWydhY2Nlc3NUb2tlbiddKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhmYWxzZSwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy51c2VySXNBdXRoZW50aWNhdGVkID0gdXNlcklzQXV0aGVudGljYXRlZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgU1AgPSByZXF1aXJlKFwiLi9kYXRhdHlwZXNcIik7XG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbi8qKlxuICogSG9va3MgdXAgdG8gYSAuY2xpY2soKSBsaXN0ZW5lciBmb3IgdGhlIGxvZ2luIGV2ZW50XG4gKi9cbmZ1bmN0aW9uIGxvZ2luTGlzdGVuZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJbREVCVUddOiBMb2dpbiBjbGlja2VkXCIpO1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vcGVuKFwiUE9TVFwiLCBcImh0dHBzOi8vbW9iaWxlYXBwcy5zcC5lZHUuc2cvU1BNb2JpbGVBUEkvdG9rZW5cIiwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vdGhpcy5yZWFkeVN0YXRlID09IDQgJiYgXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIC8vIFNhdmUgbmFtZSBhbmQgdG9rZW4gaW50byBDaHJvbWUgc3RvcmFnZVxuICAgICAgICAgICAgaWYgKFNQLlVzZXIuaXNWYWxpZCh0aGlzLnJlc3BvbnNlVGV4dCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IFNQLlVzZXIuZnJvbUpTT04odGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgJ3VzZXInOiB1c2VyIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbREVCVUddOiBMb2dpbiBzdWNjZWVkZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCByaWQgb2YgdGhlIFwiYXV0aFwiIDxkaXY+IGFzIHdlIGRvbid0IG5lZWQgdGhpcyBsb2dpbiBkaWFsb2cgYW55bW9yZVxuICAgICAgICAgICAgICAgICAgICAkKCcjYXV0aCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI21haW4nKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IGVycm9yXG4gICAgICAgICAgICAgICAgJCgnI2F1dGhFcnJvcicpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKCcjYXV0aEVycm9yJykudGV4dChTUC5FUlJPUl9BVVRIX0lOVkFMSURfSlNPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBMb2dpbiBmYWlsZWQgaW4gc29tZSB3YXlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXTogTG9naW4gZmFpbGVkOiBcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAvLyBFcnJvciBjb2RlIFwiMlwiIG1lYW5zIGxvZ2luIGZhaWxlZFxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlT2JqZWN0ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2VPYmplY3RbXCJlcnJvclwiXSA9PT0gMikge1xuICAgICAgICAgICAgICAgICQoJyNhdXRoRXJyb3InKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJCgnI2F1dGhFcnJvcicpLnRleHQoU1AuRVJST1JfQVVUSF9JTlZBTElEX1BBU1NXT1JEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgLy8gQ29uc3RydWN0IGZpbmFsIHBheWxvYWRcbiAgICBsZXQgcGF5bG9hZCA9IFwiZ3JhbnRfdHlwZT1wYXNzd29yZFwiICtcbiAgICAgICAgXCImdXNlcm5hbWU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoJCgnI3VzZXJuYW1lJykudmFsKCkpICtcbiAgICAgICAgXCImcGFzc3dvcmQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoJCgnI3Bhc3N3b3JkJykudmFsKCkpICtcbiAgICAgICAgXCImZGV2aWNlVG9rZW49YXl5XCI7XG4gICAgcmVxdWVzdC5zZW5kKHBheWxvYWQpO1xufVxuZXhwb3J0cy5sb2dpbkxpc3RlbmVyID0gbG9naW5MaXN0ZW5lcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcbmNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuY29uc3QgTGlzdGVuZXIgPSByZXF1aXJlKFwiLi9saXN0ZW5lcnNcIik7XG5jb25zdCBIZWxwZXIgPSByZXF1aXJlKFwiLi9oZWxwZXJcIik7XG5sZXQgY291bnQgPSAwO1xuLy8gRnVuY3Rpb25zXG5mdW5jdGlvbiBjbG9ja1BvbGwoKSB7XG4gICAgJCgnI3RpbWUnKS50ZXh0KG1vbWVudCgpLmZvcm1hdCgnSEg6bW06c3MnKSk7XG4gICAgc2V0VGltZW91dChjbG9ja1BvbGwsIDEwMDApOyAvLyAxIHNlY29uZCBwb2xsaW5nXG59XG5mdW5jdGlvbiBjYWxlbmRhclBvbGwoKSB7XG4gICAgLy8gR2V0IFNQIEFjYWRlbWljIENhbGVuZGFyIGFuZCByZWFkIGZyb20gSlNPTlxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIC8vIEdldCBhbGwgb2JqZWN0cyBcbiAgICAgICAgICAgIGxldCBhbGxDYWxlbmRhckVudHJpZXMgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGxldCByZWxldmFudEVudHJpZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQ2FsZW5kYXJFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0RGF0ZSA9IERhdGUucGFyc2UoYWxsQ2FsZW5kYXJFbnRyaWVzW2ldLnN0YXJ0VGltZSk7XG4gICAgICAgICAgICAgICAgbGV0IGVuZERhdGUgPSBEYXRlLnBhcnNlKGFsbENhbGVuZGFyRW50cmllc1tpXS5lbmRUaW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+IHN0YXJ0RGF0ZSAmJiBjdXJyZW50RGF0ZSA8IGVuZERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsZXZhbnRFbnRyaWVzLnB1c2goYWxsQ2FsZW5kYXJFbnRyaWVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgc3RhdHVzXG4gICAgICAgICAgICBpZiAocmVsZXZhbnRFbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgc2Nob29sU3RhdGVTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJlbGV2YW50RW50cmllcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyArPSBcIiwgXCI7XG4gICAgICAgICAgICAgICAgICAgIHNjaG9vbFN0YXRlU3RyaW5nICs9IGVsZW1lbnQuc3VtbWFyeTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzY2hvb2xTdGF0ZVN0cmluZyA9IHNjaG9vbFN0YXRlU3RyaW5nLnN1YnN0cigyLCBzY2hvb2xTdGF0ZVN0cmluZy5sZW5ndGgpOyAvLyBSZW1vdmUgdGhlIGZpcnN0IDIgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgICQoJyNjdXJyZW50U3RhdHVzJykudGV4dChzY2hvb2xTdGF0ZVN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjY3VycmVudFN0YXR1cycpLnRleHQoXCJObyBTY2hvb2wgRXZlbnRzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlcGVhdCByZXF1ZXN0IG9uY2UgaXQgaXMgbG9hZGVkIG9yIHVuc3VjY2Vzc2Z1bGx5IGxvYWRlZFxuICAgICAgICBjb25zb2xlLmxvZyhcIltERUJVR106IExvYWRlZCBTUCBDYWxlbmRhclwiKTtcbiAgICAgICAgc2V0VGltZW91dChjYWxlbmRhclBvbGwsIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbiBwb2xsaW5nXG4gICAgfTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgXCJodHRwczovL21vYmlsZWFwcHMuc3AuZWR1LnNnL1NQTW9iaWxlQVBJL2FwaS9HZXRBY2FkQ2FsZW5kYXJcIiwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5zZW5kKCk7XG59XG5mdW5jdGlvbiB0aW1ldGFibGVQb2xsKCkge1xuICAgIC8vIEdldCB0aW1ldGFibGUgZm9yIHRvZGF5IGFuZCBzZWUgaWYgdXNlciBpcyBhdHRlbmRpbmcgbGVzc29uXG4gICAgSGVscGVyLnVzZXJJc0F1dGhlbnRpY2F0ZWQoZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQsIHRva2VuKSB7XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGVkICYmIHRva2VuKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudERhdGVTdHJpbmcgPSBtb21lbnQoKS5mb3JtYXQoJ0RETU1ZWScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbREVCVUddIFJlcXVlc3RlZCBmb3IgdGltZXRhYmxlIHdpdGggZGF0ZTogXCIgKyBjdXJyZW50RGF0ZVN0cmluZyk7XG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IEhlbHBlci5hdXRoZW50aWNhdGVkUmVxdWVzdChcIkdFVFwiLCBcImh0dHBzOi8vbW9iaWxlYXBwcy5zcC5lZHUuc2cvU1BNb2JpbGVBUEkvYXBpL0dldFN0dWRlbnRUaW1ldGFibGVCeUlkQW5kRGF0ZS9cIiArIGN1cnJlbnREYXRlU3RyaW5nLCB0cnVlLCB0b2tlbik7XG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXTogRmFpbGVkIHRvIGxvYWQgdGltZXRhYmxlOiBcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIEluaXRpYWxpc2F0aW9uIGZvciBqUXVlcnkuIFRoaXMgYmxvY2sgcnVucyB3aGVuIGRvY3VtZW50IGlzIHJlYWR5XG4kKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBxdWVyeUluZm8gPSB7XG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgY3VycmVudFdpbmRvdzogdHJ1ZVxuICAgIH07XG4gICAgY2hyb21lLnRhYnMucXVlcnkocXVlcnlJbmZvLCBmdW5jdGlvbiAodGFicykge1xuICAgICAgICAvLyAkKCcjdXJsJykudGV4dCh0YWJzWzBdLnVybCk7XG4gICAgICAgICQoJyN0aW1lJykudGV4dChtb21lbnQoKS5mb3JtYXQoJ0hIOm1tOnNzJykpO1xuICAgIH0pO1xuICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6IGNvdW50LnRvU3RyaW5nKCkgfSk7XG4gICAgJCgnI2NvdW50VXAnKS5jbGljaygoKSA9PiB7XG4gICAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6ICgrK2NvdW50KS50b1N0cmluZygpIH0pO1xuICAgIH0pO1xuICAgIC8vICQoJyNjaGFuZ2VCYWNrZ3JvdW5kJykuY2xpY2soKCk9PntcbiAgICAvLyAgIGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWV9LCBmdW5jdGlvbih0YWJzKSB7XG4gICAgLy8gICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYnNbMF0uaWQsIHtcbiAgICAvLyAgICAgICBjb2xvcjogJyM1NTU1NTUnXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGZ1bmN0aW9uKG1zZykge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IG1lc3NhZ2U6XCIsIG1zZyk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG4gICAgLy8gRmlyc3QgdGhpbmdzIGZpcnN0LCBjaGVjayBpZiB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAgICBIZWxwZXIudXNlcklzQXV0aGVudGljYXRlZChmdW5jdGlvbiAoYXV0aGVudGljYXRlZCkge1xuICAgICAgICBpZiAoYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgLy8gVXNlciBpcyBsb2dnZWQgaW4sIHNob3cgbWFpbiBVSSBhbmQgaW5pdGlhbGlzZSBwb2xsZXJzXG4gICAgICAgICAgICAkKCcjbWFpbicpLnNob3coKTtcbiAgICAgICAgICAgICQoJyNhdXRoJykuaGlkZSgpO1xuICAgICAgICAgICAgY2xvY2tQb2xsKCk7XG4gICAgICAgICAgICBjYWxlbmRhclBvbGwoKTtcbiAgICAgICAgICAgIHRpbWV0YWJsZVBvbGwoKTtcbiAgICAgICAgICAgIHNldEludGVydmFsKHRpbWV0YWJsZVBvbGwsIDEwMDAgKiA2MCAqIDUpOyAvLyA1IG1pbnV0ZSB0aW1ldGFibGUgcG9sbGluZ1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTm90IGF1dGhlbnRpY2F0ZWQsIGRpc3BsYXkgbG9naW4gVUlcbiAgICAgICAgICAgICQoJyNtYWluJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnI2F1dGgnKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBJbml0aWFsaXNlIExvZ2luIGxpc3RlbmVyXG4gICAgJCgnI2xvZ2luQnV0dG9uJykuY2xpY2soTGlzdGVuZXIubG9naW5MaXN0ZW5lcik7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=