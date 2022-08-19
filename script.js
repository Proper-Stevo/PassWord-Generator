// Assignment code here
var specialChar = ["!", "\u0022", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\u005C", "]", "^", "_", "`", "{", "|", "}", "~"];
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numeric = "1234567890";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var allArray = [specialChar, lowerCase, numeric, upperCase];

function generatePassword() {
  var userLength = confirm("Please select how many characters? \n 8 Minimum, 128 Maximum");
  var userLower = confirm("How many lower case letters? \n Ok for Yes, Cancel for No");
  var specialChar = confirm("How many special characters? \n Ok for Yes, Cancel for No");
  var userSpecial = confirm("How many ? \n Ok for Yes, Cancel for No");
  var userCapital = confirm("How many capital letters? \n Ok for Yes, Cancel for No");

  if (userLenght < 8 || userLength > 128) {
    alert ("Please select a number between 8 and 128 \n for Password Length");

  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);