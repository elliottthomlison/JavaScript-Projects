let answers = [
  'apple',
  'bananas',
  'cookie',
  'dutch',
  'elephant',
  'fingers',
  'goosebumps'
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = answers[Math.floor(Math.random() * answers.length)];
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

//the indexOf portion is to check if it exists because -1 = not existing and anything greater than 0 will 'exist'
function guessedWord() {
  wordStatus = answer.split('').map(letter => guessed.indexOf(letter >= 0 ? letter: ' _ ')).join('')

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}


randomWord();
generateButtons();
guessedWord()