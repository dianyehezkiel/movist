class MovieCarousel extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.classList.add('position-relative', 'carousel-item');
    this.innerHTML = `<a id="/movie/${this._item.id}">
      <img src="${this._item.backdrop_path? 'https://image.tmdb.org/t/p/original' + this._item.backdrop_path : './src/assets/backdrop-fallback.jpg'}"
        alt="${this._item.title? this._item.title:'-'} Poster">
      <div class="carousel-info position-absolute h-100 end-0 top-0">
        <h2>${this._item.title? this._item.title:'-'}</h2>
        <p>${this._item.overview? this._item.overview:'-'}</p>
      </div>
    </a>`;
  }
}

customElements.define('movie-carousel', MovieCarousel);
