// import * as moment from "moment";
import * as SP from "./datatypes";

/**
 * Performs a POST request on the user's browser with parameters
 * @param url The URL to POST to
 * @param data The data to POST to the URL specified above
 */
function postData(url: string, data: any) {
  chrome.tabs.create(
    { url: chrome.runtime.getURL("ats_popup.html") },
    function(tab: chrome.tabs.Tab) {
      const handler = function(tabId: any, changeInfo: any) {
        if (tabId === tab.id && changeInfo.status === "complete") {
          chrome.tabs.onUpdated.removeListener(handler);
          chrome.tabs.sendMessage(tabId, { url, data });
        }
      };

      // in case we're faster than page load (usually):
      chrome.tabs.onUpdated.addListener(handler);
      // just in case we're too late with the listener:
      if (tab.id) {
        chrome.tabs.sendMessage(tab.id, { url, data });
      } else {
        console.error("[ERROR]: Tab ID is null!");
      }
    },
  );
}

// Background.ts NEEDS to listen for a specific message for it to redirect user to a page,
// as calling it direct from popup.ts would not work (since popup closes the instant a new tab is instantiated)

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "ats-listener") {
    chrome.storage.local.get(["username", "password"], function(result) {
      if (result.username && result.password) {
        postData(SP.URL_ATS_LOGIN, {
          timezoneOffset: -480,
          userid: result.username,
          pwd: result.password });
      } else {
        // callback(undefined);
        chrome.tabs.create({ url: SP.URL_ATS });

        // TODO: Log user out by deleting token, username and password
      }
    });
  }
});
