const typed = new Typed('#element', {
  strings: ['{Web Developer', '{Designer', '{Freelancer'],
  typeSpeed: 70,
  backSpeed: 30,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
  cursorChar: '}',
});

TweenMax.from('.logo', 1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  'nav ul li',
  1,
  {
    opacity: 0,
    x: -60,
    ease: Power3.easeInOut,
  },
  0.08
);

TweenMax.from('.title', 1.2, {
  opacity: 0,
  delay: 0.5,
  x: -80,
  ease: Expo.easeInOut,
});

TweenMax.from('.text', 1.2, {
  opacity: 0,
  delay: 0.7,
  x: -80,
  ease: Expo.easeInOut,
});

TweenMax.from('.btns', 1, {
  opacity: 0,
  delay: 0.9,
  x: -80,
  ease: Expo.easeInOut,
});

TweenMax.from('.instagram', 1, {
  opacity: 0,
  delay: 1.3,
  x: -70,
  ease: Expo.easeInOut,
});

TweenMax.from('.youtube', 1, {
  opacity: 0,
  delay: 1.6,
  x: 70,
  ease: Expo.easeInOut,
});

TweenMax.from('.facebook', 1, {
  opacity: 0,
  delay: 1.9,
  x: 70,
  ease: Expo.easeInOut,
});

TweenMax.from('.social_media', 1, {
  opacity: 0,
  delay: 2.2,
  y: 100,
  ease: Expo.easeInOut,
});

// ========== menu Hamburger ==========
let burgerMenu = document.querySelector('.nav_burger');
let navbar = document.querySelector('.nav_list');
let navItems = document.querySelectorAll('.nav_list li a');
burgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('move');
  if (navbar.classList.contains('move')) {
    burgerMenu.classList.add('activeBurger');
  } else {
    burgerMenu.classList.remove('activeBurger');
  }
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navbar.classList.remove('move');
    burgerMenu.classList.remove('activeBurger');
  });
});
