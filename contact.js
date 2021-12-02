const submitMessage = () => {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (firstname && lastname && email && message !== "") {
    if (email.match(regexEmail)) {
      return fetch("https://formspree.io/f/mbjwrzey", {
        method: "POST",
        body: JSON.stringify({
          FirstName: firstname,
          LastName: lastname,
          Email: email,
          message: message,
        }),
        headers: {
          Accept: "application/json",
        },
      }).then((response) => {
        swal.fire({
          position: "center",
          icon: "success",
          title:
            "Thank you for your email, we will look into this and get back to you sooner",
          showConfirmButton: false,
          timer: 2000,
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
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
