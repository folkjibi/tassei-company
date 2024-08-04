const bannerSlide = document.getElementById('bannerSlide');
const images = bannerSlide.querySelectorAll('img');
let currentImageIndex = 0;

function changeImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}

setInterval(changeImage, 5000);