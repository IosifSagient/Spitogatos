const inpt1 = document.getElementById("inpt");
const inpt = document.getElementById("inpt");
const nav = document.getElementsByTagName("navb");

inpt1.addEventListener("click", function handleClick() {
  inpt1.textContent = "(press Q on keyboard)";
  inpt1.classList.replace("inpt", "inpt_clicked");
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// function navb() {
//   while (currentSlide(2) || currentSlide(3)) {
//     nav.className === "navb2";
//   }
// }
// navb();

// function pressQ() {
//   document.addEventListener("keypress", function (event) {
//     if (event.keyCode === 81) {
//       return currentSlide(3);
//     }
//   });
// }
