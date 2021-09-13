// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLen = (function ask() {
    var n = prompt('Password Length (8 to 128):');
    return isNaN(n) || +n > 128 || +n < 8 ? ask() : n;
  }());

  var isUpperCase = confirm('Allow Uppercase Characters?');
  var isLowerCase = confirm('Allow Lowercase Characters?');
  var isNumbers = confirm('Allow Numeric Characters?');
  var isSpecialChar = confirm('Allow Special Characters?');

  var password = generatePassword(passLen, isUpperCase, isLowerCase, isNumbers, isSpecialChar)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generate password based on the given password length and character options.
function generatePassword(passLen, isUpperCase, isLowerCase, isNumbers, isSpecialChar) {

  var password = "";
  var charset = "";
  if (isUpperCase === true) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (isLowerCase === true) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

  if (isNumbers === true) {
    charset += "0123456789";
  }

  if (isSpecialChar === true) {
    charset += "!@#$%^&*()_+";
  }

  if (charset == "") {
    alert("Invalid options. Please select atleast one character type.");
    writePassword();
  }

  for (var i = 0, n = charset.length; i < passLen; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
