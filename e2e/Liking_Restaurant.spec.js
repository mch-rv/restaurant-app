const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Open detail page', async ({ I }) => {
  I.see('Item Not Found', '.itemNotFound');

  I.amOnPage('/');

  I.waitForElement('.card');
  const firstRestaurant = locate('.detailButton').first();
  const firstRestaurantName = locate('.name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurantName);
  I.click(firstRestaurant);

  I.waitForElement('.restaurant__name');
  const detailRestaurantName = await I.grabTextFrom('.restaurant__name');
  assert.strictEqual(firstRestaurantTitle, detailRestaurantName);
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Item Not Found', '.itemNotFound');

  I.amOnPage('/');

  I.waitForElement('.card');
  const firstRestaurant = locate('.detailButton').first();
  const firstRestaurantName = locate('.name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurantName);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');

  const likedRestaurantTitle = await I.grabTextFrom('.name');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('liked one restaurant and canceled it', async ({ I }) => {
  I.see('Item Not Found', '.itemNotFound');

  I.amOnPage('/');

  I.waitForElement('.card');
  const firstRestaurant = locate('.detailButton').first();
  const firstRestaurantName = locate('.name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurantName);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');

  const likedRestaurant = locate('.detailButton').first();
  const likedRestaurantName = locate('.name').first();
  const likedRestaurantTitle = await I.grabTextFrom(likedRestaurantName);
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.click(likedRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Item Not Found', '.itemNotFound');
});
