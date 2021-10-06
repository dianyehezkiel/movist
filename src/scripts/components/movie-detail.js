/* eslint-disable max-len */
class MovieDetail extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    let genre = '';
    let prodCompany = '';
    let prodCountry = '';

    this._item.genres.forEach((g, i) => {
      if (i === 0) {
        genre += g.name;
      } else {
        genre += ', ' + g.name;
      }
    });

    this._item.production_companies.forEach((pc, i) => {
      if (i === 0) {
        prodCompany += pc.name;
      } else {
        prodCompany += ', ' + pc.name;
      }
    });

    this._item.production_countries.forEach((ct, i) => {
      if (i === 0) {
        prodCountry += ct.name;
      } else {
        prodCountry += ', ' + ct.name;
      }
    });

    this.innerHTML = `<div class="container-xxl px-0">
    <div class="w-100" 
        style="background-image: url(${this._item.backdrop_path? 'https://image.tmdb.org/t/p/original' + this._item.backdrop_path : './src/assets/backdrop-fallback.jpg'});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;">
      <div 
          class="w-100 p-3 d-flex flex-column flex-md-row" 
          style="background-color: rgba(0, 0, 0, 0.8); background-repeat: no-repeat;">
        <div class="detail-poster mx-0 my-2">
          <img
              class="shadow rounded float-start w-100"
              src="${this._item.poster_path? 'https://image.tmdb.org/t/p/original' + this._item.poster_path : './src/assets/poster-fallback.jpg'}" 
              alt="${this._item.title? this._item.title:'-'} Poster">
        </div>
        <div class="detail-info text-white mx-4 justify-content-between justify-content-md-start my-2">
          <h1 class="h1 fw-bold text-white mb-1">${this._item.title? this._item.title:'-'}</h1>
          <p class="mt-0">Release date: ${this._item.release_date? this._item.release_date:'-'} | 
              Genre: ${genre? genre:'-'} | 
              Runtime: ${this._item.runtime? this._item.runtime + ' minutes':'-'} | 
              Average Vote: <i class="bi bi-star-fill"></i> ${this._item.vote_average? this._item.vote_average:'0'}</p>
          <h2 class="h2 fw-bold mt-3 mb-1">Overview</h2>
          <p class="mt-0">${this._item.overview? this._item.overview:'-'}</p>
          <h3 class="h3 fw-bold mt-3 mb-1">Production Companies</h4>
          <p class="mt-0">${prodCompany? prodCompany:'-'}</p>
          <h3 class="h3 fw-bold mt-3 mb-1">Production Countries</h4>
          <p class="mt-0">${prodCountry? prodCountry:'-'}</p>
          <h5 class="h5 fw-bold mt-3 mb-1">Status</h5>
          <p class="mt-0">${this._item.status? this._item.status:'-'}</p>
          <h5 class="h5 fw-bold mt-3 mb-1">Budget</h5>
          <p class="mt-0">${this._item.budget? '$ ' + this._item.budget:'-'}</p>
          <h5 class="h5 fw-bold mt-3 mb-1">Revenue</h5>
          <p class="mt-0">${this._item.revenue? '$ ' + this._item.revenue:'-'}</p>
        </div>
      </div>
    </div>
  </div>`;
  }
}

customElements.define('movie-detail', MovieDetail);
