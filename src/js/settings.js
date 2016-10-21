$( '#toggle' ).on('click', function() {
  toggleOverlay();
});

function toggleOverlay() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {toggle: true}, function(response) {
      console.log(response.reply);
    });
  });
}
