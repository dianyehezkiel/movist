import Movie from './model/Movie';
import TvShow from './model/TvShow';

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
};

export default main;
