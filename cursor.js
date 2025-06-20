// Animated, vibrant custom cursor with purple glow and trailing effect
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorTrail = document.createElement('div');
cursorTrail.className = 'custom-cursor-trail';
document.body.appendChild(cursorTrail);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let trailX = 0, trailY = 0;

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.25;
  cursorY += (mouseY - cursorY) * 0.25;
  trailX += (mouseX - trailX) * 0.10;
  trailY += (mouseY - trailY) * 0.10;
  cursor.style.left = cursorX - 16 + 'px';
  cursor.style.top = cursorY - 16 + 'px';
  cursorTrail.style.left = trailX - 32 + 'px';
  cursorTrail.style.top = trailY - 32 + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function setCursorHover() {
  cursor.style.transform = 'scale(1.7)';
  cursor.style.boxShadow = '0 0 32px 12px #a259f7, 0 0 0 4px #6d28d9';
  cursorTrail.style.opacity = '1';
}
function unsetCursorHover() {
  cursor.style.transform = 'scale(1)';
  cursor.style.boxShadow = '0 0 24px 8px #a259f7, 0 0 0 2px #6d28d9';
  cursorTrail.style.opacity = '0.7';
}
document.body.addEventListener('mouseover', e => {
  if (e.target.closest('.bento-card, button, a, input, textarea, .skills-list li')) setCursorHover();
});
document.body.addEventListener('mouseout', e => {
  if (e.target.closest('.bento-card, button, a, input, textarea, .skills-list li')) unsetCursorHover();
});
window.addEventListener('mousedown', () => {
  cursor.style.transform = 'scale(0.7)';
  cursor.style.boxShadow = '0 0 40px 16px #a259f7, 0 0 0 8px #6d28d9';
});
window.addEventListener('mouseup', () => {
  unsetCursorHover();
});
if (window.innerWidth < 700) {
  cursor.style.display = 'none';
  cursorTrail.style.display = 'none';
}

// Cursor styles
const style = document.createElement('style');
style.innerHTML = `
.custom-cursor {
  position: fixed;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  background: radial-gradient(circle, #a259f7 60%, #6d28d9 100%, transparent 100%);
  box-shadow: 0 0 24px 8px #a259f7, 0 0 0 2px #6d28d9;
  mix-blend-mode: lighten;
  transition: transform 0.18s cubic-bezier(0.68,-0.55,0.265,1.55), box-shadow 0.18s cubic-bezier(0.68,-0.55,0.265,1.55);
  opacity: 0.95;
}
.custom-cursor-trail {
  position: fixed;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  background: radial-gradient(circle, #a259f7 10%, #6d28d9 60%, transparent 100%);
  filter: blur(16px);
  opacity: 0.7;
  transition: opacity 0.2s;
}
`;
document.head.appendChild(style); 