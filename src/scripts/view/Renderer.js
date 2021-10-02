import '../components/card-slider.js';
import '../components/card-list.js';
import {slickConf} from '../slick_conf/slickConf.js';

class Renderer {
  static renderSlider(items) {
    const mainElem = document.getElementById('main');
    mainElem.innerHTML = '';
    console.log('run renderSlider');
    const cardSliderElem = document.createElement('card-slider');
    cardSliderElem.sliderItems = items;
    mainElem.appendChild(cardSliderElem);
    slickConf();
  }

  static renderList(items) {
    const mainElem = document.getElementById('main');
    mainElem.innerHTML = '';
    console.log('run renderList');
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
