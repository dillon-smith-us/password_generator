// user variables

let userInput;
let number;
let special;
let uppercase;
let lowercase;

// password variables
specialSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", ",", ".", "{", "}", "|", "[", "]", "?", "_", "-", ":", ";"];
numberSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];

let choices;

let toUpper = function (upper) {
  return upper.toUpperCase();
};

alphaUpper = alphaLower.map(toUpper);

let request = document.querySelector("#generate");
request.addEventListener("click", function() {
  password = getPassword();
  document.getElementById("password").placeholder = password;
});

function getPassword() {
  userInput = parseInt(prompt("Please enter a number for the length of your password (choose between 8 and 128 characters please)"));
  if (!userInput) {
    alert("Field needs a value please!");

  } else if (userInput < 8 || userInput > 128) {
    userInput = parseInt(prompt("Field must be a number between 8 and 128 please!"))

  } else {
    number = confirm("Do you want your password to contain numbers?");
    special = confirm("Do you want your password to contain special characters?");
    uppercase = confirm("Do you want your password to contain uppercase letters?");
    lowercase = confirm("Do you want your password to contain lowercase?");
  };

  if (!number && !special && !uppercase && !lowercase) {
    choices = alert("Atleast one parameter must be entered!");
  
// all 4 options
  } else if (number && special && uppercase && lowercase) {
    choices = specialSet.concat(numberSet, alphaLower, alphaUpper);
  
  // 3 options
  } else if (number && special && uppercase) {
    choices = specialSet.concat(numberSet, alphaUpper);

  } else if (number && special && lowercase) {
    choices = specialSet.concat(numberSet, alphaLower);

  } else if (uppercase && special && lowercase) {
    choices = specialSet.concat(alphaLower, alphaUpper)

  } else if (number && uppercase && lowercase) {
    choices = numberSet.concat(alphaUpper, alphaLower)

    // 2 options
  } else if (number && special) {
    choices = numberSet.concat(specialSet)

  } else if (number && uppercase) {
    choices = numberSet.concat(alphaUpper)

  } else if (number && lowercase) {
    choices = numberSet.concat(alphaLower)

  } else if (special && uppercase) {
    choices = specialSet.concat(alphaUpper)

  } else if (special && lowercase) {
    choices = specialSet.concat(alphaLower)

  } else if (uppercase && lowercase) {
    choices = alphaUpper.concat(alphaLower)

    // 1 options
  } else if (number) {
    choices = numberSet
  
  } else if (special) {
    choices = specialSet

// space for uppercase conversion
  } else if (uppercase) {
    choices = space.concat(alphaUpper)

  } else if (lowercase) {
    choices = alphaLower

  }

  let pw = []

  //random selection
  for (let i = 0; i < userInput; i++) {
    let getChoices = choices[Math.floor(Math.random() * choices.length)];
    pw.push(getChoices);
  }

  //join the pw array and convert to a string
  let joiner = pw.join("");
  getInput(joiner);
  return joiner
} 
// place password in textarea
function getInput(joiner) {
  document.getElementById("password").textContent = (joiner)
}