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
}