import Item from './model/Item';
import Movie from './model/Movie';
import TvShow from './model/TvShow';

const main = () => {
  const params = {
    api_key: '88b41b5eb74465e410532cd5337ec9fd',
  };

  const loadHome = () => {
    Movie.getNowPlaying(undefined, params, 'carousel');
    Movie.getTrending(undefined, undefined, params, 'slider');
    Movie.getPopular(undefined, params, 'slider');
    Movie.getUpcoming(undefined, params, 'slider');
    Movie.getTopRated(undefined, params, 'slider');
    TvShow.getAiringToday(undefined, params, 'carousel');
    TvShow.getTrending(undefined, undefined, params, 'slider');
    TvShow.getPopular(undefined, params, 'slider');
    TvShow.getOnTheAir(undefined, params, 'slider');
    TvShow.getTopRated(undefined, params, 'slider');
  };

  loadHome();

  const mainElem = document.getElementById('main');
  const logoElem = document.getElementById('navbar-logo');
  const homeMenu = document.getElementById('home-menu');
  const trendMovMenu = document.getElementById('trending-movies-menu');
  const popMovMenu = document.getElementById('popular-movies-menu');
  const topMovMenu = document.getElementById('top-movies-menu');
  const playMovMenu = document.getElementById('playing-movies-menu');
  const comMovMenu = document.getElementById('upcoming-movies-menu');
  const trendTvMenu = document.getElementById('trending-tv-menu');
  const popTvMenu = document.getElementById('popular-tv-menu');
  const topTvMenu = document.getElementById('top-tv-menu');
  const onAirTvMenu = document.getElementById('on-air-tv-menu');
  const airingTodayTvMenu = document.getElementById('airing-today-tv-menu');
  const searchButton = document.getElementById('search-button');

  const onClickHome = (e) => {
    e.preventDefault();
    mainElem.innerHTML = '';
    loadHome();
  };

  const onClickTrendMov = (e) => {
    e.preventDefault();
    Movie.getTrending(undefined, undefined, params, 'list');
  };

  const onClickPopMov = (e) => {
    e.preventDefault();
    Movie.getPopular(undefined, params, 'list');
  };

  const onClickTopMov = (e) => {
    e.preventDefault();
    Movie.getTopRated(undefined, params, 'list');
  };

  const onClickPlayMov = (e) => {
    e.preventDefault();
    Movie.getNowPlaying(undefined, params, 'list');
  };

  const onClickComMov = (e) => {
    e.preventDefault();
    Movie.getUpcoming(undefined, params, 'list');
  };

  const onClickTrendTv = (e) => {
    e.preventDefault();
    TvShow.getTrending(undefined, undefined, params, 'list');
  };

  const onClickPopTv = (e) => {
    e.preventDefault();
    TvShow.getPopular(undefined, params, 'list');
  };

  const onClickTopTv = (e) => {
    e.preventDefault();
    TvShow.getTopRated(undefined, params, 'list');
  };

  const onClickOnAirTv = (e) => {
    e.preventDefault();
    TvShow.getOnTheAir(undefined, params, 'list');
  };

  const onClickAirTodayTv = (e) => {
    e.preventDefault();
    TvShow.getAiringToday(undefined, params, 'list');
  };

  const onClickSearch = (e) => {
    e.preventDefault();

    const searchQuery = document.getElementById('search-input').value;
    const mediaType = document.getElementById('media-type-select').value;

    if (searchQuery) {
      const searchParams = {
        api_key: '88b41b5eb74465e410532cd5337ec9fd',
        query: searchQuery,
      };

      Item.getSearch(undefined, mediaType, searchParams);
    }
  };

  logoElem.addEventListener('click', onClickHome);
  homeMenu.addEventListener('click', onClickHome);
  trendMovMenu.addEventListener('click', onClickTrendMov);
  popMovMenu.addEventListener('click', onClickPopMov);
  topMovMenu.addEventListener('click', onClickTopMov);
  playMovMenu.addEventListener('click', onClickPlayMov);
  comMovMenu.addEventListener('click', onClickComMov);
  trendTvMenu.addEventListener('click', onClickTrendTv);
  popTvMenu.addEventListener('click', onClickPopTv);
  topTvMenu.addEventListener('click', onClickTopTv);
  onAirTvMenu.addEventListener('click', onClickOnAirTv);
  airingTodayTvMenu.addEventListener('click', onClickAirTodayTv);
  searchButton.addEventListener('click', onClickSearch);

  const config = {attributes: false, childList: true, subtree: false};

  const callback = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const cardListElem = document
            .querySelectorAll('card-list > .card-item');
        if (cardListElem.length) {
          cardListElem.forEach((card) => {
            card.addEventListener('click', function() {
              // eslint-disable-next-line no-invalid-this
              Item.getDetail(undefined, params, this.lastChild.id);
            });
          });
        }
      }
    }
  };

  const observer = new MutationObserver(callback);

  observer.observe(mainElem, config);
};

export default main;
