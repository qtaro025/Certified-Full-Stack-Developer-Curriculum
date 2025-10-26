const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);
console.log("");

const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);
console.log("");

let exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);
console.log("");

const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);
console.log("");

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);
console.log("");

const repeatedLove = "love ".repeat(3).trimEnd();
console.log(`repeated love: ${repeatedLove}`);
console.log("");

const newSentence = "I ".concat(repeatedLove, " learning.");
console.log(newSentence);



