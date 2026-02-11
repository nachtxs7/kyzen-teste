const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

  music.volume = 0.15; // volume baixo (recomendado)

  btn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      btn.textContent = "🔊 Tocando";
    } else {
      music.pause();
      btn.textContent = "🔇 Pausado";
    }
  });