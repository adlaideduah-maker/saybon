document.addEventListener("DOMContentLoaded", () => {
  const getStartedBtn = document.getElementById("getStartedBtn");
  const loginBtn = document.getElementById("loginBtn");

  function shimmer(btn) {
    btn.classList.add("shimmer");
    setTimeout(() => btn.classList.remove("shimmer"), 400);
  }

  getStartedBtn.addEventListener("click", () => shimmer(getStartedBtn));
  loginBtn.addEventListener("click", () => shimmer(loginBtn));
});
