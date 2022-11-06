const inpt1 = document.getElementById("inpt");
const inpt = document.getElementById("inpt");
const nav = document.getElementsByTagName("navb");

inpt1.addEventListener("click", function handleClick() {
  inpt1.textContent = "(press Q on keyboard)";
  inpt1.classList.replace("inpt", "inpt_clicked");
});

let slideIndex = 1;
showSlides(slideIndex);

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
      // emailClass.id = "email_valid";
    }
  } else {
    small.style.color = "red";
    small.innerHTML = "Error Message";
    emailClass.id = "email_invalid";
    email_label.id = "email_label_error";
  }
}

// name validation

function allLetter() {
  var text = document.getElementById("fname").value;
  var small = document.getElementById("error_fname");
  var fnameClass = document.getElementById("fname");
  var fname_label = document.getElementById("fname_label");

  var letters = /^[A-Za-z][A-Za-z\s]*$/;
  if (text.match(letters)) {
    small.innerHTML = "Help Text";
  } else {
    small.style.color = "red";
    small.innerHTML = "Error Message";
    fnameClass.id = "fname_invalid";
    fname_label.id = "fname_label_error";
  }
}
// phone validation

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

// checkBoxes

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
  console.log(data);
});
var select = document.getElementById("category");
let data = [];
(function () {
  fetch("https://run.mocky.io/v3/0b8fbded-6ce4-4cb2-bf2f-d2c39207506b")
    .then((response) => response.json())
    .then((json) => {
      data = [...json];
      if (data.length != 0) {
        data.forEach(function (item) {
          var opt = document.createElement("option");
          opt.value = item.categoryId;
          opt.innerHTML = item.name;

          select.appendChild(opt);
        });
      }
    });
})();

select.addEventListener("change", function () {
  var subcategories = data[this.value]["subCategories"];
  console.log(subcategories);
  var sub = document.getElementById("categorySelect");
  sub.innerHTML = "";
  if (subcategories.length != 0) {
    subcategories.forEach(function (item) {
      var opt = document.createElement("option");
      opt.value = item.subCategoryId;
      opt.innerHTML = item.name;

      sub.appendChild(opt);
    });
  }
});
