// Feature page

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
const testimonialContainer = document.querySelector(".testimonial-container");
const testimonialBoxes = document.querySelectorAll(".testimonial-box");

menuIcon.addEventListener('click',() => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  navbg.classList.toggle('active');
});
// JavaScript for pop-up functionality
document.getElementById("subscribe-btn").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("subscribe-popup").style.display = "flex";
});

document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("subscribe-popup").style.display = "none";
});


window.addEventListener("click", function (event) {
  const popup = document.getElementById("subscribe-popup");
  if (event.target === popup) {
      popup.style.display = "none";
}
});

let currentSlide = 0;
function showslide(index){
  const offset = -index * testimonialBoxes[0].offsetWidth;
  testimonialContainer.style.transform = `translateX(${offset}px)`;
}
function showPreviousSlide(){
  currentSlide = (currentSlide -1 + testimonialBoxes.length) % 
  testimonialBoxes.length;
  showslide(currentSlide);
}
function showNextSlide(){
  currentSlide =(currentSlide + 1) % testimonialBoxes.length;
  showslide(currentSlide);
}
showslide(currentSlide);
