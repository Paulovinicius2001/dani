const bgm = document.getElementById("bgm");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

playBtn.addEventListener("click", async () => {
  try {
    await bgm.play();
    playBtn.textContent = "🔊 Tocando...";
  } catch (e) {
    alert("Não consegui tocar o áudio. Confere se o arquivo musica.mp3 está em assets/.");
  }
});

pauseBtn.addEventListener("click", () => {
  bgm.pause();
  playBtn.textContent = "▶️ Tocar música";
});
