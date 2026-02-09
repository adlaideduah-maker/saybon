// ================================
// SAYBON HOMEPAGE — WIRED + MOBILE SAFE
// ================================

const teacher = document.getElementById("teacher");
const audio = document.getElementById("introAudio");
const overlay = document.getElementById("offerOverlay");
const pills = document.querySelectorAll(".pill");

let isPlaying = false;

// ---- TEACHER TAP → CINEMATIC OVERLAY ----
teacher.addEventListener("click", () => {
  if (isPlaying) return;
  isPlaying = true;

  overlay.classList.remove("hidden");

  requestAnimationFrame(() => {
    overlay.classList.add("active");
  });

  audio.currentTime = 0;
  audio.play().catch(() => {});

  const title = overlay.querySelector("h2");
  title.style.opacity = "0";
  title.style.transform = "translateY(20px)";

  setTimeout(() => {
    title.style.transition = "all 0.9s ease";
    title.style.opacity = "1";
    title.style.transform = "translateY(0)";
  }, 500);

  pills.forEach((pill, index) => {
    pill.style.opacity = "0";
    pill.style.transform = "translateY(20px)";

    setTimeout(() => {
      pill.style.transition = "all 0.9s ease";
      pill.style.opacity = "1";
      pill.style.transform = "translateY(0)";
    }, 1800 + index * 1600);
  });

  const totalRevealTime = 1800 + (pills.length - 1) * 1600 + 3000;

  setTimeout(() => {
    const reversed = Array.from(pills).reverse();

    reversed.forEach((pill, i) => {
      setTimeout(() => {
        pill.style.opacity = "0";
        pill.style.transform = "translateY(20px)";
      }, i * 200);
    });

    setTimeout(() => {
      title.style.opacity = "0";
      title.style.transform = "translateY(20px)";
    }, 800);

    setTimeout(() => {
      overlay.classList.remove("active");

      setTimeout(() => {
        overlay.classList.add("hidden");
        isPlaying = false;
      }, 700);
    }, 1200);

  }, totalRevealTime);
});

// ---- BUTTON ROUTING (NOW FULLY WIRED) ----

// GET STARTED → WHY → LOADER
document.getElementById("startBtn").onclick = () => {
  sessionStorage.setItem("saybon_next", "/why.html");
  window.location.href = "/loader.html";
};

// LOGIN → AUTH
document.getElementById("loginBtn").onclick = () => {
  window.location.href = "/auth/login.html";
};

// SETTINGS (ADMIN ENTRY)
document.getElementById("settingsBtn").onclick = () => {
  window.location.href = "/admin/index.html";
};
