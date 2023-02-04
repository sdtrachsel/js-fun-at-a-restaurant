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

function addIngredients(ingredientToAdd, ingredients){
   if(!ingredients.includes(ingredientToAdd)){
    ingredients.push(ingredientToAdd);
  };
};

function formatPrice(unformattedPrice){
  return `$${unformattedPrice}`;
};

function decreasePrice(initalPrice){
  return initalPrice * .9;
};

function createRecipe(recipeTitle, recipeIngredients, recipeType){
  var recipe = {
    title: recipeTitle, 
    ingredients: recipeIngredients,
    type: recipeType
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


