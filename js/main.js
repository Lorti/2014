/*------------------------------------*\
    MAIN
\*------------------------------------*/

/**
 * http://jstarrdewar.com/blog/2013/02/28/use-uglify-to-automatically-strip-debug-messages-from-your-javascript/
 */
if (typeof debug === 'undefined') { debug = true; }

curl.config({
  baseUrl: '/js',
  paths: { 'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js' }
});

curl([
    'modules/baseliner',
    'modules/grid',
    'modules/rhythm',
    'modules/svg',
    'domReady!'
  ]).then(
  function(baseliner, grid, rhythm, svg) {
    if (debug) { new baseliner(12); }
    window.addEventListener('load', function() {
      grid();
      rhythm();
    });
    window.addEventListener('resize', function() {
      rhythm();
      grid();
    });
  },
  function() {
    console.log('Oh dear, something went wrong!');
  }
);
