const menuButton = document.querySelector(".hamburger");
const menuNav = document.querySelector(".mobile-nav-links");
const rightHalf = document.querySelector(".half-width-right");
const leftHalf = document.querySelector(".half-width-left");
const searchIcon = document.querySelector(".search");
const logo = document.querySelector(".logo");

menuButton.addEventListener("click", function () {
    menuNav.classList.remove("hide");
    menuButton.classList.add("hide");
    rightHalf.style.width = "100%";
    leftHalf.style.width = "100%";
    searchIcon.classList.add("hide");
    leftHalf.style.justifyContent = "center";
});