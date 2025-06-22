/**
  A for...of loop is used when you need to loop over values from an iterable. Examples of iterables would be arrays, and strings.
 */

const numbers = [1, 2, 3, 4, 5];

console.log("Printing out numbers in a array ...");
for (const num of numbers) {
  console.log(num);
}
console.log("");

const str = 'freeCodeCamp';

console.log("Printing out characters in a string ...");
for (let char of str) {
  console.log(char);
}
console.log("");

const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 40 },
];

console.log("Printing out the objects in an array ...");
for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}