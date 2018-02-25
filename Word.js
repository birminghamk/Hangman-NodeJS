var Letter = require("./Letter.js");

var Word = function (wordArr) {
	this.wordArr = [];
	this.addWord = function(character) {
		this.wordArr.push(new Letter(character));
		
	};
	this.returnWord = function (returnLetter) {
		console.log(wordArr.join(''));
		
	};


};

var firstWord = new Word (["O", "D", "E", "S", "Z", "A"]);

firstWord.returnWord();

module.exports = Word;


