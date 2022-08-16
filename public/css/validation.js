

        function validateUsername() {
            var username = document.getElementById('username');
            var exp = /^[A-Za-z0-9+'@'+'#'+'_']{6,15}$/;
            if(exp.test(username.value) === false){
              username.blur();
              document.getElementById("usererror").style.display="block";
              //textContent="username should be 6-15 length";
              
              username.style.border = "3px solid red";
                return false;
            } else {
              document.getElementById("usererror").style.display="none";
  
              username.style.border = "2px solid black";
            }
          }
  
          function validatePassword() {
           
            var password = document.getElementById('password');
            var exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
            if(exp.test(password.value) === false){
              password.blur();
              //password should be of minimum 6 characters and should contain at least one upper case,
              //one lower case, one digit, one special character and it should start with an alphabet only.`);
              document.getElementById("passerror").style.display="block";
              password.style.border = "3px solid red";
              return false;
            } else {
              document.getElementById("passerror").style.display="none";
              password.style.border = "2px solid black";
            }
          }
  
          function validateEmail() {
     
            var email = document.getElementById('email');
            var exp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (exp.test(email.value) === false) {
              email.blur();
              
              document.getElementById("emailerror").style.display="block";
              email.style.border = "3px solid red";
              return false;
            } else {
              document.getElementById("emailerror").style.display="none";
              email.style.border = "2px solid black";
            }
          }
  
  