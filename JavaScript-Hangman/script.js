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


randomWord();
generateButtons()