const hamburger = document.querySelector("i.fa-bars");
const close = document.querySelector("a.close");
const menu = document.querySelector(".hamburger-menu");
/* / variabili */

hamburger.addEventListener("click", aperturaMenu);

    function aperturaMenu() {
    menu.classList.add("active")
    }

close.addEventListener("click", chiusuraMenu);

    function chiusuraMenu() {
        menu.classList.remove("active")
    }

    