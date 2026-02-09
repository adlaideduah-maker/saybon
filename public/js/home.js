document.addEventListener("DOMContentLoaded", () => {

  const teacher = document.getElementById("teacherTap");
  const getStartedBtn = document.getElementById("getStartedBtn");
  const loginBtn = document.getElementById("loginBtn");

  // Teacher tap -> open cinematic overlay (your existing behavior)
  teacher.addEventListener("click", () => {
    window.location.href = "/loader.html";
  });

  // Glass button shimmer + navigation
  getStartedBtn.addEventListener("click", () => {
    getStartedBtn.classList.add("clicked");
    sessionStorage.setItem("saybon_next", "why.html");
    window.location.href = "/loader.html";
  });

  loginBtn.addEventListener("click", () => {
    loginBtn.classList.add("clicked");
    sessionStorage.setItem("saybon_next", "dashboard/index.html");
    window.location.href = "/loader.html";
  });

});
