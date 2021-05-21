//variables
const board = document.getElementById('board');
const cellElements = document.querySelectorAll('[data-cell]');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageElement = document.querySelector('[data-winning-message-text');

let blueTurn;
const blue_class = 'blue'
const red_class = 'red'

const winningCombinations = [
  comebacklater
]

function startGame() {

}

//apply one click allowance on each cell
cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true})
});

function handleClick() {

}