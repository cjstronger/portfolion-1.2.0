function disableScroll() {
  document.body.style.overflow = "hidden";
}

disableScroll();

// Function to enable scroll
function enableScroll() {
  document.body.style.overflow = "";
}

//Loading animation load trigger

let loader = document.getElementById("loading");
window.addEventListener("load", function () {
  this.setTimeout(() => {
    tl.to("#loading", {
      duration: 1,
      ease: "power4.out",
      y: "100vh",
      onComplete: () => {
        loader.style.willChange = "auto";
      },
    });
  }, 1500);
});

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

// tl.from(".hero-bio p", {
//   y: -20,
//   opacity: 0,
//   stagger: {
//     each: 0.1,
//     from: "start",
//   },
// });

// Loading the lottie files

document.addEventListener("DOMContentLoaded", () => {
  const resources = performance.getEntriesByType("resource");
  let totalBytes = 0;
  let loadedBytes = 0;

  // Calculate total size of all resources
  resources.forEach((resource) => {
    totalBytes += resource.encodedBodySize; // transferSize gives you the actual size of the downloaded resource
  });

  // Update progress based on loaded bytes
  const updateProgress = (loadedSize) => {
    loadedBytes += loadedSize;
    const percentage = Math.round((loadedBytes / totalBytes) * 100);
    const loadingBar = document.getElementsByClassName("loading-bar")[0];
    const loadingPercentage =
      document.getElementsByClassName("loading-percentage")[0];
    loadingPercentage.innerHTML = percentage;
    loadingBar.style.setProperty("--width", `${percentage}%`);
    console.log(`Loading: ${percentage}%`);
  };

  resources.forEach((resource) => {
    // Ignore resources with 0 transfer size
    if (resource.encodedBodySize > 0) {
      const element = document.createElement("img");
      element.src = resource.name;

      element.onload = () => {
        updateProgress(resource.encodedBodySize);
      };

      element.onerror = () => {
        updateProgress(resource.encodedBodySize); // Consider errors as "loaded"
      };
    }
  });

  // Final check when all resources are loaded
  window.onload = () => {
    console.log("Loading complete: 100%");
  };
});

window.addEventListener("load", function () {
  var firstAnimation = bodymovin.loadAnimation({
    container: document.getElementById("bm-first"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "../lottie/first-name.json",
  });
  this.setTimeout(() => {
    enableScroll();
    firstAnimation.play();
    const lenis = new Lenis();

    gsap.registerPlugin(ScrollTrigger);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.lagSmoothing(0);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  }, 2000);
});

let buttons = document.getElementById("navbar");
window.addEventListener("load", function () {
  this.setTimeout(function () {
    tl.to(".hero-bio p", {
      y: 0,
      opacity: 1,
      stagger: {
        each: 0.1,
        from: "start",
      },
    });
    buttons.classList.add("nav-glide");
  }, 3500);
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

document.addEventListener("DOMContentLoaded", () => {
  const tiles = document.querySelectorAll(".project-tile");

  tiles.forEach((tile) => {
    const video = tile.querySelector(".video");
    if (!video) return;
    video.pause();
    video.loop = true;
    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });

    tile.addEventListener("mouseenter", () => {
      if (video.paused) {
        video.play();
      }
    });

    tile.addEventListener("mouseleave", () => {
      if (!video.paused) {
        video.pause();
        video.currentTime = 0;
      }
    });
  });
});
