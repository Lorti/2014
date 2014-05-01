/*------------------------------------*\
    $RHYTHM
\*------------------------------------*/

// TODO: Setting the height does not work in Firefox after a hard refresh.

define('modules/rhythm', ['domReady!'], function() {

  var rhythm = function() {
    var lineHeight = window.getComputedStyle(document.body).lineHeight,
        baseline = parseInt(lineHeight, 10) / 2,
        images = document.getElementsByClassName('js-rhythm');

    for (var i = 0; i < images.length; i++) {
      var image = images[i],
          factor,
          height;

      image.style.height = 'auto';
      factor = Math.ceil(image.clientHeight / baseline);
      height = baseline * factor;
      if (height !== 0) {
        image.style.height = baseline * factor + 'px';
      }
    }
  };
  return rhythm;

});
