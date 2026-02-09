const teacher = document.getElementById("teacher");
const audio = document.getElementById("introAudio");
const overlay = document.getElementById("offerOverlay");
const pills = document.querySelectorAll(".pill");

let started = false;

/* =====================================================
   TEACHER TAP — CINEMATIC 25s OVERLAY (FINAL)
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

  /**
   * TIMING MAP (25 SECONDS TOTAL)
   * --------------------------------
   * 0–3s   : Blank overlay fades in
   * 3–6s   : Title appears
   * 7–19s  : Pills appear one by one
   * 21s    : Begin exit (2s after last pill lands)
   * 25s    : Fully reset & close
   */

  // 2️⃣ START EXIT at 21s (2 seconds after last pill finishes)
  setTimeout(() => {
    overlay.classList.add("closing");
  }, 21000);

  // 3️⃣ FULL RESET at 25s
  setTimeout(() => {
    overlay.classList.remove("active", "closing");
    overlay.classList.add("hidden");

    overlay.style.pointerEvents = "none";

    pills.forEach(p => p.classList.remove("show"));

    started = false;
  }, 25000);
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
