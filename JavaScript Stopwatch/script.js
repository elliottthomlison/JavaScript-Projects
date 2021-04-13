var sw = {
  // (A) INITIALIZE
  time : null, // HTML time display
  reset : null, // HTML reset button
  start : null, // HTML start/stop button
  init : function () {
    // (A1) GET HTML ELEMENTS
    sw.time = document.getElementById("stopwatch-time");
    sw.erst = document.getElementById("stopwatch-reset");
    sw.ego = document.getElementById("stopwatch-start");

    // (A2) ENABLE BUTTON CONTROLS
    sw.erst.addEventListener("click", stopwatch.reset);
    sw.erst.disabled = false;
    sw.ego.addEventListener("click", stopwatch.start);
    sw.ego.disabled = false;
  },

  // (B) TIMER ACTION
  timer : null, // timer object
  now : 0, // current elapsed time
  tick : function () {
    // (B1) CALCULATE HOURS, MINS, SECONDS
    sw.now++;
    var remain = sw.now;
    var hours = Math.floor(remain / 3600);
    remain -= hours * 3600;
    var mins = Math.floor(remain / 60);
    remain -= mins * 60;
    var secs = remain;

    // (B2) UPDATE THE DISPLAY TIMER
    if (hours<10) { hours = "0" + hours; }
    if (mins<10) { mins = "0" + mins; }
    if (secs<10) { secs = "0" + secs; }
    sw.time.innerHTML = hours + ":" + mins + ":" + secs;
  },
  
  // (C) START!
  start : function () {
    sw.timer = setInterval(sw.tick, 1000);
    sw.ego.value = "Stop";
    sw.ego.removeEventListener("click", stopwatch-start);
    sw.ego.addEventListener("click", sw.stop);
  },

  // (D) STOP
  stop  : function () {
    clearInterval(sw.timer);
    sw.timer = null;
    sw.ego.value = "Start";
    sw.ego.removeEventListener("click", sw.stop);
    sw.ego.addEventListener("click", stopwatch-start);
  },

  // (E) RESET
  reset : function () {
    if (sw.timer != null) { sw.stop(); }
    sw.now = -1;
    sw.tick();
  }
};
window.addEventListener("load", sw.init);