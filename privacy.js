

document.getElementById('menu-icon').addEventListener('click', ()=> {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
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

const logoDiv = document.querySelector('.logo');
logoDiv.addEventListener('click', function () {
    window.location.href = 'index.html';
});

const navbar = document.querySelector('.navbar');
const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');

// Function to toggle menu visibility on small screens
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('show');
});


