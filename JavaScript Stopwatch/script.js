window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendMinutes = document.getElementById("minutes")
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
       clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
    minutes = "00";
        tens = "00";
            seconds = "00";
    appendMinutes.innerHTML = minutes;
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
     
     
    
    function startTimer () {
      minutes++

      if(minutes <= 9){
        appendMinutes.innerHTML = "0" + minutes;
      }

      if(minutes > 9){
        appendMinutes.innerHTML = minutes;
      }

      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }

  }