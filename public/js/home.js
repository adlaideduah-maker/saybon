const teacher = document.getElementById("teacher");
const audio = document.getElementById("introAudio");
const overlay = document.getElementById("offerOverlay");
const pills = document.querySelectorAll(".pill");

let started = false;

/* =====================================================
   TEACHER TAP — CINEMATIC FLOW (FIXED EXIT)
===================================================== */

teacher.addEventListener("click", () => {
  if (started) return;
  started = true;

  // HARD RESET
  overlay.classList.remove("hidden", "active", "closing");
  overlay.style.pointerEvents = "auto";

  pills.forEach(p => p.classList.remove("show"));

  // 1️⃣ Blank overlay fades in first
  requestAnimationFrame(() => {
    overlay.classList.add("active");
  });

  // Play audio
  audio.currentTime = 0;
  audio.play().catch(() => {
    console.log("Autoplay blocked, user tap should allow playback");
  });

  // 2️⃣ START EXIT EXACTLY 2 SECONDS AFTER LAST PILL LANDS
  // Last pill lands at ~25s → start closing at 27s
  setTimeout(() => {
    overlay.classList.add("closing");
  }, 27000);

  // 3️⃣ FULL RESET (after 2s exit animation → 29s total)
  setTimeout(() => {
    overlay.classList.remove("active", "closing");
    overlay.classList.add("hidden");

    overlay.style.pointerEvents = "none";

    pills.forEach(p => p.classList.remove("show"));

    started = false;
  }, 29000);
});

/* =====================================================
   BUTTONS — GUARANTEED TO WORK
===================================================== */

// GET STARTED → loader → why page
document.getElementById("startBtn").onclick = (e) => {
  e.stopPropagation();
  sessionStorage.setItem("saybon_next", "/why.html");
  window.location.href = "/loader.html";
};

// LOGIN → login page
document.getElementById("loginBtn").onclick = (e) => {
  e.stopPropagation();
  window.location.href = "/auth/login.html";
};

// SETTINGS → admin entry
document.getElementById("settingsBtn").onclick = (e) => {
  e.stopPropagation();
  window.location.href = "/admin/";
};
