
(function($) {
  $.fn.conditionize = function(options){ 
    
     var settings = $.extend({
        hideJS: true
    }, options );
    
    $.fn.showOrHide = function(listenTo, listenFor, $section) {
      if ($(listenTo).is('select, input[type=text]') && $(listenTo).val() == listenFor ) {
        $section.slideDown();
      }
      else if ($(listenTo + ":checked").val() == listenFor) {
        $section.slideDown();
      }
      else {
        $section.slideUp();
      }
    } 

    return this.each( function() {
      var listenTo = "[name=" + $(this).data('cond-option') + "]";
      var listenFor = $(this).data('cond-value');
      var $section = $(this);
  
      $(listenTo).on('change', function() {
        $.fn.showOrHide(listenTo, listenFor, $section);
      });
     
      if (settings.hideJS) {
        $(this).hide();
      }
   
      $.fn.showOrHide(listenTo, listenFor, $section);
    });
  }
}(jQuery));
  
 $('.conditional').conditionize();