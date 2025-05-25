/*
In this lab, you'll practice working with JavaScript variables and strings by
building a trivia bot.

User stories:
-------------
1. You should log "Hello! I'm your coding fun fact guide!" to the console as a greeting message to the user.
2. You should create three variables: botName, botLocation, and favoriteLanguage, that store the bot's name, where it's
    from, and its favorite coding language, respectively.
3. You should use string concatenation to log "My name is (botName) and I live on (botLocation)." to the console.
4. You should use string concatenation to log "My favorite programming language is (favoriteLanguage)." to the console.
5. You should use let to create a codingFact variable and assign it a string that is a fun fact about your bot's
    favorite coding language and uses string concatenation to include the use of the favoriteLanguage variable.
6. You should log the codingFact to the console.
7. You should reassign the codingFact variable to a new fact about the bot's favorite language using the
    favoriteLanguage variable again.
8. You should log the codingFact to the console again.
9. You should reassign the codingFact variable again to another new fact about the bot's favorite language using the
    favoriteLanguage variable.
10. You should log the codingFact to the console a third time.
11. You should log "It was fun sharing these facts with you. Goodbye! - (botName) from (botLocation)." to the
    console as a farewell statement from the bot.
*/

console.log("Hello! I'm your coding fun fact guide!");

let botName = "Q Mon";
let botLocation = "Planet Earth";
let favoriteLanguage = "Python";

console.log("My name is " + botName + " and I live on " + botLocation + ".");
console.log("My favorite programming language is " + favoriteLanguage + ".");

let codingFact =
  favoriteLanguage + " is a beginner friendly programming language.";
console.log(codingFact);

codingFact = favoriteLanguage + " does not need a compiler.";
console.log(codingFact);

codingFact = favoriteLanguage + " is a free and open-source language";
console.log(codingFact);

console.log(
  "It was fun sharing these facts with you. Goodbye! - " +
    botName +
    " from " +
    botLocation +
    "."
);
