let logout = document.querySelector(".Logout");
let checkings = document.querySelector(".transfer--from--checkings");
let checking = document.querySelector(".checking");
let savings = document.querySelector(".transfer--from--savings");
let saving = document.querySelector(".saving");
let businesss = document.querySelector(".transfer--from--business");
let business = document.querySelector(".business");
let transfer = document.querySelector(".Transfer");
let error = document.querySelector(".error");
let profile = document.querySelector(".Profile");
let loc = document.querySelector(".Location");
let more = document.querySelector(".More");

transfer.addEventListener("click", (e) => {
  e.preventDefault();
  error.style.display = "block";
  setTimeout(() => {
    error.style.display = "none";
  }, 7000);
});

loc.addEventListener("click", (e) => {
  e.preventDefault();
  error.innerHTML = "Visit any of our branches to get your issues resolved!!!!";
  error.style.display = "block";
  error.style.fontStyle = "Poppins";
  setTimeout(() => {
    error.style.display = "none";
  }, 7000);
});
more.addEventListener("click", (e) => {
  e.preventDefault();
  error.innerHTML = "Visit any of our branches to get your issues resolved!!!!";
  error.style.display = "block";
  error.style.fontStyle = "Poppins";
  setTimeout(() => {
    error.style.display = "none";
  }, 7000);
});
checking.addEventListener("click", (e) => {
  e.preventDefault();
  checkings.style.display = "block";
  setTimeout(() => {
    checkings.style.display = "none";
  }, 7000);
});
saving.addEventListener("click", (e) => {
  e.preventDefault();
  savings.style.display = "block";
  setTimeout(() => {
    savings.style.display = "none";
  }, 7000);
});
business.addEventListener("click", (e) => {
  e.preventDefault();
  businesss.style.display = "block";
  setTimeout(() => {
    businesss.style.display = "none";
  }, 7000);
});
logout.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "index.html";
});
