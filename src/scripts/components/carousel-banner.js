import './carousel-item.js';

class CarouselBanner extends HTMLElement {
  set carouselItems(items) {
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
      const carouselItemElem = document.createElement('carousel-item');
      carouselItemElem.classList.add('splide__slide');
      carouselItemElem.item = item;
      splideList.appendChild(carouselItemElem);
    });
  }
}

customElements.define('carousel-banner', CarouselBanner);
