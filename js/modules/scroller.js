/*------------------------------------*\
    $SCROLLER
\*------------------------------------*/

define('modules/scroller', ['jquery', 'domReady!'], function($) {

  $('a[href^=#]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').animate({
      'scrollTop': $target.offset().top
    }, 1000, 'swing', function() {
      window.location.hash = target;
    });
  });

});
