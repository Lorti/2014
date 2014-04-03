/*------------------------------------*\
    $PHOTOSET
\*------------------------------------*/

define('modules/photoset', ['jquery'], function($) {

  $(document).ready(function() {

    $(window).on({
      orientationchange: function() { arrangePhotoset(); },
      resize: function() { arrangePhotoset(); }
    });

  });



  $(window).load(function () {

    // Wait for images to be loaded and store their original dimensions.
    $('.Photoset-item img').each(function () {
      var img = new Image();
      img.src = $(this).attr('src');
      $(this).data('ratio', img.width / img.height);
    });

    // Trigger the resize event to create the responsive photoset.
    $('.Photoset').addClass('s-active');
    $(window).resize();

  });



  function arrangePhotoset() {
    $('.Photoset').each(function () {
      if ($(this).hasClass('s-active')) {

        $('.Photoset-row').each(function () {
          var $photosetItems = $(this).find('.Photoset-item'),
              containerWidth = $(this).parent('.Photoset').width();

          // Generate an array containing all image aspect ratios.
          var ratios = $photosetItems.map(function () {
            return $(this).find('img').data('ratio');
          }).get();

          // Sum all widths and increase the sum of the margins to account for rounding errors.
          var sumRatios = 0,
              sumMargins = 1,
              minRatio = Math.min.apply(Math, ratios);
          for (var i = 0; i < $photosetItems.length; i++) {
            sumRatios += ratios[i] / minRatio;
          };
          $photosetItems.each(function (){
            sumMargins += parseInt($(this).css('margin-left'))
                + parseInt($(this).css('margin-right'));
          });

          // Calculate the new image dimensions.
          $photosetItems.each(function(i) {
            var minWidth = (containerWidth - sumMargins) / sumRatios;
            $(this).find('img')
              .height(Math.floor(minWidth / minRatio))
              .width(Math.floor(minWidth / minRatio) * ratios[i]);
          });
        });

      }
    });
  }

});
