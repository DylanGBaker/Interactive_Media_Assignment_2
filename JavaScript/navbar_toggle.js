function DirectUserToClickedLink() {
    nav.classList.toggle("toggle_nav");
}

function NavSlide() {
    const hamBurger = document.querySelector(".Hamburger_Logo");
    const nav = document.querySelector("#hyperlinks ul");
    hamBurger.addEventListener("click", DirectUserToClickedLink());
}

function RunEvents() {
    NavSlide();
}

RunEvents();
