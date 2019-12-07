
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
  passwordArray = []
  var numChar = prompt ("how many characters would you like to get between 8-128?")
  if (numChar < 8){
    alert ("minimum char count too low")
  }
  console.log(numChar)
var userLower = confirm ("Click OK to include LOWER CASE characters in your password")
var userUpper = confirm ("Click Ok to include UPPER CASE characters in your password")
var userSpec = confirm ("Click Ok to include SPECIAL CHARACTERS in your password")
var userNum = confirm("Click Ok to include numbers in your password")
if(userLower === true){
  password.push(lowerCase);
}
if(userUpper === true){
  password.push(upperCase);
}
if(userSpec === true){
  password.push(specChar);
}
if(userNum === true){
  password.push(numbers);
}

console.log(passwordNew)



passwordNew = password.flat();
console.log(passwordNew);

//for loop
for (i= 0; i < password; i++) {
  console.log(Math.floor(Math.random() * passwordNew.length));
  securePassword.push(newPassword[Math.floor(Math.random() * passwordNew.length)]);
}

return securePassword.join("");

}


// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copyToClipboard");
​
​
// Write password to the #password input
  function writePassword() {
    var passwordFinal = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = passwordFinal;
    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}
​
//function that makes the button copy to clipboard
  function copyToClipboard() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
    //alerts what you just copied 
    alert(copyText.value + " copied to clipboard")
}
​
​
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
