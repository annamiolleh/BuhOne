$(document).ready(function() {
    var burger = $("#burger-btn");

    burger.on("click", function(e){
        e.preventDefault;
        
        var cross = $(".burger");
        var miniNavigation = $(".nav-sm");
        
        cross.toggleClass('burger--active');
        miniNavigation.toggleClass("nav-sm--active")

    });
    // Slick slider
    $('#top-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 1000,
        prevArrow:'.top-left-ar',
        nextArrow:'.top-right-ar',
      });
      $('#bot-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        speed: 1000,
        prevArrow:'.bot-left-ar',
        nextArrow:'.bot-right-ar',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                dots: false,
                autoplay: true,
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
              }
            }
        ],  
      });
});