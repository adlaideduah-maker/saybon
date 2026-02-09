const teacher = document.getElementById("teacher");
const overlay = document.getElementById("cinematicOverlay");
const audio = document.getElementById("introAudio");

teacher.addEventListener("click", () => {
  overlay.style.display = "block";
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    overlay.style.display = "none;
  }, 5000);
});
