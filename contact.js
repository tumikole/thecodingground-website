const submitMessage = () => {
    const firstname = document.getElementById('firstname').value
    const lastname = document.getElementById('lastname').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

 
  if(firstname && lastname && email && message !== ''){
    fetch("https://formspree.io/f/mdoyvlyg", {
        method: 'POST',
        body: JSON.stringify({Firstname : firstname, Lastname: lastname, Email: email, Message: message}),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        
        swal.fire("We'll get back to you as soon as we receive your request");
      }).catch(error => {
        swal.fire("error");
      });
    //   firstname.value= ""
} else{
    Swal.fire({
        title: 'Please fill all required fields.',
        width: 600,
        padding: '3em',
        // background: '#fff url(./icon/linkedin-in-brands.svg)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/img/warning.png")
          left top
          no-repeat
        `
      })}
  }

