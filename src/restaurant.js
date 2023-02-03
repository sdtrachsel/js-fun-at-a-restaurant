function createRestaurant(restuarantName) {
  var restaurant = {
    name: restuarantName,
    menus: { breakfast: [], lunch: [], dinner: [] },
  };
  return restaurant;
};

function addMenuItem(restaurant, item) {
  if (item.type === 'breakfast') {
    if (!restaurant.menus.breakfast.includes(item)) {
      restaurant.menus.breakfast.push(item);
    };
  } else if (item.type === 'lunch') {
    if (!restaurant.menus.lunch.includes(item)) {
      restaurant.menus.lunch.push(item)
    };
  } else {
    if (!restaurant.menus.dinner.includes(item)) {
      restaurant.menus.dinner.push(item)
    };
  };
}


function removeMenuItem(restaurant, item, menuType) {
  if (menuType === 'breakfast') {
    if (restaurant.menus.breakfast.length === 0) {
      return `Sorry, we don't sell ${item}, try adding a new recipe!`;
    } else {
      for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
        if (restaurant.menus.breakfast[i].name === item) {
          restaurant.menus.breakfast.splice(i, 1);
        } else {
          return `Sorry, we don't sell ${item}, try adding a new recipe!`;
        }
      }
    }
  } else if (menuType === 'lunch') {
    if (restaurant.menus.dinner.length === 0) {
      return `Sorry, we don't sell ${item}, try adding a new recipe!`;
    } else {
      for (var i = 0; i < restaurant.menus.lunch.length; i++) {
        if (restaurant.menus.lunch[i].name === item) {
          restaurant.menus.lunch.splice(i, 1);
        } else {
          return `Sorry, we don't sell ${item}, try adding a new recipe!`;
        }
      }
    }
  } else {
    if (restaurant.menus.dinner.length === 0) {
      return `Sorry, we don't sell ${item}, try adding a new recipe!`;
    } else {
      for (var i = 0; i < restaurant.menus.dinner.length; i++) {
        if (restaurant.menus.dinner[i].name === item) {
          restaurant.menus.dinner.splice(i, 1);
        } else {
          return `Sorry, we don't sell ${item}, try adding a new recipe!`;
        }
      }
    }
  }
  return `No one is eating our ${item} - it has been removed from the ${menuType} menu!`;
};




module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}