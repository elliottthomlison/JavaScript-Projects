//variables
const board = document.getElementById('board');
const cellElements = document.querySelectorAll('[data-cell]');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.querySelector('[data-winning-message-text');

let blueTurn;
const blue_class = 'blue'
const red_class = 'red'

// const winningCombinations = [
//   comebacklater
// ]

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

  // var divItems = document.getElementsByClassName("cell");
  
  function selected(item) {
    if (blue_class){
      item.style.backgroundColor = 'blue'
    } else {
      item.style.backgroundColor = 'red'
    }
  }
  
  // function clear() {
  //     for(var i=0; i < cellElements.length; i++) {
  //         var item = cellElements[i];
  //         item.style.backgroundColor = 'white';
  //     }
  // }

function handleClick(e) {
  const cell = e.target 
  const currentClass = blueTurn ? blue_class : red_class

  onclick=selected(this)

  placeMark(cell, currentClass)

  // if (checkWin(currentClass)) {
  //   endGame(false)
  // } else if (isDraw()) {
  //   endGame(true)
  // } else {
  //   swapTurns()
  //   setBoardHoverClass()
  // } 
}

function placeMark(cell, currentClass){
  cell.classList.add(currentClass)
}

function swapTurns() {
  blue_class = !blue_class
}