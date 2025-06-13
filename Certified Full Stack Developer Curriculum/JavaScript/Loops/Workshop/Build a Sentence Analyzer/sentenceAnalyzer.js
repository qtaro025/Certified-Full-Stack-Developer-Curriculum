const { forwardRef } = require("react");

const getVowelCount = (sentence) => {
  let lowerSentence = sentence.toLowerCase();
  let vowels = 'aeiou';
  let vowelCount = 0;

  for (const char of lowerSentence) {
    if (vowels.includes(char)) {
      vowelCount += 1;
    }
  }
  return vowelCount;
};

const getConsonantCount = (sentence) => {
  let lowerSentence = sentence.toLowerCase().trim();
  let vowels = 'aeiou';
  let specialChars = ['!', '.', ',', '-', ':', ';', " "];
  let consonantCount = 0;

  for (const char of lowerSentence) {
    if (!vowels.includes(char) && !specialChars.includes(char)){
      consonantCount += 1;
    }
  }
  return consonantCount;
};

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);