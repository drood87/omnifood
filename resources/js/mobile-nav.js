const hamburgerButton = document.querySelector('#js-hook-hamburger');
const mainNav = document.querySelector('#js-hook-main-nav');

function expandNav() {
  if (mainNav.style.display === 'block') {
    mainNav.style.display = 'none';
    // logoBlack.classList.remove = 'user-nav__logo--expand';
  } else {
    mainNav.style.display = 'block';
    // logoBlack.classList.add = 'user-nav__logo--expand';
  }
}

// CHECK IF SCREEN WIDTH

function checkScreenWidth() {
  const viewportWidth = window.innerWidth;
  if (viewportWidth > 800) {
    mainNav.style.display = 'flex';
  } else {
    mainNav.style.display = 'none';
    // expandNav();
  }
}

hamburgerButton.addEventListener('click', expandNav);
window.addEventListener('resize', checkScreenWidth);
