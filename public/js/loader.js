const quips = [
  "Almost ready… just a sec 🙂",
  "Loading… sprinkling a little magic ✨",
  "Our brains are tying their shoelaces 🧠👟",
  "Warming things up behind the scenes 🔥",
  "Teaching pixels how to behave 🎨",
  "Fueling the fun tank ⛽😄",
  "Making things smooth like butter 🧈",
  "Aligning the vibes ✨",
  "Getting everything SayBon-ready 💚",
  "One tiny moment — greatness incoming 🚀"
];

// rotate quips
let index = Number(sessionStorage.getItem("saybon_quip_index")) || 0;
document.getElementById("loaderText").textContent = quips[index];
index = (index + 1) % quips.length;
sessionStorage.setItem("saybon_quip_index", index);

// redirect ONLY if told
const next = sessionStorage.getItem("saybon_next");

if (next) {
  setTimeout(() => {
    sessionStorage.removeItem("saybon_next");
    window.location.href = next;
  }, 2200);
}
