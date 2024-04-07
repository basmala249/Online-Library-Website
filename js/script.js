document.addEventListener('DOMContentLoaded', function() {
   const loginForm = document.getElementById("logform");
   const signupForm = document.getElementById("signform");

    if(loginForm){
    loginForm.addEventListener("submit", function(event)  {
        event.preventDefault(); 
       window.location.href="Home-page.html";

    });
}

        signupForm.addEventListener("submit", function(event) {
          event.preventDefault(); 
          window.location.href= "Login.html";
        });
    

    });
