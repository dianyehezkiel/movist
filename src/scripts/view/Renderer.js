import '../components/card-slider.js';
import '../components/card-list.js';

import splideSlider from '../splide_conf/splideSlider.js';

class Renderer {
  static renderSlider(items, title) {
    const mainElem = document.getElementById('main');
    mainElem.innerHTML = `<h2 class='d-block fw-bold'>
    ${title}</h2>`;
    const cardSliderElem = document.createElement('card-slider');
    cardSliderElem.sliderItems = items;
    mainElem.appendChild(cardSliderElem);
    splideSlider();
  }

  static renderList(items, title) {
    const mainElem = document.getElementById('main');
    mainElem.innerHTML = `<h1 class='d-block fw-bold text-center'>
        ${title}</h1>`;
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
