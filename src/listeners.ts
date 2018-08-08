import * as SP from './datatypes';
import * as $ from 'jquery';

/**
 * Hooks up to a .click() listener for the login event
 * @param startPollers A callback for the main popup.ts to initialise recurring events (i.e. pollers)
 */
export function loginListener(startPollers: () => void) {
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
          chrome.storage.local.set({ 'username': <string>$('#username').val(),
          'password': <string>$('#password').val() }, () => {
            console.debug("[DEBUG]: Saved username and password for future");
            // Hide the login dialog and show the main UI
            $('#auth').hide();
            $('#main').show();
            // Start pollers by calling back the main file (popup.ts)
            startPollers();
          });
        });
      } else {
        // Display error
        $('#authError').show();
        $('#authError').text(SP.ERROR_AUTH_INVALID_JSON);
      }
    } else {
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
    "&username=" + encodeURIComponent(<string>$('#username').val()) +
    "&password=" + encodeURIComponent(<string>$('#password').val()) +
    "&deviceToken=ayy";
  request.send(payload);
}

export function atsButtonListener() {
  chrome.storage.local.get(['username', 'password'], function (result) {
    if (result['username'] && result['password']) {
      // postData(SP.URL_ATS_LOGIN, { 'timezoneOffset': -480, 'userid': result['username'], 'password': result['password'] });
    } else {
      // callback(undefined);
      chrome.tabs.create({ url: SP.URL_ATS });

      // TODO: Log user out by deleting token, username and password
    }
  });
}

function postData(url: string, data: any) {
  chrome.tabs.create(
    { url: chrome.runtime.getURL("ats_popup.html") },
    function(tab: chrome.tabs.Tab) {
      var handler = function(tabId: any, changeInfo: any) {
        if(tabId === tab.id && changeInfo.status === "complete"){
          chrome.tabs.onUpdated.removeListener(handler);
          chrome.tabs.sendMessage(tabId, {url: url, data: data});
        }
      }

      // in case we're faster than page load (usually):
      chrome.tabs.onUpdated.addListener(handler);
      // just in case we're too late with the listener:
      if (tab.id) {
        chrome.tabs.sendMessage(tab.id, {url: url, data: data});
      } else {
        console.error("[ERROR]: Tab ID is null!");
      }
    }
  );  
}
