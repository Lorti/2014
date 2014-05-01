/*------------------------------------*\
    $GRID
\*------------------------------------*/

define('modules/grid', ['domReady!'], function() {

  var grid = function() {
    var works = document.getElementsByClassName('js-grid'),
        css = document.getElementById('js-grid');

    if (css !== null) {
      css.innerHTML = '';
    }

    var rule = '.js-grid:nth-child(' + columns(works) + 'n+1) { clear: both; }';

    if (css === null) {
      css = document.createElement('style');
      css.id = 'js-grid'
      css.type = 'text/css';
      css.innerHTML = rule;
      document.body.appendChild(css);
    } else {
      css.innerHTML = rule;
    }

    function columns(items) {
      var columns = 0,
          lastOffset;
      for (var i = 0; i < items.length; i++) {
        var offset = items[i].offsetTop;
        if (lastOffset === undefined) {
          lastOffset = offset;
        }
        if (offset === lastOffset) {
          columns++;
        } else {
          break;
        }
      }
      return columns;
    }
  };

  return grid;

});
