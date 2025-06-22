/**
 * Gets the number of vowels in a sentence string.
 * @param {*} sentence Sentence to parse.
 * @returns Number of vowels in a sentence.
 */
function getVowelCount(sentence) {
  const vowels = "aeiou";
  const lowerSentence = sentence.toLowerCase();
  let numVowels = 0;

  for (let i = 0; i < lowerSentence.length; i++) {
    if (vowels.includes(lowerSentence[i])) {
      numVowels += 1;
    }
  }
  return numVowels;
}

/**
 * Gets the number of consonants in a sentence string.
 * @param {*} sentence Sentence to parse.
 * @returns Number of consonants in a sentence.
 */
const getConsonantCount = (sentence) => {
  const vowels = "aeiou";
  const lowerSentence = sentence.toLowerCase();
  const sentenceChars = ["!", ".", ",", ";", "-", "?", ":", " "];
  let consonantCount = 0;

  for (const char of lowerSentence) {
    if (!vowels.includes(char) && !sentenceChars.includes(char)) {
      consonantCount += 1;
    }
  }
  return consonantCount;
};

/**
 * Get the number of punctuations in a string sentence.
 * @param {*} sentence Sentence to parse.
 * @returns Number of puntuations in a sentence.
 */
const getPunctuationCount = (sentence) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const lowerSentence = sentence.toLowerCase();
  const punctuationChar = " ";
  let puntuationCount = 0;

  for (const char of lowerSentence) {
    if (!letters.includes(char) && char !== punctuationChar) {
      puntuationCount += 1;
    }
  }
  return puntuationCount;
};

/**
 * Gets the number words in a sentence.
 * @param {*} sentence
 * @returns Number of words in a sentence.
 */
function getWordCount(sentence) {
  const lowerSentence = sentence.toLowerCase();

  let trimmed = lowerSentence.trim();

  if (trimmed === "" || trimmed.length === 0) {
    return 0;
  }

  const sentenceArray = trimmed.split(" ");
  let wordCount = 0;

  for (let i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i] !== "") {
      wordCount++;
    }
  }
  return wordCount;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
