console.log("🔥 why.js loaded");

const optionsContainer = document.querySelector(".why-options");
const options = document.querySelectorAll(".why-option");
const affirmationBox = document.getElementById("affirmation");

// Your affirmation tags (no changes to your wording logic)
const affirmations = {
  travel: "Better get your passport ready then… on y va 🌍✨",
  work: "Ambition looks good on you — let’s make it bilingual 💼🇫🇷",
  school: "Smart move — your future self will thank you 🎓✨",
  family: "Love as a language? We respect that deeply 💛",
  fun: "Joy is a powerful teacher — let’s play in French 🎉",
  other: "Whatever your reasons may be, we’ve got you covered 🌈"
};

options.forEach(option => {
  option.addEventListener("click", () => {
    const reason = option.dataset.reason;

    // Fade others
    optionsContainer.classList.add("faded");

    options.forEach(opt => {
      if (opt !== option) {
        opt.classList.remove("selected");
      }
    });

    // Keep selected
    option.classList.add("selected");

    // Show affirmation
    setTimeout(() => {
      affirmationBox.textContent =
        affirmations[reason] || affirmations.other;
      affirmationBox.classList.add("show");
    }, 600);

    // Go to loader
    setTimeout(() => {
      sessionStorage.setItem("saybon_next", "/dashboard/");
      window.location.href = "/loader.html";
    }, 2200);
  });
});
