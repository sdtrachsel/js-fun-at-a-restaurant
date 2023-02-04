function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: { breakfast: [], lunch: [], dinner: [] },
  };
  return restaurant;
};

function addMenuItem(restaurant, menuItem) {
  if (!restaurant.menus[menuItem.type].includes(menuItem)) {
    restaurant.menus[menuItem.type].push(menuItem)
  }
};

function removeMenuItem(restaurant, menuItemName, menuItemType) {
  var menuItems = [];
  for (i = 0; i < restaurant.menus[menuItemType].length; i++)(
    menuItems.push(restaurant.menus[menuItemType][i].name)
  )
  if (menuItems.includes(menuItemName)) {
    var indexOfMenuItem = menuItems.indexOf(menuItemName)
    restaurant.menus[menuItemType].splice(indexOfMenuItem, 1)
    return `No one is eating our ${menuItemName} - it has been removed from the ${menuItemType} menu!`;
  } else {
    return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`
  }
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}