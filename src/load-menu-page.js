function loadMenuPage() {
    const content = document.getElementById(`content`);
    
    const hi = document.createElement(`h1`);
    hi.textContent = `Hello, world`;
    content.appendChild(hi);
};

export { loadMenuPage };