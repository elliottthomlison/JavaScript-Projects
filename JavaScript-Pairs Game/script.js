const sw = {
  // (A) INITIALIZE THE STARTING VALUES
  etime : null, // HTML time display
  erst : null, // HTML reset button
  ego : null, // HTML start/stop button

  init : function () {
    // (A1) GET/PULL HTML ELEMENTS FROM INDEX.HTML
    sw.etime = document.getElementById("sw-time");
    sw.erst = document.getElementById("sw-rst");
    sw.ego = document.getElementById("sw-go");

    // (A2) ENABLE BUTTON CONTROLS 
    sw.erst.addEventListener("click", sw.reset);
    sw.erst.disabled = false;

    sw.ego.addEventListener("click", sw.start);
    sw.ego.disabled = false;
  },

  // (B) TIMER ACTION
  timer : null, // timer object
  now : 0, // starting elapsed time that is displayed 

  tick : function () {
    // (B1) CALCULATE HOURS, MINS, SECONDS
    sw.now++; //the counting process from 0 (referencing line 23)
    let remain = sw.now;
    console.log(remain)
    
    let hours = Math.floor(remain / 3600);
    remain -= hours * 3600;
    console.log(hours)

    let mins = Math.floor(remain / 60);
    remain -= mins * 60;
    console.log(mins)

    let secs = remain;

    // (B2) UPDATE THE DISPLAY TIMER WITH A 0
    if (hours < 10) { hours = "0" + hours; }
    if (mins < 10) { mins = "0" + mins; }
    if (secs < 10) { secs = "0" + secs; }
    sw.etime.innerHTML = `${hours}:${mins}:${secs}`;
  },
  
  // (C) START + ADJUSTED SO THAT STOP APPEARS AFTER START IS PRESSED 
  start : function () {
    sw.timer = setInterval(sw.tick, 10);
    sw.ego.value = "Stop";
    sw.ego.removeEventListener("click", sw.start);
    sw.ego.addEventListener("click", sw.stop);
  },

  // (D) STOP + ADJUSTED SO THAT START APPEARS AFTER STOP IS PRESSED 
  stop  : function () {
    clearInterval(sw.timer);
    sw.timer = null;
    sw.ego.value = "Start";
    sw.ego.removeEventListener("click", sw.stop);
    sw.ego.addEventListener("click", sw.start);
  },

  // (E) RESET
  reset : function () {
    if (sw.timer != null) { sw.stop(); }
    sw.now = -1;
    sw.tick();
  }
};
window.addEventListener("load", sw.init);