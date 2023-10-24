export { createNavbar };

const pages = {
    "Home": "index.html",
    "Bachelor project": "bachelor-project.html",
    "Master thesis": "master-thesis.html",
    "(Sm)Art Path": "art-path.html",
    "Scene generation": "scene-generation.html",
    "Quarkus project": "quarkus.html",
    "Virtual army": "virtual-army.html",
    "Astrophotography": "astrophotography.html",
    "3D Printing": "https://www.printables.com/@MateoVanDamme_195493"
};

function createNavbar(activePage) {
    const navbar = document.getElementById("navbarNavDropdown");
    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav');

    for (const page in pages) {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.href = pages[page];
        a.textContent = page;
        if (page === activePage) {
            a.classList.add('active');
        }
        li.appendChild(a);
        ul.appendChild(li);
    }

    navbar.appendChild(ul);
}


