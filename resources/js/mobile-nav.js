const hamburgerButton = document.querySelector('#js-hook-hamburger');
const mainNav = document.querySelector('#js-hook-main-nav');
// const logoBlack = document.querySelector('#logo-black');

function expandNav() {
  if (mainNav.style.display === 'block') {
    mainNav.style.display = 'none';
    // logoBlack.classList.remove = 'user-nav__logo--expand';
  } else {
    mainNav.style.display = 'block';
    // logoBlack.classList.add = 'user-nav__logo--expand';
  }
}

hamburgerButton.addEventListener('click', expandNav);
