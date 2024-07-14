
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

}
function prevSlide () {

}
function nextSlide () {
    imageIndex++;
    showImage(imageIndex);
}