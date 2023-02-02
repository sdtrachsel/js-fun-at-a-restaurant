function nameMenuItem(foodName){
  return `Delicious ${foodName}`;
};

function createMenuItem (menuItemName, price, type){
  var newMenuItem = {
    name: menuItemName,
    price: price,
    type: type, 
  }
  return newMenuItem;
};

function addIngredients(addFood, ingredients){
  // if addFood is not in ingredients push else do nothing
  if(!ingredients.includes(addFood)){
    ingredients.push(addFood);
  };
};

function formatPrice(initalPrice){
  return `$${initalPrice}`;
};

function decreasePrice(initalPrice){
  return initalPrice * .9
};

function createRecipe(title, ingredients, type){
  var recipe = {
    title: title, 
    ingredients: ingredients,
    type: type
  }
  return recipe;
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


