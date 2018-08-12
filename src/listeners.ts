import * as SP from "./datatypes";
import * as $ from "jquery";

/**
 * Hooks up to a .click() listener for the login event
 * @param startPollers A callback for the main popup.ts to initialise recurring events (i.e. pollers)
 */
export function loginListener(startPollers: () => void) {
  console.debug("[DEBUG]: Login clicked");
  const request = new XMLHttpRequest();
  request.open("POST", "https://mobileapps.sp.edu.sg/SPMobileAPI/token", true);
  request.onloadend = function() {
    // old code: this.readyState == 4 &&
    if (this.status === 200) {
      // Save name and token into Chrome storage
      if (SP.User.isValid(this.responseText)) {
        const user = SP.User.fromJSON(this.responseText);
        chrome.storage.local.set({ user }, () => {
          console.debug("[DEBUG]: Login succeeded");

          // Save the username and passwords
          chrome.storage.local.set({
            password: $("#password").val() as string,
            username: $("#username").val() as string,
          }, () => {
            console.debug("[DEBUG]: Saved username and password for future");
            // Hide the login dialog and show the main UI
            $("#auth").hide();
            $("#main").show();
            // Start pollers by calling back the main file (popup.ts)
            startPollers();
          });
        });
      } else {
        // Display error
        $("#authError").show();
        $("#authError").text(SP.ERROR_AUTH_INVALID_JSON);
      }
    } else {
      // Login failed in some way
      console.debug("[DEBUG]: Login failed: ");
      console.debug(this.responseText);

      // Error code "2" means login failed
      const responseObject = JSON.parse(this.responseText);
      if (responseObject.error === "2") { // NOTE: THIS IS A STRING!
        $("#authError").show();
        $("#authError").text(SP.ERROR_AUTH_INVALID_PASSWORD);
      }
    }
  };
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // Construct final payload
  const payload = "grant_type=password" +
    "&username=" + encodeURIComponent($("#username").val() as string) +
    "&password=" + encodeURIComponent($("#password").val() as string) +
    "&deviceToken=ayy";
  request.send(payload);
}

export function atsButtonListener() {
  // Call background.ts to post data
  chrome.runtime.sendMessage({ type: "ats-listener" });
}
