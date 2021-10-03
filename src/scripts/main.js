import Movie from './model/Movie';

const main = () => {
  const params = {
    api_key: process.env.API_KEY,
  };
  const loadHome = () => {
    Movie.getNowPlaying(undefined, params, 'carousel');
    Movie.getTrending(undefined, undefined, params, 'slider');
    Movie.getPopular(undefined, params, 'slider');
    Movie.getUpcoming(undefined, params, 'slider');
    Movie.getTopRated(undefined, params, 'slider');
  };

  loadHome();

  const mainElem = document.getElementById('main');
  const logoElem = document.getElementById('navbar-logo');
  const homeButton = document.getElementById('home-menu');
  const trendMovButton = document.getElementById('trending-movies-menu');
  const popMovButton = document.getElementById('popular-movies-menu');
  const topMovButton = document.getElementById('top-movies-menu');
  const playMovButton = document.getElementById('playing-movies-menu');
  const comMovButton = document.getElementById('upcoming-movies-menu');


  const onClickHome = (e) => {
    e.preventDefault();
    mainElem.innerHTML = '';
    loadHome();
  };

  const onClickTrend = (e) => {
    e.preventDefault();
    Movie.getTrending(undefined, undefined, params, 'list');
  };

  const onClickPop = (e) => {
    e.preventDefault();
    Movie.getPopular(undefined, params, 'list');
  };

  const onClickTop = (e) => {
    e.preventDefault();
    Movie.getTopRated(undefined, params, 'list');
  };

  const onClickPlay = (e) => {
    e.preventDefault();
    Movie.getNowPlaying(undefined, params, 'list');
  };

  const onClickCom = (e) => {
    e.preventDefault();
    Movie.getUpcoming(undefined, params, 'list');
  };

  logoElem.addEventListener('click', onClickHome);
  homeButton.addEventListener('click', onClickHome);
  trendMovButton.addEventListener('click', onClickTrend);
  popMovButton.addEventListener('click', onClickPop);
  topMovButton.addEventListener('click', onClickTop);
  playMovButton.addEventListener('click', onClickPlay);
  comMovButton.addEventListener('click', onClickCom);
};

export default main;
