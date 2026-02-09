const teacher = document.getElementById("teacherCircle");
const audio = document.getElementById("introAudio");
const overlay = document.getElementById("offerOverlay");
const pills = document.querySelectorAll(".pill");

let started = false;

/* =====================================================
   TEACHER TAP — CINEMATIC 28s OVERLAY (FIXED)
===================================================== */

teacher.addEventListener("click", () => {
  if (started) return;
  started = true;

  // HARD RESET (critical — this was your issue)
  overlay.classList.remove("hidden", "active", "closing");
  overlay.style.pointerEvents = "auto";   // enable during animation

  pills.forEach(p => p.classList.remove("show"));

  // 1️⃣ Show blank overlay first (slow fade)
  requestAnimationFrame(() => {
    overlay.classList.add("active");
  });

  // Play audio from start
  audio.currentTime = 0;
  audio.play().catch(() => {
    console.log("Autoplay blocked, user tap should allow playback");
  });

  // 2️⃣ Begin closing sequence at 25s
  setTimeout(() => {
    overlay.classList.add("closing");
  }, 25000);

  // 3️⃣ FULL RESET at 28s — THIS IS THE KEY FIX
  setTimeout(() => {
    overlay.classList.remove("active", "closing");
    overlay.classList.add("hidden");

    // CRITICAL: completely remove overlay interaction
    overlay.style.pointerEvents = "none";

    // Reset pills for next tap
    pills.forEach(p => p.classList.remove("show"));

    started = false;
  }, 28000);
});

/* =====================================================
   BUTTONS — GUARANTEED TO WORK
===================================================== */

// GET STARTED → loader → why page
document.getElementById("startBtn").onclick = (e) => {
  e.stopPropagation(); // prevents overlay interference
  sessionStorage.setItem("saybon_next", "/why.html");
  window.location.href = "/loader.html";
};

// LOGIN → login page
document.getElementById("loginBtn").onclick = (e) => {
  e.stopPropagation();
  window.location.href = "/auth/login.html";
};
