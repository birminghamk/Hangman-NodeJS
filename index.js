inquirer = require("inquirer");
var Word = require("./Word.js");

inquirer.
	prompt([
	{
		type: "confirm",
		message: "Would you like to play Hangman?",
		name: "start",
		default: true
	},
	{
		type: "input",
		message: "Guess a Letter!",
		name: "userGuess"
	},




	]).then(function(user){

		if (user.start) {
			console.log("Let's Get Started!")
		} else {
			console.log("Come back soon!");
		}




	})