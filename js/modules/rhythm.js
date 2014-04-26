/*------------------------------------*\
    $RHYTHM
\*------------------------------------*/

define('modules/rhythm', ['domReady!'], function() {

  var rhythm = function() {
    var lineHeight = window.getComputedStyle(document.body).lineHeight,
        baseline = parseInt(lineHeight, 10) / 2,
        images = document.getElementsByClassName('js-rhythm');

    for (var i = 0; i < images.length; i++) {
      var image = images[i],
          factor;

      image.style.height = 'auto';
      factor = Math.ceil(image.clientHeight / baseline);
      image.style.height = baseline * factor + 'px';
    }
  }

  rhythm();

  window.addEventListener('resize', function() {
    rhythm();
  }, true);

});
