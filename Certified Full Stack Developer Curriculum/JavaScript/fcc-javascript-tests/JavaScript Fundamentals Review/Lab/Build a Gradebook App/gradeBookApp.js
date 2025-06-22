/**
 * Build a Gradebook App
 * ---------------------
 * Fulfill the user stories below and get all the tests to pass to complete the lab.
 *
 * User Stories:
 * -------------
 * 1. You should have a function named getAverage that takes an array of test scores as a
 *    parameter and returns the average score.
 * 2. You should have a function named getGrade that takes a student score as a parameter
 *    and returns a string representing a letter grade based on the score. Here are the scores
 *    and their corresponding letter grades:
 *    Score Range	Grade
 *      100	"A+"
 *      90 - 99	    "A"
 *      80 - 89	    "B"
 *      70 - 79	    "C"
 *      60 - 69	    "D"
 *      0 - 59	    "F"
 * 3. You should have a function named hasPassingGrade that takes a score as a parameter
  and returns either true or false depending on if the score corresponds to a passing grade.
 * 4. The hasPassingGrade function should use the getGrade function to get the letter grade,
 * and use it to determine if the grade is passing. A passing grade is anything different from
 * "F".
 * 5. You should have a function named studentMsg that takes an array of scores and a student
 * score as the parameters. The function should return a string with the format:
 * - "Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.",
 * if the student passed the course.
 * - "Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.",
 * if the student failed the course.
 */

/**
 * Gets the average of test scores.
 * @param {Array} scores Scores array.
 * @returns Average of scores.
 */
const getAverage = (scores) => {
  let total = 0;
  let numScores = scores.length;

  for (const score of scores) {
    total += score;
  }
  return total / numScores;
};

/**
 * Gets the student's test score.
 * @param {Number} score Test score.
 * @returns A string representing the student's grade.
 */
const getGrade = (score) => {
  let letterGrade = "";

  if (score === 100) {
    letterGrade = "A+";
  } else if (score >= 90 && score <= 99) {
    letterGrade = "A";
  } else if (score >= 80 && score <= 89) {
    letterGrade = "B";
  } else if (score >= 70 && score <= 79) {
    letterGrade = "C";
  } else if (score >= 60 && score <= 69) {
    letterGrade = "D";
  } else if (score >= 0 && score <= 59) {
    letterGrade = "F";
  } else {
    console.log(`${score} is not a valid score!`);
  }
  return letterGrade;
};

/**
 * Determine if a student has a passing grade.
 * @param {Number} score Test score.
 * @returns True if score is passing, otherwise returns false.
 */
const hasPassingGrade = (score) => {
  const finalGrade = getGrade(score);
  return !finalGrade.includes("F");
};

/**
 * Prints out the student message - average, and whether the student passed or failed.
 * @param {Array} arr Array of class average.
 * @param {Number} score Student's grades score.
 * @returns String message of class average and student's pass/fail status.
 */
const studentMsg = (arr, score) => {
  const average = getAverage(arr);
  const grade = getGrade(score);
  const passingGrade = hasPassingGrade(score);
  let message = "";

  if (passingGrade) {
    message = `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    message = `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
  return message;
};

module.exports = {
  getAverage,
  getGrade,
  hasPassingGrade,
  studentMsg,
};
