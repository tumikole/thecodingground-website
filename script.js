const submitForm = () => {
  const name = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const contact = document.getElementById("contact").value;
  const id = document.getElementById("id").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const message = document.getElementById("message").value;

  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regexContact = /^(\+?27|0)[6-8][0-9]{8}$/;

  if (name && lastname && contact && id && email && address && message !== "") {
    if (contact.match(regexContact)) {
      if (email.match(regexEmail)) {
        return fetch("https://formspree.io/f/mbjwrzey", {
          method: "POST",
          body: JSON.stringify({
            FirstName: name,
            LastName: lastname,
            DateOfBirth: id,
            Contact: contact,
            Email: email,
            Address: address,
            message: message,
          }),
          headers: {
            Accept: "application/json",
          },
        }).then((response) => {
          Swal.fire({
            position: 'center',
  icon: 'success',
  title: 'Registered successfully',
  showConfirmButton: false,
  timer: 2000
          });
          reset();
        });
      } else {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You have entered an incorrect email address",
        });
      }
    } else {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have entered an invalid contact number",
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill all the required fields",
    });
  }
};

function reset() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("contact").value = "";
  document.getElementById("id").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.getElementById("message").value = "";
  document.getElementById("file").value = "";
}

var mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


function readMore(names) {
    var dots = document.querySelector(`.read[info-names="${names}"] #dots`);
    var moreText = document.querySelector(`.read[info-names="${names}"] #more`);
    var btnText = document.querySelector(`.read[info-names="${names}"] #myButton`);
    
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.textContent = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.textContent = "Read less"; 
      moreText.style.display = "inline";
    }
  }