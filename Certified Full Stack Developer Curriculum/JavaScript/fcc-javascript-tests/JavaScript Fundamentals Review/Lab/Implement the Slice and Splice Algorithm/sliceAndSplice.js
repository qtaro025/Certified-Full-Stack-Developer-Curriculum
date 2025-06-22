/**
 * Implement the Slice and Splice Algorithm
 * -----------------------------------------
 * In this lab, you will need to create an algorithm to merge two arrays.
 *
 * Fulfill the user stories below and get all the tests to pass to complete the lab.
 *
 * User Stories:
 * -------------
 * 1. Create a frankenSplice function that accepts two arrays and an index.
 * 2. Copy each element of the first array into the second array, in order, beginning at the given index, and return
 * the resulting array.
 * 3. The input arrays should remain the same after the function runs.
 *
 * Tests
 * -----
 * 1. frankenSplice([1, 2, 3], [4, 5], 1)
 *    => should return [4, 1, 2, 3, 5].
 * 2. frankenSplice([1, 2], ["a", "b"], 1)
 *    => should return ["a", 1, 2, "b"].
 * 3. frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
 *    => should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
 */

/**
 * Merges the contents of one array into another array at a starting index value.
 * @param {*} arr1 Array whose contents will be innserted into arr2.
 * @param {*} arr2 Array where the contents of arr1 will be inserted.
 * @param {*} index Index of arr2 where the contents of arr1 will be added
 * @returns Merged array of contents of arr1 and arr2.
 */
const frankenSplice = (arr1, arr2, index) => {
  const result = [...arr2];
  result.splice(index, 0, ...arr1);

  return result;
};
