const openBtn = document.querySelector('button[data-btnOpen]'), closeBtn = document.querySelector('button[data-btnClose]'), 
 nav = document.querySelector('div[data-nav]'), scrollToFeatureBtn = document.querySelector('a[data-scroll-to-feature]'),
 scrollToFeatureBtnM = document.querySelector('a[data-scroll-to-feature-m]'),scrollToPricingBtnM = document.querySelector('a[data-scroll-to-pricing-m]')
 toScrollFeature = document.querySelector('#feature'), scrollToPricingBtn = document.querySelector('a[data-scroll-to-pricing]'),
 toScrollPricing = document.querySelector('#pricing');
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
///smooth scrolling function
function smoothScroll(toScroll, event)  {
  event.preventDefault();
  let cord = toScroll.getBoundingClientRect();
  window.scrollTo({
      left: cord.left + window.pageXOffset,
      top: cord.top + window.pageYOffset,
      behavior: 'smooth',
  })
}
///smooth scrolling events
scrollToFeatureBtn.addEventListener('click', smoothScroll.bind(null,toScrollFeature));
scrollToPricingBtn.addEventListener('click', smoothScroll.bind(null,toScrollPricing));
scrollToFeatureBtnM.addEventListener('click', smoothScroll.bind(null,toScrollFeature));
scrollToPricingBtnM.addEventListener('click', smoothScroll.bind(null,toScrollPricing));