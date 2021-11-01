"use strict";
const modal = document.querySelector(".modal");
const team = document.querySelector(".team");
const login = document.querySelector(".login");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".show-about");
const btnOpenTeam = document.querySelector(".show-team");
const btnOpenLogin = document.querySelector(".show-login");
const btnCloseModal = document.querySelectorAll(".close-modal");

const openW1 = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openW2 = function () {
  team.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const openW3 = function () {
  login.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeW = function () {
  modal.classList.add("hidden");
  team.classList.add("hidden");
  login.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openW1);
btnOpenTeam.addEventListener("click", openW2);
btnOpenLogin.addEventListener("click", openW3);

for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener("click", closeW);
}
overlay.addEventListener("click", closeW);

//Keyboard elements

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    closeW();
  }
});

// Validating Empty Fields

const btnSend = document.querySelector(".send");

const checkIfIsEmpty = function () {
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  console.log(firstName, lastName, email, phone, message);
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    phone === "" ||
    message === ""
  ) {
    alert("One or more fields are empty. \nPlease check and try again!");
  } else {
    
    alert("Your request was sent successfully. \nWe will be in touch soon!");
  }

};

// Clearing the forms

const resetForm = document.querySelector(".cancel");
const clearForm = function () {
  document.getElementById("askexperts").reset();
};
