/**
 * Build an Inventory Management Program
 * -------------------------------------
 * In this lab, you will build an inventory management program that will allow you to add, update,
 * find and remove products from the inventory. You will use an array of objects to represent your
 * inventory, where each object will have name and quantity as the keys.
 *
 * Fulfill the user stories below and get all the tests to pass to complete the lab.
 * User Stories:
 * -------------
 * 1. You should declare an empty array named inventory that will store product objects having a
 *      key name with the value of a lowercase string, and a key quantity with the value of an integer.
 * 2. You should create a function named findProductIndex that takes the product name as its argument
 *      and returns the index of the corresponding product object inside the inventory array.
 *      The function should always use the lowercase form of the product name to perform the search.
 *      If the product is not found, the function should return -1.
 * 3. You should create a function named addProduct that takes a product object as its argument.
 * 4. If the product is already present in the inventory, the addProduct function should update
 *      its quantity value and log to the console the product name followed by a space and quantity updated.
 * 5. If the product is not present in the inventory, the addProduct function should push the product to the
 *      inventory array and log the product name to the console, followed by a space and added to inventory.
 * 6. You should create a function named removeProduct that takes the product name and quantity as its arguments.
 * 7. The removeProduct function should subtract the passed quantity from the corresponding product object inside
 *      the inventory and log the string Remaining <product-name> pieces: <product-quantity> to the console, where
 *      <product-name> should be replaced by the product name, and <product-quantity> should be replaced by the
 *      product quantity.
 * 8. If the quantity after the subtraction is zero, removeProduct should remove the product object from the
 *      inventory. If the quantity in the inventory is not enough to perform the subtraction, the removeProduct
 *      function should log the string Not enough <product-name> available, remaining pieces: <product-quantity>
 *      to the console.
 * 9. If the product to remove is not present in the inventory, the removeProduct function should log
 *      <product-name> not found to the console.
 * Note: To prevent conflicts, keep only the logging mentioned in the user stories when running tests.
 */

let inventory = [];
// inventory.push({ name: "flour", quantity: 5 });

function setInventory(newInventory) {
  inventory = newInventory;
}

/**
 * Find the index of a object in a array of objects.
 * @param {String} name
 * @returns Index of the name.
 */
function findProductIndex(name) {
  const nameLower = name.toLowerCase();
  const index = inventory.findIndex(
    (item) => item.name.toLowerCase() === nameLower
  );
  return index;
}

/**
 * Adds obj.name to the inventory if it doesn't already exist, otherwise updates
 * the obj.quantity.
 * @param {Object} obj
 */
function addProduct(obj) {
  const objNameLower = obj.name.toLowerCase();
  const objIdx = findProductIndex(objNameLower);

  if (objIdx === -1) {
    inventory.push({ name: objNameLower, quantity: obj.quantity });
    console.log(`${objNameLower} added to inventory`);
  } else {
    inventory[objIdx].quantity += obj.quantity;
    console.log(`${objNameLower} quantity updated`);
  }
}

/**
 * Removes a quantity from the product.
 * @param {String} name Product name.
 * @param {Number} quantity Amout to remove.
 */
function removeProduct(name, quantity) {
  const nameLower = name.toLowerCase();
  const objIndex = findProductIndex(nameLower);
  const product = inventory[objIndex];

  if (objIndex === -1) {
    console.log(`${nameLower} not found`);
    return;
  }

  if (quantity < product.quantity) {
    product.quantity -= quantity;
    console.log(`Remaining ${nameLower} pieces: ${product.quantity}`);

    if (product.quantity === 0) {
      inventory.splice(objIndex, 1); // delete object from inventory
    }
  } else if (quantity === product.quantity) {
    inventory.splice(objIndex, 1); // delete object from inventory
    console.log(`Remaining ${nameLower} pieces: 0`);
  } else {
    console.log(
      `Not enough ${nameLower} available, remaining pieces: ${product.quantity}`
    );
  }
}

module.exports = {
  findProductIndex,
  setInventory,
  addProduct,
  removeProduct,
};
