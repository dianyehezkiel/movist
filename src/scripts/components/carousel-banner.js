import './movie-carousel.js';
import './tv-carousel.js';

class CarouselBanner extends HTMLElement {
  set carouselItems(items) {
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
          const movieCarouselElem = document.createElement('movie-carousel');
          movieCarouselElem.classList.add('splide__slide');
          movieCarouselElem.item = item;
          splideList.appendChild(movieCarouselElem);
        });
        break;
      case 'tv':
        this._items.forEach((item) => {
          const tvCarouselElem = document.createElement('tv-carousel');
          tvCarouselElem.classList.add('splide__slide');
          tvCarouselElem.item = item;
          splideList.appendChild(tvCarouselElem);
        });
        break;
    }
  }
}

customElements.define('carousel-banner', CarouselBanner);
