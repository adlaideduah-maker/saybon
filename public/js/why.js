console.log("🔥 why.js loaded");

const optionsContainer = document.querySelector(".why-options");
const options = document.querySelectorAll(".why-option");
const affirmationBox = document.getElementById("affirmation");

// Affirmations — NO EMOJIS (per your instruction)
const affirmations = {
  travel: "Better get your passport ready then… on y va.",
  work: "Ambition looks good on you — let’s make it bilingual.",
  school: "Smart move — your future self will thank you.",
  family: "Love as a language? We respect that deeply.",
  general: "Whatever your reasons may be, we’ve got you covered."
};

// Click handler for each option
options.forEach(option => {
  option.addEventListener("click", () => {
    const reason = option.dataset.reason; // travel | work | school | family

    // 1) Fade out all others
    optionsContainer.classList.add("faded");

    options.forEach(opt => {
      if (opt !== option) {
        opt.classList.remove("selected");
      }
    });

    // 2) Keep selected option visible
    option.classList.add("selected");

    // 3) Show affirmation tag
    setTimeout(() => {
      affirmationBox.textContent =
        affirmations[reason] || affirmations.general;

      affirmationBox.classList.add("show");
    }, 600);

    // 4) After brief moment → loader → dashboard path
    setTimeout(() => {
      sessionStorage.setItem("saybon_next", "/dashboard/");
      window.location.href = "/loader.html";
    }, 2200);
  });
});
