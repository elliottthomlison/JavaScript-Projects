//variables
const board = document.getElementById('board');
const cellElements = document.querySelectorAll('[data-cell]');
let circleTurn
const x_class = 'x'
const o_class = 'o'


cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true })
})

function handleClick(e){
  const cell = e.target 
  const currentClass = circleTurn ? o_class : x_class

  placeMark(cell, currentClass)

  setBoardHoverClass() 
}

function placeMark(cell, currentClass){
  cell.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn
}

function setBoardHoverClass() {
  board.classList.remove(x_class)
  board.classList.remove(o_class)
  if (circleTurn) {
    board.classList.add(o_class)
  } else {
    board.classList.add(x_class)
  }
}