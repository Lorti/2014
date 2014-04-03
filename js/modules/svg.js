/*------------------------------------*\
    $SVG
\*------------------------------------*/

define('modules/svg', ['domReady!'], function() {

  if (!Modernizr.svg) {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
      var image = images[i],
          source = image.getAttribute('src'),
          svg = /\.svg/.test(source);
      if (svg) {
        image.setAttribute('src', source.slice(0, -3) + 'png');
      }
    }
  }

});
