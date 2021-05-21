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

startGame();

function startGame() {
  blueTurn = false;
  cellElements.forEach(cell => {
    cell.classList.remove(blue_class);
    cell.classList.remove(red_class);
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  winningMessageElement.classList.remove('show')
}

//apply one click allowance on each cell
cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true})
});

function handleClick() {

}