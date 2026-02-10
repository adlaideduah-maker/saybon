const options = document.querySelectorAll(".why-option");
const affirmation = document.getElementById("affirmationTag");
const container = document.getElementById("whyContainer");

options.forEach(option => {
  option.addEventListener("click", () => {
    const text = option.getAttribute("data-affirm");

    // 1) Fade out all other options
    options.forEach(o => {
      if (o !== option) {
        o.classList.add("fade-out");
      }
    });

    // 2) Center the selected option visually
    option.classList.add("selected");

    // 3) Show affirmation tag
    setTimeout(() => {
      affirmation.textContent = text;
      affirmation.classList.remove("hidden");
    }, 600);

    // 4) After a few seconds → clear page except selection + tag
    setTimeout(() => {
      container.style.opacity = "0.3";
    }, 2500);

    // 5) Go to loader
    setTimeout(() => {
      sessionStorage.setItem("saybon_next", "/placement.html");
      window.location.href = "/loader.html";
    }, 4000);
  });
});
