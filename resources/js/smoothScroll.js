// BINDING THE SECTIONS
const featuresSection = document.querySelector('#features');
const plansSection = document.querySelector('#plans');
const howToSection = document.querySelector('#howTo');
const citiesSection = document.querySelector('#cities');

// GRABBING THE BUTTONS
const featuresButton = document.querySelector('#featuresButton');
const plansButton = document.querySelector('#plansButton');

// NAV ELEMENTS

const delivery = document.querySelector('#navDelivery');
const howTo = document.querySelector('#navHowTo');
const cities = document.querySelector('#navCities');
const signUp = document.querySelector('#navSignUp');

// SMOOTH SCROLL FUNCTION

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

  // FUNKY EASING FUNCTION WITH A LOT OF MATH

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation); // will animate with 60fps
}

// NAV ELEMENT LISTENERS

delivery.addEventListener('click', function() {
  smoothScroll(featuresSection, 2000);
});

howTo.addEventListener('click', function() {
  smoothScroll(howToSection, 2000);
});

cities.addEventListener('click', function() {
  smoothScroll(citiesSection, 2000);
});

signUp.addEventListener('click', function() {
  smoothScroll(plansSection, 2000);
});

// HEADER BUTTONS ELEMENTS LISTENERS

featuresButton.addEventListener('click', function() {
  smoothScroll(featuresSection, 2000);
});
plansButton.addEventListener('click', function() {
  smoothScroll(plansSection, 2000);
});
