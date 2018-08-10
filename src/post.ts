/**
 * Message handler to redirect a user to a webpage with a POST request
 * This method works on the principle of dynamically generating a <form>
 * and submitting it to the desired URL.
 * @param message The POST request's form-encoded fields as a Javascript Object
 */
var onMessageHandler = function (message: any) {
  // Ensure it is run only once, as we will try to message twice
  chrome.runtime.onMessage.removeListener(onMessageHandler);
  
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
  form.submit();
}

chrome.runtime.onMessage.addListener(onMessageHandler);
