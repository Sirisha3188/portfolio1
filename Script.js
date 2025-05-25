// script.js
// Optional enhancements like smooth scroll or menu toggle

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector("#check");
  const navMenu = document.querySelector("nav ul");

  navToggle.addEventListener("change", () => {
    navMenu.style.display = navToggle.checked ? "block" : "none";
  });
});
