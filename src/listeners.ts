import * as SP from './datatypes';
import * as $ from 'jquery';

/**
 * Hooks up to a .click() listener for the login event
 */
export function loginListener() {
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
      } else {
        // Display error
        $('#authError').show();
        $('#authError').text(SP.ERROR_AUTH_INVALID_JSON);
      }
    } else {
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
    "&username=" + encodeURIComponent(<string>$('#username').val()) +
    "&password=" + encodeURIComponent(<string>$('#password').val()) +
    "&deviceToken=ayy";
  request.send(payload);
}
