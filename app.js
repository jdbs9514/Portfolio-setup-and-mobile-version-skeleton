const hamburger = document.querySelector(".menu");
const navMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log(hamburger);
})

const cross = document.querySelector(".close");
const navList = document.querySelector(".navClose");

cross.addEventListener("click", () => {
    navMenu.classList.remove("active");
})

