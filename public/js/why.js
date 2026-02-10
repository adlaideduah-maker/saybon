const overlay = document.getElementById("affirmationOverlay");
const affirmationText = document.getElementById("affirmationText");

const affirmations = {
  travel: "Better get your passport ready then… on y va.",
  school: "Don’t worry — we’ll get you there… étape par étape.",
  work: "Looks like your emails are about to hit different… en français.",
  family: "Conversations are about to feel closer… même en français.",
  fun: "You came for fun? Good — that’s where fluency starts.",
  other: "Whatever your reasons may be, we’ve got you covered."
};

document.querySelectorAll(".why-card").forEach(card => {
  card.addEventListener("click", (e) => {
    e.stopPropagation();

    const reason = card.getAttribute("data-reason");

    // Set affirmation text
    affirmationText.textContent = affirmations[reason];

    // Show affirmation overlay
    overlay.classList.remove("hidden");
    requestAnimationFrame(() => {
      overlay.classList.add("show");
    });

    // After brief affirmation, go to loader → placement
    setTimeout(() => {
      sessionStorage.setItem("saybon_next", "/placement/");
      window.location.href = "/loader.html";
    }, 1600);
  });
});

