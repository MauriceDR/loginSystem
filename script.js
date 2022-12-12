const user = document.querySelector(".login-user");
const pass = document.querySelector(".login-pass");
const loginBtn = document.querySelector(".login-button");
const checkbox = document.querySelector("#checkbox");
//modal
const modal_container = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
const modalh1 = document.querySelector(".modalh1");
//terms
const modal_container_terms = document.querySelector(".modal-container-terms");
const modal_terms = document.querySelector(".modal-terms");
const modalh1_terms = document.querySelector(".modalh1-terms");

//account information
const account1 = {
  username: "shareef",
  password: 123,
};
const account2 = {
  username: "elon",
  password: 456,
};
const account3 = {
  username: "kanye",
  password: 789,
};

const accounts = [account1, account2, account3];

//login button
loginBtn.addEventListener("click", function () {
  if (user.value == account1.username && pass.value == account1.password) {
    modal_container.classList.add("show");
    console.log("sucess");
  } else {
    modal_container.classList.add("show");
    modal.style.backgroundColor = "red";
    modalh1.innerHTML = "INVALID";

    console.log("invalid");
  }
  user.value = "";
  pass.value = "";
  checkbox.checked = false;
});
