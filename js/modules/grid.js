/*------------------------------------*\
    $GRID
\*------------------------------------*/

define('modules/grid', ['domReady!'], function() {

  var grid = function() {
    var works = Array.prototype.slice.call(document.getElementsByClassName('js-grid')),
        rows = [],
        row = -1,
        lastOffset;

    /**
     * Group grid items by their vertical position.
     */
    works.forEach(function(column) {
      var offset = column.offsetTop;
      if (offset !== lastOffset) {
        row++;
        rows[row] = [];
      }
      rows[row].push(column);
      lastOffset = offset;
    });

    /**
     * Calculate and set the perfect height for each row.
     */
    rows.forEach(function(row) {
      var heights = [],
          maxHeight;

      row.forEach(function(column) {
        heights.push(column.clientHeight);
      });

      maxHeight = Math.max.apply(null, heights);

      row.forEach(function(column) {
        column.style.height = maxHeight + 'px';
        column.className += ' js-show';
      });
    });

  };
  return grid;

});
