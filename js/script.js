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


