import '../components/card-slider.js';
import {slickConf} from '../slick_conf/slickConf.js';

class Renderer {
  static renderSlider(items) {
    const mainElem = document.getElementById('main');

    const cardSliderElem = document.createElement('card-slider');
    cardSliderElem.sliderItems = items;
    mainElem.appendChild(cardSliderElem);
    slickConf();
  }

  static renderError(message) {
    // Test
    console.log(message);
  }
}

export default Renderer;
