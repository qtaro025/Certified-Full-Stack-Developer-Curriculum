console.log("Grocery shopping list");
let shoppingList = [];

console.log("It will be nice to have some fruit to eat.");
shoppingList.push("Apples");

const getShoppingListMsg = (shoppingArr) => {
  return `Current Shopping List: ${shoppingArr}`;
};

console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");
shoppingList.shift();

// update an item in an array
shoppingList[0] = "Canola Oil";

// Log the final grocery list ot the console
console.log(getShoppingListMsg(shoppingList));
