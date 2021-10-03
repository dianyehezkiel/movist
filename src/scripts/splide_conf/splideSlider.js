import Splide from '@splidejs/splide';

const splideSlider = (elem) => {
  new Splide(elem, {
    pagination: false,
    perPage: 7,
    lazyLoad: 'nearby',
    autoWidth: true,
    drag: true,
    breakpoints: {
      1140: {
        perPage: 6,
      },
      992: {
        perPage: 5,
      },
      768: {
        perPage: 4,
      },
      576: {
        perPage: 1,
      },
    },
  }).mount();
};

export default splideSlider;
