//smooth scroll with lenis

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

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
  }, 2500)
})

// Loading the lottie files

window.addEventListener('load', function(){
    var firstAnimation = bodymovin.loadAnimation({
      container: document.getElementById('bm-first'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'first-name.json'
    })
    var lastAnimation = bodymovin.loadAnimation({
      container: document.getElementById('bm-last'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'last-name.json'
    })
    setTimeout(() => {
      lastAnimation.play()
      firstAnimation.play()
    }, 3500)
})

let buttons = document.getElementById('navbar')
window.addEventListener('load', function(){
  this.setTimeout(function(){
    buttons.classList.add('nav-glide')
  }, 5500)
})

let army = document.getElementById('army')
window.addEventListener('load', function(){
  setTimeout(function(){
    army.classList.add('opacity')
  }, 5000)
})

const observerOptions = {
  root: null, // null means the viewport
  rootMargin: '0px', // Adjust margins to change the effective area
  threshold: 1.0 // Callback is triggered when 50% of the target is visible
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Target element is intersecting with the root's threshold
      entry.target.classList.add('show-animate');
    } else {
      // Optional: Do something when the element is not intersecting
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);


//Magnetic effect for the links buttons
document.querySelectorAll('.hidden').forEach(hidden => {
  observer.observe(hidden);
});

let btn = document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('mousemove',(e)=>{
    let pos = btn.getBoundingClientRect();
    let x = e.pageX - pos.left - pos.width / 2;
    let y = e.pageY - pos.top - pos.height / 2 -window.scrollY;
    btn.children[0].style.transform = "translate(" + x *.3 + "px, " + y *.5 + "px)";
    btn.addEventListener('mouseout',(e)=>{
      btn.children[0].style.transform = "translate(0px, 0px)";
    })
  })
})

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

//Adding the ability to make typing elements appear after their predecessors animations are
//finished.

let dhaTimeout = {
  id: null,
  startTime: 0,
  remainingTime: 10000,
  isPaused: false
}
let stackTimeout = {
  id: null,
  startTime: 0,
  remainingTime: 15000,
  isPaused: false
}

window.addEventListener('load', function(){
function startTimeout(timeout, elementId){
  if(timeout.isPaused){
    timeout.isPaused = false;
    timeout.startTime = Date.now();
    timeout.id = setTimeout(() => {
      const element = document.getElementById(elementId)
      if(element){
        element.classList.remove("gone")  
      } else { 
        console.log(`Element not found, ${elementId}`)
      }
    }, timeout.remainingTime)
  } else{
      timeout.startTime = Date.now()
      timeout.id = setTimeout(() => {
        const element = document.getElementById(elementId)
        if(element){
          element.classList.remove("gone")
        }
      }, timeout.remainingTime)
    }
  }

startTimeout(stackTimeout, 'full-stack')
startTimeout(dhaTimeout, 'dha')
})