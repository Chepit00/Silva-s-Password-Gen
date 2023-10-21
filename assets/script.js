// Assignment Code
var characterLength = []

var chooseArr = []

var numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

var characterArr = ["!", "#", "$", "%",">", "?", "@", "[", "]", "^", "&", "'", "(", ")", "*", "+", ",", "-", ".",]

var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



  //1. promt the user for the password criteria
  // a. password length 8-128
  // b. uppercase, lowercase, special characters, numbrers


  //2. validate the inputs A and B

  //3. generate password based on A and B inputs
  
  //4. display password to the page
  

// Write password to the #password input
function writePassword() {


 characterLength = parseInt(prompt("How many character would? Choose between 8-128"));

  if (characterLength < 8 || characterLength > 128) {
    alert("Length should be between 8 & 128 characters.");
  }

  if (confirm("Will this contain numbers?")) {
    chooseArr = chooseArr.concat(numbersArr);
  }

  if (confirm("Will this contain special characters?")) {
    chooseArr = chooseArr.concat(characterArr);
  }

  if (confirm("Will this contain Uppercase letters?")) {
    chooseArr = chooseArr.concat(uppercaseArr);
  }

  if (confirm("Will this contain Lowercase letters?")) {
    chooseArr = chooseArr.concat(lowercaseArr);
  }

  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;

}
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * chooseArr.length);
    password = password + chooseArr[randomIndex];
  }
    return password;
  }

