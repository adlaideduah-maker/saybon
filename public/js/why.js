const options = document.querySelectorAll(".why-option");
const grid = document.getElementById("optionsGrid");
const affirmationBox = document.getElementById("affirmationBox");

const affirmations = {
  travel:
    "Better get your passport ready then… on y va ✈️🌍",

  career:
    "Ambition looks good on you… très professionnel 💼✨",

  school:
    "Study mode activated… tu vas réussir 📚🎯",

  personal:
    "Whatever your reasons may be, we’ve got you covered. 💙🌱"
};

options.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const selected = e.currentTarget;
    const reason = selected.dataset.reason;

    // Fade out all others
    options.forEach(opt => {
      if (opt !== selected) {
        opt.classList.add("faded");
      }
    });

    // Center the selected one
    selected.classList.add("selected");

    // Show affirmation
    affirmationBox.textContent = affirmations[reason];
    affirmationBox.classList.remove("hidden");

    // Store choice (optional)
    sessionStorage.setItem("saybon_why", reason);

    // After 3 seconds → loader → start page
    setTimeout(() => {
      sessionStorage.setItem("saybon_next", "/start.html");
      window.location.href = "/loader.html";
    }, 3000);
  });
});
