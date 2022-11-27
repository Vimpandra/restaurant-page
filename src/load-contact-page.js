function loadContactPage() {
    const content = document.getElementById(`content`);
    
    const hi = document.createElement(`h1`);
    hi.textContent = `Welcome to catworld`;
    content.appendChild(hi);
};

export { loadContactPage };