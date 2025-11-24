const form = document.querySelector("#contactForm");
const alertBox = document.querySelector(".alert-box");

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const radio = document.querySelectorAll("input[type='radio']");
const message = document.querySelector("#message");
const checkbox = document.querySelector("#check");

const firstError = document.getElementById("first-error");
const lastError = document.getElementById("last-error");
const emailError = document.getElementById("email-error");
const radioError = document.getElementById("query-error");
const msgError = document.getElementById("message-error");
const checkboxError = document.getElementById("checkbox-error");

form.addEventListener("submit", (e) => {
  let hasError = false;

  firstNameValid();
  lastNameValid();
  emailValid();
  messageValid();
  checkboxValid();
  radioValid();
  formSuccess();

  function firstNameValid() {
    if (first.value === "") {
      e.preventDefault();
      firstError.innerHTML = "This field is required";
      first.style.border = "1px solid hsl(0, 66%, 54%)";
      hasError = true;
    } else {
      firstError.innerHTML = "";
      first.style.border = "";
    }
  }
  function lastNameValid() {
    if (last.value === "") {
      e.preventDefault();
      lastError.innerHTML = "This field is required";
      last.style.border = "1px solid hsl(0, 66%, 54%)";
      hasError = true;
    } else {
      lastError.innerHTML = "";
      last.style.border = "";
    }
  }
  function emailValid() {
    if (email.value === "") {
      e.preventDefault();
      emailError.innerHTML = "Please enter a valid email address";
      email.style.border = "1px solid hsl(0, 66%, 54%)";
      hasError = true;
    } else {
      emailError.innerHTML = "";
      email.style.border = "";
    }
  }
  function messageValid() {
    if (message.value === "") {
      e.preventDefault();
      msgError.innerHTML = "This field is required";
      message.style.border = "1px solid hsl(0, 66%, 54%)";
      hasError = true;
    } else {
      msgError.innerHTML = "";
      message.style.border = "";
    }
  }
  function checkboxValid() {
    if (checkbox.checked === false) {
      e.preventDefault();
      checkboxError.innerHTML =
        "To submit this form, please consent to being contacted";
      hasError = true;
    } else {
      checkboxError.innerHTML = "";
    }
  }
  function radioValid() {
    for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        radioError.innerHTML = "";
      } else {
        e.preventDefault();
        radioError.innerHTML = "Please select a query type";
        hasError = true;
      }
    }
  }
  function formSuccess() {
    if (hasError === false) {
      alertBox.style.display = "block";
    }
  }
});
