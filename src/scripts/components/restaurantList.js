import './restaurantItem';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      const RestaurantItem = document.createElement('restaurant-item');
      RestaurantItem.classList.add('card');
      RestaurantItem.restaurant = restaurant;
      this.appendChild(RestaurantItem);
    });
  }
}
customElements.define('restaurant-list', RestaurantList);
