  // Solution varies from version prescribed by Wes Bos
  function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const pads = document.querySelector(`.pads[data-key="${e.keyCode}"]`);
    audio.play();
    pads.classList.add('playing');
  }

  function endSound (e) {
    const pads = document.querySelector(`.pads[data-key="${e.keyCode}"]`);
    if(!pads)
      return;
    pads.classList.remove('playing');
  }

  window.addEventListener('keydown', playSound)
  window.addEventListener('keyup', endSound)

//Could use these at a later time but not now
//if (!audio) => handle null keys
//return;
//audio.currentTime = 0; => allow fast play
