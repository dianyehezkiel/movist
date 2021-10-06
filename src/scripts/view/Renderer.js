import '../components/card-slider.js';
import '../components/card-list.js';
import '../components/carousel-banner.js';
import '../components/movie-detail.js';
import '../components/tv-detail.js';

import splideSlider from '../splide_conf/splideSlider.js';
import splideCarousel from '../splide_conf/splideCarousel.js';

class Renderer {
  static renderCarousel(items, mediaType, title) {
    const mainElem = document.getElementById('main');
    const carouselTitle = document.createElement('h2');
    carouselTitle.classList.add('d-block',
        'fw-bold',
        'mt-3',
        'ms-4',
        'text-light');
    carouselTitle.innerHTML = title;
    mainElem.appendChild(carouselTitle);

    const carouselBannerElem = document.createElement('carousel-banner');
    carouselBannerElem.carouselItems = items;
    carouselBannerElem.mediaType = mediaType;
    mainElem.appendChild(carouselBannerElem);
    splideCarousel(carouselBannerElem);
  }

  static renderSlider(items, mediaType, title) {
    const mainElem = document.getElementById('main');
    const sliderTitle = document.createElement('h2');
    sliderTitle.classList.add('d-block',
        'fw-bold',
        'mt-3',
        'ms-4',
        'text-light');
    sliderTitle.innerHTML = title;
    mainElem.appendChild(sliderTitle);

    const cardSliderElem = document.createElement('card-slider');
    cardSliderElem.sliderItems = items;
    cardSliderElem.mediaType = mediaType;
    mainElem.appendChild(cardSliderElem);
    splideSlider(cardSliderElem);
  }

  static renderList(items, mediaType, title) {
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
    cardListElem.mediaType = mediaType;
    mainElem.appendChild(cardListElem);
  }

  static renderDetail(item, mediaType) {
    const mainElem = document.getElementById('main');
    mainElem.innerHTML = '';

    if (mediaType == 'movie') {
      const detailElem = document.createElement('movie-detail');
      detailElem.item = item;
      mainElem.appendChild(detailElem);
    } else {
      const detailElem = document.createElement('tv-detail');
      detailElem.item = item;
      mainElem.appendChild(detailElem);
    }
  }

  static renderError(message) {
    const mainElem = document.getElementById('main');
    mainElem.innerHTML = '';

    const errorContainer = document.createElement('div');
    errorContainer.classList.add('w-100', 'mt-3');
    errorContainer.innerHTML = `<p class="fs-2 fw-bold text-muted text-center">
        ${message}</p>`;

    mainElem.appendChild(errorContainer);
  }
}

export default Renderer;
