console.log("🔥 reveal.js loaded");

const levelText = document.getElementById("levelText");
const startBtn = document.getElementById("startJourney");
const homeBtn = document.getElementById("backHome");

// get level from placement test
const level = sessionStorage.getItem("saybon_level") || "Absolute Beginner";

levelText.textContent = level;

// button routing
startBtn.addEventListener("click", () => {
  window.location.href = "/auth/login.html/";
});

homeBtn.addEventListener("click", () => {
  window.location.href = "/";
});
