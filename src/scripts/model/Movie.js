/* eslint-disable max-len */
import Renderer from '../view/Renderer';

class Movie {
  static getTrending(baseUrl='https://api.themoviedb.org/3', timeWindow='day', urlParams, renderInto) {
    const url = new URL(`${baseUrl}/trending/movie/${timeWindow}`);
    url.search = new URLSearchParams(urlParams).toString();

    fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.status_code) {
            Renderer.renderError(responseJson.status_message);
          } else {
            switch (renderInto) {
              case 'carousel':
                if (timeWindow === 'day') {
                  Renderer.renderCarousel(responseJson.results, 'movie', 'Trending Movies Today');
                } else if (timeWindow === 'week') {
                  Renderer.renderCarousel(responseJson.results, 'movie', 'Trending Movies This Week');
                }
                break;
              case 'slider':
                if (timeWindow === 'day') {
                  Renderer.renderSlider(responseJson.results, 'movie', 'Trending Movies Today');
                } else if (timeWindow === 'week') {
                  Renderer.renderSlider(responseJson.results, 'movie', 'Trending Movies This Week');
                }
                break;
              case 'list':
                if (timeWindow === 'day') {
                  Renderer.renderList(responseJson.results, 'movie', 'Trending Movies Today');
                } else if (timeWindow === 'week') {
                  Renderer.renderList(responseJson.results, 'movie', 'Trending Movies This Week');
                }
                break;
              default:
                Renderer.renderError(
                    `Error: Movie.getTrending's param renderInto required`);
            }
          }
        })
        .catch((error) => {
          Renderer.renderError(error);
        });
  };

  static getPopular(baseUrl='https://api.themoviedb.org/3', urlParams, renderInto) {
    const url = new URL(`${baseUrl}/movie/popular`);
    url.search = new URLSearchParams(urlParams).toString();

    fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.status_code) {
            Renderer.renderError(responseJson.status_message);
          } else {
            switch (renderInto) {
              case 'carousel':
                Renderer.renderCarousel(responseJson.results, 'movie', 'Popular Movies');
                break;
              case 'slider':
                Renderer.renderSlider(responseJson.results, 'movie', 'Popular Movies');
                break;
              case 'list':
                Renderer.renderList(responseJson.results, 'movie', 'Popular Movies');
                break;
              default:
                Renderer.renderError(
                    `Error: Movie.getPopular's param renderInto required`);
            }
          }
        })
        .catch((error) => {
          Renderer.renderError(error);
        });
  };

  static getTopRated(baseUrl='https://api.themoviedb.org/3', urlParams, renderInto) {
    const url = new URL(`${baseUrl}/movie/top_rated`);
    url.search = new URLSearchParams(urlParams).toString();

    fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.status_code) {
            Renderer.renderError(responseJson.status_message);
          } else {
            switch (renderInto) {
              case 'carousel':
                Renderer.renderCarousel(responseJson.results, 'movie', 'Top Rated Movies');
                break;
              case 'slider':
                Renderer.renderSlider(responseJson.results, 'movie', 'Top Rated Movies');
                break;
              case 'list':
                Renderer.renderList(responseJson.results, 'movie', 'Top Rated Movies');
                break;
              default:
                Renderer.renderError(
                    `Error: Movie.getTopRated's param renderInto required`);
            }
          }
        })
        .catch((error) => {
          Renderer.renderError(error);
        });
  };

  static getNowPlaying(baseUrl='https://api.themoviedb.org/3', urlParams, renderInto) {
    const url = new URL(`${baseUrl}/movie/now_playing`);
    url.search = new URLSearchParams(urlParams).toString();

    fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.status_code) {
            Renderer.renderError(responseJson.status_message);
          } else {
            switch (renderInto) {
              case 'carousel':
                Renderer.renderCarousel(responseJson.results, 'movie', 'Now Playing');
                break;
              case 'slider':
                Renderer.renderSlider(responseJson.results, 'movie', 'Now Playing');
                break;
              case 'list':
                Renderer.renderList(responseJson.results, 'movie', 'Now Playing');
                break;
              default:
                Renderer.renderError(
                    `Error: Movie.getNowPlaying's param renderInto required`);
            }
          }
        })
        .catch((error) => {
          Renderer.renderError(error);
        });
  };

  static getUpcoming(baseUrl='https://api.themoviedb.org/3', urlParams, renderInto) {
    const url = new URL(`${baseUrl}/movie/upcoming`);
    url.search = new URLSearchParams(urlParams).toString();

    fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.status_code) {
            Renderer.renderError(responseJson.status_message);
          } else {
            switch (renderInto) {
              case 'carousel':
                Renderer.renderCarousel(responseJson.results, 'movie', 'Upcoming Movies');
                break;
              case 'slider':
                Renderer.renderSlider(responseJson.results, 'movie', 'Upcoming Movies');
                break;
              case 'list':
                Renderer.renderList(responseJson.results, 'movie', 'Upcoming Movies');
                break;
              default:
                Renderer.renderError(
                    `Error: Movie.getUpcoming's param renderInto required`);
            }
          }
        })
        .catch((error) => {
          Renderer.renderError(error);
        });
  };

  static getSearch(baseUrl='https://api.themoviedb.org/3', urlParams) {
    const url = new URL(`${baseUrl}/search/movie`);
    url.search = new URLSearchParams(urlParams).toString();

    fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.status_code) {
            Renderer.renderError(responseJson.status_message);
          } else {
            Renderer.renderList(responseJson.results, 'movie', `Results for ${urlParams.query}`);
          }
        })
        .catch((error) => {
          Renderer.renderError(error);
        });
  };
}

export default Movie;
