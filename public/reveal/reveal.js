const level =
  sessionStorage.getItem("saybon_level") || "Absolute Beginner";

const levelText = document.getElementById("levelText");
const buttons = document.getElementById("buttons");

levelText.textContent = level;

setTimeout(() => {
  buttons.classList.add("show");
}, 1700);

// ✅ START JOURNEY → LOGIN
document.getElementById("startJourney").onclick = () => {
  window.location.href = "/auth/login.html";
};

// ✅ BACK HOME
document.getElementById("backHome").onclick = () => {
  window.location.href = "/";
};
