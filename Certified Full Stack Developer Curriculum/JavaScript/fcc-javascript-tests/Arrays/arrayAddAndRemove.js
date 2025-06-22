/**
 * The push() method is used to add one or more elements to the end of
 *  an array. The return value for the push() method is the new length of the array.
 */
const fruits = ["apple", "banana"];
const newLength = fruits.push("orange");
console.log(newLength); // 3
console.log(fruits); // ["apple", "banana", "orange"]

/**
 * The pop() method removes the last element from an array and returns
 * that element. It also modifies the original array.
 */
let fruits2 = ["apple", "banana", "orange"];
let lastFruit = fruits2.pop();
console.log(fruits2); // ["apple", "banana"]
console.log(lastFruit); // "orange"

/**
 * The unshift() method adds one or more elements to the beginning
 * of an array and returns its new length. It works similarly to push(),
 * but modifies the start of the array instead of the end.
 */
let numbers = [2, 3];
let newLength2 = numbers.unshift(1);
console.log(numbers); // [1, 2, 3]
console.log(newLength2); // 3

/**
 * The shift() method removes the first element from an array and
 * returns that element. It's similar to pop(), but it works at the
 * beginning of the array instead of the end.
 */
let colors = ["red", "green", "blue"];
let firstColor = colors.shift();
console.log(colors); // ["green", "blue"]
console.log(firstColor); // "red"
