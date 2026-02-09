document.addEventListener("DOMContentLoaded", () => {
  const teacher = document.getElementById("teacherTrigger");
  const overlay = document.getElementById("cinematicOverlay");
  const getStarted = document.getElementById("getStartedBtn");
  const login = document.getElementById("loginBtn");
  const settings = document.getElementById("settingsBtn");

  // Cinematic teacher tap
  teacher.addEventListener("click", () => {
    overlay.classList.add("active");

    setTimeout(() => {
      window.location.href = "/start.html";
    }, 1200);
  });

  // Buttons
  getStarted.addEventListener("click", () => {
    window.location.href = "/start.html";
  });

  login.addEventListener("click", () => {
    window.location.href = "/auth/login.html";
  });

  // Settings (Admin Entry)
  settings.addEventListener("click", () => {
    window.location.href = "/admin/auth.html";
  });
});
