/**
 * Implement the Mutations Algorithm
 * ---------------------------------
 * Fulfill the user stories below and get all the tests to pass to complete
 * the lab.
 *
 * User Stories:
 * -------------
 * 1. Create a function named mutation that takes an array as its
 * argument.
 * 2. mutation should return true if the string in the first element of the array contains all of the letters of the
 *  string in the second element of the array, and false otherwise. For example:
 * 	- mutation(["hello", "Hello"]), should return true because all of the letters in the second string are present in
 * 		the first, ignoring case.
 *  - mutation(["hello", "hey"]) should return false because the string hello does not contain a y.
 *	- mutation(["Alien", "line"]), should return true because all of the letters in line are present in Alien.
 */

/**
 * Compares two array elements to determine if all the letters
 * in arr[1] and contained in arr[0].
 * @param {*} arr Array of two strings to compare.
 * @returns True iff all the letter ins arr[1] are in arr[0]
 */
function mutation(arr) {
  let [firstStr, secondStr] = arr;
  const firstStrFilt = firstStr.trim().toLowerCase();
  const secondStrFilt = secondStr.trim().toLowerCase();

  if (secondStrFilt.length === 0) {
    return false;
  }
  if (
    secondStr.length === firstStr.lenth &&
    secondStrFilt.index(firstStrFilt) !== -1
  ) {
    return false;
  } else {
    let containsAllLetters = true;
    for (const letter of secondStrFilt) {
      containsAllLetters = firstStrFilt.includes(letter);
      if (!containsAllLetters) {
        containsAllLetters = false;
        break;
      }
    }
    return containsAllLetters;
  }
}

const test_1 = mutation(["hello", "Hello"]);
console.log(test_1); // Should print true

const test_2 = mutation(["hello", "hey"]);
console.log(test_2); // Should print false

const test_3 = mutation(["Alien", "line"]);
console.log(test_3); // Should print true
