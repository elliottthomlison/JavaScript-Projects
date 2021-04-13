function updateTime() {

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
}