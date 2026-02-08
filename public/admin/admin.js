const PASSWORD = "s9a6y3b2o8n1";

const gateStage = document.getElementById("gateStage");
const nameStage = document.getElementById("nameStage");
const accessMessage = document.getElementById("accessMessage");

document.getElementById("checkPass").onclick = () => {
  const entered = document.getElementById("adminPass").value;

  if (entered === PASSWORD) {
    accessMessage.textContent = "ACCESS GRANTED ✓";
    accessMessage.className = "granted";

    setTimeout(() => {
      gateStage.classList.add("hidden");
      nameStage.classList.remove("hidden");
    }, 900);

  } else {
    accessMessage.textContent = "ACCESS DENIED ✕";
    accessMessage.className = "denied";
  }
};

document.getElementById("openAdmin").onclick = () => {
  const name = document.getElementById("adminName").value || "Admin";
  sessionStorage.setItem("saybon_admin", name);
  window.location.href = "/admin/panel.html";
};
