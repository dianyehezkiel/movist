import './card-item.js';

class CardSlider extends HTMLElement {
  set sliderItems(items) {
    this._items = items;
    this.render();
  }

  render() {
    this.classList.add('splide');
    this.innerHTML = `<div class="splide__arrows">
      <button class="prev-arrow splide__arrow splide__arrow--prev">
        <i class="bi bi-chevron-left"></i>
      </button>
      <button class="next-arrow splide__arrow splide__arrow--next">
        <i class="bi bi-chevron-right">
      </i></button>
    </div>
    <div class="splide__track"></div>`;
    const splideList = document.createElement('div');
    splideList.classList.add('splide__list');
    this.lastChild.appendChild(splideList);

    this._items.forEach((item) => {
      const cardItemElement = document.createElement('card-item');
      cardItemElement.classList.add('splide__slide');
      cardItemElement.item = item;
      splideList.appendChild(cardItemElement);
    });
  }
}

customElements.define('card-slider', CardSlider);
