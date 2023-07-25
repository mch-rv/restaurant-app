import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import '../../components/restaurantList';

const Home = {
  async render() {
    return `
    <heroSection tabindex="0">
    <picture>
        <source media="(max-width: 720px)" srcset="./images/heros/hero-image_2-small.jpg">
        <source media="(max-width: 1000px)" srcset="./images/heros/hero-image_2-medium.jpg">
        <img src='./images/heros/hero-image_2-large.jpg' 
             class="hero"
             alt="Restaurant Thumbnail">
      </picture>
    <h2 class="centered">FIND THE BEST RESTAURANTS!</h2>
   </heroSection>
   <div class="main__title" tabindex="0">
    <h2 id="maincontent">You can see our restaurant recommendations here!</h2>
   </div>
    <restaurant-list class="cardList"></restaurant-list>
      `;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantSource.restaurant();
    const restaurantsContainer = document.querySelector('restaurant-list');
    const mainContainer = document.querySelector('#mainContent');

    if (restaurants.length !== 0) {
      restaurantsContainer.restaurants = restaurants;
    } else {
      mainContainer.innerHTML = '<p class="itemNotFound">Item Not Found<p>';
    }
  },
};

export default Home;
