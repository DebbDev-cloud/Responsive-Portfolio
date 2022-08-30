

 const button = document.querySelector("#submit");
//  const name = document.querySelector("#name");
//  const email = document.querySelector("#mail");
//  const rowIn = document.querySelector("#row");

submit.addEventListener("click", function(){
    
   const name = document.getElementById("name");
   const email = document.getElementById("email");
   const row = document.getElementById("row");

   if( email == "" || name == "" || row == ""){
    swal({
        title: "Empty Field!",
        text: "Please fill the empty field!",
        icon: "warning",
        button: "OK!",
      });
   } else {
    swal({
        title: "Submitted Successfully!",
        icon: "success",
        button: "Good Job!",
      });
   }

})

// function clickMe(){
    
//     swal({
//         title: "Good job!",
//         text: "You clicked the button!",
//         icon: "success",
//         button: "Aww yiss!",
//       });
// }