// function yourTurn() {
//   document.getElementsByClassName('XO').innerHTML = "X";
// }

function yourTurn() {
  var elem = document.getElementsByClassName("XO")
  // if (elem.value=="X") elem.value = "O";
  // else elem.value = "X";
  elem.value = 'X'
  elem.innerHTML = 'O'
}

function change( el ) {
    if ( el.value === "X" )
        el.value = "O";
    // else if ( el.value === "O")
    //     el.value = "X";
    else 
        el.value = "X"
}

// document.querySelector('#test').textContent = "X";

//create a hover + push effect

