const nodiv = document.querySelector('.nodiv');
const yesdiv = document.querySelector('.yesdiv');
const twobtns = document.querySelectorAll('.twobtns');
const container = document.querySelector('.container');
const h2 = document.querySelector('h2');
const img = document.querySelector('img');
nodiv.addEventListener('mouseover', () => {
  // Calculate random position
  const conth = container.offsetHeight;
  const contw = container.offsetWidth;
  console.log('cont h' + conth, 'cont w' + contw);
  const randtop = Math.random() * (conth - 100);
  const randleft = Math.random() * (contw - 100);
  console.log('randtop' + randtop, 'randleft' + randleft);
  nodiv.style.transition = 'all 0.5s ease';
  nodiv.style.position = 'relative';
  nodiv.style.left = `${randleft}px`;
  nodiv.style.top = `${randtop}px`;
  // Update button position with smooth transition
});
yesdiv.addEventListener('click', () => {
  h2.textContent = 'I love you khub sara babyy 😘 tumko bhi pappii 😚';
  h2.style.fontSize = '40px';
  img.src = './gifs/yay-kitty.gif';
  setTimeout(() => {
    img.src = './gifs/kiss.gif';
  }, 2000);
});
