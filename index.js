const form = document.querySelector("#contactForm");
const alertBox = document.querySelector(".alert-box");

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const radio1 = document.querySelector("#radio-general");
const radio2 = document.querySelector("#radio-support");
const message = document.querySelector("#message");
const checkbox = document.querySelector("#check");

const firstError = document.getElementById("first-error");
const lastError = document.getElementById("last-error");
const emailError = document.getElementById("email-error");
const radioError = document.getElementById("query-error");
const msgError = document.getElementById("message-error");
const checkboxError = document.getElementById("checkbox-error");

form.addEventListener("submit", (e) => {
  if (first.value === "") {
    e.preventDefault();
    firstError.innerHTML = "This field is required";
    first.style.border = "1px solid hsl(0, 66%, 54%)";
  } else {
    firstError.innerHTML = "";
    first.style.border = "";
  }
  if (last.value === "") {
    e.preventDefault();
    lastError.innerHTML = "This field is required";
    last.style.border = "1px solid hsl(0, 66%, 54%)";
  } else {
    lastError.innerHTML = "";
    last.style.border = "";
  }
  if (email.value === "") {
    e.preventDefault();
    emailError.innerHTML = "Please enter a valid email address";
    email.style.border = "1px solid hsl(0, 66%, 54%)";
  } else {
    emailError.innerHTML = "";
    email.style.border = "";
  }
  if (message.value === "") {
    e.preventDefault();
    msgError.innerHTML = "This field is required";
    message.style.border = "1px solid hsl(0, 66%, 54%)";
  } else {
    msgError.innerHTML = "";
    message.style.border = "";
  }
  if (!radio1.checked && !radio2.checked) {
    e.preventDefault();
    radioError.innerHTML = "Please select a query below";
  } else {
    radioError.innerHTML = "";
  }
  if (!checkbox.checked) {
    e.preventDefault();
    checkboxError.innerHTML =
      "To submit this form, please consent to being contacted";
  } else {
    checkboxError.innerHTML = "";
    e.preventDefault();
    form.reset();
    alertBox.style.display = "block";
    setTimeout(function () {
      alertBox.style.display = "none";
    }, 5000);
  }
});
