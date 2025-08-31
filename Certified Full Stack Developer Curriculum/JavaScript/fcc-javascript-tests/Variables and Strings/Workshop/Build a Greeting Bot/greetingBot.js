/**
 * You will learn about variables, let, const, console.log
 *  and basic string usage.
 */

console.log("Hi there!");
console.log("I am excited to talk to you.");

let bot = "";
let bot_location = "";

bot += "teacherBot";
bot_location += "the universe";

console.log("Allow me to introduce myself.");

let botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

let botLocationSentence = "I live in " + bot_location + ".";
console.log(botLocationSentence);

bot = "professorBot";
let nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);

bot = "awesomeTeacherBot";
let newNicknameGreeting = "I love my nickname but I wish people would ";
newNicknameGreeting += "call me " + bot + ".";
console.log(newNicknameGreeting);

let favoriteSubject = "Computer Science";

let favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);

console.log("Well, it was nice to talk to you. Have a nice day!");
