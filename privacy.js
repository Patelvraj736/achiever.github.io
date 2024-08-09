
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');


    menuIcon.addEventListener('click', (event) => {
        event.stopPropagation(); 
        navList.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!navList.contains(event.target) && !menuIcon.contains(event.target)) {
            navList.classList.remove('show');
        }
    });
    const menuItems = navList.querySelectorAll('a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            navList.classList.remove('show');
        });
    });
});

const instagramImage = document.getElementById('instagram-link');
const instagramURL = 'https://www.instagram.com/achievers_technologies_llc?igsh=NXA4eHpwbWNoMjB5&utm_source=qr';
instagramImage.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.open(instagramURL, '_blank');
});

const linkedinImage = document.getElementById('linkedin-link');
const linkedinURL = 'https://www.linkedin.com/company/achieverstechnologies/';
linkedinImage.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.open(linkedinURL, '_blank'); 
});

const logoDiv = document.querySelector('.logo');
logoDiv.addEventListener('click', function () {
    window.location.href = 'index.html';
});

