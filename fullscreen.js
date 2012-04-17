document.addEventListener('keydown', function(aEvent) {
    if (aEvent.keyCode == 70) { // f
        aEvent.preventDefault();
        fullscreen();
    }
});

function fullscreen() {
    var html = $('html'),
  requestFullscreen = html.requestFullscreen || html.requestFullScreen || html.mozRequestFullScreen || html.webkitRequestFullScreen;

  if (requestFullscreen) {
      requestFullscreen.apply(html);
  }
}