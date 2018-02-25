inquirer = require("inquirer");
var Word = require("./Word.js");

inquirer.
	prompt(
	{
		type: "confirm",
		message: "Would you like to play Hangman?",
		name: "start",
		default: true
	}
	).then(function(user){

		if (user.start) {
			console.log("\nLet's Get Started!\n")
			playGame();
		} else {
			console.log("Come back soon!");
			start();
		}

	})

function playGame() {
	inquirer.
		prompt(
		{
			type: "input",
			message: "Guess a letter!",
			name: "guess"
		}
		).then(function(userGuess){
			




		})



} //END PLAY GAME FUNCTION