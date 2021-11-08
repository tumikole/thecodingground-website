const submitForm = () => {
  const name = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const contact = document.getElementById("contact").value;
  const id = document.getElementById("id").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const message = document.getElementById("message").value;


  if (name && lastname && contact && id && email && address && message !== "") {
    fetch("https://formspree.io/f/xeqvwzvj", {
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
    })
      .then((response) => {
        swal.fire("Succesfully registered");
      })
      .catch((error) => {
        swal.fire("error");
      });
  } else {
    Swal.fire({
      title: "Please fill all required fields.",
      width: 600,
      padding: "3em",
      // background: '#fff url(./icon/linkedin-in-brands.svg)',
      backdrop: `
      rgba(0,0,123,0.4)
      url("")
      left top
      no-repeat
    `,
    });
  }
};

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
