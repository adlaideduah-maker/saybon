const teacher = document.getElementById("teacher"); // ✅ FIXED
const audio = document.getElementById("introAudio");
const overlay = document.getElementById("offerOverlay");
const pills = document.querySelectorAll(".pill");

let started = false;

/* =====================================================
   TEACHER TAP — CINEMATIC 28s OVERLAY (STABLE)
===================================================== */

teacher.addEventListener("click", () => {
  if (started) return;
  started = true;

  // HARD RESET (prevents invisible overlay issues)
  overlay.classList.remove("hidden", "active", "closing");
  overlay.style.pointerEvents = "auto";

  pills.forEach(p => p.classList.remove("show"));

  // 1️⃣ Blank overlay fades in first
  requestAnimationFrame(() => {
    overlay.classList.add("active");
  });

  // Restart and play audio
  audio.currentTime = 0;
  audio.play().catch(() => {
    console.log("Audio playback started via user tap.");
  });

  // 2️⃣ Start closing phase at 25s
  setTimeout(() => {
    overlay.classList.add("closing");
  }, 25000);

  // 3️⃣ FULL RESET at 28s — RELEASES BUTTONS
  setTimeout(() => {
    overlay.classList.remove("active", "closing");
    overlay.classList.add("hidden");

    // CRITICAL FIX — unblock the page
    overlay.style.pointerEvents = "none";

    pills.forEach(p => p.classList.remove("show"));
    started = false;
  }, 28000);
});

/* =====================================================
   BUTTONS — GUARANTEED ROUTING
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
