function loadNavbar() {
    const content = document.getElementById(`content`);

    const navbar = document.createElement(`div`);
    navbar.classList.add(`navbar`);

    const logo = document.createElement(`h2`);
    logo.classList.add(`logo`);
    logo.textContent = `CrC`;
    navbar.appendChild(logo);

    const navButtons = document.createElement(`div`);
    navButtons.classList.add(`navButtons`);
    navbar.appendChild(navButtons);

    const homeBtn = document.createElement(`button`);
    homeBtn.setAttribute(`id`, `homeBtn`);
    homeBtn.classList.add(`navBtn`);
    homeBtn.textContent = `Home`;
    navButtons.appendChild(homeBtn);

    const menuBtn = document.createElement(`button`);
    menuBtn.setAttribute(`id`, `menuBtn`);
    menuBtn.classList.add(`navBtn`);
    menuBtn.textContent = `Menu`;
    navButtons.appendChild(menuBtn);

    const contactBtn = document.createElement(`button`);
    contactBtn.setAttribute(`id`, `contactBtn`);
    contactBtn.classList.add(`navBtn`);
    contactBtn.textContent = `Contact`;
    navButtons.appendChild(contactBtn);

    content.appendChild(navbar);
};

export { loadNavbar };