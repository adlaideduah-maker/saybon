jconst level =
  sessionStorage.getItem("saybon_level") || "Absolute Beginner";

const levelText = document.getElementById("levelText");
const buttons = document.getElementById("buttons");

levelText.textContent = level;

setTimeout(() => {
  buttons.classList.add("show");
}, 1700);

// 🔒 LOCKED FLOW:
// Reveal → Login (direct)
// Login → Loader → Dashboard

document.getElementById("startJourney").onclick = () => {
  window.location.href = "/auth/login.html";
};

// Back Home stays the same
document.getElementById("backHome").onclick = () => {
  window.location.href = "/";
};
