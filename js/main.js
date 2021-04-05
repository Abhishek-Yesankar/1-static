const openBtn = document.querySelector('button[data-btnOpen]');
const closeBtn = document.querySelector('button[data-btnClose]');
const nav = document.querySelector('div[data-nav]');

function triggerNav()  {
 nav.classList.toggle('hidden');
}
closeBtn.addEventListener('click', triggerNav);
openBtn.addEventListener('click', triggerNav);
