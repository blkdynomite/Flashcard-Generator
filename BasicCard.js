// dependency for inquirer npm package
var inquirer = require("inquirer");
// constructor function for creating flashcard questions
function flashCard(question, answer) {
  this.question = question;
  this.answer = answer;
};
var first = new flashCard("What year was the birth of the US?", "1776") 
var second = new flashCard ("How many colonies where there during the Revolution?", "13")
var third = new flashCard ("What was the last state to seceed?", "North Carolina")
var fourth = new flashCard ("Who was the General of the Confederate military?", "Robert E. Lee")
var fifth = new flashCard ("Who was the General of the Revolutionary Forces?", "George Washington")

function gameStart() {
inquirer.prompt([
{
    name: "first",
    message: first.question
},
]).then(function(answers) {
    
    if (answers.first.toLowerCase() === first.answer.toLowerCase()) {
        console.log("Well done.")
        console.log("\n");
    }
    else {
        console.log("Try again.");
        console.log("\n");
    };
inquirer.prompt([
    {
    name: "second",
    message: second.question
},
]).then(function(answers) {
    if (answers.second.toLowerCase() === second.answer.toLowerCase()) {
        console.log("Correct.")
        console.log("\n");
    }
    else {
        console.log("Incorrect.")
        console.log("\n");
    };
inquirer.prompt([
{
    name: "third",
    message: third.question
},
]).then(function(answers) {
    if (answers.third.toLowerCase() === third.answer.toLowerCase()) {
        console.log("Nice, well done.")
        console.log("\n");
    }
    else {
        console.log("Better luck next time.")
        console.log("\n");
    };
inquirer.prompt([
{
    name: "fourth",
    message: fourth.question
},
]).then(function(answers) {
    if (answers.fourth.toLowerCase() === fourth.answer.toLowerCase()) {
        console.log("Gold star for you.")
        console.log("\n");
    }
    else {
        console.log("Nope :(")
        console.log("\n");
    };
inquirer.prompt([
{
    name: "fifth",
    message: fifth.question
},
]).then(function(answers) {
    if (answers.fifth.toLowerCase() === fifth.answer.toLowerCase()) {
        console.log("Excellent")
        console.log("\n");
    }
    else {
        console.log("Sorry, that's incorrect")
        console.log("\n");
    };
    inquirer.prompt([
    {
        name: "try_again",
        type: "confirm",
        message: "Would you like to get your honor back?",
        default: false
    },
    ]).then(function(answers) {
        if (answers.try_again === true) {
            console.log("\n");
            console.log("Do or do not. There is no try.");
            console.log("\n");
            gameStart();
        }
        else {
            console.log("Play again next time.")
        };
});
});
});
}); 
});
});
};
gameStart();
