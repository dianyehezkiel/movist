import Splide from '@splidejs/splide';

const splideCarousel = (elem) => {
  new Splide(elem, {
    pagination: false,
    perPage: 1,
    autoWidth: true,
    drag: true,
    gap: '1rem',
    lazyLoad: 'nearby',
    focus: 'center',
    trimSpace: false,
  }).mount();
};

export default splideCarousel;
