/* Slider Slick */
$(document).ready(function(){
  $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
  });
});

/* Gallery Fancybox */
$(document).ready(function() {
  $('a.mySlides').fancybox({
  });  
});

/* Validation */
$(document).ready(function(){
  $("#formID").validationEngine();
});

/* Select style */
$(document).ready(function(){
  $('.select').select2({
    minimumResultsForSearch: -1
  });
});

/* Hovers in menu */

$( function() {
    $('.dropdown-list').hover(
    function(){
        $('.dropdown-list-outer').css('color','#FFF');
    },
    function(){
        $('.dropdown-list-outer').css('color','#7cd25a');
    });
});

$( function() {
    $('.dropdown-bottom-list').hover(
    function(){
        $('.dropdown-list-bottom-outer').css('color','#7cd25a');
    },
    function(){
        $('.dropdown-list-bottom-outer').css('color','#454545');
    });
});


