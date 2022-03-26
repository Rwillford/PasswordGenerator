// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = ["0", "1", "2", "3", "4","5", "6", "7", "8", "9"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

//Getting Password Length
//Criteria
function criteria(){
  var passwordLength = parseInt(prompt("How long do you wan your password? It can only be between 8 and 128 character."))
  if(Number.isNaN(passwordLength)){
    alert("Must be a number")
    return null
  }
  if (passwordLength < 8){
    alert("Password must be 8 characters")
    return null
  }
  if (passwordLength > 128){
    alert("Pasword can't be more then 128 character")
    return null
  }
  var upperConfirm = window.confirm("Would you like Upper Cases in your password?")
  var lowerConfirm = window.confirm("Would you like Lower Cases in your password?")
  var numberConfirm = window.confirm("Would you like Numbers in your password?")
  var symbolConfirm = window.confirm ("Would you like Symbols in your password?")
  
if(upperConfirm === false && lowerConfirm === false && numberConfirm === false && symbolConfirm === false) {
    window.alert("Your password must include at least one of the four criteria! Please select again")
    return null
  }  
  
  var passwordCriteria = {
    passwordLength: passwordLength,
    upperConfirm: upperConfirm,
    lowerConfirm: lowerConfirm,
    numberConfirm: numberConfirm,
    symbolConfirm: symbolConfirm
  }
  return passwordCriteria
}

function generatePassword(){
  var passOptions = criteria();
  var result = []
  var possible = []
  var certain =[]
  if (!passOptions) return null
  
  if (passOptions.upperConfirm){
    possible = possible.concat(upperCase)
    certain.push(getRandom(upperCase))
  }
  
  if (passOptions.lowerConfirm) {
    possible = possible.concat(lowerCase)
    certain.push(getRandom(lowerCase))
  }

  if (passOptions.numberConfirm) {
    possible = possible.concat(number)
    certain.push(getRandom(number))
  }

  if (passOptions.symbolConfirm){
    possible = possible.concat(symbols)
    certain.push(getRandom(symbols))
  }
  
  for(var i = 0; i < passOptions.passwordLength; i++){
    var possibleChar = getRandom(possible)
    result.push(possibleChar)
  }

  for(var i = 0; i < certain.length; i++){
    result[i] = certain[i]
  }

  return result.join('')
}

function getRandom(arr){
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomEl = arr[randomIndex]
  return randomEl
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
