const openBtn = document.querySelector('button[data-btnOpen]');
const closeBtn = document.querySelector('button[data-btnClose]');
const nav = document.querySelector('div[data-nav]');

closeBtn.addEventListener('click', function()  {
    nav.style.opacity = 0;
    setTimeout(function()  {
     nav.classList.add('hidden');
    }, 150)
});
openBtn.addEventListener('click', function() {
    nav.classList.remove('hidden');
    setTimeout(function()  {
        nav.style.opacity = 100;

    }, 20)
});
