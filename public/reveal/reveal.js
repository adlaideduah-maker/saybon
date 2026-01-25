const level = sessionStorage.getItem("saybon_level");
const text = document.getElementById("levelText");
const actions = document.querySelector(".actions");

text.textContent = level;

setTimeout(()=>{
  text.classList.add("center");
},800);

setTimeout(()=>{
  actions.classList.remove("hidden");
},2000);

function goLogin() {
  window.location.href="/auth/login.html";
}

function goHome() {
  window.location.href="/index.html";
}
