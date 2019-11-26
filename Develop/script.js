
  // we are creating 5 arrays with Upper Case, Lower Case, Special charact, #, an empty array for the password ends up being///

  //enter conditions//

  //run a loop//
  function generatePassword(){}

var numChar = prompt ("how many characters would you like to get")
if (numChar < 8){
  alert ("minimum char count too low")
}
console.log(numChar)


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
