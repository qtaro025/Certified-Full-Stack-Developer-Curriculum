/**
 * User Stories:
 * 1. You should have a function truncateString that accepts two
 * arguments, the first one a string, the second one a number.
 * 2. If the length of the string is more than the given number,
 * the string should be truncated to reduce the length so that it is equal the given number, and ...
 * should be appended at the end of the truncated string.
 * 3. If the length of the string is equal to or lower than the given number,
 * the string should be returned unchanged.
 */

function truncateString(inputStr, truncateIndex) {
  if (inputStr.length > truncateIndex) {
    let startIdx = 0;
    let newStr = inputStr.slice(startIdx, truncateIndex).concat(".".repeat(3));
    return newStr;
  }
  return inputStr;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));
