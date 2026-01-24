const TOTAL_LESSONS = 20;
const grid = document.getElementById("lessonGrid");

function renderLessons() {
  for (let i = 1; i <= TOTAL_LESSONS; i++) {
    const btn = document.createElement("button");
    btn.classList.add("lesson");

    if (i === 1) {
      btn.classList.add("unlocked");
      btn.textContent = `Lesson ${i}`;
      btn.onclick = () => alert("Lesson 1 opens here later 🎉");
    } else {
      btn.classList.add("locked");
      btn.textContent = `Lesson ${i} 🔒`;
      btn.disabled = true;
    }

    grid.appendChild(btn);
  }
}

function goBack() {
  window.location.href = "../../dashboard/index.html";
}

renderLessons();
