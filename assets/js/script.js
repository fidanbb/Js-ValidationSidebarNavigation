"use strict";

// let addBtn = document.querySelector(".text button");
// let inputText = document.querySelector(".text input");
// let ul = document.querySelector(".text-area");
// let span = document.querySelector(".text .error-message");
// // console.log(addBtn);
// // console.log(inputText);
// // console.log(inputText.value);

// addBtn.addEventListener("click", function () {
//   //   console.log("tested");
//   //   console.log(inputText.value);

//   if (inputText.value.trim() == "") {
//     span.classList.remove("d-none");
//     return;
//   }

//   span.classList.add("d-none");
//   //   console.log(inputText.value);

//   let li = document.createElement("li");
//   li.className = "list-group-item";
//   li.innerText = inputText.value;
//   ul.append(li);

//   //   li.onclick = function () {
//   //     this.remove();
//   //   };

//   li.addEventListener("click", function () {
//     this.remove();
//   });

//   inputText.value = "";
// });

// console.log(document.querySelector("h1"));
// console.log(document.querySelector("h1").parentNode);
// console.log(document.querySelector("h1").parentNode.parentNode.parentNode);
// console.log(document.querySelector("h1").nextElementSibling);
// console.log(document.querySelector("h1").nextElementSibling.nextElementSibling);
// console.log(document.querySelector("h1").parentNode.previousElementSibling);
// console.log(
//   document.querySelector("h1").parentNode.previousElementSibling.children
// );

// console.log(
//   document.querySelector("h1").parentNode.previousElementSibling.children[0]
//     .innerText
// );

// console.log(
//   document.querySelector("h1").parentNode.previousElementSibling
//     .firstElementChild.innerText
// );

// console.log(document.querySelector("h1").closest(".container"));

// let sidebar = document.querySelector(".sidebar");
// let openIcon = document.querySelector(".sidebar .open-icon");
// let closeIcon = document.querySelector(".sidebar .close-icon");

// console.log(closeIcon);

// openIcon.addEventListener("click", function () {
//   sidebar.classList.remove("move-sidebar");
//   this.previousElementSibling.classList.remove("d-none");
//   this.classList.add("d-none");
// });

// closeIcon.addEventListener("click", function () {
//   sidebar.classList.add("move-sidebar");
//   this.nextElementSibling.classList.remove("d-none");
//   this.classList.add("d-none");
// });

let addBtn = document.querySelector(".text button");
let inputText = document.querySelector(".text input");
let ul = document.querySelector(".text-area");

addBtn.addEventListener("click", function () {
  ul.innerHTML = "";
  for (let i = 1; i <= inputText.value; i++) {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = i;
    ul.append(li);
  }

  inputText.value = "";
});
