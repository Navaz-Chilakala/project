function validatePassword(x){           
    var password = document.getElementsByClassName('password');
    var exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if(exp.test(password[x].value) === false){
      password[x].blur();
      //password should be of minimum 6 characters and should contain at least one upper case,
      //one lower case, one digit, one special character and it should start with an alphabet only.`);
      document.getElementById("passerror"+x.toString()).style.display="block";
      password[x].style.border = "3px solid red";
      return false;
    } else {
      document.getElementById("passerror"+x.toString()).style.display="none";
      password[x].style.border = "2px solid black";
    }
  }
