// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var hasLetters = confirm('Do you want lower-case letters in your password?');
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// const randomLetter = letters[Math.floor(math.random() * letters.length)];

var hasUCLetters = confirm('Do you want to include upper-case letters in your password?');
const ucLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// const randomucLetter = ucletters[Math.floor(math.random() * ucletters.length)];

var hasSpecialCharacters = confirm('Do you want to include special Characters in your password?');
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
// const randomSpecialCharacters = specialCharacters[Math.floor(math.random() * specialCharacters.length)];

var hasNumbers = confirm('Do you want the password to include numbers?');
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// const randomNumbers = numbers[Math.floor(math.random() * numbers.length)];

var pw1 = [letters, ucLetters, specialCharacters, numbers];
var pw2 = [letters, specialCharacters, numbers];
var pw3 = [letters, ucLetters, specialCharacters];
var pw4 = [letters, ucLetters, numbers];
var pw5 = [letters, specialCharacters];
var pw6 = [letters, numbers];
var pw7 = [letters, ucLetters];
var pw8 = [ucLetters, specialCharacters, numbers];
var pw9 = [ucLetters, specialCharacters];
var pw10 = [ucLetters, numbers];
var pw11 = [specialCharacters, numbers];

// function passwordLength() {
//   prompt('Pick a password length between 8 and 128');
//   if (passwordLength > 128 || passwordLength < 8)
//   return alert('Your password must be a minnimum of 8 characters, and no more than 128 characters.');
// }

    //everything can be contained in this function. The return value should be a string.
    function generatePassword() {

        let passwordLength = prompt('Pick a password length between 8 and 128'); {
        if (passwordLength > 128 || passwordLength < 8) {
        return alert('Your password must be a minnimum of 8 characters, and no more than 128 characters.');
        }
      }
        if (hasLetters == true && hasUCLetters == true && hasSpecialCharacters == true && hasNumbers == true) {
            let password = pw1;
        }
        else if(hasLetters == true && hasUCLetters == false && hasSpecialCharacters == true && hasNumbers == true) {
            let password = pw2;
      }
        else if(hasLetters == true && hasUCLetters == true && hasSpecialCharacters == true && hasNumbers == false) {
            let password = pw3;
        }
        else if(hasLetters == true && hasUCLetters == true && hasSpecialCharacters == false && hasNumbers == true) {
            let password = pw4;
        }
        else if(hasLetters == true && hasUCLetters == false && hasSpecialCharacters == true && hasNumbers == false) {
            let password = pw5;
        }
        else if(hasLetters == true && hasUCLetters == false && hasSpecialCharacters == false && hasNumbers == true) {
        let password = pw6;
        }
        else if(hasLetters == false && hasUCLetters == true && hasSpecialCharacters == false && hasNumbers == false) {
        let password = pw7;
        }
        else if(hasLetters == false && hasUCLetters == true && hasSpecialCharacters == true && hasNumbers == true) {
        let password = pw8;
        }
        else if(hasLetters == false && hasUCLetters == true && hasSpecialCharacters == true && hasNumbers == false) {
        let password = pw9;
        }
        else if(hasLetters == false && hasUCLetters == true && hasSpecialCharacters == false && hasNumbers == true) {
        let password = pw10;
        }
        else if(hasLetters == false && hasUCLetters == false && hasSpecialCharacters == true && hasNumbers == true) {
        let password = pw11;
        }
        else if(hasLetters == true && hasUCLetters == false && hasSpecialCharacters == false && hasNumbers == false) {
        let password = letters;
        }
        else if(hasLetters == false && hasUCLetters == true && hasSpecialCharacters == false && hasNumbers == false) {
        let password = ucLetters;
        }
        else if(hasLetters == false && hasUCLetters == false && hasSpecialCharacters == true && hasNumbers == false) {
        let password = specialCharacters;
        }
        else if(hasLetters == false && hasUCLetters == false && hasSpecialCharacters == false && hasNumbers == true) {
        let password = numbers;
        }
        return password[Math.floor(Math.random() * password.passwordLength)];
    }