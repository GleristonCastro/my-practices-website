const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
};

if (navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
};

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

const scrollHeader = () => {
  const header = document.getElementById('header');
  this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}

window.addEventListener('scroll', scrollHeader);

const popularSwiper = new Swiper('.popular__content', {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      centeredSlides: false,
    },
  },
});

const faqItem = document.querySelectorAll('.choose__faq-item');

faqItem.forEach((item) => {
  const faqHeader = item.querySelector('.choose__faq-header');

  faqHeader.addEventListener('click', () => {

    const openItem = document.querySelector('.faq-open');

    toggleItem(item);

    if(openItem && openItem != item) {
      toggleItem(openItem)
    }
  })
});

const toggleItem = (item) => {
  const faqContent = item.querySelector('.choose__faq-content');

  if(item.classList.contains('faq-open')){
    faqContent.removeAttribute('style');
    item.classList.remove('faq-open');
  } else {
    faqContent.style.height = faqContent.scrollHeight + 'px';
    item.classList.add('faq-open');
  }
};

const scrollToTop = () => {
  const scrollUp = document.getElementById('scroll-up');

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollToTop);

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollVertical = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop -58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if(scrollVertical > sectionTop && scrollVertical <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    };
  });
};

window.addEventListener('scroll', scrollActive);

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add': 'remove'](iconTheme);
};

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});