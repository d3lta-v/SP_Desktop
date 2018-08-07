/**
 * Generates an authenticated request using an existing token
 * @param method The HTTP method to use for this request
 * @param url The URL to use for this request
 * @param async Whether the request should be done asynchronously
 * @param token The token WITHOUT the "Bearer " prefix
 */
export function authenticatedRequest(method: string, url: string, async: boolean, token: string): XMLHttpRequest {
  let request = new XMLHttpRequest();
  request.open(method, url, async);
  request.setRequestHeader('Authorization', 'Bearer ' + token);
  return request;
}

/**
 * Checks if the current token stored in Chrome's storagge is a valid
 * token (i.e. the user is already authenticated). 
 * @param callback A lambda that returns the authenticated state through a parameter
 * @param token The session token, if the user is indeed authenticated. Else, it returns undefined
 */
export function userIsAuthenticated(callback: (authenticated: boolean, token: string|undefined) => void) {
  chrome.storage.sync.get('user', function(result) {
    // First round: checking for existence of token
    if (result['user'] && result['user']['accessToken']) {
      // Second round: token validity checking with a small API endpoint
      let request = authenticatedRequest(
        "POST", 
        "https://mobileapps.sp.edu.sg/SPMobileAPI/api/CountUnreadItem", 
        true, 
        result['user']['accessToken']);

      request.onloadend = function () {
        if (this.status == 200) {
          // Token is valid, return callback with true
          callback(true, result['user']['accessToken']);
        }
      }
      
      request.send();
    } else {
     callback(false, undefined);
    }
  });
}

/**
 * Purges the old user token from Chrome's internal storage
 */
export function purgeOldToken() {
  chrome.storage.sync.remove('user');
}