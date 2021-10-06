import Renderer from '../view/Renderer';

class Item {
  static getDetail(baseUrl='https://api.themoviedb.org/3', urlParams, id) {
    const url = new URL(`${baseUrl}${id}`);
    url.search = new URLSearchParams(urlParams).toString();

    fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.status_code) {
            Renderer.renderError(responseJson.status_message);
          } else {
            const idArr = id.split('/');
            switch (idArr[1]) {
              case 'movie':
                Renderer.renderDetail(responseJson, 'movie');
                break;
              case 'tv':
                Renderer.renderDetail(responseJson, 'tv');
                break;
              default:
                Renderer.renderError('Unknown Media Type');
            }
          }
        })
        .catch((error)=> {
          Renderer.renderError(error);
        });
  }


  static getSearch(baseUrl='https://api.themoviedb.org/3', mediaType, urlParams) {
    const url = new URL(`${baseUrl}/search/${mediaType}`);
    url.search = new URLSearchParams(urlParams).toString();

    fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.status_code) {
            Renderer.renderError(responseJson.status_message);
          } else {
            if (!responseJson.results.length) {
              Renderer.renderError(`No result for ${urlParams.query}`);
            } else {
              Renderer.renderList(responseJson.results,
                  mediaType,
                  `Results for ${urlParams.query}`);
            }
          }
        })
        .catch((error) => {
          Renderer.renderError(error);
        });
  };
}

export default Item;
