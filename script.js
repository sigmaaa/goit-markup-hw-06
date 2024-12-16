const menuWindow = document.querySelector(".mobile-menu");
const showButton = document.querySelector(".header-close-btn");
const closeButton = document.querySelector(".mobile-menu-close-btn");

showButton.addEventListener("click", () => {
    menuWindow.classList.add("is-active");
});

closeButton.addEventListener("click", () => {
    menuWindow.classList.remove("is-active");
});