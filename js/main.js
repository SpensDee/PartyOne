// const { removeData } = require("jquery");

    AOS.init();


  $(function(){

    $('.slider-photo').slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    });

    $('.event-slider').slick({
      dots: false,
      arrows: false,
      fade: true,
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 4000
    });


    
      $('.main-slider, .add-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        pauseOnHover: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1350,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true
            }
          },
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.about-mob__items').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 3000,
        slidesToShow: 1
      });

      $('.burger-btn').on('click', function(){
        $(this).toggleClass('burger-btn_active');
      });

      $('.burger-btn').on('click', function(){
        $('.burger-menu__list').toggleClass('menu__active ');
    });

    $('.burger-menu__item-link').on('click', function(){
      $('.burger-menu__list').removeClass('menu__active ');
      $('.burger-btn').toggleClass('burger-btn_active');
  });

 $('.btn_mob').on('click', function(){
  $('.showed').toggle(1000);
 });
    


    $('.burger-menu__item-link').on('click', function (e) { 
      e.preventDefault();
      const id  = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 500);
    });
    
    
  });

