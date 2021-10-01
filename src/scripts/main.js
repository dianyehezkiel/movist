import Movie from './model/Movie';

function main() {
  const params = {
    api_key: process.env.API_KEY,
  };
  Movie.getPopular(undefined, params);
}

export default main;
