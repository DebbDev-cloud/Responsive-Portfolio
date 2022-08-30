

const button = document.querySelector("#submit");
const myName = document.querySelector("#name");
const email = document.querySelector("#mail");
const rowIn = document.querySelector("#row");

submit.addEventListener("click", function(){
   if(myName === "" || email === "" || rowIn === ""){
    swal({
        title: "Field empty!!",
        text: "Please fill the missing field!!",
        icon: "warning",
        button: "OK",
      });
    } else{
        swal({
            title: "Successfully Submitted!",
            icon: "success",
            button: "Good job!",
          })
    }  
})
// function requiredDetails(){
//     if(myName === ""){

//     }
// };