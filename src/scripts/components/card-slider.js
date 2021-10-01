/* eslint-disable require-jsdoc */
import './card-item.js';

class CardSlider extends HTMLElement {
  set sliderItems(items) {
    this._items = items;
    this.render();
  }

  render() {
    this.classList.add('card-slider');
    this.innerHTML = '';
    this._items.forEach((item) => {
      const cardItemElement = document.createElement('card-item');
      cardItemElement.item = item;
      this.appendChild(cardItemElement);
    });
  }
}

customElements.define('card-slider', CardSlider);
