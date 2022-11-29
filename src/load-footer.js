function loadFooter() {
    const content = document.getElementById(`content`);

    const footer = document.createElement(`div`);
    footer.classList.add(`footer`);
    content.appendChild(footer);

    const p1 = document.createElement(`p`);
    p1.textContent = `This is a student project for the Odin Project's javascript course`;
    footer.appendChild(p1);

    const repoLink = document.createElement(`a`);
    repoLink.setAttribute(`href`, `https://github.com/Vimpandra/restaurant-page`);
    repoLink.textContent = `Click here to visit the Github repository`;
    footer.appendChild(repoLink);
};

export { loadFooter };