//variables
const board = document.getElementById('board');
const cellElements = document.querySelectorAll('[data-cell]');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageElement = document.querySelector('[data-winning-message-text');

let blueTurn;
const blue_class = 'blue'
const red_class = 'red'