// import {URL, URLSearchParams} from 'url';
import Renderer from '../view/Renderer';

class Movie {
  static getPopular(baseUrl='https://api.themoviedb.org/3', params) {
    const url = new URL(`${baseUrl}/movie/popular`);
    url.search = new URLSearchParams(params).toString();

    fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.status_code) {
            Renderer.renderError(responseJson.status_message);
          } else {
            Renderer.renderSlider(responseJson.results);
          }
        })
        .catch((error) => {
          Renderer.renderError(error);
        });
  };
}

export default Movie;
