

// we are creating 5 arrays with Upper Case, Lower Case, Special charact, #, an empty array for the password ends up being///

  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var specChar = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":", "\'", "\\", "'", "$", "%", "&", "#", "_"]
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var password = [];
  var passwordNew = [];
  var securePassword = [];

  

//enter conditions//
function generatePassword(){ 
  Securepassword = [];
  password = [];
  
  var numChar = prompt ("Please indicate how many characters (8-128) you would like your secure password to contain.");
  if (numChar < 8){
    alert ("Minimum character count not met.");
  }
  console.log(numChar)

  // we are prompting the user for password requirements//
  var userLower = confirm ("Click OK to include LOWER CASE characters in your password.");
  var userUpper = confirm ("Click Ok to include UPPER CASE characters in your password.");
  var userSpec = confirm ("Click Ok to include SPECIAL CHARACTERS in your password.");
  var userNum = confirm("Click Ok to include numbers in your password.");

  // check to see if all of these are false //
  if(!userLower && !userNum && !userSpec && !userUpper){
    alert("Must select at least one character type");
  }

  // if the user follows all the specifications then we will push it to our array of character options//
  if(userLower){
    password.push(lowerCase);
  }
  if(userUpper){
    password.push(upperCase);
  }
  if(userSpec){
    password.push(specChar);
  }
  if(userNum){
    password.push(numbers);
  }



  console.log(passwordNew)


//this puts it in one array//
  passwordNew = password.flat();
  //passwordNew = passwordNew.join(",")
  console.log(passwordNew);


  //for loop
  for (i= 0; i < numChar; i++) {
    console.log(Math.floor(Math.random() * passwordNew.length));
    securePassword.push(passwordNew[Math.floor(Math.random() * passwordNew.length)]);
  }

  //remove copybtn class
  copyBtn.classList.remove("inactive");
  //add copybtn class to change color once the password is generated
  copyBtn.classList.add("active");


  // Assignment Code
  return securePassword.join("");
}

var generateBtn = document.getElementById("generate");
var copyBtn = document.getElementById("copyToClipboard");


// Write password to the #password input
  function writePassword() {
   var passwordFinal = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = passwordFinal;
    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}


//function that makes the button copy to clipboard
  function copyToClipboard() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
    //alerts what you just copied 
     alert(copyText.value + " copied to clipboard")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
