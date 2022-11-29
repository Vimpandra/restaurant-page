import { loadHomePage } from "./load-home-page";
import { loadMenuPage } from "./load-menu-page";
import { loadContactPage } from "./load-contact-page";
import { loadNavbar } from "./load-navbar";
import { loadFooter } from "./load-footer";

loadNavbar();
loadHomePage();
loadFooter();
addListeners();

function addListeners() {
    const content = document.getElementById(`content`);
    const homeBtn = document.getElementById(`homeBtn`);
    const menuBtn = document.getElementById(`menuBtn`);
    const contactBtn = document.getElementById(`contactBtn`);

    homeBtn.addEventListener(`click`, () => {
        content.textContent = null;
        loadNavbar();
        loadHomePage();
        loadFooter();
        addListeners();
    });

    menuBtn.addEventListener(`click`, () => {
        content.textContent = null;
        loadNavbar();
        loadMenuPage();
        loadFooter();
        addListeners();
    });

    contactBtn.addEventListener(`click`, () => {
        content.textContent = null;
        loadNavbar();
        loadContactPage();
        loadFooter();
        addListeners();
    });
};