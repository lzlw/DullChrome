// State of overlay.
var overlayEnabled = false;

$( 'document' ).ready(function() {
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log('toggle msg recvd', overlayEnabled);
      if (request.toggle) {
        if (overlayEnabled) {
          disableDullChrome();
        } else {
          enableDullChrome();
        }

        overlayEnabled = !overlayEnabled;
      }
      sendResponse({reply: 'done'});
    });
});

function enableDullChrome() {
  addOverlay();
  styleOverlay();
  positionOverlay();
  adujustOverlayOpacity(0.5);

  // Reposition overlay on scroll
  window.addEventListener('scroll', positionOverlay);

  // Resize overlay on window resize
  window.addEventListener('resize', resizeOverlay);
}

function disableDullChrome() {
  // Remove overlay
  $( 'div#dimmerOverlay' ).remove();

  // Remove scroll event
  window.removeEventListener('scroll', positionOverlay);

  // Remove resize event
  window.removeEventListener('resize', resizeOverlay);
}
