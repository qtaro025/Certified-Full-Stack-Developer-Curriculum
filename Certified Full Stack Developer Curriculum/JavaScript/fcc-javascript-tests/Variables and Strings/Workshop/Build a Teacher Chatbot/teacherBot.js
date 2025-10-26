console.log("Hi there!");

let teacherBotName = "teacherBot";
let teacherBotGreeting = `My name is ${teacherBotName}.`;
console.log(teacherBotGreeting);

let subject = "JavaScript";
let topic = "strings";

let sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);
console.log("");

let strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);
console.log(`Length of ${subject}: ${subject.length}`);
console.log("");

console.log(
  `Here is an example of using the length property on the word ${topic}.`
);
console.log(`Length of ${topic}: ${topic.length}`);
console.log("");

console.log(
  `Here is an example of accessing the first letter in the word ${subject}.`
);
console.log(`FIrst letter of ${subject}: ${subject[0]}`);
console.log("");

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(`Second letter of ${subject}: ${subject[1]}`);
console.log("");

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);
let lastCharacter = subject[subject.length - 1];
console.log(`Last letter of ${subject}: ${lastCharacter}`);
console.log("");

let learningIsFunSentence = "Learning is fun.";
console.log("Here are examples of finding the positions of substrings in the sentence.");
console.log(`Index of Learning: ${learningIsFunSentence.indexOf("Learning")}`);
console.log(`Index of fun: ${learningIsFunSentence.indexOf("fun")}`);
console.log(`Index of learning: ${learningIsFunSentence.indexOf("learning")}`);
console.log("");

console.log("I hope you enjoyed learning today.");