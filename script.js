
const text = "Vũ Ngọc Phiêu";
let i = 0;
const typing = document.getElementById("typing");

function typeEffect() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();


const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    music.pause();
    musicBtn.innerHTML = '<i class="fas fa-music"></i>';
  }
  isPlaying = !isPlaying;
});
