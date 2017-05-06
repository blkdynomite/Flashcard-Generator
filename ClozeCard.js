// module.exports = ClozeCard;



  this.printCard = function() {
    console.log("Question: " + this.question + "\nAnswer: " + this.answer);
  };


// arrays used to contain all of our player objects
var card = [];

// recursive function which will allow the user to create 5 starting players and
// 3 substitution players and then will print each players stats afterwards
var createFlashcard = function() {
  // if the length of the team array is 8 or higher, no more questions will be asked
  if (card.length) {
    console.log("New Flashcard");
    inquirer.prompt([
      {
        name: "question",
        message: "Create a new question: "
      }, {
        name: "answer",
        message: "Create a new answer: "
      }
    ]).then(function(new) {
      // runs the constructor and places the new player object into the variable
      // player. turns the offense and defense variables into integers as well with parseInt
      var player = new Flashcard(answers.question, answers.answer);
      // adds a player to the starters array if there are less than five player
      // objects in it. otherwise adds the newest player object to the subs array
      if (card.length < 5) {
        card.push(player);
        console.log(player.name + " added to the questions");
      }
      else {
        subs.push(player);
        console.log(player.name + " added to the answers");
      }
      // runs the createPlayer function once more
      createPlayer();
    });
  }
  else {
    // starts first round
    playGame(0);
  }
};

    inquirer.prompt({
      name: "again",
      type: "confirm",
      message: "Create a new card?"
    }).then(function(answer) {
      if (answer.again === true) {
        // starts new match with the same players
        playGame(0);
      }
      else {
        console.log("return soon.");
      }
    });
  }
}

// calls the function createPlayer() to start the code
createFlashcard();


        