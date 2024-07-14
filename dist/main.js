
const slides = document.querySelectorAll(".slides img");
let imageIndex = 0;
let intervalID = null;

initializeSlider();

function initializeSlider() {

    slides[imageIndex].classList.add("displaySlide");
    intervalID = setInterval(nextSlide, 5000);
    console.log(intervalID);
}
function showImage (index) {

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[imageIndex].classList.add("displaySlide");
}
function prevSlide () {

}
function nextSlide () {
    imageIndex++;
    showImage(imageIndex);
}