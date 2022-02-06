$(function () {
  $('.top-slider__inner').slick({
    dots: true,
    fade: true,
  });

  $('.nova__inner').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1081,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.popular__inner').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1081,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
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
  slidesToScroll: 3,
  responsive: [{
      breakpoint: 1081,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$('.filter-color__advice').on('click', function () {
  $(this).toggleClass('filter-color__advice-active');
  $('.filter-color__advice').not($(this)).removeClass('filter-color__advice-active');
});

$('.filter-color__compound-subtitle').click(function (event) {
  $('.filter-color__compound-text').not($(this).next()).slideUp(300);
  $(this).toggleClass('active').next().slideToggle(300);
});

$('.menu__link').click(function (e) {
  e.preventDefault();
  $('.menu__burger').removeClass('menu__burger--active');
});

$('.menu__link').on('click', function () {
  $(this).toggleClass('menu__link--active');
  $('.menu__link').not($(this)).removeClass('menu__link--active');
});

$('.menu__link').click(function (e) {
  e.preventDefault();
  $('.menu__list').removeClass('active');
});


$('.menu__burger').on('click', function () {
  $('.menu__list').toggleClass('active');
});

$('.menu__burger').on('click', function () {
  $('.menu__burger').toggleClass('menu__burger--active');
});