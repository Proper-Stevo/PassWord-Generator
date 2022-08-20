
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Assignment code here
var specialChar = ["!", "\u0022", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\u005C", "]", "^", "_", "`", "{", "|", "}", "~"];
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numeric = "1234567890";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var allArray = [specialChar, lowerCase, numeric, upperCase];

function generatePassword() {
  var password = " ";
  var userLength = prompt("Please select how many characters? \n 8 Minimum, 128 Maximum");
  var userLower = confirm("Would you like to use lower case letters? \n Ok for Yes, Cancel for No");
  var specialChar = confirm("Would you like to use special characters? \n Ok for Yes, Cancel for No");
  var userCapital = confirm("How many capital letters? \n Ok for Yes, Cancel for No");
  var numeric = confirm("Would you like to use numbers? \n Ok for yes, Cancel for No");

  if ( userLength < 8 || userLength > 128) {
   // alert ("Please select a number between 8 and 128 \n for Password Length");
    prompt.userLength;
    return alert("Please Select Between 8 and 128");
  } else {
    return password;
  }

  function password () {
    var writePassword = [Math.floor(Math.random() * allArray.userLength)]
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);