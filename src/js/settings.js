/* eslint no-console: 0 */
$( 'document' ).ready(function() {
  $( '#toggle' ).on('click', toggleOverlay);
  $( '#lighten' ).on('click', lightenOverlay);
  $( '#darken' ).on('click', darkenOverlay);

  $( '#slider' ).slider({
    min: 0,
    max: 1,
    orientation: 'horizontal',
    step: 0.05,
    value: 1,
    animate: true,
    change: function(e, slider) {
      slideOverlay(slider.value);
    }
  });
});

function toggleOverlay() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {toggle: true}, function() {
      // console.log(response.reply);
    });
  });
}

function lightenOverlay() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {lighten: true}, function() {
      // console.log(response.reply);
    });
  });
}

function darkenOverlay() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {darken: true}, function() {
      // console.log(response.reply);
    });
  });
}

function slideOverlay(value) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {opacity: value}, function() {
      //console.log(response.reply);
    });
  });
}
