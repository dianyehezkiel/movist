class CarouselItem extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.classList.add('position-relative');
    this.innerHTML = `<img
      src="https://image.tmdb.org/t/p/original${this._item.backdrop_path}"
      alt="${this._item.title? this._item.title:this._item.name} Poster">
    <div class="carousel-info position-absolute h-100 end-0 top-0">
      <h2>${this._item.title? this._item.title:this._item.name}</h2>
      <p>${this._item.overview}</p>
    </div>`;
  }
}

customElements.define('carousel-item', CarouselItem);
