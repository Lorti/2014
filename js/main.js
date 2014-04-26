/*------------------------------------*\
    MAIN
\*------------------------------------*/

/**
 * http://jstarrdewar.com/blog/2013/02/28/use-uglify-to-automatically-strip-debug-messages-from-your-javascript/
 */
if (typeof DEBUG === 'undefined') DEBUG = true;

curl.config({
  baseUrl: '/js',
  paths: { 'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js' }
});

curl([
    'modules/baseliner',
    'modules/photoset',
    'modules/rhythm',
    'modules/scroller',
    'modules/svg',
  ]).then(
  function(baseliner, svg, main) {
    if (DEBUG) { new baseliner(24); }
  },
  function() {
    console.log('Oh dear, something went wrong!');
  }
);
