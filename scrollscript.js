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
    document.querySelector('#navbar')
    .classList.add('hide-nav')
  } else document.querySelector('#navbar')
  .classList.remove('hide-nav')
  lastScroll = scroll;
})

//Adding the ability to make typing elements appear after their predecessors animations are
//finished.

let dhaTimeout = {
  id: null,
  startTime: 0,
  remainingTime: 5000,
  isPaused: false
}
let stackTimeout = {
  id: null,
  startTime: 0,
  remainingTime: 10000,
  isPaused: false
}

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

//smooth scroll with lenis
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)