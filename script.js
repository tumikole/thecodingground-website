// swal.fire("Succesfully registered");
// document.getElementById("click").addEventListener("click",function(){

//     // swal.fire("Succesfully registered");
// })

// var form = document.getElementById("my-form");

// async function handleSubmit(event) {
//     event.preventDefault();
//     //   var status = document.getElementById("my-form-status");
//     var data = new FormData(event.target);
//     fetch(event.target.action, {
//         method: form.method,
//         body: data,
//         headers: {
//             'Accept': 'application/json'
//         }
//     }).then(response => {
//         swal.fire("Succesfully registered");
//         // status.innerHTML = "Thanks for your submission!";
//         form.reset()
//       }).catch(error => {
//         swal.fire("error");
//         // status.innerHTML = "Oops! There was a problem submitting your form"
//       });
//     }
//     form.addEventListener("submit", handleSubmit)


const submitForm = () => {
    const name = document.getElementById('firstname').value
    // event.preventDefault();
    // var data = new FormData(event.target);
    const data = {name : 'dkfjsdkfjd' , surname:"dlfjsdkf"} 
    fetch("https://formspree.io/f/xeqvwzvj", {
        method: 'POST',
        body: JSON.stringify({name : "name"}),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        swal.fire("Succesfully registered");
        // status.innerHTML = "Thanks for your submission!";
      }).catch(error => {
        swal.fire("error");
        // status.innerHTML = "Oops! There was a problem submitting your form"
      });
}



