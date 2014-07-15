/*------------------------------------*\
    MAIN
\*------------------------------------*/

/**
 * http://jstarrdewar.com/blog/2013/02/28/use-uglify-to-automatically-strip-debug-messages-from-your-javascript/
 */
if (typeof debug === 'undefined') {
  debug = true;
}

curl.config({
  baseUrl: '/js',
  paths: { 'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js' }
});

curl([
    'modules/grid',
    'modules/mailto',
    'modules/rhythm',
    'modules/svg',
    'domReady!'
  ]).then(
  function(grid, mailto, rhythm, svg) {
    var layout = function() {
      rhythm();
      grid();
      if (!/ready/.test(document.documentElement.className)) {
        document.documentElement.className += ' ready';
      }
    }
    layout();
    window.addEventListener('resize', layout);
  },
  function() {
    console.log('Oh dear, something went wrong!');
  }
);
