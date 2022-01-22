$(function () {
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

$('.like__inner').slick({
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 3
});

$('.filter-color__advice').on('click', function () {
  $(this).toggleClass('filter-color__advice-active');
  $('.filter-color__advice').not($(this)).removeClass('filter-color__advice-active');
});

$('.filter-color__compound-subtitle').click(function (event) {
  $('.filter-color__compound-text').not($(this).next()).slideUp(300);
  $(this).toggleClass('active').next().slideToggle(300);
});