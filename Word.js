var Letter = require("./letter.js");

var Word = function () {
	this.wordArr = [];
	this.addWord = function(character) {
		this.wordArr.push(new Letter(character));
		console.log("word added");
		console.log(wordArr);
	};
	this.returnWord = function () {
		console.log(wordArr.join(''));
	};

};

module.exports = Word;

var purple = new Word ();

purple.addWord("O");




