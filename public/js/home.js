const teacher = document.getElementById("teacherCircle");
const audio = document.getElementById("introAudio");
const overlay = document.getElementById("offerOverlay");
const pills = document.querySelectorAll(".pill");

let started = false;

teacher.addEventListener("click", () => {
  if (started) return;
  started = true;

  // 1️⃣ START WITH A BLANK OVERLAY
  overlay.classList.remove("hidden");

  requestAnimationFrame(() => {
    overlay.classList.add("active");
  });

  // Start music
  audio.currentTime = 0;
  audio.play();

  // 2️⃣ SHOW PILLS ONE-BY-ONE (matches CSS timing)
  pills.forEach((pill) => {
    pill.classList.remove("show"); // reset
  });

  // 3️⃣ DO NOT CLOSE UNTIL 28 SECONDS
  setTimeout(() => {
    overlay.classList.add("closing");
  }, 25000); // start closing at 25s

  setTimeout(() => {
    overlay.classList.remove("active", "closing");
    overlay.classList.add("hidden");

    // reset pills for next tap
    pills.forEach(p => p.classList.remove("show"));

    started = false;
  }, 28000); // FULL 28 SECONDS
});

document.getElementById("startBtn").onclick = () => {
  sessionStorage.setItem("saybon_next", "/why.html");
  window.location.href = "/loader.html";
};

document.getElementById("loginBtn").onclick = () => {
  window.location.href = "/auth/login.html";
};
