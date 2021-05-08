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

let start = setInterval(changeColor,200)
setTimeout(stop_interval, 1000);

function stop_interval() {
  clearInterval(start);
  setTimeout (function() {
    document.getElementById("initial-color").style.display = 'none'}, 
    1001); 
}