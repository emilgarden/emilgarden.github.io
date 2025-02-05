// navigation.js

class Navigation {
    constructor() {
        // Element referanser
        this.navToggle = document.querySelector('.nav-toggle');
        this.navLinks = document.querySelector('.nav-links');
        
        // Bind metoder
        this.toggleMenu = this.toggleMenu.bind(this);
        this.setActiveLink = this.setActiveLink.bind(this);
        
        // Initialiser
        this.init();
    }

    init() {
        // Legg til event listeners
        this.navToggle.addEventListener('click', this.toggleMenu);
        
        // Sett aktiv lenke
        this.setActiveLink();
        
        // Lukk meny ved klikk utenfor
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.main-nav')) {
                this.navLinks.classList.remove('show');
            }
        });
    }

    toggleMenu(e) {
        e.stopPropagation(); // Hindre at klikk propagerer
        this.navLinks.classList.toggle('show');
    }

    setActiveLink() {
        const currentPath = window.location.pathname;
        const navItems = document.querySelectorAll('.nav-links a');
        
        navItems.forEach(item => {
            // Fjern eksisterende aktiv klasse
            item.classList.remove('active');
            
            // Sjekk om lenken matcher current path
            if (item.getAttribute('href') === currentPath ||
                (currentPath === '/' && item.getAttribute('href') === 'index.html')) {
                item.classList.add('active');
            }
        });
    }
}

// Initialiser navigasjon når DOM er lastet
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});