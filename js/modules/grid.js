/*------------------------------------*\
    $GRID
\*------------------------------------*/

define('modules/grid', ['domReady!'], function() {

  var grid = function() {
    var works = document.getElementsByClassName('Work'),
        lines = [],
        index = -1,
        lastOffset = 0;

    /**
     * Group grid items by their vertical position.
     */
    for (var i = 0; i < works.length; i++) {
      var work = works[i],
          offset = work.offsetTop;
      if (offset !== lastOffset) {
        index++;
        lines[index] = [];
      }
      lines[index].push(work);
      lastOffset = offset;
    }

    /**
     * Calculate and set the perfect height for each line.
     */
    for (var j = 0; j < lines.length; j++) {
      var works = lines[j],
          heights = [],
          maxHeight;

      for (var k = 0; k < works.length; k++) {
        heights.push(works[k].clientHeight);
      }

      maxHeight = Math.max.apply(null, heights);

      for (var l = 0; l < works.length; l++) {
        works[l].style.height = maxHeight + 'px';
      }
    }

  };
  return grid;

});
