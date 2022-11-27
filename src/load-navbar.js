function loadNavbar() {
    const content = document.getElementById(`content`);

    // Create navbar
    const navbar = document.createElement(`div`);
    navbar.classList.add(`navbar`);

    const homeBtn = document.createElement(`button`);
    homeBtn.setAttribute(`id`, `homeBtn`);
    homeBtn.classList.add(`navBtn`);
    homeBtn.textContent = `Home`;
    navbar.appendChild(homeBtn);
    

    const menuBtn = document.createElement(`button`);
    menuBtn.setAttribute(`id`, `menuBtn`);
    menuBtn.classList.add(`navBtn`);
    menuBtn.textContent = `Menu`;
    navbar.appendChild(menuBtn);

    const contactBtn = document.createElement(`button`);
    contactBtn.setAttribute(`id`, `contactBtn`);
    contactBtn.classList.add(`navBtn`);
    contactBtn.textContent = `Contact`;
    navbar.appendChild(contactBtn);

    content.appendChild(navbar);
};

export { loadNavbar };