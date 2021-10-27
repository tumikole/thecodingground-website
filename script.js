const submitForm = () => {
    const name = document.getElementById('firstname').value
    const lastname = document.getElementById('lastname').value
    const contact = document.getElementById('contact').value
    const id = document.getElementById('id').value
    const email = document.getElementById('email').value
    const address = document.getElementById('address').value

 
  if(name && lastname && contact && id && email && address !== ''){
    fetch("https://formspree.io/f/xeqvwzvj", {
        method: 'POST',
        body: JSON.stringify({Firstname : name, Lastname: lastname, Id: id, Contact: contact, Email: email, Address: address}),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        swal.fire("Succesfully registered");
      }).catch(error => {
        swal.fire("error");
      });
} else{
  Swal.fire({
    title: 'Please fill all required fields.',
    width: 600,
    padding: '3em',
    // background: '#fff url(./icon/linkedin-in-brands.svg)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("")
      left top
      no-repeat
    `
  })}
}
  
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
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
  