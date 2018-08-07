import * as $ from 'jquery';

// Saves options to chrome.storage.local.
function save_options() {
  var color = $('#color').val();
  var likesColor = $('#like').prop('checked');
  chrome.storage.local.set({
    favoriteColor: color,
    likesColor: likesColor
  }, function () {
    // Update status to let user know options were saved.
    var status = $('#status');
    status.text('Options saved.');
    setTimeout(function () {
      status.text('');
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  // chrome.storage.local.get({
  //   favoriteColor: 'red',
  //   likesColor: true
  // }, function (items: { favoriteColor, likesColor }) {
  //   $('#color').val(items.favoriteColor);
  //   $('#like').prop('checked', items.likesColor);
  // });
}

$('#save').click(save_options);
$(restore_options); // document.addEventListener('DOMContentLoaded', restore_options);

