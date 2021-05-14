function myFunction() {
  alert("WARNING: PHOTOSENSITIVITY/EPILEPSY SEIZURES: If you, the user, has an epileptic condition or has had seizures of any kind, consult your physician before playing. IMMEDIATELY DISCONTINUE use and consult your physician before resuming gameplay.");
}
myFunction()

let lastColor;
function getRandomColor(rememberLast = true) {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    if (rememberLast) {
      lastColor = color
    } 
    return color;
}

function changeColor() {
  document.getElementById("initial-color").style.backgroundColor = getRandomColor();
}

function startGame() {
  document.getElementById("initial-color").style.display
  document.getElementById("startButton").style.display = 'none'
  document.getElementById("instructions").style.display = 'none'
  //start = how quickly it changes
  let start = setInterval(changeColor, 2000)
  setTimeout(stop_interval, 1000);
}
startGame()

//If I want to create a version that stops changing color momentarily *before* disappearing then I would use these methods
//let start = setInterval(changeColor,200)
//setTimeout(stop_interval, 1000);

//how long it goes for
function stop_interval() {
  clearInterval(startGame());
  setTimeout (function() {
    document.getElementById("initial-color").style.display = 'none'}, 
    1000); 
}

//create a variable to find the button that is going to be the 'correct' + store as a variable
// let correct;
// const correctNumber = function() {
//   for(let i = 1; i < 6; i++){
//     Math.floor(Math.random() * 6) + 1;
//   }
//   console.log(correct)
// }
// console.log(correctNumber())

// const numberAssignment = function() {

// }
//attach the *correct* number to the lastColor from getRandomColor
// let correct = lastColor

//whatever ISNT the correct number will be random color 
//loop through that variable six times and check if i is equal to that random number 
  //if it is then it should be the lastcolor 
  //if it is false then it should call random color on it 

// const colorAssignment = function() {
//   for(let i = 1; i < )
// }