let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let body = document.getElementById("body");

const form = document.querySelector("form");
const btn = document.getElementById("button");

function validateInputs() {
  if (
    fName.value.length > 0 &&
    email.value.length > 0 &&
    body.value.length > 0
  ) {
    return true;
  }
  return false;
}

function handleSubmit(e) {
  if (validateInputs()) {
    e.preventDefault();
    form.submit();
    form.reset();
    alert("Thank you for contacting me!");
  }
}

btn.addEventListener("click", handleSubmit);
form.addEventListener("submit", handleSubmit);
