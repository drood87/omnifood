// DEBOUNCE FUNCTION TO THROTTLE SCROLL EVENT

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

// SLIDES IN WHEN SCROLLED IN

function checkSlides(e) {
  sliderImages.forEach(slideImage => {
    // halfway through the element
    const slideInAt =
      window.scrollY + window.innerHeight - slideImage.offsetHeight / 2;

    //bottom of the element
    const imageBottom = slideImage.offsetTop + slideImage.offsetHeight;
    const isHalfShown = slideInAt > slideImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      slideImage.classList.add('active');
    } else {
      // slideImage.classList.remove('active');
    }
  });
}
// SLIDE IN WHEN ELEMENT IS CLICKED

function slideOnClick() {
  sliderImages.forEach(slideElement => {
    slideElement.classList.add('active');
  });
}

// EVENT HANDLER FOR SCROLL EVENT

window.addEventListener('scroll', debounce(checkSlides));

// EVENT HANDLERS FOR CLICK EVENT ON NAV ELEMENTS

delivery.addEventListener('click', checkSlides);

howTo.addEventListener('click', slideOnClick);

cities.addEventListener('click', slideOnClick);

signUp.addEventListener('click', slideOnClick);

// HEADER BUTTONS ELEMENTS LISTENERS

featuresButton.addEventListener('click', slideOnClick);
plansButton.addEventListener('click', slideOnClick);
