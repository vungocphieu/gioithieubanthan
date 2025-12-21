/* TYPING EFFECT */
const text = "Vũ Ngọc Phiêu";
let i = 0;
const typing = document.getElementById("typing");

function type() {
  if (i < text.length) {
    typing.textContent += text[i++];
    setTimeout(type, 120);
  }
}
type();

/* MUSIC */
const music = document.getElementById("bgMusic");
document.getElementById("musicBtn").onclick = () => {
  music.paused ? music.play() : music.pause();
};

/* SOUND FX */
const hoverSound = document.getElementById("hoverSound");
const clickSound = document.getElementById("clickSound");

document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("mouseenter", () => hoverSound.play());
  el.addEventListener("click", () => clickSound.play());
});

/* DARK / LIGHT */
document.getElementById("themeBtn").onclick = () => {
  document.body.classList.toggle("light");
};

/* LANGUAGE */
let vn = true;
document.getElementById("langBtn").onclick = () => {
  vn = !vn;
  document.getElementById("desc").innerHTML = vn
    ? "Đam mê công nghệ & sáng tạo 🚀<br>Luôn học hỏi – Luôn nâng cấp bản thân"
    : "Passionate about technology 🚀<br>Always learning and upgrading myself";
};

/* 3D PARALLAX */
const card = document.getElementById("card");
document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.pageX) / 18;
  const y = (window.innerHeight / 2 - e.pageY) / 18;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

const particles = Array.from({ length: 120 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1,
  dx: (Math.random() - .5) * .6,
  dy: (Math.random() - .5) * .6
}));

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(255,255,255,.8)";
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();

/* FPS COUNTER */
let last = performance.now(), frames = 0;
function fps(now) {
  frames++;
  if (now - last >= 1000) {
    document.getElementById("fps").textContent = "FPS: " + frames;
    frames = 0;
    last = now;
  }
  requestAnimationFrame(fps);
}
fps();

/* KONAMI CODE – GOD EFFECT */
const code = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
let pos = 0;
document.addEventListener("keydown", e => {
  if (e.key === code[pos]) {
    pos++;
    if (pos === code.length) {
      document.body.style.filter = "hue-rotate(180deg)";
      alert("🔥 GOD MODE UNLOCKED 🔥");
      pos = 0;
    }
  } else pos = 0;
});
