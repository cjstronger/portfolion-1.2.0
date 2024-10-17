function disableScroll() {
  document.body.style.overflow = "hidden";
}

disableScroll();

function enableScroll() {
  document.body.style.overflow = "";
}

const updateProgress = async () => {
  const loadingBar = document.getElementsByClassName("loading-bar")[0];
  const loadingPercentages =
    document.getElementsByClassName("loading-percentage");
  const percentagesArray = gsap.utils.toArray(loadingPercentages);
  const buffer = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  for (const percentageNumber of percentagesArray) {
    gsap.to(percentageNumber, 0.5, {
      y: 0,
      ease: "power2.out",
    });
    if (percentageNumber.innerHTML === "0%") {
      await buffer(300);
    } else {
      await buffer(100);
    }
    const percentageText = percentageNumber.innerHTML;
    loadingBar.style.setProperty("--width", `${percentageText}`);
    await buffer(300);
    if (percentageNumber.innerHTML === "100%") return;
    gsap.to(percentageNumber, 0.5, {
      y: -700,
      ease: "power2.out",
      delay: 0.05,
    });
  }
};

updateProgress();

window.addEventListener("DOMContentLoaded", function () {
  var firstAnimation = bodymovin.loadAnimation({
    container: document.getElementById("bm-first"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "../lottie/first-name.json",
  });
  this.setTimeout(() => {
    firstAnimation.play();
    enableScroll();
    const lenis = new Lenis();

    gsap.registerPlugin(ScrollTrigger);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.lagSmoothing(0);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    ScrollTrigger.refresh();
  }, 2000);
});

//Loading animation load trigger

let loaderTl = gsap.timeline();
let loader = document.getElementById("loading");
window.addEventListener("DOMContentLoaded", function () {
  this.setTimeout(() => {
    loaderTl.to("#loading", {
      duration: 0.5,
      ease: "power4.out",
      y: "100vh",
      onComplete: () => {
        loader.style.willChange = "auto";
      },
    });
  }, 2200);
});

window.onload = function () {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
};

const buttons = document.getElementById("navbar");

window.addEventListener("DOMContentLoaded", function () {
  const overlays = Array.from(
    document.getElementsByClassName("hero-bio-overlay")
  );

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
    gsap.from(".hero-bio .hero-div p", {
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

document.addEventListener("DOMContentLoaded", () => {
  const elements = gsap.utils.toArray(".project-tile");

  elements.forEach((element) => {
    const numberOverlay = element.querySelector(".number-reveal-overlay");
    const overlays = element.querySelectorAll(".reveal-overlay");
    const name = element.querySelector(".project-name");
    const skill = element.querySelector(".skills-list");
    const tech = element.querySelector(".tech-title");
    const description = element.querySelector(".project-description");
    const project = element.querySelector(".project-project");
    const type = element.querySelector(".project-type");
    const number = element.querySelector(".project-number");
    const elementsArray = [name, project, type, description, tech, skill];
    numberOverlay.style.transformOrigin = "0% 100%";
    overlays.forEach((overlay) => (overlay.style.transformOrigin = "0% 100%"));
    const newTl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
      },
    });
    const secondTl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
      },
    });
    newTl.to(numberOverlay, {
      duration: 0.5,
      scaleX: 0,
      ease: "power2.out",
    });
    secondTl.from(number, {
      y: 40,
      duration: 0.8,
      opacity: 0,
      delay: 0.15,
      ease: "circ",
    });
    newTl.to(overlays, {
      duration: 0.5,
      scaleX: 0,
      ease: "power2.out",
      stagger: {
        each: 0.18,
      },
    });
    secondTl.from(elementsArray, {
      y: 40,
      duration: 0.35,
      opacity: 0,
      delay: -0.3,
      ease: "power2.out",
      stagger: {
        each: 0.15,
      },
    });
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "center bottom",
    },
  });
  tl.from(".contact-text", 0.5, {
    ease: "power2.out",
    y: -500,
  });

  tl.from("#contact a", 0.5, {
    ease: "power4.out",
    stagger: {
      each: 0.1,
      from: "start",
    },
    x: -800,
  });
});

const skills = document.getElementsByClassName("skill-year");
const skillTitles = document.getElementsByClassName("skill-name");
const skillArray = Array.from(skills);
skillArray.forEach((skill, i) => {
  const randomPercentage = parseInt(Math.random().toFixed(2) * 100);
  skill.style.setProperty("--translate", `${randomPercentage}%`);
  skill.style.setProperty("--translateY", `${randomPercentage * 3 + 250}%`);
  skillTitles[i].style.setProperty("--translate", `${randomPercentage * 3}%`);
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

if (window.innerWidth < 1001) {
  window.addEventListener("DOMContentLoaded", () => {
    handleSkillTiles();
  });
}

function handleSkillTiles() {
  const skillTiles = document.querySelectorAll(".skill-tile");
  const skillTilesArray = Array.from(skillTiles);

  skillTilesArray.forEach((skill, i) => {
    gsap.to(skill, {
      scrollTrigger: {
        trigger: skill,
        start: "top center",
        end: "bottom top",
        markers: true,
      },
      height: 80,
      duration: 0.5,
      delay: i * 0.15,
    });
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 1001) {
    handleSkillTiles();
  }
});
