let sign__in = document.querySelector(".btn--alt");
let main = document.getElementById("main");
let header = document.getElementById("header");
let footer = document.getElementById("footer");
let nav = document.querySelector(".hero");
let overwritten = document.querySelector(".overwritten--container");

let empty = document.querySelector(".empty");
let incorrect = document.querySelector(".incorrect");
let si = document.querySelector(".si");

sign__in.addEventListener("click", (e) => {
  e.preventDefault();
  let input__login = document.querySelector(".input-login").value;
  let password = document.querySelector(".password").value;
  if (
    input__login === "sharongrey2434@gmail.com" &&
    password === "Moyo24434sore"
  ) {
    window.location.href = "index2.html";

    route.push(window.location.href);
  } else {
    if (input__login === "" && password === "") {
      empty.style.display = "block";
      setTimeout(() => {
        empty.style.display = "none";
      }, 4000);
    } else {
      if (
        input__login !== "sharongrey2434@gmail.com" ||
        password !== "Moyo24434sore"
      ) {
        incorrect.style.display = "block";
        setTimeout(() => {
          incorrect.style.display = "none";
        }, 4000);
      }
    }
  }
  input__login = "";
  password = "";
});

si.addEventListener("click", (e) => {
  e.preventDefault();
  sign__in.scrollIntoView({ behaviour: smooth });
});
