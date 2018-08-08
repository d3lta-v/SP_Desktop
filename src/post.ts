import * as SP from './datatypes';

var onMessageHandler = function (message: any) {
  // Ensure it is run only once, as we will try to message twice
  chrome.runtime.onMessage.removeListener(onMessageHandler);
  
  console.log("Removed listener");

  // code from https://stackoverflow.com/a/7404033/934239
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", message.url);
  for (var key in message.data) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", message.data[key]);
    form.appendChild(hiddenField);
  }
  document.body.appendChild(form);
  console.log(document.body);
  // form.submit();
  console.log("Submitted form");

  // let request = new XMLHttpRequest();
  // request.onloadend = function () {
  //   if (this.status == 200) {
  //     $("html").html(this.response);
  //     console.log(this.responseText);
  //   }
  // };
  // request.open("POST", SP.URL_ATS_LOGIN);
  // request.send(); //TODO INSERT PASSWORD
}

console.log("Added listener");
chrome.runtime.onMessage.addListener(onMessageHandler);
