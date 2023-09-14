"use strict";

// let sidebar = document.querySelector(".sidebar-right");
// let openIcon = document.querySelector(".open-icon");
// let closeIcon = document.querySelector(".close-icon");

// openIcon.addEventListener("click", function () {
//   sidebar.classList.remove("move-sidebar-right");
//   this.previousElementSibling.classList.remove("d-none");
//   this.classList.add("d-none");
// });

// closeIcon.addEventListener("click", function () {
//   sidebar.classList.add("move-sidebar-right");
//   this.nextElementSibling.classList.remove("d-none");
//   this.classList.add("d-none");
// });

// let sidebar = document.querySelector(".sidebar-header");
// let openIcon = document.querySelector(".open-icon");
// let closeIcon = document.querySelector(".close-icon");

// openIcon.addEventListener("click", function () {
//   sidebar.classList.remove("move-sidebar-header");
//   this.previousElementSibling.classList.remove("d-none");
//   this.classList.add("d-none");
// });

// closeIcon.addEventListener("click", function () {
//   sidebar.classList.add("move-sidebar-header");
//   this.nextElementSibling.classList.remove("d-none");
//   this.classList.add("d-none");
// });

// let sidebar = document.querySelector(".sidebar-footer");
// let openIcon = document.querySelector(".open-icon");
// let closeIcon = document.querySelector(".close-icon");

// openIcon.addEventListener("click", function () {
//   sidebar.classList.remove("move-sidebar-footer");
//   this.previousElementSibling.classList.remove("d-none");
//   this.classList.add("d-none");
// });

// closeIcon.addEventListener("click", function () {
//   sidebar.classList.add("move-sidebar-footer");
//   this.nextElementSibling.classList.remove("d-none");
//   this.classList.add("d-none");
// });

let firstNum = document.querySelector(".inputs input:nth-child(1)");
let secondNum = document.querySelector(".inputs input:nth-child(2)");

let addBtn = document.querySelector(".buttons button:nth-child(1)");
let subBtn = document.querySelector(".buttons button:nth-child(2)");
let mulBtn = document.querySelector(".buttons button:nth-child(3)");
let diviBtn = document.querySelector(".buttons button:nth-child(4)");

let result = document.querySelector(".result input");

addBtn.addEventListener("click", function () {
  if (firstNum.value == "" || secondNum.value == "") {
    alert("dont be empty");
    return;
  }
  result.value = parseInt(firstNum.value) + parseInt(secondNum.value);
  firstNum.value = "";
  secondNum.value = "";
});

subBtn.addEventListener("click", function () {
  if (firstNum.value == "" || secondNum.value == "") {
    alert("dont be empty");
    return;
  }
  result.value = parseInt(firstNum.value) - parseInt(secondNum.value);
  firstNum.value = "";
  secondNum.value = "";
});

mulBtn.addEventListener("click", function () {
  if (firstNum.value == "" || secondNum.value == "") {
    alert("dont be empty");
    return;
  }
  result.value = parseInt(firstNum.value) * parseInt(secondNum.value);
  firstNum.value = "";
  secondNum.value = "";
});

diviBtn.addEventListener("click", function () {
  if (firstNum.value == "" || secondNum.value == "") {
    alert("dont be empty");
    return;
  }
  if (secondNum.value == 0) {
    alert("cant divide to 0");
    return;
  }
  result.value = parseInt(firstNum.value) / parseInt(secondNum.value);
  firstNum.value = "";
  secondNum.value = "";
});
