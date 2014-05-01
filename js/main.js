/*------------------------------------*\
    MAIN
\*------------------------------------*/

/**
 * http://jstarrdewar.com/blog/2013/02/28/use-uglify-to-automatically-strip-debug-messages-from-your-javascript/
 */
if (typeof DEBUG === 'undefined') { DEBUG = true; }

curl.config({
  baseUrl: '/js',
  paths: { 'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js' }
});

curl([
    'modules/baseliner',
    'modules/grid',
    'modules/rhythm',
    'modules/scroller',
    'modules/svg',
  ]).then(
  function(baseliner, grid, rhythm, scroller, svg) {
    if (DEBUG) { new baseliner(12); }
    rhythm();
    grid();
    window.addEventListener('resize', function() {
      rhythm();
      grid();
    }, true);
  },
  function() {
    console.log('Oh dear, something went wrong!');
  }
);
