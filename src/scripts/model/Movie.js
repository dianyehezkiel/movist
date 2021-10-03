/* eslint-disable max-len */
import Renderer from '../view/Renderer';

class Movie {
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
                Renderer.renderCarousel(responseJson.results);
                break;
              case 'slider':
                Renderer.renderSlider(responseJson.results, 'Now Playing');
                break;
              case 'list':
                Renderer.renderList(responseJson.results, 'Now Playing');
                break;
              default:
                Renderer.renderError(
                    `Error: getNowPlaying's param renderInto required`);
            }
          }
        })
        .catch((error) => {
          Renderer.renderError(error);
        });
  };

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
                Renderer.renderCarousel(responseJson.results);
                break;
              case 'slider':
                if (timeWindow === 'day') {
                  Renderer.renderSlider(responseJson.results, 'Trending Movies Today');
                } else if (timeWindow === 'week') {
                  Renderer.renderSlider(responseJson.results, 'Trending Movies This Week');
                }
                break;
              case 'list':
                if (timeWindow === 'day') {
                  Renderer.renderList(responseJson.results, 'Trending Movies Today');
                } else if (timeWindow === 'week') {
                  Renderer.renderList(responseJson.results, 'Trending Movies This Week');
                }
                break;
              default:
                Renderer.renderError(
                    `Error: getTrending's param renderInto required`);
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
                Renderer.renderCarousel(responseJson.results);
                break;
              case 'slider':
                Renderer.renderSlider(responseJson.results, 'Popular Movies');
                break;
              case 'list':
                Renderer.renderList(responseJson.results, 'Popular Movies');
                break;
              default:
                Renderer.renderError(
                    `Error: getPopular's param renderInto required`);
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
                Renderer.renderCarousel(responseJson.results);
                break;
              case 'slider':
                Renderer.renderSlider(responseJson.results, 'Top Rated Movies');
                break;
              case 'list':
                Renderer.renderList(responseJson.results, 'Top Rated Movies');
                break;
              default:
                Renderer.renderError(
                    `Error: getTopRated's param renderInto required`);
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
                Renderer.renderCarousel(responseJson.results);
                break;
              case 'slider':
                Renderer.renderSlider(responseJson.results, 'Upcoming Movies');
                break;
              case 'list':
                Renderer.renderList(responseJson.results, 'Upcoming Movies');
                break;
              default:
                Renderer.renderError(
                    `Error: getUpcoming's param renderInto required`);
            }
          }
        })
        .catch((error) => {
          Renderer.renderError(error);
        });
  };
}

export default Movie;
