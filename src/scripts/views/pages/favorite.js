import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../../components/restaurantList';

const Favorite = {
  async render() {
    return `
        <heroSection tabindex="0">
        <picture>
        <source media="(max-width: 720px)" srcset="./images/heros/hero-image_4-small.jpg">
        <source media="(max-width: 1000px)" srcset="./images/heros/hero-image_4-medium.jpg">
        <img src='./images/heros/hero-image_4-large.jpg' 
             class="hero"
             alt="Restaurant Thumbnail">
      </picture>
        <h2 class="centered">FAVORITE RESTAURANT!</h2>
    </heroSection>
    <div class="main__title" tabindex="0">
        <h2 id="maincontent">You can see your favorite restaurant here!</h2>
    </div>
      <restaurant-list class="cardList"></restaurant-list>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('restaurant-list');
    if (restaurants.length !== 0) {
      restaurantsContainer.restaurants = restaurants;
    } else {
      restaurantsContainer.innerHTML = '<p class="itemNotFound">Item Not Found<p>';
    }
  },
};

export default Favorite;
