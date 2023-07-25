import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detailRestaurant">
    <img tabindex="0" class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div tabindex="0" class="restaurant__info">
        <h3 tabindex="0">Nama Restaurant</h3>
        <p class="restaurant__name" tabindex="0">${restaurant.name}</p>
        <h4 tabindex="0">Alamat Restaurant</h4>
        <p tabindex="0">${restaurant.address}</p>
        <h4 tabindex="0">Kota</h4>
        <p tabindex="0">${restaurant.city}</p>
        <h4 tabindex="0">Deskripsi</h4>
        <p tabindex="0" class="restaurant__info-description">${restaurant.description}</p>
        <div class="restaurant__menu">
            <div>
                <h4 tabindex="0">Menu Makanan</h4>
                ${restaurant.menus.foods.reduce((show, value) => show.concat(`<li tabindex="0">${value.name}</li>`), '')}
            </div>
            <div>
                <h4 tabindex="0">Menu Minuman</h4>
                ${restaurant.menus.drinks.reduce((show, value) => show.concat(`<li tabindex="0">${value.name}</li>`), '')}
            </div>
        </div>
    </div>
    <div class="restaurant__review">
        <h4 tabindex="0">Ulasan Pelanggan:</h4>
        <div class="review__list">
            ${restaurant.customerReviews.reduce((show, value) => show.concat(`
            <div class="review__item">
                <p tabindex="0" class="review__item-name">${value.name}</p>
                <p tabindex="0" class="review__item-review">${value.review}</p>
                <p tabindex="0">${value.date}</p>
            </div>
            `), '')}
        <div>
    </div>
<div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class='bx bx-star' ></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class='bx bxs-star' ></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
