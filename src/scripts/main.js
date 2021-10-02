import Movie from './model/Movie';

const main = () => {
  const params = {
    api_key: process.env.API_KEY,
  };

  Movie.getPopular(undefined, params, 'slider');

  const popMovElem = document.getElementById('popular-movies-menu');

  const onClickPopular = (e) => {
    e.preventDefault();
    Movie.getPopular(undefined, params, 'list');
  };

  popMovElem.addEventListener('click', onClickPopular);
};

export default main;
