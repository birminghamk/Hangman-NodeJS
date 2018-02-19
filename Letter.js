var Letter = function(char, guess) {
			this.character = character;
			this.guess = false;
			this.returnLetter = function() {
				if(this.character == ' ') {
					this.guess = true;
				} else (this.guess = false) {
					return ' _ ';
				}
			}

			this.checkLetter = function (userCharacter) {
				if (character === userCharacter) {
					this.guess = true;
				} else {
					this.guess = false;
				}
			} 

		} // END LETTER CONSTRUCTOR

//export to use in word.js
module.exports = Letter;