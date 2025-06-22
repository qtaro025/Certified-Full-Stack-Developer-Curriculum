1; /**
 * User Stories:

    1. Create a function named maskEmail that takes email as an argument.
    2. Inside the function, you should mask the email and append the domain name to it. Remember that you can use methods like slice, repeat, indexOf or even replace to help you.
    3. Outside the function, declare a variable named email to store the email address you want to mask.
    4. Call the maskEmail function with the email variable and output the result to the console.
    5. maskEmail("apple.pie@example.com") should return "a*******e@example.com".
    6. maskEmail("freecodecamp@example.com") should return "f**********p@example.com".
 */

/**
 * Masks an email with * between the first and last character of an email.
 * @param {} email
 * @returns Masked email.
 */
const maskEmail = (email) => {
  let atSignIndex = email.indexOf("@");
  let emailName = email.slice(0, atSignIndex);
  let domainName = email.slice(atSignIndex, email.length);

  let charsBetweenName = emailName.length - 2;
  let filteredName = emailName.replace(
    emailName.slice(1, emailName.length - 1),
    "*".repeat(charsBetweenName)
  );
  return filteredName.concat(domainName);
};

let email = "apple.pie@example.com";
console.log(maskEmail(email));

email = "freecodecamp@example.com";
console.log(maskEmail(email));
