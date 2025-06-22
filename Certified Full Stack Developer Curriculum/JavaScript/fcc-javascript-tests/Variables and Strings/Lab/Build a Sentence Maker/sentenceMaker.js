/*

In this lab, you will create two different stories using a sentence template.
You will use variables to store different parts of the story and then output the stories to the console.

Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:
-------------
1. You should declare the following variables using let:
    - adjective
    - noun
    - verb
    - place
    - adjective2
    - noun2

2. You should assign the above variables some string values of your choice.
3. You should declare a firstStory variable.
4. You should use the following story template to create the first story and assign it to the
    "firstStory" variable: "Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2].
    The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].";
5. You should output your first story to the console using the message "First story: [firstStory]".
6. You should assign new values to your adjective, noun, verb, place, adjective2, and noun2 variables.
7. You should declare a secondStory variable.
8. Create another story using the same template and assign it to the secondStory variable.
9. You should output your second story to the console using the message "Second story: [secondStory]".
*/

let adjective = "massive";
let noun = "dragon";
let verb = "angry";
let place = "cave";
let adjective2 = "gigantic";
let noun2 = "children";

let firstStory = "";
firstStory += "Once upon a time, there was a(n) " + adjective + " " + noun;
firstStory += " who loved to eat " + noun2 + ".";
firstStory += " The " + noun + " lived in a " + place + " and had ";
firstStory += adjective2 + " nostrils that blew fire when it was " + verb + ".";
console.log("First story: " + firstStory);

adjective = "mean";
noun = "witch";
verb = "hungry";
place = "old house";
adjective2 = "small";
noun2 = "men";

let secondStory = "";
secondStory += "Once upon a time, there was a(n) " + adjective + " " + noun;
secondStory += " who loved to eat " + noun2 + ".";
secondStory += " The " + noun + " lived in a " + place + " and had ";
secondStory +=
  adjective2 + " nostrils that blew fire when it was " + verb + ".";
console.log("Second story: " + secondStory);
