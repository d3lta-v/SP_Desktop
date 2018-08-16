import * as $ from "jquery";
import * as Helper from "./helper";

/**
 * Hooks up to a .click() listener for the login event
 * @param finished A callback for the main popup.ts to initialise recurring events (i.e. pollers)
 */
export function loginListener(finished: () => void) {
  Helper.userLogin($("#username").val() as string, $("#password").val() as string, () => {
    // Hide the login dialog and show the main UI
    $("#main").show();
    $("#tabBar").show();
    $("#auth").hide();
    $("#loading").hide();
    // Start pollers by calling back the main file (popup.ts)
    finished();
  }, (error) => {
    // Display error
    $("#authError").show();
    $("#authError").text(error);
  });
}

/**
 * A listener to attach to a button to trigger the ATS interface
 */
export function atsButtonListener() {
  // Call background.ts to post data
  chrome.runtime.sendMessage({ type: "ats-listener" });
}
