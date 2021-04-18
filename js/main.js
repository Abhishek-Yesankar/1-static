const openBtn = document.querySelector('button[data-btnOpen]'), closeBtn = document.querySelector('button[data-btnClose]'), 
 nav = document.querySelector('div[data-nav]'), toScrollItems = document.querySelector('div[data-scrollToList]'),
 toScrollItemsM = document.querySelector('div[data-scrollToList-sm]'), sectionFirst = document.querySelector('#section-1'),
 navBar = document.querySelector('nav'), countDownSection = document.querySelector('#countdown');
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
    let id = e.target.getAttribute('href');
    if(id && id.startsWith('#') && id.length > 1) {
        e.preventDefault();
        let toScroll = document.querySelector(id);
        let cord = toScroll.getBoundingClientRect();
        window.scrollTo({
            left: cord.x + window.pageXOffset,
            top : cord.y + window.pageYOffset,
            behavior: 'smooth',
        })
    } else if( id === '#' )  {
        e.preventDefault();
        window.scrollTo({
            left: 0,
            top : 0,
            behavior: 'smooth',
        })
    }
}
toScrollItems.addEventListener('click', smoothScroll);
toScrollItemsM.addEventListener('click', smoothScroll);
//////copy nav link items to mobile nav 
let navList = Array.from(toScrollItems.children);
navList.forEach(element => {
    let clone = element.cloneNode(true);
    clone.className = 'py-1 px-2 text-gray-700 hover:text-gray-900 font-normal text-lg';
    toScrollItemsM.appendChild(clone)
});
////////


////////
const observeNav = new IntersectionObserver((entries, observer) => {
   entries.forEach((entry) => {
   if( !entry.isIntersecting ) {
     navBar.classList.remove('md:py-8');
     navBar.classList.add('fixed', 'top-0', 'border-b', 'border-gray-200', 'md:py-4');
     sectionFirst.style.marginTop = navBar.getBoundingClientRect().height + 'px';
    } else if(entry.isIntersecting) {
     navBar.classList.add('md:py-8');
     navBar.classList.remove('fixed', 'top-0', 'border-b', 'border-gray-200', 'md:py-4');
     sectionFirst.style.marginTop = 0;
    }
   })
}, 
{
  root: null,
  threshold: 0.05,    
})
observeNav.observe(sectionFirst);


let runtime = document.querySelector('h1[data-countdown-rn]');
let data = document.querySelector('h1[data-countdown-data');
let customer = document.querySelector('h1[data-countdown-cus');
function countAnimation(select, start, end, delay = 10, suffix)  {
    let time =  setInterval(() => {
     select.textContent = parseInt(start) + suffix;
     if(!(start >= end)) {
         start++;    
     } else {
         clearInterval(time);
     }
    }, delay )
}
let currentThreshold =  document.body.clientWidth > 450  ?  0.6 : 0.3;

const countIntersection = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
     if( entry.isIntersecting )  {
         setTimeout(() => {
            countDownSection.classList.remove('translate-y-32', 'opacity-0');
            countDownSection.classList.add('translate-y-0', 'opacity-100');
            countAnimation(runtime, 0, 99, 10, '%');
            countAnimation(data, 0, 47, 30, '%');
            countAnimation(customer, 0, 10, 150, 'K+');
            countIntersection.unobserve(entry.target);
         },300)
     } else {
        countDownSection.classList.add('translate-y-32','opacity-0');
     }
    })
 }, 
 {
   root: null,
   threshold: currentThreshold,    
 })
 countIntersection.observe(countDownSection);