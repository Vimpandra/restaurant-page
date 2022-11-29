let menuItens = [];

function MenuItem(title, desc, price) {
    this.title = title;
    this.desc = desc;
    this.price = price;
};

const fishNchips = new MenuItem(
    `Fish 'n Chips`,
    `Fresh fish of the day, served with boiled potatoes, carrots and herbs.`,
    `29.90`
);
menuItens.push(fishNchips);

const catchicken = new MenuItem(
    `Catchicken`,
    `Minced roasted chicken, served with grains and herbs, nice and crunchy.`,
    `23.90`
);
menuItens.push(catchicken);

const beefChops = new MenuItem(
    `Beef Chops`,
    `Deliciously roasted beef, with herbs, butter and a selection of vegetables`,
    `26.90`
);
menuItens.push(beefChops);

function loadMenuPage() {
    const content = document.getElementById(`content`);

    const titleContainer = document.createElement(`div`);
    titleContainer.classList.add(`menuTitle`);
    content.appendChild(titleContainer);

    const menuTitle = document.createElement(`h1`);
    menuTitle.textContent = `Today's Menu`;
    titleContainer.appendChild(menuTitle);

    const menuDesc = document.createElement(`p`);
    menuDesc.textContent = `Updated daily with fresh tasty options`;
    titleContainer.appendChild(menuDesc);

    const menuCards = document.createElement(`div`);
    menuCards.classList.add(`menuCards`);
    content.appendChild(menuCards);
    
    for (let i = 0; i < menuItens.length; i++) {
        const itemCard = document.createElement(`div`);
        itemCard.classList.add(`menuItemCard`);
        menuCards.appendChild(itemCard);

        const itemTitle = document.createElement(`h3`);
        itemTitle.textContent = menuItens[i].title;
        itemCard.appendChild(itemTitle);

        const itemDesc = document.createElement(`p`);
        itemDesc.classList.add(`itemDesc`);
        itemDesc.textContent = menuItens[i].desc;
        itemCard.appendChild(itemDesc);

        const itemPrice = document.createElement(`p`);
        itemPrice.classList.add(`itemPrice`);
        itemPrice.textContent = menuItens[i].price;
        itemCard.appendChild(itemPrice);
    }
};

export { loadMenuPage };