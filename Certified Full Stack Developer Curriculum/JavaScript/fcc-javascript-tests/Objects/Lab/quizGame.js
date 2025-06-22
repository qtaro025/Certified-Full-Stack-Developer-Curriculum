/**
    Fulfill the user stories below and get all the tests to pass to complete the lab.

    User Stories:
    -------------
    1. You should create an array named questions.
    2. The questions array should contain at least five objects, each having the keys category, question, choices, and answer.
    3. The category key should have the value of a string representing a question category.
    4. The question key should have the value of a string representing a question.
    5. The choices key should have the value of an array containing three strings, which are alternative answers to the question.
    6. The answer key should have the value of a string, representing the correct answer to the question. Also, the value of answer should be included in the choices array.
    7. You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
    8. You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
    9. You should have a function named getResults that takes the question object as the first parameter and the computer's choice as the second parameter. The function should return The computer's choice is correct! if the answer is correct. Otherwise, it returns The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.

 */

const questions = [];

/**
 * Gets a ranom question object from the question array arr.
 * @param {*} arr Array of question objects.
 * @returns Question object from questionss array arr.
 */
const getRandomQuestion = (arr) => {
  const min = 0;
  const max = arr.length;
  const questionIdx = Math.floor(Math.random() * (max - min) + min);

  return arr[questionIdx];
};

/**
 * Gets a random computer choice from the choices array arr.
 * @param {*} arr Array of choices.
 * @returns String answer from the choices array arr.
 */
const getRandomComputerChoice = (arr) => {
  const min = 0;
  const max = arr.length;
  const choiceIdx = Math.floor(Math.random() * (max - min) + min);

  return arr[choiceIdx];
};

/**
 * Gets the result from a randomly question and computer's choice.
 * @param {*} question Random trivia question object question to ask.
 * @param {*} choice Computer's random choice.
 * @returns String result of question and choice.
 */
const getResults = (question, choice) => {
  if (question.answer === choice) {
    return `The computer\'s choice is correct!`;
  } else {
    return `The computer\'s choice is wrong. The correct answer is: ${question.answer}`;
  }
};

const question1 = {
  category: "U.S. History",
  question: "Who is the first United States President?",
  choices: ["Bill Clinton", "Barack Obama", "George Washington"],
  answer: "George Washington",
};

const question2 = {
  category: "California State Parks",
  question: "Which California state park is Half Dome Located?",
  choices: [
    "Yosemite National Park",
    "Sequoia National Park",
    "Kings Canyon National Park",
  ],
  answer: "Yosemite National Park",
};

const question3 = {
  category: "University of California Nobel Laureates",
  question:
    "Which University of California university has the highest number of Nobel Lauretes?",
  choices: ["UC Irvine", "UC San Diego", "UC Berkeley"],
  answer: "UC Berkeley",
};

const question4 = {
  category: "U.S. Monuments",
  question: "In which U.S. state is Mount Rushmore National Memorial Located?",
  choices: ["North Dakota", "South Dakota", "Arizona"],
  answer: "South Dakota",
};

const question5 = {
  category: "UCSD Colleges",
  question: "How many colleges exists at UCSD?",
  choices: ["1", "8", "7"],
  answer: "8",
};

questions.push(question1);
questions.push(question2);
questions.push(question3);
questions.push(question4);
questions.push(question5);

const question = getRandomQuestion(questions);
console.log(question.question);
const computerChoice = getRandomComputerChoice(question.choices);
console.log(`Computer\s choice: ${computerChoice}`);
console.log(getResults(question, computerChoice));
