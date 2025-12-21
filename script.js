/* TYPING */
const name="Vũ Ngọc Phiêu";let i=0;
const typing=document.getElementById("typing");
(function type(){
  if(i<name.length){typing.textContent+=name[i++];setTimeout(type,120);}
})();

/* MUSIC */
const music=document.getElementById("bgMusic");
document.getElementById("musicBtn").onclick=()=>music.paused?music.play():music.pause();

/* THEME */
document.getElementById("themeBtn").onclick=()=>document.body.classList.toggle("light");

/* CURSOR GLOW */
const glow=document.getElementById("glow");
document.addEventListener("mousemove",e=>{
  glow.style.left=e.clientX+"px";
  glow.style.top=e.clientY+"px";
});

/* AI MINI CHAT */
const input=document.getElementById("chatInput");
const log=document.getElementById("chatlog");

input.addEventListener("keydown",e=>{
  if(e.key==="Enter"){
    const q=input.value.toLowerCase();
    log.innerHTML+=`<div class="user">👤 ${input.value}</div>`;
    let a="Tôi tập trung vào Web, AI và xây dựng sản phẩm thực tế.";
    if(q.includes("skill")) a="HTML, CSS, JS, Python, AI, Fullstack.";
    if(q.includes("liên hệ")) a="GitHub, LinkedIn hoặc Facebook.";
    if(q.includes("dự án")) a="Web app, AI vision, chatbot, portfolio.";
    log.innerHTML+=`<div class="bot">👁️ ${a}</div>`;
    input.value="";
    log.scrollTop=log.scrollHeight;
  }
});

/* FPS */
let last=performance.now(),frames=0;
(function fps(now){
  frames++;
  if(now-last>=1000){
    document.getElementById("fps").textContent="FPS: "+frames;
    frames=0;last=now;
  }
  requestAnimationFrame(fps);
})();

/* PARTICLES */
const canvas=document.getElementById("particles"),ctx=canvas.getContext("2d");
canvas.width=innerWidth;canvas.height=innerHeight;
const p=Array.from({length:100},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2,dx:(Math.random()-.5)*.5,dy:(Math.random()-.5)*.5}));
(function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(255,255,255,.7)";
  p.forEach(o=>{
    o.x+=o.dx;o.y+=o.dy;
    if(o.x<0||o.x>canvas.width)o.dx*=-1;
    if(o.y<0||o.y>canvas.height)o.dy*=-1;
    ctx.beginPath();ctx.arc(o.x,o.y,o.r,0,Math.PI*2);ctx.fill();
  });
  requestAnimationFrame(animate);
})();
window.addEventListener("resize",()=>{canvas.width=innerWidth;canvas.height=innerHeight;});

/* SOUNDS */
const hoverSound=document.getElementById("hoverSound");
const clickSound=document.getElementById("clickSound");
document.querySelectorAll("button").forEach(btn=>{
  btn.addEventListener("mouseenter",()=>{hoverSound.currentTime=0;hoverSound.play();});
  btn.addEventListener("click",()=>{clickSound.currentTime=0;clickSound.play();});
});