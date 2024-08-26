const lenis = new Lenis();

gsap.registerPlugin(ScrollTrigger);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// window.onload = function () {
//   if ("scrollRestoration" in history) {
//     history.scrollRestoration = "manual";
//   }
//   window.scrollTo(0, 0);
// };

// gsap.fromTo(
//   "#projects",
//   {
//     x: 1920,
//   },
//   {
//     ease: "expoScale(.5,7,none)",
//     scrollTrigger: {
//       trigger: "#projects",
//       start: "-=900 10px",
//       end: "+=800",
//       scrub: true,
//     },
//     x: 800,
//   }
// );

// gsap.fromTo(
//   "#projects",
//   {
//     x: 800,
//   },
//   {
//     ease: "expoScale(.5,7,none)",
//     scrollTrigger: {
//       trigger: "#projects",
//       start: "-=100 10px",
//       end: "+=1500",
//       scrub: true,
//       pin: true,
//     },
//     x: 0,
//   }
// );
let tl = gsap.timeline();
tl.from("#contact a", 0.5, {
  ease: "expoScale(.5,7,none)",
  scrollTrigger: {
    trigger: "#contact",
    start: "-400 center",
    end: "+=1000 bottom",
    scrub: true,
    markers: true,
  },
  stagger: {
    each: 0.5,
    from: "start",
  },
  "--widthy": "100%",
  x: -800,
});

tl.from(".contact-text", {
  ease: "expoScale(.5,7,none)",
  scrollTrigger: {
    trigger: "#contact",
    start: "bottom bottom",
    end: "+=300",
    scrub: true,
    pin: true,
  },
  y: -400,
});

tl.from(".hero-bio p", {
  y: -20,
  opacity: 0,
  delay: 2.5,
  stagger: {
    each: 0.1,
    from: "start",
  },
});

//Loading animation load trigger
let RLoader = document.getElementById("loading-right");
let LLoader = document.getElementById("loading-left");
let TLoader = document.getElementById("loading-top");
let BLoader = document.getElementById("loading-bottom");
window.addEventListener("load", function () {
  setTimeout(function () {
    LLoader.classList.add("loading-SlideL");
    RLoader.classList.add("loading-SlideR");
    TLoader.classList.add("loading-SlideT");
    BLoader.classList.add("loading-SlideB");
  }, 400);
});

window.addEventListener("load", function () {
  this.setTimeout(function () {
    LLoader.classList.add("loading-finishSl");
    RLoader.classList.add("loading-finishSr");
    TLoader.classList.add("loading-finishSu");
    BLoader.classList.add("loading-finishSd");
  }, 1800);
});
// Loading the lottie files

var firstAnimation = bodymovin.loadAnimation({
  container: document.getElementById("bm-first"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "../lottie/first-name.json",
});
firstAnimation.play();

let buttons = document.getElementById("navbar");
window.addEventListener("load", function () {
  this.setTimeout(function () {
    buttons.classList.add("nav-glide");
  }, 1500);
});

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animate");
    } else {
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

//Magnetic effect for the links buttons
document.querySelectorAll(".hidden").forEach((hidden) => {
  observer.observe(hidden);
});

//Scroll modification to enable the nav bar to disappear when scrolling down and appear
//when scrolling up.
let lastScroll = 0;
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  let bottomOfViewport = window.innerHeight + scroll;
  let docHeight = document.documentElement.scrollHeight;
  if (
    scroll > 100 &&
    scroll > lastScroll &&
    docHeight - bottomOfViewport > 50
  ) {
    buttons.classList.add("hide-nav");
  } else buttons.classList.remove("hide-nav");
  lastScroll = scroll;
});
