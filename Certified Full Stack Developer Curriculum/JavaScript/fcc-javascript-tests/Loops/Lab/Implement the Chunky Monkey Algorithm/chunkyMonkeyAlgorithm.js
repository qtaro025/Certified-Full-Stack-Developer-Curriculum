/**
 * Implement the Chunky Monkey Algorithm
 * -------------------------------------
 *
 * Fulfill the user stories below and get all the tests to pass to
 * complete the lab.
 *
 * User Stories:
 * -------------
 * Write a function named chunkArrayInGroups that takes an array as first argument and a number as second argument. The function should split the array into smaller arrays of length equal to the second argument and returns them as a
 * two-dimensional array.
 *
 * Tests
 * -----
 * 1. chunkArrayInGroups(["a", "b", "c", "d"], 2)
 *    => [["a", "b"], ["c", "d"]]
 * 2. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
 *    => [[0, 1, 2], [3, 4, 5]]
 * 3. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
 *    => [[0, 1], [2, 3], [4, 5]].
 * 4. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
 *    => [[0, 1, 2, 3], [4, 5]].
 * 5. chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
 *    => [[0, 1, 2], [3, 4, 5], [6]].
 * 6. chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
 *    => [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
 * 7. chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
 *    => [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
 */

const chunkArrayInGroups = (arr, num) => {
  if (arr.length <= 1 || num <= 1) {
    return arr;
  }
  let arrOfArrays = [];
  let tempArr = [];
  let groupCount = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (groupCount < num && i !== arr.length) {
      tempArr.push(arr[i]);
      groupCount++;
    } else {
      arrOfArrays.push(tempArr);
      tempArr = [];
      groupCount = 0;

      if (i !== arr.length) {
        tempArr.push(arr[i]);
        groupCount++;
      }
    }
  }
  return arrOfArrays;
};

const test_1 = chunkArrayInGroups(["a", "b", "c", "d"], 2);
const test_2 = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
const test_3 = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
const test_4 = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
const test_5 = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
const test_6 = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
const test_7 = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
