// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordArray = [];
let passwordLength;
let charset = [];
let allowUpper = true;
let allowLower = true;
let allowSpecial = true;
let allowNumber = true;


// these are prompt command functions, prompting the user on which sets of characters to use in the password generation.

function promptUser() {
  passwordLength = prompt("enter the number of your desired password length 8 - 128."
  );
    while (
      parseInt(passwordLength) < 8 ||
      parseInt(passwordLength) > 128 ||
      passwordLength === "" || isNaN(passwordLength)
   ) {
    passwordlength = prompt(
      "error, password length must be 8 - 128 characters in length"
    );
  }
  if (!passwordLength) {
    return;
  }

  allowUpper = confirm(
    "add uppercase letters to password combination?"
  );
  allowLower = confirm(
    "add lowercase letters to password combination?"
  );
  allowSpecial = confirm(
    "add special characters to password combination?"
  );
  allowNumber = confirm(
  "add numbers to password combination?"
  );
  if (!allowUpper && !allowLower && !allowSpecial && !allowNumber) {
    alert("error, no character types were selected!"
    );
  }
}

// This function returns the random character from getRandomCharacter and pushes it into the password array.
function fillArray() {
  for (let i = 0; i < passwordLength; i++) {
    passwordArray.push(getRandomCharacter());
  }
}

// this function gets a random character from charset and returns it to the string.
function getRandomCharacter() {
  let charCode = charset[Math.floor(Math.random() * charset.length)];
  return String.fromCharCode(charCode);
}

// this function generates the password array with rulesets applied by our UTF-8 and ASCII numbers and their corresponding characters
function generateCharsetArray() {
  charset = [];
  if (allowUpper) {
    for (let i = 65; i <= 90; i++) {
      charset.push(i);
    }
  }

  if (allowLower) {
    for (let i = 97; i <= 122; i++) {
      charset.push(i);
    }
  }

  if (allowNumber) {
    for (let i = 48; i <= 57; i++) {
      charset.push(i);
    }
  }

  if (allowSpecial) {
    for (let i = 33; i <=38; i++) {
      charset.push(i);
    }
  }
}


// this function writes the password array to the #password input in our HTML via a string
function writePassword() {
  document.getElementById("password").innerHTML = passwordArray.join("");
}

function generatePassword() {
  passwordArray = [];
  promptUser();
  generateCharsetArray();
  fillArray();
  writePassword();
}

generateBtn.addEventListener("click", generatePassword);

