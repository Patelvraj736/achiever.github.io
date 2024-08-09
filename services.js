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
document.getElementById('menu-icon').addEventListener('click', () => {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
});
const service1Div = document.getElementById('service1');

service1Div.addEventListener('click', function () {
    window.location.href = 'service1.html';
});
const service2Div = document.getElementById('service2');

service2Div.addEventListener('click', function () {
    window.location.href = 'service2.html';
});
const service3Div = document.getElementById('service3');

service3Div.addEventListener('click', function () {
    window.location.href = 'service3.html';
});
const service4Div = document.getElementById('service4');

service4Div.addEventListener('click', function () {
    window.location.href = 'service4.html';
});
const service5Div = document.getElementById('service5');

service5Div.addEventListener('click', function () {
    window.location.href = 'service5.html';
});
const service6Div = document.getElementById('service6');

service6Div.addEventListener('click', function () {
    window.location.href = 'service6.html';
});
document.addEventListener('DOMContentLoaded', function () {
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