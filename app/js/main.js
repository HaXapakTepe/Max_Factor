$ (function() {
  $('.top-slider__inner').slick({
    dots: true,
    fade: true
  });

  $('.nova__inner').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  $('.popular__inner').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  $('.base__list').slick({
    dots: true,
    fade: true,
    arrows: false
  });
});