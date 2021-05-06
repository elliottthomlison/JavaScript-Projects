const javascriptClock = {
  let hours = 24;
  
  init : function() {
    js.time = document.getElementById("clock");

  },

  updateTime : function() {

    //get all parts of the current time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    //concat them together into a string 
    const currentTime = `${hours}:${minutes}:${seconds}`;

    //pull the clock id from the html
    const myClock = document.getElementById('clock');

    //write the currentTime(string) to the clock div on the html via .innerHTML
    myClock.innerHTML = currentTime;

    //if statements to control for making sure there are always two digits 
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }

    //get time of the day (am or pm)
    if (hours >= 12 && hours < 24) { let timeOfDay = 'PM'; }
    else { let timeOfDay = 'AM'; }

    //convert hours from 24 hour time to 12 hour time
    if (hours > 12) { hours = hours - 12; }
    
    js.time.innerHTML = `${hours}:${minutes}:${seconds} ${timeOfDay}`;
  }
}