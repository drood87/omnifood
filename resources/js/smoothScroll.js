const features = document.querySelector('#features');
const plans = document.querySelector('#plans');
const featuresButton = document.querySelector('#featuresButton');
const plansButton = document.querySelector('#plansButton');

function smoothScroll(target, duration) {
  const targetSection = target;

  const sectionPosition =
    targetSection.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.pageYOffset;
  const distance = sectionPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

featuresButton.addEventListener('click', function() {
  smoothScroll(features, 1000);
});
plansButton.addEventListener('click', function() {
  smoothScroll(plans, 2000);
});
