import Splide from '@splidejs/splide';

const splideCarousel = () => {
  new Splide('.splide', {
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
