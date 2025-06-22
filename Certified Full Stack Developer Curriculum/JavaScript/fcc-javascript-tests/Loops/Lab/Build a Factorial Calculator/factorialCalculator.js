/**
 * A factorial is the product of an integer and all the integers
 * below it. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
 * In this lab, you will create a factorial calculator that takes a number
 * from the user and calculates the factorial of that number.

	Fulfill the user stories below and get all the tests to pass to complete the lab.

	User Stories:
	-------------
	1. 	You should declare a variable num and assign it a number of your choice. The assigned number should be between
		1 and 20 inclusive.
	2. 	Create a function named factorialCalculator that takes a number as an argument and returns the factorial of that
		a number.
	3. Inside the function, declare a result variable and assign it the value of 1.
		Using a loop, loop through all numbers from 1 to the input number(inclusive) and for
		each number, multiply the result variable by the current number and assign the result
		to the result variable. You can choose to use either a for loop, while loop or
		do...while loop here.
	4. You should call the factorialCalculator function with num as the argument and assign
		the result to the variable factorial.
	5. You should store the final output in the format Factorial of [num] is [factorial]
		and assign it to the variable resultMsg.
	6. You should output the value of resultMsg to the console.
 */

/**
 * Computes the factorial of a number.
 * @param {*} num Number type.
 * @returns The factorial of a number num.
 */
const factorialCalculator = (num) => {
  let result = 1;
  let count = 1;

  while (count <= num) {
    result *= count;
    count++;
  }
  return result;
};

const min = 1;
const max = 20;
let num = Math.floor(Math.random() * (max + 1 - min)) + min;

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
