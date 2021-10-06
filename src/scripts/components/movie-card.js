/* eslint-disable max-len */
class MovieCard extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.classList.add('card-item');
    this.innerHTML = `
    <a id="/movie/${this._item.id}">
      <div class="card movie-card">
        <img src="${this._item.poster_path? 'https://image.tmdb.org/t/p/w500' + this._item.poster_path : './src/assets/poster-fallback.jpg'}" 
            class="shadow card-img-top" 
            alt="${this._item.title? this._item.title:'-'} Poster">
        <div class="card-body movie-card-body">
          <h5 class="card-title movie-card-title">
            ${this._item.title? this._item.title:'-'}
          </h5>
          <span class="movie-info">
            ${this._item.release_date? this._item.release_date.substr(0, 4):'-'}
          </span>
          <span class="movie-info movie-rating">
            <i class="bi bi-star-fill"></i> ${this._item.vote_average}
          </span>
        </div>
      </div>
    </a>`;
  }
}

customElements.define('movie-card', MovieCard);
