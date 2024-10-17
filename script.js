const menuButton = document.getElementById('menuIcon');
const mobileHeader = document.getElementById('sidebar');


menuButton.addEventListener('click',()=>{
    mobileHeader.classList.toggle('open');
});
const text = "2025";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById('animated-text').textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust the speed here
    }
}

typeText();

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    // Loop back to the beginning if we go past the last slide
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Show the first slide initially
showSlide(currentIndex);