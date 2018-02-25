var Letter = function(character) {
			this.character = character;
			this.guessed = false;

			this.returnLetter = function() {
				if(this.guessed == false) {
					console.log('_');
				} else  {
					console.log(this.character);
				}
			}

			this.checkLetter = function (userChar) {
				userChar = "";
				if (character == userChar) {
					this.guessed = true;
				// 	console.log(this.guessed);
				// 	console.log(userChar);
				// 	console.log(this.character);
				} 
			} 

} // END LETTER CONSTRUCTOR

//export to use in word.js
module.exports = Letter;

// var O = new Letter("O");

// O.checkLetter();




