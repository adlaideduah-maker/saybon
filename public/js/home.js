const teacher = document.getElementById("teacherCircle");
const audio = document.getElementById("introAudio");
const overlay = document.getElementById("offerOverlay");
const pills = document.querySelectorAll(".pill");

let started = false;

teacher.addEventListener("click", () => {
  if (started) return;
  started = true;

  overlay.classList.remove("hidden");

  requestAnimationFrame(() => {
    overlay.classList.add("active");
  });

  audio.play();

  pills.forEach((pill, index) => {
    setTimeout(() => {
      pill.classList.add("show");
    }, index * 4200);
  });

  audio.onended = () => {
    overlay.classList.remove("active");

    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 650);

    pills.forEach(p => p.classList.remove("show"));
    started = false;
  };
});

// ✅ START PATH → WHY → LOADER (LOCKED)
document.getElementById("startBtn").onclick = () => {
  sessionStorage.setItem("saybon_next", "/why.html");
  window.location.href = "/loader.html";
};

// ✅ LOGIN → DIRECT TO LOGIN PAGE
document.getElementById("loginBtn").onclick = () => {
  window.location.href = "/auth/login.html";
};
