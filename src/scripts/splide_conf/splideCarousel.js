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
    console.log(Slide.slide.lastChild.id);
    Item.getDetail(
        undefined,
        {
          api_key: '88b41b5eb74465e410532cd5337ec9fd',
        },
        Slide.slide.lastChild.id);
  });
};

export default splideCarousel;
