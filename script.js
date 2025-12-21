const text = "Vũ Ngọc Phiêu";
let index = 0;
const typing = document.getElementById("typing");

function typeText() {
  if (index < text.length) {
    typing.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 120);
  }
}
typeText();


const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let musicStarted = false;

document.addEventListener("click", () => {
  if (!musicStarted) {
    music.volume = 0;
    music.play();
    fadeInMusic();
    musicStarted = true;
    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
}, { once: true });

function fadeInMusic() {
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.6) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}


musicBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (music.paused) {
    music.play();
    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    music.pause();
    musicBtn.innerHTML = '<i class="fas fa-music"></i>';
  }
});


const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


const card = document.querySelector(".card");

document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  card.style.transform = `
    rotateY(${x}deg)
    rotateX(${y}deg)
    translateY(-10px)
  `;
});

document.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0) rotateY(0)";
});
