const openBtn = document.querySelector('button[data-btnOpen]'), closeBtn = document.querySelector('button[data-btnClose]'), 
 nav = document.querySelector('div[data-nav]'), scrollContainer = document.querySelector('div[data-scroll-container]'),
 scrollContainerM = document.querySelector('div[data-scroll-container-m]');
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
/////bubbling smooth scroll function
function smoothScroll(e)  {
    e.preventDefault();
    let id = e.target.getAttribute('href');
    if(id) {
        let toScroll = document.querySelector(id);
        let cord = toScroll.getBoundingClientRect();
        window.scrollTo({
            left: cord.left,
            top: cord.top,
            behavior: 'smooth',
        })
    }
}
scrollContainer.addEventListener('click', smoothScroll);
scrollContainerM.addEventListener('click', smoothScroll);
//////copy nav link items to mobile nav 
let navList = Array.from(scrollContainer.children);
navList.forEach(element => {
    let clone = element.cloneNode(true);
    clone.className = 'py-1 px-2 text-gray-700 hover:text-gray-900 font-normal text-lg';
    scrollContainerM.appendChild(clone)
});