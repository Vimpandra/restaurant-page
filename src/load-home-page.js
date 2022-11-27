const loadHomePage = function() {
    const content = document.getElementById(`content`);

    // Create navbar
    const navbar = document.createElement(`div`);
    navbar.classList.add(`navbar`);

    const homeBtn = document.createElement(`button`);
    homeBtn.classList.add(`navBtn`);
    homeBtn.textContent = `Home`;
    navbar.appendChild(homeBtn);

    const menuBtn = document.createElement(`button`);
    menuBtn.classList.add(`navBtn`);
    menuBtn.textContent = `Menu`;
    navbar.appendChild(menuBtn);

    const contactBtn = document.createElement(`button`);
    contactBtn.classList.add(`navBtn`);
    contactBtn.textContent = `Contact`;
    navbar.appendChild(contactBtn);

    content.appendChild(navbar);

    // Create banner
    const banner = document.createElement(`div`);
    banner.classList.add(`banner`);

    const homeTitle = document.createElement(`h1`);
    homeTitle.textContent = `Cat's Restaurant for Cats`;
    banner.appendChild(homeTitle);

    const descP = document.createElement(`p`);
    descP.textContent = `Welcome to Cat's Restaurant for Cats, we work to serve everything a cat's heart could desire. Pellentesque mollis sem et erat rutrum fringilla. Nam eu convallis felis. Sed aliquam interdum rutrum. Ut congue, eros eget egestas auctor, nisl arcu euismod dolor, nec dignissim mauris nisl sit amet libero.`;
    banner.appendChild(descP);
    content.appendChild(banner);

    // Create hours section
    const hoursSection = document.createElement(`div`);
    hoursSection.classList.add(`hours`);

    const hoursH2 = document.createElement(`h2`);
    hoursH2.textContent = `Hours`;
    hoursSection.appendChild(hoursH2);

    const hoursP = document.createElement(`p`);
    hoursP.textContent = `We're open everynight from 8pm to 8am. Only night owls allowed.`;
    hoursSection.appendChild(hoursP);

    content.appendChild(hoursSection);

    // Create location section
    const locationSection = document.createElement(`div`);
    locationSection.classList.add(`location`);

    const locationH2 = document.createElement(`h2`);
    locationH2.textContent = `Location`;
    locationSection.appendChild(locationH2);

    const locationP = document.createElement(`p`);
    locationP.textContent = `I could tell you, but then I'd have to kill you.`;
    locationSection.appendChild(locationP);

    content.appendChild(locationSection);
};

export { loadHomePage };