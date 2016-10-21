// Add div to page
function addOverlay() {
  $( 'body' ).append('"<div id="dimmerOverlay"></div>');
}

function positionOverlay() {
  $( 'div#dimmerOverlay' ).css({
    top: $( window ).scrollTop(),
    left: $( window ).scrollLeft()
  });
}

function styleOverlay() {
  $( 'div#dimmerOverlay' ).css({
    'pointer-events': 'none',
    width: $( window ).width(),
    height: $( window ).height(),
    position: 'absolute',
    background: 'black',
    'z-index': '9999',
    top: 0,
    left: 0
  });
}

function resizeOverlay() {
  $( 'div#dimmerOverlay' ).css({
    width: $( window ).width(),
    height: $( window ).height()
  });
}

function adujustOverlayOpacity(opacity) {
  // Check valid opacity (0.00 - 1.00)
  if (opacity < 0 || opacity > 1) {
    return -1;
  } else {
    $( 'div#dimmerOverlay' ).fadeTo(0, opacity);
    return opacity;
  }
}

$( 'document' ).ready(function() {
  addOverlay();
  styleOverlay();
  positionOverlay();
  adujustOverlayOpacity(0.5);
});

window.addEventListener('scroll', function() {
  positionOverlay();
});

window.addEventListener('resize', function() {
  resizeOverlay();
});
