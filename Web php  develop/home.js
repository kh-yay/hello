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









