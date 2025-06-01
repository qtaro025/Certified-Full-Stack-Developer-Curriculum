// function to add 2 and 7
const addTwoAndSeven = () => {
  return 2 + 7;
};
console.log(`2 + 7 = ${addTwoAndSeven()}`);

// function to add 3 and 4
const addThreeAndFour = () => {
  return 3 + 4;
};
console.log(`3 + 4 = ${addThreeAndFour()}`);
console.log("");

/**
 * Calculates the sum of two numbers, num1 and num2.
 * @param {*} num1
 * @param {*} num2
 * @returns The sum of num1 + num2
 */
const calculateSum = (num1, num2) => {
  return num1 + num2;
};
console.log("Using the calculateSum function ...");
console.log(`2 + 5 = ${calculateSum(2, 5)}`);
console.log(`10 + 10 = ${calculateSum(10, 10)}`);
console.log(`5 + 5 = ${calculateSum(5, 5)}`);
console.log("");

/**
 * Calculates the difference to two numbers, num1 and num2.
 * @param {*} num1
 * @param {*} num2
 * @returns The difference between num1 and num2.
 */
const calculateDifference = (num1, num2) => {
  return num1 - num2;
};
console.log("Using the calculateDifference function ...");
console.log(`22 - 5 = ${calculateDifference(22, 5)}`);
console.log(`12 - 1 = ${calculateDifference(12, 1)}`);
console.log(`17 - 9 = ${calculateDifference(17, 9)}`);
console.log("");

/**
 * Calculates the product of two numbers, num1 and num2.
 * @param {*} num1
 * @param {*} num2
 * @returns The multiplicatio of two numbers.
 */
const calculateProduct = (num1, num2) => {
  return num1 * num2;
};
console.log("Using the calculateProduct function ...");
console.log(`13 * 5 = ${calculateProduct(13, 5)}`);
console.log("");

/**
 * Calculates the quotient of two numbers, num1 and num2.
 * @param {*} num1
 * @param {*} num2
 * @returns The division of num1 by num2.
 */
const calculateQuotient = (num1, num2) => {
  if (num2 === 0) {
    return "Error: Division by zero";
  }
  return num1 / num2;
};
console.log("Using the calculateQuotient function ...");
console.log(`7 / 11 = ${calculateQuotient(7, 11)}`);
console.log(`3 / 0 = ${calculateQuotient(3, 0)}`);
console.log("");

/**
 * Calcualtes the square of a number, num.
 * @param {*} num
 * @returns num multipled by itself.
 */
const calculateSquare = (num) => Math.pow(num, 2);
console.log("Using the calculateSquare function ...");
console.log(`2 * 2 = ${calculateSquare(2)}`);
console.log(`9 * 9 = ${calculateSquare(9)}`);
console.log("");

/**
 * Calculate the square root of a number, num.
 * @param {*} num
 * @returns The square root of num.
 */
const calculateSquareRoot = (num) => {
  return Math.sqrt(num);
};
console.log("Using the calcuateSquareRoot function ...");
console.log(`The square root of 25 is ${calculateSquareRoot(25)}`);
console.log(`The square root of 100 is ${calculateSquareRoot(100)}`);
