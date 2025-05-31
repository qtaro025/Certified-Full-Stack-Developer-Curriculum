let botName = "MathBot";
let greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
console.log(greeting);

console.log(
  "The Math.random() method returns a pseudo random number between 0 and less than 1."
);
// Generate a random number
let randomNum = Math.random();
console.log(randomNum);
console.log("");

// Generate a random number between two values;
console.log("Now, generate a random number between two values.");
let min = 1;
let max = 100;
let randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);
console.log("");

// Using the Math.floor() method - rounds the value down to the nearest whole number.
console.log(
  "The Math.floor() method rounds the value down to the nearest whole integer."
);
let numRoundedDown = Math.floor(6.7); // 6
console.log(numRoundedDown);
console.log("");

// Using the Math.ceil() method - rounds the value up to the nearest whole integer.
console.log(
  "The Math.ceil() method rounds the value up to the nearest whole integer."
);
let numRoundedUp = Math.ceil(3.2); // 4
console.log(numRoundedUp);
console.log("");

// Using the Math.round() method - rounds the value to the nearest whole number.
console.log(
  "The Math.round() method rounds the value to the nearest whole integer."
);
let numRounded = Math.round(2.7); // 3
console.log(numRounded);
let numRounded2 = Math.round(11.2); // 11
console.log(numRounded2);
console.log("");

// Using the Math.max() and Math.min() methods - find the minimum and maximum values in an array
console.log(
  "The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range."
);
let maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);
let minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);
console.log("");

console.log("It was fun learning about the different Math methods with you!");
