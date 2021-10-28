$( document ).ready( function() {

  if ( $( '.arrivals' ).length ) {
    $('.arrivals').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $(".arrival-prev"),
      nextArrow: $(".arrival-next"),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });  
    
    $(".arrivals").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0) + 1;
      $(".arrival-page").find(".current").text("0"+i);
      var width = 100/slick.slideCount*(i);
      console.log(width)
      $(".arrival-page").find(".progress-bar").attr("style", "width:"+width+"%");
    });
  }

  if ( $( '.best-products' ).length ) {
    $('.best-products').slick({
      dots: false,
      arrows: true,
      centerMode: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $(".best-prev"),
      nextArrow: $(".best-next"),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            centerMode: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        }
      ]
    });  
    
    $(".best-products").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0) + 1;
      $(".best-page").find(".current").text("0"+i);
      var width = 100/slick.slideCount*(i);
      console.log(width)
      $(".best-page").find(".progress-bar").attr("style", "width:"+width+"%");
    });
  }

    if ( $( '.top-product' ).length ) {
      $('.top-product').slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".top-prev"),
        nextArrow: $(".top-next"),
      });

      $(".top-product").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $(".top-page").find(".current").text("0"+i);
        var width = 100/slick.slideCount*(i);
        console.log(width)
        $(".top-page").find(".progress-bar").attr("style", "width:"+width+"%");
      });
    }

    if ( $( '.histories' ).length ) {
      $('.histories').slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".history-prev"),
        nextArrow: $(".history-next"),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
            }
          },
        ]
      });
    }

    if ( $( '.portfolios' ).length ) {
      $('.portfolios').slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".portfolio-prev"),
        nextArrow: $(".portfolio-next"),
      });

      $(".portfolios").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $(".portfolio-page").find(".current").text("0"+i);
        var width = 100/slick.slideCount*(i);
        console.log(width)
        $(".portfolio-page").find(".progress-bar").attr("style", "width:"+width+"%");
      });
    }

    if ( $( '.feedbacks' ).length ) {
      $('.feedbacks').slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".feedback-prev"),
        nextArrow: $(".feedback-next"),
      });

      $(".feedbacks").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $(".feedback-page").find(".current").text("0"+i);
        var width = 100/slick.slideCount*(i);
        console.log(width)
        $(".feedback-page").find(".progress-bar").attr("style", "width:"+width+"%");
      });
    }

});