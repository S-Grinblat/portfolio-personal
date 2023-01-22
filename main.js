const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');
const homeContent = document.querySelector('.home__content');
const containerAbout = document.getElementById('about');
const containerPortfolio = document.getElementById('portfolio');
const containerContact = document.getElementById('contact');


navClose.addEventListener('click', () => {
    navMenu.style.bottom = '-100%';
    homeContent.style.background = 'none';
    containerAbout.style.background = 'none';
    containerPortfolio.style.background = 'none';
    containerContact.style.background = 'none';
});
navToggle.addEventListener('click', () => {
    navMenu.style.display = 'block';
    navMenu.style.bottom = '0';

    homeContent.style.background = 'rgba(0,0,0,0.5)';
    homeContent.style.transition = '.4s';

    containerAbout.style.background = 'rgba(0,0,0,0.5)';
    containerAbout.style.transition = '.4s';

    containerPortfolio.style.background = 'rgba(0,0,0,0.5)';
    containerPortfolio.style.transition = '.4s';

    containerContact.style.background = 'rgba(0,0,0,0.5)';
    containerContact.style.transition = '.4s';
});

function dark() {
    let element = document.body;
    element.classList.toggle('dark-mode');
    const portfolioBody = document.querySelector('.portfolio__container');
}


function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.style.bottom = '-100%';
    homeContent.style.background = 'none';
    containerAbout.style.background = 'none';
    containerPortfolio.style.background = 'none';
    containerContact.style.background = 'none';
}
navLink.forEach(n => n.addEventListener('click', linkAction));

