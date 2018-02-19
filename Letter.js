var letter = function(character, guess) {
			this.character = character;
			this.guess = false;
			this.returnLetter = function(e) {
				if(this.character == ' ') {
					this.guess = true;
				}
				if(this.guess = false) {
					return ' _ ';
				} else {
					return this.letter
				}

			}

			this.

		}

//export to use in word.js
module.exports = letter;