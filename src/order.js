function takeOrder(order, ordersArray) {
  if (ordersArray.length < 3) {
    ordersArray.push(order)
  }
};

function refundOrder(order, ordersArray) {
  for (i = 0; i < ordersArray.length; i++) {
    if (order === ordersArray[i].orderNumber) {
      var index = ordersArray.indexOf(ordersArray[i]);
      ordersArray.splice(index, 1);
    }
  }
};

function listItems(ordersArray) {
  var itemString = '';
  for (i = 0; i < ordersArray.length; i++) {
    if (i === (ordersArray.length - 1)) {
      itemString += `${ordersArray[i].item}`;
    } else {
      itemString += `${ordersArray[i].item}, `
    }
  }
  return itemString
};

function searchOrder(ordersArray, orderName){
  var itemArray = [];
  for (i = 0; i < ordersArray.length; i++) {
      itemArray += ordersArray[i].item;
  }
  return itemArray.includes(orderName)
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}