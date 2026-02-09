const teacher = document.getElementById("teacherCircle");
const audio = document.getElementById("introAudio");
const overlay = document.getElementById("offerOverlay");
const pills = document.querySelectorAll(".pill-card");

let started = false;

teacher.addEventListener("click", () => {
  if (started) return;
  started = true;

  overlay.classList.add("active");
  audio.currentTime = 0;
  audio.play();

  pills.forEach((pill, index) => {
    setTimeout(() => {
      pill.classList.add("show");
    }, index * 1200);
  });

  audio.onended = () => {
    overlay.classList.remove("active");
    pills.forEach(p => p.classList.remove("show"));
    started = false;
  };
});

document.getElementById("startBtn").onclick = () => {
  sessionStorage.setItem("saybon_next", "/why.html");
  window.location.href = "/loader.html";
};

document.getElementById("loginBtn").onclick = () => {
  window.location.href = "/auth/login.html";
};

document.getElementById("backHomeBtn").onclick = () => {
  overlay.classList.remove("active");
  audio.pause();
  started = false;
};

document.getElementById("revealBtn").onclick = () => {
  window.location.href = "/reveal/";
};

document.getElementById("settingsBtn").onclick = () => {
  window.location.href = "/admin/";
};
