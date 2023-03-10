const switchFrm = document.querySelector("#switch-frm");
const switchF1 = document.querySelector("#switch-f1");
const switchF2 = document.querySelector("#switch-f2");
const switchCircle = document.querySelectorAll(".switch-circle");
const switchBtn = document.querySelectorAll(".switch-btn");
const regFrm = document.querySelector("#register-form");
const logFrm = document.querySelector("#login-form");
const allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault();

let changeForm = (e) => {
  switchFrm.classList.add("is-gx");
  setTimeout(function () {
    switchFrm.classList.remove("is-gx");
  }, 1500);
};
