const hasCompletedPlacement = sessionStorage.getItem("saybon_level");

if (!hasCompletedPlacement) {
  window.location.href = "/placement/";
}

// ============================
// SAFARI-SAFE DASHBOARD LOGIC
// ============================

// LEVEL ROUTING
function goLevel(level) {
  window.location.href = "../levels/" + level + "/index.html";
}

// FEATURE ROUTING
function goFeature(feature) {
  window.location.href = "../features/" + feature + "/index.html";
}

// FEEDBACK
function goFeedback() {
  window.location.href = "../features/feedback/index.html";
}

// HOME
function goHome() {
  window.location.href = "../index.html";
}
