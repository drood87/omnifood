const nav = document.querySelector('#nav-hook');
const bottomOfNav = nav.offsetHeight;
const header = document.querySelector('.header');
const bottomOfHeader = header.offsetHeight;

const logoWhite = document.querySelector('#logo-white');
const logoBlack = document.querySelector('#logo-black');

function fixNav() {
  if (window.scrollY >= bottomOfHeader) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav'); // append class of fixed nav
    logoBlack.classList.remove('user-nav__logo--black');
    logoWhite.classList.add('user-nav__logo--white');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav'); // remove class
    logoBlack.classList.add('user-nav__logo--black');
    logoWhite.classList.remove('user-nav__logo--white');
  }
}

window.addEventListener('scroll', fixNav);
