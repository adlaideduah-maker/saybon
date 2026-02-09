const teacher = document.getElementById("teacherCircle");
const audio = document.getElementById("introAudio");
const overlay = document.getElementById("offerOverlay");
const pills = document.querySelectorAll(".pill");

let started = false;

/* =====================================================
   TEACHER TAP — CINEMATIC OVERLAY (28s)
===================================================== */

teacher.addEventListener("click", () => {
  if (started) return;
  started = true;

  // Reset any previous state
  overlay.classList.remove("hidden", "closing");
  pills.forEach(p => p.classList.remove("show"));

  // 1️⃣ Show blank overlay first
  requestAnimationFrame(() => {
    overlay.classList.add("active");
  });

  // Play audio
  audio.currentTime = 0;
  audio.play();

  // 2️⃣ Start closing sequence near the end (25s)
  setTimeout(() => {
    overlay.classList.add("closing");
  }, 25000);

  // 3️⃣ Fully hide at 28 seconds
  setTimeout(() => {
    overlay.classList.remove("active", "closing");
    overlay.classList.add("hidden");

    // Reset pills for next tap
    pills.forEach(p => p.classList.remove("show"));

    started = false;
  }, 28000);
});

/* =====================================================
   BUTTONS — FIXED (NOW THEY WORK)
===================================================== */

// GET STARTED → loader → why page
document.getElementById("startBtn").onclick = () => {
  sessionStorage.setItem("saybon_next", "/why.html");
  window.location.href = "/loader.html";
};

// LOGIN → login page
document.getElementById("loginBtn").onclick = () => {
  window.location.href = "/auth/login.html";
};
