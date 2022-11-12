const userName = document.getElementById("uname");
userName.addEventListener("keyup", checkForAt);
const userNameWarning = document.getElementById("uname-warning");

function checkForAt(e) {
  const checkValue = e.target.value.includes("@");
  if (checkValue) {
    userNameWarning.textContent = "Gebruikersnaam mag geen @ bevatten.";
  } else {
    userNameWarning.textContent = "";
  }
}

// keyup want bij keypress zoekt hij pas als je nog een press gedaan hebt.
const pWord = document.getElementById("pword");
pWord.addEventListener("keyup", checkPass);
const pWordWarning = document.getElementById("pword-warning");

function checkPass(e) {
  const checkValue = e.target.value.length > 5;
  if (checkValue) {
    pWordWarning.textContent = "";
  } else {
    pWordWarning.textContent =
      "Wachtwoord is te kort, gebruik minimaal 6 tekens.";
  }
}
