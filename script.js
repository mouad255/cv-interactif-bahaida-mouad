


console.log("JavaScript chargé correctement pour le CV de MOUAD.");


const header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('defile');
        } else {
            header.classList.remove('defile');
        }
    });
}


const mobileMenuToggle = document.querySelector('.bouton-menu-mobile');
const mobileNav = document.querySelector('.menu-mobile');

if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('lien-actif');
        mobileNav.classList.toggle('lien-actif');
    });

    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('lien-actif');
            mobileNav.classList.remove('lien-actif');
        });
    });
}


const navLinks = document.querySelectorAll('.liens-navigation a');      
const mobileLinks = document.querySelectorAll('.menu-mobile a');  

function setActiveLink(href) {
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === href) {
            link.classList.add('lien-actif');
        } else {
            link.classList.remove('lien-actif');
        }
    });

    
    mobileLinks.forEach(link => {
        if (link.getAttribute('href') === href) {
            link.classList.add('lien-actif');
        } else {
            link.classList.remove('lien-actif');
        }
    });
}


navLinks.forEach(link => {
    link.addEventListener('click', function () {
        const href = this.getAttribute('href'); 
        setActiveLink(href);
    });
});


mobileLinks.forEach(link => {
    link.addEventListener('click', function () {
        const href = this.getAttribute('href');
        setActiveLink(href);
    });
});


const contactButton = document.querySelector('.bouton-cta.style-secondaire');
if (contactButton) {
    contactButton.addEventListener('click', () => {
        alert("Merci pour votre intérêt ! 👋\nDescendez jusqu'au formulaire de contact pour m'envoyer un message.");
    });
}
