const levelText = document.getElementById("levelText");
const actions = document.querySelector(".reveal-actions");

const startBtn = document.getElementById("startJourney");
const homeBtn = document.getElementById("backHome");

// load level
const level = sessionStorage.getItem("saybon_level") || "Beginner";
levelText.textContent = level;

// entrance animation
setTimeout(() => {
  levelText.classList.add("enter");
}, 300);

// after level settles → show buttons
setTimeout(() => {
  actions.classList.remove("hidden");
  actions.classList.add("show");

  startBtn.classList.add("slide-left");
  homeBtn.classList.add("slide-right");
}, 2200);

// navigation
startBtn.onclick = () => {
  window.location.href = "/login/";
};

homeBtn.onclick = () => {
  window.location.href = "/";
};
