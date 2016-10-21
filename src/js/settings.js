$( '#toggle' ).on('click', toggleOverlay);
$( '#lighten' ).on('click', lightenOverlay);
$( '#darken' ).on('click', darkenOverlay);

function toggleOverlay() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {toggle: true}, function(response) {
      console.log(response.reply);
    });
  });
}

function lightenOverlay() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {lighten: true}, function(response) {
      console.log(response.reply);
    });
  });
}

function darkenOverlay() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {darken: true}, function(response) {
      console.log(response.reply);
    });
  });
}
