
const observerOptions = {
  root: null, // null means the viewport
  rootMargin: '0px', // Adjust margins to change the effective area
  threshold: 1.0 // Callback is triggered when 50% of the target is visible
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
      console.log(entry)
    if (entry.isIntersecting) {
      // Target element is intersecting with the root's threshold
      entry.target.classList.add('show-animate');
    } else {
      // Optional: Do something when the element is not intersecting
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Assuming you have a list of elements to observe
document.querySelectorAll('.hidden').forEach(hidden => {
  observer.observe(hidden);
});

let btn = document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('mousemove',(e)=>{
    let x = e.offsetX
    let y = e.offsetY
    let btnWidth = btn.clientWidth
    let btnHeight = btn.clientHeight
    let transX = (x - btnWidth/2)
    let transY = (y - btnHeight/2)
    btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`
    btn.addEventListener('mouseout',(e)=>{
      btn.style.transform = '';
    })
  })
})