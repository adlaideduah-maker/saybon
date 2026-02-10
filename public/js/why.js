const options = document.querySelectorAll(".why-option");
const tag = document.getElementById("affirmationTag");

const tags = {
  travel: "Better get your passport ready then… on y va ✈️",
  work: "Ambition looks good on you… allez travailler 💼",
  school: "Brain glow activated… très studieux 📚",
  love: "L’amour + français = dangerous combo… magnifique 💕",
  culture: "You’re already a citoyen du monde 🌍",
  confidence: "We see you… and we’ve got you 💫"
};

options.forEach(btn => {
  btn.addEventListener("click", () => {
    // fade out all others
    options.forEach(o => {
      if (o !== btn) o.classList.add("fade-out");
    });

    // center selected
    btn.classList.add("selected");

    // show affirmation tag
    const key = btn.dataset.reason;
    tag.textContent = tags[key];
    tag.classList.add("show");

    // after 3s → loader → start.html
    setTimeout(() => {
      sessionStorage.setItem("saybon_next", "/start.html");
      window.location.href = "/loader.html";
    }, 3000);
  });
});
