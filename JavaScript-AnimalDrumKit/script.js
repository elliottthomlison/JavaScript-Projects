  // Solution varies from version prescribed by Wes Bos
  function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.play();
    key.classList.add('playing');
  }

  window.addEventListener('keydown', playSound)

//Could use these at a later time but not now
//if (!audio) => handle null keys
//return;
//audio.currentTime = 0; => allow fast play