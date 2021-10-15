import Splide from '@splidejs/splide';
import Item from '../model/Item';

const splideCarousel = (elem) => {
  const splide = new Splide(elem, {
    pagination: false,
    perPage: 1,
    autoWidth: true,
    drag: true,
    gap: '1rem',
    lazyLoad: 'nearby',
    focus: 'center',
    trimSpace: false,
    autoplay: true,
    interval: 5000,
  }).mount();

  splide.on('click', (Slide) => {
    const mainElem = document.getElementById('main');
    mainElem.innerHTML = '';
    console.log(Slide.slide.lastChild.id);
    Item.getDetail(
        undefined,
        {
          api_key: process.env.API_KEY,
        },
        Slide.slide.lastChild.id);
  });
};

export default splideCarousel;
