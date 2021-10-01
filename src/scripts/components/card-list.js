import './card-item.js';

class CardList extends HTMLElement {
  set listItems(items) {
    this._items=items;
    this.render();
  }

  render() {
    // this.classList.add('');
    this.innerHTML = '';
    this._items.forEach((item) => {
      const cardItemElement = document.createElement('card-item');
      cardItemElement.item = item;
      this.appendChild(cardItemElement);
    });
  }
}

customElements.define('card-list', CardList);
