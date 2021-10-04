/* eslint-disable max-len */
import Renderer from '../view/Renderer';

class TvShow {
  static getTrending(baseUrl='https://api.themoviedb.org/3', timeWindow='day', urlParams, renderInto) {
    const url = new URL(`${baseUrl}/trending/tv/${timeWindow}`);
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
                  Renderer.renderCarousel(responseJson.results, 'Trending TV Show Today');
                } else if (timeWindow === 'week') {
                  Renderer.renderCarousel(responseJson.results, 'Trending TV Show This Week');
                }
                break;
              case 'slider':
                if (timeWindow === 'day') {
                  Renderer.renderSlider(responseJson.results, 'Trending TV Show Today');
                } else if (timeWindow === 'week') {
                  Renderer.renderSlider(responseJson.results, 'Trending TV Show This Week');
                }
                break;
              case 'list':
                if (timeWindow === 'day') {
                  Renderer.renderList(responseJson.results, 'Trending TV Show Today');
                } else if (timeWindow === 'week') {
                  Renderer.renderList(responseJson.results, 'Trending TV Show This Week');
                }
                break;
              default:
                Renderer.renderError(
                    `Error: TvShow.getTrending's param renderInto required`);
            }
          }
        })
        .catch((error) => {
          Renderer.renderError(error);
        });
  };

  static getPopular(baseUrl='https://api.themoviedb.org/3', urlParams, renderInto) {
    const url = new URL(`${baseUrl}/tv/popular`);
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
                Renderer.renderCarousel(responseJson.results, 'Popular TV Show');
                break;
              case 'slider':
                Renderer.renderSlider(responseJson.results, 'Popular TV Show');
                break;
              case 'list':
                Renderer.renderList(responseJson.results, 'Popular TV Show');
                break;
              default:
                Renderer.renderError(
                    `Error: TvShow.getPopular's param renderInto required`);
            }
          }
        })
        .catch((error) => {
          Renderer.renderError(error);
        });
  };

  static getTopRated(baseUrl='https://api.themoviedb.org/3', urlParams, renderInto) {
    const url = new URL(`${baseUrl}/tv/top_rated`);
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
                Renderer.renderCarousel(responseJson.results, 'Top Rated TV Show');
                break;
              case 'slider':
                Renderer.renderSlider(responseJson.results, 'Top Rated TV Show');
                break;
              case 'list':
                Renderer.renderList(responseJson.results, 'Top Rated TV Show');
                break;
              default:
                Renderer.renderError(
                    `Error: TvShow.getTopRated's param renderInto required`);
            }
          }
        })
        .catch((error) => {
          Renderer.renderError(error);
        });
  };

  static getAiringToday(baseUrl='https://api.themoviedb.org/3', urlParams, renderInto) {
    const url = new URL(`${baseUrl}/tv/airing_today`);
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
                Renderer.renderCarousel(responseJson.results, 'Airing TV Show Today');
                break;
              case 'slider':
                Renderer.renderSlider(responseJson.results, 'Airing TV Show Today');
                break;
              case 'list':
                Renderer.renderList(responseJson.results, 'Airing TV Show Today');
                break;
              default:
                Renderer.renderError(
                    `Error: TvShow.getAiringToday's param renderInto required`);
            }
          }
        })
        .catch((error) => {
          Renderer.renderError(error);
        });
  };

  static getOnTheAir(baseUrl='https://api.themoviedb.org/3', urlParams, renderInto) {
    const url = new URL(`${baseUrl}/tv/on_the_air`);
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
                Renderer.renderCarousel(responseJson.results, 'On Air TV Show');
                break;
              case 'slider':
                Renderer.renderSlider(responseJson.results, 'On Air TV Show');
                break;
              case 'list':
                Renderer.renderList(responseJson.results, 'On Air TV Show');
                break;
              default:
                Renderer.renderError(
                    `Error: TvShow.getOnTheAir's param renderInto required`);
            }
          }
        })
        .catch((error) => {
          Renderer.renderError(error);
        });
  };
}

export default TvShow;
