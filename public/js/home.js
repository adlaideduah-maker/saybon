document.addEventListener("DOMContentLoaded", () => {
  const teacher = document.getElementById("teacher-trigger");
  const overlay = document.getElementById("teacher-overlay");
  const audio = document.getElementById("intro-audio");
  const closeBtn = document.querySelector(".close-overlay");

  // OPEN CINEMATIC OVERLAY WHEN TEACHER IS CLICKED
  teacher.addEventListener("click", () => {
    overlay.classList.add("active");
    audio.currentTime = 0;
    audio.play();
  });

  // CLOSE OVERLAY
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
    audio.pause();
  });

  // BUTTON ROUTING (PLACEHOLDERS FOR NOW)
  document.getElementById("get-started").addEventListener("click", () => {
    window.location.href = "/start";
  });

  document.getElementById("login").addEventListener("click", () => {
    window.location.href = "/login";
  });
});
