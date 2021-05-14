// function answers() {
// document.getElementsByClassName("abc").onclick 
//   this.disabled = true;
// }

function unclickable (button) {
  button.disabled = true;
}

//trying to change the color of the letter based on a click event
// document.getElementById('aaa').onclick = changeColor;   

//     function changeColor() {
//         document.body.style.color = "purple";
//         return false;
//     }   

//words that will be part of the possible answers
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
  alert(answer)
}
randomWord();