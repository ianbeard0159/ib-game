let init = false;
let menuBtn = document.getElementById("nav-menu-button");
let menuLinks = document.getElementById("menu-link-container");
let homeLink = document.getElementById("home-link");

function Init() {
    init = true;

    menuBtn = document.getElementById("nav-menu-button");
    menuLinks = document.getElementById("menu-link-container");
    homeLink = document.getElementById("home-link");
}

function ToggleNav() {
    if (!init) Init();

    if (menuLinks.style.getPropertyValue("display") === "flex"){
        menuLinks.style.setProperty("display", "none");
        menuBtn.style.setProperty("background-color", "var(--background-dark)");
        homeLink.style.setProperty("--after-color", "var(--background-light)");
    }
    else {
        menuLinks.style.setProperty("display", "flex");
        menuBtn.style.setProperty("background-color", "var(--background-darker)");
        homeLink.style.setProperty("--after-color", "var(--background-darker)");
    }
}

function Handle_WindowResize() {
    if (!init) Init();
    if (window.innerWidth > 768 && menuLinks.style.display === "flex") {
        menuLinks.style.display = "none";
        menuBtn.style.setProperty("background-color", "var(--background-dark)");
        homeLink.style.setProperty("--after-color", "var(--background-light)");
    }
}

window.onresize = Handle_WindowResize;
