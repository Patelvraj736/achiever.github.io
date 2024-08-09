document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');
    const menuItems = navList.querySelectorAll('a'); 

    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navList.classList.contains('show')) {
                navList.classList.remove('show');
            }
        });
    });
});
const instagramImage = document.getElementById('instagram-link');
const instagramURL = 'https://www.instagram.com/achievers_technologies_llc?igsh=NXA4eHpwbWNoMjB5&utm_source=qr';
instagramImage.addEventListener('click',(event)=> {
    event.preventDefault();
    window.open(instagramURL, '_blank');
});

const linkedinImage = document.getElementById('linkedin-link');
const linkedinURL = 'https://www.linkedin.com/company/achieverstechnologies/';
linkedinImage.addEventListener('click', (event)=> {
    event.preventDefault();
    window.open(linkedinURL, '_blank');
});

document.addEventListener('DOMContentLoaded', function() {
    const whoElement = document.querySelector('.who');

    function handleScroll() {
        const whoPosition = whoElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (whoPosition < windowHeight - 100) {
            whoElement.style.transform = 'translateY(0)';
            whoElement.style.opacity = '1'; 
        }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
const logoDiv = document.querySelector('.logo');
logoDiv.addEventListener('click', function () {
    window.location.href = 'index.html';
});
