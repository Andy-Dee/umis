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

/* smooth scrolling */
$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 3000);
      }
  });
});

/* preload of hovers in cache */
$(document).ready(function(){
  (function ($) {
    var cache = [];
    $.preLoadImages = function () {
        var args_len = arguments.length;
        for (var i = args_len; i--; ) {
            var cacheImage = document.createElement('img');
            cacheImage.src = arguments[i];
            cache.push(cacheImage);
        }
    }
  })(jQuery)
  jQuery.preLoadImages("./img/choose-hover.png", "./img/details-color-hover.png", "./img/details-white-hover.png", 
    "./img/fancy-close-hover.png", "./img/free-call-hover.png", "./img/send-apply-hover.png", "./img/slide-prev-hover.png",
    "./img/slide-next-hover.png");
});

/* hover of  */

$( function() {
    $('.free-call').hover(
    function(){
        $('.free-call-link').css('color','white');
    },
    function(){
        $('.free-call-link').css('color','#454545');
    });
});


/* Input file castomisation */
$(function(){
    var wrapper = $( ".file_upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( ".button" ),
        lbl = wrapper.find( "mark" );

    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Выбрать" );
        }else
            btn.text( file_name );
    }).change();

});
$( window ).resize(function(){
    $( ".file_upload input" ).triggerHandler( "change" );
});




