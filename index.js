const form = document.querySelector("#contactForm");

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const radio1 = document.querySelector("#radio-general");
const radio2 = document.querySelector("#radio-support");
const message = document.querySelector("#message");
const checkbox = document.querySelector("#check");
const allInputs = document.querySelectorAll("input, textarea");

const firstError = document.getElementById("first-error");
const lastError = document.getElementById("last-error");
const emailError = document.getElementById("email-error");
const radioError = document.getElementById("query-error");
const msgError = document.getElementById("message-error");
const checkboxError = document.getElementById("checkbox-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs.validateFirst();
  validateInputs.validateLast();
  validateInputs.validateEmail();
  validateInputs.validateMessage();
  validateInputs.validateRadio();
  validateInputs.validateCheckbox();
  validateInputs.submitForm();
});

function showSuccess() {
  const alertBox = document.querySelector(".alert-box");
  alertBox.classList.remove("hidden");

  setTimeout(() => {
    alertBox.classList.add("hidden");
  }, 4000);
}

function errorState(input) {
  input.classList.add("error");
  input.style.border = "1px solid hsl(0, 66%, 54%)";
}

function errorMsg(error, input) {
  if (error === firstError || error === lastError || error === msgError) {
    error.innerText = "This field is required";
  } else if (error === emailError) {
    error.innerText = "Please enter a valid email address";
  } else if (error === radioError) {
    error.innerText = "Please select a query below";
  } else if (error === checkboxError) {
    error.innerText = "To submit this form, please consent to being contacted";
  }
}

function removeError(error, input) {
  error.innerHTML = "";
  input.classList.remove("error");
  input.style.border = "";
}

const validateInputs = {
  validateFirst() {
    if (first.value === "") {
      errorState(first);
      errorMsg(firstError, first);
    } else {
      removeError(firstError, first);
    }
  },
  validateLast() {
    if (last.value === "") {
      errorState(last);
      errorMsg(lastError, last);
    } else {
      removeError(lastError, last);
    }
  },
  validateEmail() {
    if (email.value === "") {
      errorState(email);
      errorMsg(emailError, email);
    } else {
      removeError(emailError, email);
    }
  },
  validateMessage() {
    if (message.value === "") {
      errorState(message);
      errorMsg(msgError, message);
    } else {
      removeError(msgError, message);
    }
  },
  validateRadio() {
    if (!radio1.checked && !radio2.checked) {
      radioError.innerHTML = "Please select a query below";
      errorState(radio1);
      errorMsg(radioError, radio1);
      errorState(radio2);
      errorMsg(radioError, radio2);
    } else {
      removeError(radioError, radio1);
      removeError(radioError, radio2);
    }
  },
  validateCheckbox() {
    if (!checkbox.checked) {
      errorState(checkbox);
      errorMsg(checkboxError, checkbox);
    } else {
      removeError(checkboxError, checkbox);
    }
  },
  submitForm() {
    const allInputsArr = Array.from(allInputs);
    const isValid = allInputsArr.every(
      (input) => !input.classList.contains("error")
    );
    if (isValid) {
      showSuccess();
      form.reset();
    }
  },
};
