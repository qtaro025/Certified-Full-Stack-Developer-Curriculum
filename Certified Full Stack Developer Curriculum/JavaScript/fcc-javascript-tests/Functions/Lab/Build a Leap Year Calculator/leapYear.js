/**
 * A leap year is a year that is divisible by 4, except for
 * years that are divisible by 100 and not divisible by 400.
 * For example, 2000 is a leap year, but 1900 is not. Also,
 * a leap year has an extra day in February, which is the
 * 29th day of the month.
 * Fulfill the user stories below and get all the tests to pass
 * to complete the lab.
 *
 * User Stories:
 * 1. Define a function called isLeapYear that takes a number as
 * an argument.
 * 2. Outside the function, declare a variable year that stores
 * the value of the year you want to check.
 * 3. Inside the function, use an if/ else statement or a ternary operator
 * to check if the year is a leap year.
 * 4. To check if the year is a leap year, fulfill the following conditions:
 *    - If the year is divisible by 4, then it is a leap year.
 *    - Unless the year is also divisible by 100, then it is not a leap year.
 *    - Unless the year is also divisible by 400, then it is a leap year.
 * 5. If the year is a leap year, return [year] is a leap year.. Otherwise, return
 * [year] is not a leap year.. You will replace [year] with the parameter defined in the isLeapYear function.
 * 6. You should call the isLeapYear function with year as the argument and assign
 * the result to a variable named result.
 * 7. You should output the result variable to the console using
 *  console.log().
 */

/**
 * Determine whether the given year is a leap year.
 * @param {*} year
 * @returns String message state whether the year is a leap year or not.
 */
const isLeapYear = (year) => {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return `${year} is a leap year.`;
      } else {
        return `${year} is not a leap year.`;
      }
    } else {
      return `${year} is a leap year.`;
    }
  } else {
    return `${year} is not a leap year.`;
  }
};

let year = 1900;
let result = isLeapYear(year);
console.log(result);
