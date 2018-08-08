//import * as moment from 'moment';
import * as SP from './datatypes';

function postData(url: string, data: any) {
  chrome.tabs.create(
    { url: chrome.runtime.getURL("ats_popup.html") },
    function (tab: chrome.tabs.Tab) {
      var handler = function (tabId: any, changeInfo: any) {
        if (tabId === tab.id && changeInfo.status === "complete") {
          chrome.tabs.onUpdated.removeListener(handler);
          chrome.tabs.sendMessage(tabId, { url: url, data: data });
        }
      }

      // in case we're faster than page load (usually):
      chrome.tabs.onUpdated.addListener(handler);
      // just in case we're too late with the listener:
      if (tab.id) {
        chrome.tabs.sendMessage(tab.id, { url: url, data: data });
      } else {
        console.error("[ERROR]: Tab ID is null!");
      }
    }
  );
}

chrome.storage.local.get(['username', 'password'], function (result) {
  if (result['username'] && result['password']) {
    postData(SP.URL_ATS_LOGIN, { 'timezoneOffset': -480, 'userid': result['username'], 'password': result['password'] });
  } else {
    // callback(undefined);
    chrome.tabs.create({ url: SP.URL_ATS });

    // TODO: Log user out by deleting token, username and password
  }
});
