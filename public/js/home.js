// ================================
// SAYBON HOMEPAGE — CINEMATIC OVERLAY
// (MATCHES YOUR NEW DESIGN EXACTLY)
// ================================

const teacher = document.getElementById("teacher");
const audio = document.getElementById("introAudio");
const overlay = document.getElementById("offerOverlay");
const pills = document.querySelectorAll(".pill");

let isPlaying = false;

teacher.addEventListener("click", () => {
  if (isPlaying) return;
  isPlaying = true;

  // 1) Fade in dark blurry overlay slowly
  overlay.classList.remove("hidden");

  requestAnimationFrame(() => {
    overlay.classList.add("active");
  });

  // 2) Start music
  audio.currentTime = 0;
  audio.play().catch(() => {});

  // 3) Reveal title first (small delay for drama)
  const title = overlay.querySelector("h2");
  title.style.opacity = "0";
  title.style.transform = "translateY(20px)";

  setTimeout(() => {
    title.style.transition = "all 0.9s ease";
    title.style.opacity = "1";
    title.style.transform = "translateY(0)";
  }, 500);

  // 4) Reveal pills one-by-one (slow cinematic timing)
  pills.forEach((pill, index) => {
    pill.classList.remove("show");
    pill.style.opacity = "0";
    pill.style.transform = "translateY(20px)";

    setTimeout(() => {
      pill.style.transition = "all 0.9s ease";
      pill.style.opacity = "1";
      pill.style.transform = "translateY(0)";
      pill.classList.add("show");
    }, 1800 + index * 1600); // slow, elegant reveal
  });

  // 5) After last pill + 3s → everything fades out bottom-up
  const total
