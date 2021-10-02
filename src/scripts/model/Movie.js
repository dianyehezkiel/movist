import Renderer from '../view/Renderer';

class Movie {
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
              case 'slider':
                Renderer.renderSlider(responseJson.results);
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
}

export default Movie;
