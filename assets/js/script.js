// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = ["0", "1", "2", "3", "4","5", "6", "7", "8", "9"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

//Getting all the criteria to make the pasword 
function criteria(){
  //Getting password length
  var passwordLength = parseInt(prompt("How long do you wan your password? It can only be between 8 and 128 character."))
  //Making sure there is a number enter
  if(Number.isNaN(passwordLength)){
    alert("Must be a number")
    return null
  }
  
  //Making sure the length is at least 8 characters
  if (passwordLength < 8){
    alert("Password must be 8 characters")
    return null
  }

  //making sure the length isn't longer then 128 characters
  if (passwordLength > 128){
    alert("Pasword can't be more then 128 character")
    return null
  }

  //Confirming which arrays to include in password
  var upperConfirm = window.confirm("Would you like Upper Cases in your password?")
  var lowerConfirm = window.confirm("Would you like Lower Cases in your password?")
  var numberConfirm = window.confirm("Would you like Numbers in your password?")
  var symbolConfirm = window.confirm ("Would you like Symbols in your password?")

//If none of the arrays are selected it doesn't run and must try again  
if(upperConfirm === false && lowerConfirm === false && numberConfirm === false && symbolConfirm === false) {
    window.alert("Your password must include at least one of the four criteria! Please select again")
    return null
  }  
  
  //Criteria into Objects
  var passwordCriteria = {
    passwordLength: passwordLength,
    upperConfirm: upperConfirm,
    lowerConfirm: lowerConfirm,
    numberConfirm: numberConfirm,
    symbolConfirm: symbolConfirm
  }
  return passwordCriteria
}
 //where the magic happens in making the password
function generatePassword(){
  //variables for the arrays
  var passOptions = criteria();
  var result = []
  var possible = []
  var certain =[]
  //if no criteria is enter it doesn't run
  if (!passOptions) return null
  
  //Taking UpperCase possibilities and randomizing
  if (passOptions.upperConfirm){
    possible = possible.concat(upperCase)
    certain.push(getRandom(upperCase))
  }
  
  //Taking lowerCase possibilities and randomizing
  if (passOptions.lowerConfirm) {
    possible = possible.concat(lowerCase)
    certain.push(getRandom(lowerCase))
  }
  
  //Taking number possibilities and randomizing
  if (passOptions.numberConfirm) {
    possible = possible.concat(number)
    certain.push(getRandom(number))
  }
  
  //Taking symbols possibilities and randomizing
  if (passOptions.symbolConfirm){
    possible = possible.concat(symbols)
    certain.push(getRandom(symbols))
  }
  //randomizing the order the arrays inside the length
  for(var i = 0; i < passOptions.passwordLength; i++){
    var possibleChar = getRandom(possible)
    result.push(possibleChar)
  }
  //getting all possibilities to fit in the password length
  for(var i = 0; i < certain.length; i++){
    result[i] = certain[i]
  }
  
  //Getting the results in a string
  return result.join('')
}

//Randomizing the arrays
function getRandom(arr){
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomEl = arr[randomIndex]
  return randomEl
}

//Writing the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
