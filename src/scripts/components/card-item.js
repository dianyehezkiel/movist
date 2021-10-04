/* eslint-disable max-len */
class CardItem extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = `
    <a href="#">
      <div class="card movie-card">
        <img src="https://image.tmdb.org/t/p/w500${this._item.poster_path}" class="card-img-top" alt="${this._item.title? this._item.title:this._item.name} Poster">
        <div class="card-body movie-card-body">
          <i class="bi bi-play-fill" data-toggle="tooltip" data-placement="bottom" title="Play Trailer"></i>
          <h5 class="card-title movie-card-title">${this._item.title? this._item.title:this._item.name}</h5>
          <span class="movie-info">${this._item.release_date? this._item.release_date.substr(0, 4):this._item.first_air_date.substr(0, 4)}</span>
          <span class="movie-info movie-rating"><i class="bi bi-star-fill"></i> ${this._item.vote_average}</span>
        </div>
      </div>
    </a>`;
  }
}

customElements.define('card-item', CardItem);
