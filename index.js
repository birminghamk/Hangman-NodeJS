inquirer = require("inquirer");

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




	]).then(function(inquirerResponse){





	})