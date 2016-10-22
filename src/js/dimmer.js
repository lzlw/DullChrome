/* eslint no-unused-vars: 0*/

// Add overlay div to page
function addOverlay() {
  $( 'body' ).append('<div id="dimmerOverlay"></div>');
}

// Set position when scrolling
function positionOverlay() {
  $( 'div#dimmerOverlay' ).css({
    top: $( window ).scrollTop(),
    left: $( window ).scrollLeft()
  });
}

// Set CSS styles of overlay
function styleOverlay() {
  $( 'div#dimmerOverlay' ).css({
    'pointer-events': 'none',      // Does not hijack clicks
    width: $( window ).width(),
    height: $( window ).height(),
    position: 'absolute',
    background: 'black',
    'z-index': '9999',            // Stay on top
    top: 0,
    left: 0
  });
}

// Change size of overlay
function resizeOverlay() {
  $( 'div#dimmerOverlay' ).css({
    width: $( window ).width(),
    height: $( window ).height()
  });
}

// Change opacity of overlay
function adjustOverlayOpacity(opacity) {
  // Check valid opacity (0.00 - 1.00)
  if (opacity < 0 || opacity > 1) {
    opacity = Math.round(opacity);
  }

  $( 'div#dimmerOverlay' ).fadeTo(0, opacity);
  return opacity;
}

// Reposition overlay on scroll
window.addEventListener('scroll', function() {
  positionOverlay();
});

// Resize overlay on window resize
window.addEventListener('resize', function() {
  resizeOverlay();
});
