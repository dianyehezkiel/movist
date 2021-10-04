import '../components/card-slider.js';
import '../components/card-list.js';
import '../components/carousel-banner.js';

import splideSlider from '../splide_conf/splideSlider.js';
import splideCarousel from '../splide_conf/splideCarousel.js';

class Renderer {
  static renderCarousel(items, title) {
    const mainElem = document.getElementById('main');
    const carouselTitle = document.createElement('h2');
    carouselTitle.classList.add('d-block',
        'fw-bold',
        'mt-3',
        'ms-2',
        'text-light');
    carouselTitle.innerHTML = title;
    mainElem.appendChild(carouselTitle);

    const carouselBannerElem = document.createElement('carousel-banner');
    carouselBannerElem.carouselItems = items;
    mainElem.appendChild(carouselBannerElem);
    splideCarousel(carouselBannerElem);
  }

  static renderSlider(items, title) {
    const mainElem = document.getElementById('main');
    const sliderTitle = document.createElement('h2');
    sliderTitle.classList.add('d-block',
        'fw-bold',
        'mt-3',
        'ms-2',
        'text-light');
    sliderTitle.innerHTML = title;
    mainElem.appendChild(sliderTitle);

    const cardSliderElem = document.createElement('card-slider');
    cardSliderElem.sliderItems = items;
    mainElem.appendChild(cardSliderElem);
    splideSlider(cardSliderElem);
  }

  static renderList(items, title) {
    const mainElem = document.getElementById('main');
    mainElem.innerHTML = '';
    const listTitle = document.createElement('h1');
    listTitle.classList.add('d-block',
        'fw-bold',
        'text-center',
        'mt-3',
        'text-light');
    listTitle.innerHTML = title;
    mainElem.appendChild(listTitle);

    const cardListElem = document.createElement('card-list');
    cardListElem.listItems = items;
    mainElem.appendChild(cardListElem);
  }

  static renderError(message) {
    // Test
    console.log(message);
  }
}

export default Renderer;
