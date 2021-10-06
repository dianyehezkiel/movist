import './movie-card';
import './tv-card.js';

class CardSlider extends HTMLElement {
  set sliderItems(items) {
    this._items = items;
  }

  set mediaType(mediaType) {
    this._mediaType = mediaType;
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

    switch (this._mediaType) {
      case 'movie':
        this._items.forEach((item) => {
          const movieCardElem = document.createElement('movie-card');
          movieCardElem.classList.add('splide__slide');
          movieCardElem.item = item;
          splideList.appendChild(movieCardElem);
        });
        break;
      case 'tv':
        this._items.forEach((item) => {
          const tvCardElem = document.createElement('tv-card');
          tvCardElem.classList.add('splide__slide');
          tvCardElem.item = item;
          splideList.appendChild(tvCardElem);
        });
        break;
    }
  }
}

customElements.define('card-slider', CardSlider);
