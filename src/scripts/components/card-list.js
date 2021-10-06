import './movie-card';
import './tv-card.js';

class CardList extends HTMLElement {
  set listItems(items) {
    this._items = items;
  }

  set mediaType(mediaType) {
    this._mediaType = mediaType;
    this.render();
  }

  render() {
    this.classList.add(
        'container-lg',
        'd-flex',
        'flex-wrap',
        'justify-content-evenly');
    this.innerHTML = '';
    switch (this._mediaType) {
      case 'movie':
        this._items.forEach((item) => {
          const movieCardElem = document.createElement('movie-card');
          movieCardElem.item = item;
          this.appendChild(movieCardElem);
        });
        break;
      case 'tv':
        this._items.forEach((item) => {
          const tvCardElem = document.createElement('tv-card');
          tvCardElem.item = item;
          this.appendChild(tvCardElem);
        });
        break;
    }
  }
}

customElements.define('card-list', CardList);
