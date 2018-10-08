/** Jquery Plugin */

(function($) {
  var counter = 0;
  $.fn.identify = function(options) {

    var settings = $.extend({
      prefix : "test-"
    }, options);

    this.each(function() {
      this.id = settings.prefix + (++counter);
    })
  }
})(jQuery);


$('body *').identify();
