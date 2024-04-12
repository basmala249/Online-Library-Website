document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById("signform");

       signupForm.addEventListener("submit", function(event) {
         event.preventDefault(); 
         window.location.href= "Login.html";
       });
   

   });
