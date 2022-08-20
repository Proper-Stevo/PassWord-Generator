
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Assignment code here
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var lowerCase = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var allArray = [specialChar, lowerCase, numeric, upperCase];

function generatePassword() {
  var possibleCharacter = [];
  var userLength = prompt("Please select how many characters? \n 8 Minimum, 128 Maximum");
  var userLower = confirm("Would you like to use lower case letters? \n Ok for Yes, Cancel for No");
  var userChar = confirm("Would you like to use special characters? \n Ok for Yes, Cancel for No");
  var userCapital = confirm("How many capital letters? \n Ok for Yes, Cancel for No");
  var userNumbers = confirm("Would you like to use numbers? \n Ok for yes, Cancel for No");
  var password = [];

  if ( userLength < 8 || userLength > 128) {
   // alert ("Please select a number between 8 and 128 \n for Password Length");
    prompt.userLength;
    return alert("Please Select Between 8 and 128");
    }
    if (specialChar || lowerCase || numeric || upperCase) {
    } if (userLower) {
      possibleCharacter = possibleCharacter.concat(lowerCase);
    } if (userCapital) {
      possibleCharacter = possibleCharacter.concat(upperCase);
    } if (userChar) {
      possibleCharacter = possibleCharacter.concat(specialChar);
    } if (userNumbers) {
      possibleCharacter = possibleCharacter.concat(numeric);
    } if (!userLower && !userChar && !userCapital && !userNumbers)
     alert("Please select one character for your password!"); 
     console.log(possibleCharacter);
     for (i=0; i<userLength; i++){
     
      password = password.concat( getRandom(possibleCharacter));
    }
    return password
  }
    function getRandom(arr) {
      var randIndex = Math.floor(Math.random() * arr.length);
      var randElement = arr[randIndex];
      return randElement
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);