const inpt1 = document.getElementById("inpt");
const inpt = document.getElementById("inpt");
const nav = document.getElementsByTagName("navb");

inpt1.addEventListener("click", function handleClick() {
  inpt1.textContent = "(press Q on keyboard)";
  inpt1.classList.replace("inpt", "inpt_clicked");
});

let slideIndex = 1;
showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

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

// message Validation
let textArea = document.getElementById("message");
let characterCounter = document.getElementById("char_count");
const maxNumOfChars = 100;

const countCharacters = () => {
  let numOfEnteredChars = textArea.value.length;
  let counter = numOfEnteredChars;
  characterCounter.textContent = counter;
};

// emailValidation
function validateEmail() {
  var email = document.getElementById("email").value;
  var small = document.getElementById("error_email");
  var emailClass = document.getElementById("email");
  var email_label = document.getElementById("email_label");

  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.match(re)) {
    //Email valid. Procees to test if it's from the right domain (Second argument is to check that the string ENDS with this domain, and that it doesn't just contain it)
    if (
      email.indexOf(
        "@spitogatos.gr",
        email.length - "@spitogatos.gr".length
      ) !== -1
    ) {
      small.innerHTML = "Help Text";
      emailClass.id = "email_valid";
    }
  } else {
    small.style.color = "red";
    small.innerHTML = "Error Message";
    emailClass.id = "email_invalid";
    email_label.id = "email_label_error";
  }
}

function allLetter() {
  var text = document.getElementById("fname").value;
  var small = document.getElementById("error_fname");
  var fnameClass = document.getElementById("fname");
  var fname_label = document.getElementById("fname_label");

  var letters = /^[A-Za-z]+$/;
  if (text.match(letters)) {
    small.innerHTML = "Help Text";
  } else {
    small.style.color = "red";
    small.innerHTML = "Error Message";
    fnameClass.id = "fname_invalid";
    fname_label.id = "fname_label_error";
  }
}
// -----------------------------

function phonenumber() {
  var phone = document.getElementById("phone").value;
  var small = document.getElementById("error_phone");
  var phoneClass = document.getElementById("phone");
  var phone_label = document.getElementById("phone_label");
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phone.match(phoneno)) {
    small.innerHTML = "Help Text";
    // phoneClass.id = "phone_valid";
  } else {
    small.style.color = "red";
    small.innerHTML = "Error Message";
    phoneClass.id = "phone_invalid";
    phone_label.id = "phone_label_error";
    return false;
  }
}

function checkBoxes() {
  var option2 = document.getElementById("option2");
  var option1 = document.getElementById("option1");
  var invalid = document.getElementById("error_checkbox");

  var valid = false;
  if (option1.checked) {
    valid = true;
  } else if (option2.checked) {
    valid = true;
  }
  if (valid) {
    return true;
  } else {
    invalid.id = "error_checkbox_invalid";
  }
}

var submit = document.getElementById("submit_form");
submit.addEventListener("click", function () {
  validateEmail();
  phonenumber();
  allLetter();
  checkBoxes();
});
