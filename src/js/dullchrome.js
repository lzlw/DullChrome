/* eslint no-undef: 0 */

// Default state of overlay.
var overlayEnabled = false;
var overlayOpacity = 0.5;

$( 'document' ).ready(function() {
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      // Toggle overlay
      if (request.toggle) {
        if (overlayEnabled) {
          disableDullChrome();
        } else {
          enableDullChrome();
        }

        overlayEnabled = !overlayEnabled;
      } else if (request.lighten) {
        if (!overlayEnabled) {
          enableDullChrome();
          overlayEnabled = !overlayEnabled;
        }

        // Lower overlayOpacity
        overlayOpacity -= 0.1;

        // Check if overlayOpacity is still valid
        if (overlayOpacity < 0.0) {
          overlayOpacity = 0;
        } else {
          adjustOverlayOpacity(overlayOpacity);
        }
      } else if (request.darken) {
        if (!overlayEnabled) {
          enableDullChrome();
          overlayEnabled = !overlayEnabled;
        }

        // Raise overlayOpacity
        overlayOpacity += 0.1;

        // Check if overlayOpacity is still valid
        if (overlayOpacity > 1) {
          overlayOpacity = 1;
        } else {
          adjustOverlayOpacity(overlayOpacity);
        }
      }

      sendResponse({reply: 'done'});
    });
});

function enableDullChrome() {
  addOverlay();
  styleOverlay();
  positionOverlay();
  adjustOverlayOpacity(0.5);

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
