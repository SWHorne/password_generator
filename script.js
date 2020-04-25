// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passLength = parseInt(prompt('Password Length, must be between 8 and 128 characters'));
  if (passLength < 8 ||passLength > 128){
    return 'Your password must be between 8 and 128 characters in length.'
  }
  var isLowerCase = confirm('Do you want lowercase characters in your password?')
  var isUpperCase = confirm('Do you want uppercase characters in your password?')
  var isNumeric = confirm('Do you want numbers in your password?')
  var isSpecial = confirm('Do you want any special characters in your password?')
  if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecial){
    return "you need to choose something. I can't do this for you."
  }
  var lowerCase = [...'abcdefghijklmnopqrstuvwxyz']
  var upperCase = [...'abcdefghijklmnopqrstuvwxyz'.toUpperCase()]
  var numbers = [...'0123456789']
  var special = [...'!@#$%^&*()']
  var possibleCharacters = []
  if (isLowerCase){
    possibleCharacters.push(...lowerCase)
  }
  if (isUpperCase){
    possibleCharacters.push(...upperCase)
  }
  if (isNumeric){
    possibleCharacters.push(...numbers)
  }
  if (isSpecial){
    possibleCharacters.push(...special)
  }
  var password = ''
  for (var i = 0; i < passLength; i++){
    password = password + possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)]
  }
return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
