/**
  A for...in loop is best used when you need to loop over the properties of an object. This loop will iterate over all enumerable properties of an object, including inherited properties and non-numeric properties.

  Inherited Property: A property that is inherited from the object's prototype chain.

  Non-numeric Property: A property that is not a number or a string that can be converted to a number.
 */

const fruit = {
  name: 'apple',
  color: 'red',
  price: 0.99,
};

console.log("Printing out the contents of the fruit object ...");
for (const prop in fruit) {
  console.log(fruit[prop]);
}
console.log("");

const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  }
};

console.log("Printing out the contents of the person object ...");
for (const prop in person) {
  console.log(person[prop]);
}
console.log("");

function isObject(obj) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

console.log("Printing out the contents of the person object when it contains nested properties ...");
for (const prop in person) {
  if (isObject(person[prop])) {
    for (const nesteddProp in person[prop]) {
      console.log(person[prop][nesteddProp]);
    }
  } else {
    console.log(person[prop]);
  }
}