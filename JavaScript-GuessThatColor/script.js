function myFunction() {
  alert("WARNING: PHOTOSENSITIVITY/EPILEPSY SEIZURES: If you, the user, has an epileptic condition or has had seizures of any kind, consult your physician before playing. IMMEDIATELY DISCONTINUE use and consult your physician before resuming gameplay.");
}
myFunction()

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
  document.getElementById("initial-color").style.backgroundColor = getRandomColor();
}

function startGame() {
  document.getElementById("initial-color").style.display
  document.getElementById("startButton").style.display = 'none'
  let start = setInterval(changeColor, 200)
  setTimeout(stop_interval, 1000);
}
startGame()

//If I want to create a version that stops changing color momentarily *before* disappearing then I would use these methods
//let start = setInterval(changeColor,200)
//setTimeout(stop_interval, 1000);

function stop_interval() {
  clearInterval(startGame());
  setTimeout (function() {
    document.getElementById("initial-color").style.display = 'none'}, 
    1000); 
}