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

  switchFrm.classList.toggle("is-txr");
  switchCircle[0].classList.toggle("is-txr");
  switchCircle[1].classList.toggle("is-txr");

  switchF1.classList.toggle("is-hidden");
  switchF2.classList.toggle("is-hidden");

  regFrm.classList.toggle("is-txl");
  logFrm.classList.toggle("is-txl");
  logFrm.classList.toggle("is-z200");
};

let mainF = (e) => {
  for (let i = 0; i < allButtons.length; i++)
    allButtons[i].addEventListener("click", getButtons);
  for (let i = 0; i < switchBtn.length; i++)
    switchBtn[i].addEventListener("click", changeForm);
};

window.addEventListener("load", mainF);
