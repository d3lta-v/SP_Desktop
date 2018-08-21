import * as SP from "./datatypes";
import * as $ from "jquery";

/**
 * Generates an authenticated request using an existing token
 * @param method The HTTP method to use for this request
 * @param url The URL to use for this request
 * @param async Whether the request should be done asynchronously
 * @param token The token WITHOUT the "Bearer " prefix
 */
export function authenticatedRequest(method: string, url: string, async: boolean, token: string): XMLHttpRequest {
  const request = new XMLHttpRequest();
  request.open(method, url, async);
  request.setRequestHeader("Authorization", "Bearer " + token);
  return request;
}

/**
 * Checks if the current token stored in Chrome's storage is a valid
 * token (i.e. the user is already authenticated).
 * @param callback A lambda that returns the authenticated state through a parameter
 * @param token The session token, if the user is indeed authenticated. Else, it returns undefined
 */
export function userIsAuthenticated(callback: (authenticated: boolean, token: string|undefined) => void) {
  chrome.storage.local.get("user", function(result) {
    // First round: checking for existence of token
    if (result.user && result.user.accessToken) {
      // Second round: token validity checking with a small API endpoint
      const request = authenticatedRequest(
        "POST",
        "https://mobileapps.sp.edu.sg/SPMobileAPI/api/CountUnreadItem",
        true,
        result.user.accessToken);

      request.onloadend = function() {
        if (this.status === 200) {
          // Token is valid, return callback with true
          callback(true, result.user.accessToken);
        } else if (this.status === 401) {
          // Token is invalid, server is still reachable
          callback(false, undefined);
        }
      };

      request.send();
    } else {
     callback(false, undefined);
    }
  });
}

/**
 * Retrieves the user's login token only and does not perform further
 * validation
 * @param callback A lambda that returns the user's token
 */
export function getUserToken(callback: (token: string|undefined) => void) {
  chrome.storage.local.get("user", function(result) {
    if (result.user && result.user.accessToken) {
      callback(result.user.accessToken);
    } else {
      callback(undefined);
    }
  });
}

/**
 * Performs user login with a username and password
 * @param username The username to log in with
 * @param password The corresponding password to the username
 * @param successCallback A lambda that should be called upon successful login
 * @param errorCallback A lambda that should be called upon a failed login, and supplies error details as a `string`
 */
export function userLogin(username: string,
                          password: string,
                          successCallback: () => void,
                          errorCallback: (error: string) => void) {
  const request = new XMLHttpRequest();
  request.open("POST", "https://mobileapps.sp.edu.sg/SPMobileAPI/token", true);
  request.onloadend = function() {
    if (this.status === 200) {
      // Save name and token into Chrome storage
      if (SP.User.isValid(this.responseText)) {
        const user = SP.User.fromJSON(this.responseText);
        chrome.storage.local.set({ user }, () => {
          console.debug("[DEBUG]: Login succeeded");

          // Save the username and passwords
          chrome.storage.local.set({
            username,
            password,
          }, () => {
            console.debug("[DEBUG]: Saved username and password for future");
            successCallback();
          });
        });
      } else {
        errorCallback(SP.ERROR_AUTH_INVALID_JSON);
      }
    } else {
      // Login failed in some way
      console.debug("[DEBUG]: Login failed: ");
      console.debug(this.responseText);

      // Error code "2" means login failed
      const responseObject = JSON.parse(this.responseText);
      if (responseObject.error === "2") { // NOTE: THIS IS A STRING!
        errorCallback(SP.ERROR_AUTH_INVALID_PASSWORD);
      } else {
        // The error code isn't even 2, tell the user the code ain't even valid
        errorCallback(SP.ERROR_AUTH_INVALID_CODE);
      }
    }
  };
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // Construct final payload
  const payload = "grant_type=password" +
    "&username=" + encodeURIComponent(username) +
    "&password=" + encodeURIComponent(password) +
    "&deviceToken=ayy"; // yes i know this is a funny "device token". it has to be there okay?
  request.send(payload);
}

/**
 * Logs the user out of this extension by deleting `user`, `username` and
 * `password`
 */
export function userLogout() {
  chrome.storage.local.remove(["user", "username", "password"]);
}

/**
 * Rekey the user, or in other words, retrieve a fresh session token from the
 * server using the user's original credentials.
 * **WARNING**: This function will delete the user from local storage if the
 * server returns an authentication failure message.
 */
export function rekeyUser(completed: (success: boolean) => void) {
  chrome.storage.local.get(["username", "password"], function(result) {
    // Retrieve username and password
    const username = result.username as string;
    const password = result.password as string;
    if (username && password) { // basic null checking
      // Re-attempt login
      userLogin(username, password, () => {
        console.debug("[DEBUG]: Rekeying succeeded ");
        completed(true);
      }, (error) => {
        console.debug("[DEBUG]: Rekeying failed with error " + error);
        completed(false);
      });
    } else {
      completed(false);
      // Log the user out by force since there isn't even a username and password present
      userLogout();
    }
  });
}

/**
 * Shows the login UI and purges the old user info. Meant to called when the
 * program detects that user is unauthorised due to various reasons
 */
export function showLoginUIAndPurgeToken() {
  $("#main").hide();
  $("#tabBar").hide();
  $("#auth").show();
  $("#loading").hide();

  // If the user info is still in storage, delete it
  userLogout();
}
