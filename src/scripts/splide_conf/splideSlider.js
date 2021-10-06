import Splide from '@splidejs/splide';
import Item from '../model/Item';

const splideSlider = (elem) => {
  const splide = new Splide(elem, {
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

  splide.on('click', (Slide) => {
    console.log(Slide.slide.lastChild.id);
    Item.getDetail(
        undefined,
        {
          api_key: process.env.API_KEY,
        },
        Slide.slide.lastChild.id);
  });
};

export default splideSlider;
