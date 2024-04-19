//smooth scroll with lenis

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

window.onload = function(){
  if('scrollRestoration' in history){
    history.scrollRestoration = 'manual';
  }
  console.log('should be scrolling to the top')
  window.scrollTo(0,0);
}

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#projects',
    start: 'top 200px',
    end: '1200px bottom',
    scrub: true, 
    pin: true,
    markers: true
  }
})

tl.to('#projects', {
  x: 0
})

//Loading animation load trigger
let RLoader = document.getElementById('loading-right')
let LLoader = document.getElementById('loading-left')
let TLoader = document.getElementById('loading-top')
let BLoader = document.getElementById('loading-bottom')
window.addEventListener('load', function(){
  setTimeout(function() {
    LLoader.classList.add('loading-SlideL')
    RLoader.classList.add('loading-SlideR')
    TLoader.classList.add('loading-SlideT')
    BLoader.classList.add('loading-SlideB')
  }, 3500)
})

window.addEventListener('load', function(){
  this.setTimeout(function(){
    LLoader.classList.add('loading-finishSl')
    RLoader.classList.add('loading-finishSr')
    TLoader.classList.add('loading-finishSu')
    BLoader.classList.add('loading-finishSd')
  }, 6500)
})

let stussyMove = document.getElementById('stussy')
setTimeout(function() {
  stussyMove.classList.add('stussy-move')
}, 4200)
// Loading the lottie files

var stussyAnimation = bodymovin.loadAnimation({
  container: document.getElementById("stussy"),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'stussy.json'
})

window.addEventListener('load', function(){
    var firstAnimation = bodymovin.loadAnimation({
      container: document.getElementById('bm-first'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'first-name.json'
    })
    setTimeout(() => {
      firstAnimation.play()
    }, 4500)
})

let buttons = document.getElementById('navbar')
window.addEventListener('load', function(){
  this.setTimeout(function(){
    buttons.classList.add('nav-glide')
  }, 7500)
})

let army = document.getElementById('army')
window.addEventListener('load', function(){
  setTimeout(function(){
    army.classList.add('opacity')
  }, 6000)
})

const observerOptions = {
  root: null,
  rootMargin: '0px', 
  threshold: 1.0
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show-animate');
      } else {
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);


//Magnetic effect for the links buttons
document.querySelectorAll('.hidden').forEach(hidden => {
  observer.observe(hidden);
});


//Scroll modification to enable the nav bar to disappear when scrolling down and appear
//when scrolling up.
let lastScroll= 0;
window.addEventListener('scroll', ()=>{
  let scroll= window.scrollY;
  let bottomOfViewport = window.innerHeight + scroll;
  let docHeight = document.documentElement.scrollHeight;
  if(scroll > 100 && scroll > lastScroll && docHeight - bottomOfViewport > 50){
    buttons.classList.add('hide-nav')
  } else 
  buttons.classList.remove('hide-nav')
  lastScroll = scroll;
})
