import CONFIG from '../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
        <img
        class="lazyload card__image"
        tabindex="0"
        data-src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}"
        alt="${this._restaurant.name}" />
        <div class="card__body" tabindex="0">
            <p class="name">${this._restaurant.name}</p>
            <p>${this._restaurant.city}</p>
            <p>
            ${this._restaurant.description}
            </p>
            <button tabindex="0" onclick="location.href = '/#/detail/${this._restaurant.id}';" class="detailButton">Detail</button>
        </div>
        <div class="card__rating">
            <span tabindex="0" aria-label="Rating ${this._restaurant.rating}">⭐${this._restaurant.rating}</span>
        </div>
      `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
