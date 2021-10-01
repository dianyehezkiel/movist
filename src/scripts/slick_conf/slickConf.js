function slickConf() {
  $('.card-slider').slick({
    lazyLoad: 'ondemand',
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    variableWidth: false,
    // eslint-disable-next-line max-len
    prevArrow: '<button class="prev-arrow"><i class="bi bi-chevron-left" style="color: black;"></i></button>',
    // eslint-disable-next-line max-len
    nextArrow: '<button class="next-arrow"><i class="bi bi-chevron-right" style="color: black;"></i></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    ],
  });
}

export {slickConf};
