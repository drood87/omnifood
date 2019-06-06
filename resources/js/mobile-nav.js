const hamburgerButton = document.querySelector('#js-hook-hamburger');
const closeButton = document.querySelector('#js-hook-close');
const mainNav = document.querySelector('#js-hook-main-nav');
const logoNavBlack = document.querySelector('#logo-black');

function expandNav() {
  if (mainNav.style.display === 'block') {
    closeButton.style.display = 'none';
    hamburgerButton.style.display = 'inline-block';
    mainNav.style.display = 'none';
    logoHeight();
  } else {
    mainNav.style.display = 'block';
    closeButton.style.display = 'inline-block';
    hamburgerButton.style.display = 'none';
    logoNavBlack.style.height = 12 + 'rem';
  }
}

// CHECK IF SCREEN WIDTH

function checkScreenWidth() {
  const viewportWidth = window.innerWidth;
  logoHeight();
  if (viewportWidth > 800) {
    closeButton.style.display = 'none';
    hamburgerButton.style.display = 'none';
    mainNav.style.display = 'flex';
    logoHeight();
  } else {
    hamburgerButton.style.display = 'inline-block';
    closeButton.style.display = 'none';
    mainNav.style.display = 'none';
  }
}

function logoHeight() {
  logoNavBlack.style.height = 6 + 'rem';
}

closeButton.addEventListener('click', expandNav);
hamburgerButton.addEventListener('click', expandNav);
window.addEventListener('resize', checkScreenWidth);
