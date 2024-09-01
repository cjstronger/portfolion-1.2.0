function disableScroll() {
  document.body.style.overflow = "hidden";
}

disableScroll();

// Function to enable scroll
function enableScroll() {
  document.body.style.overflow = "";
}

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

//Loading animation load trigger

let loaderTl = gsap.timeline();
let loader = document.getElementById("loading");
window.addEventListener("load", function () {
  this.setTimeout(() => {
    loaderTl.to("#loading", {
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
document.addEventListener("DOMContentLoaded", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "-100 center",
      onEnter: () => tl.restart(true),
      onLeaveBack: () => tl.restart(true),
    },
  });
  tl.from(".contact-text", {
    ease: "expoScale(.5,7,none)",
    y: -500,
  });

  tl.from("#contact a", 0.15, {
    ease: "expoScale(.5,7,none)",
    stagger: {
      each: 0.15,
      from: "start",
    },
    "--widthy": "100%",
    x: -800,
  });

  const overlays = Array.from(
    document.getElementsByClassName("reveal-overlay")
  );

  overlays.forEach((overlay) => (overlay.style.transformOrigin = "0% 100%"));

  const elements = gsap.utils.toArray(".project-tile");

  elements.forEach((element) => {
    gsap.timeline(element, {
      scrollTrigger: {
        trigger: element,
        start: "bottom center",
        markers: true,
      },
    });
    gsap.to(overlays, {
      duration: 0.5,
      scaleX: 0,
      ease: "power2.out",
      stagger: {
        each: 0.18,
      },
    });
    gsap.from(
      ".project-name, .project-skill, .project-description, .project-project, .project-type, .project-number",
      {
        y: 40,
        duration: 0.35,
        opacity: 0,
        ease: "power2.out",
        stagger: {
          each: 0.15,
        },
      }
    );
  });
});

window.addEventListener("DOMContentLoaded", function () {
  const overlays = Array.from(
    document.getElementsByClassName("hero-bio-overlay")
  );
  const buttons = document.getElementById("navbar");

  overlays.forEach((overlay) => (overlay.style.transformOrigin = "0% 100%"));
  this.setTimeout(function () {
    gsap.to(overlays, {
      duration: 0.5,
      scaleX: 0,
      ease: "power2.out",
      stagger: {
        each: 0.18,
      },
    });
    gsap.from(".hero-div p", {
      y: 30,
      duration: 0.35,
      opacity: 0,
      delay: 0.2,
      ease: "power2.out",
      stagger: {
        each: 0.2,
        from: "start",
      },
    });
    buttons.classList.add("nav-glide");
  }, 4000);
});

const skills = document.getElementsByClassName("skill-year");
const skillArray = Array.from(skills);
skillArray.forEach((skill) => {
  const randomPercentage = parseInt(Math.random().toFixed(2) * 100);
  skill.style.setProperty("--translate", `${randomPercentage}%`);
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
