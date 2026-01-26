// get placement result
const level =
  sessionStorage.getItem("saybon_level") ||
  "Absolute Beginner";

const levelText = document.getElementById("levelText");
const buttons = document.getElementById("buttons");

levelText.textContent = level;

// show buttons only AFTER level animation finishes
setTimeout(() => {
  buttons.classList.add("show");
}, 1700);

// ✅ START JOURNEY → LOGIN PAGE
document.getElementById("startJourney").onclick = () => {
  window.location.href = "/auth/login.html";
};

// ✅ BACK TO HOMEPAGE
document.getElementById("backHome").onclick = () => {
  window.location.href = "/";
};
