let programming_languages = [
	"cat",
	"dog",
	"snake",
	"bird",
	"rabbit",
	"html",
	"css",
	"c",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
	"ruby"
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function keyboardAppear() {
  generateButtons();
  document.getElementById('maxWrong').innerHTML = maxWrong;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './images/0.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();