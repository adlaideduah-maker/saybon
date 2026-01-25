



console.log("🔥 reveal.js loaded");

const levelText = document.getElementById("levelText");
const actions = document.querySelector(".reveal-actions");

const startBtn = document.getElementById("startJourney");
const homeBtn = document.getElementById("backHome");

// ----------------------------
// Load detected level
// ----------------------------
const level = sessionStorage.getItem("saybon_level") || "Beginner";
levelText.textContent = level;

// ----------------------------
// Animate reveal flow
// ----------------------------
window.addEventListener("load", () => {
  // slide text in
  levelText.classList.add("enter");

  // wait for text to settle
  setTimeout(() => {
    levelText.classList.add("bounce");

    // then bring buttons in
    actions.classList.remove("hidden");
    actions.classList.add("show");
  }, 1800);
});

// ----------------------------
// Button navigation
// ----------------------------
startBtn.addEventListener("click", () => {
  window.location.href = "/login/";
});

homeBtn.addEventListener("click", () => {
  window.location.href = "/";
});
