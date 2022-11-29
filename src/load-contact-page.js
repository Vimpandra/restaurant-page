function loadContactPage() {
    const content = document.getElementById(`content`);
    
    const titleContainer = document.createElement(`div`);
    titleContainer.classList.add(`titleContainer`);
    const contactTitle = document.createElement(`h1`);
    contactTitle.textContent = `Contact Us`;
    titleContainer.appendChild(contactTitle);
    content.appendChild(titleContainer);

    const cardContainer = document.createElement(`div`);
    cardContainer.classList.add(`cardContainer`);
    content.appendChild(cardContainer)

    const card1 = document.createElement(`div`);
    card1.classList.add(`contactCard`);
    
    const card1h2 = document.createElement(`h2`);
    card1h2.textContent = `Delivery`;
    card1.appendChild(card1h2);

    const card1desc = document.createElement(`p`);
    card1desc.classList.add(`cardDesc`);
    card1desc.textContent = `You can call or text us to request the menu of the day and place your order.`;
    card1.appendChild(card1desc);

    const card1tel = document.createElement(`p`);
    card1tel.classList.add(`cardTel`);
    card1tel.textContent = `+55 (61) 99999 9969`;
    card1.appendChild(card1tel);
    cardContainer.appendChild(card1);

    const card2 = document.createElement(`div`);
    card2.classList.add(`contactCard`);
    
    const card2h2 = document.createElement(`h2`);
    card2h2.textContent = `Customer Support`;
    card2.appendChild(card2h2);

    const card2desc = document.createElement(`p`);
    card2desc.classList.add(`cardDesc`);
    card2desc.textContent = `If your have any complaints, special requests or suggestions, we'll be happy to hear you.`;
    card2.appendChild(card2desc);

    const card2tel = document.createElement(`p`);
    card2tel.classList.add(`cardTel`);
    card2tel.textContent = `+55 (61) 66666 6696`;
    card2.appendChild(card2tel);
    cardContainer.appendChild(card2);
};

export { loadContactPage };