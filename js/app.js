// Global Variables 

const sections = document.querySelectorAll("section");

// Build Nav

for (let i = 0; i < sections.length; i++) {    
    handleNavSections('navbar__list', 'li', 'section', i);
};

// Helper functions

function handleNavSections(navClass, createdElm, selectorTag, i) {
    var navbar = document.getElementById(navClass);
    var newElm = document.createElement(createdElm);
    var newSelectorTag = document.getElementsByTagName(selectorTag);
    var navElm = `<a href="#${newSelectorTag[i].id}">${newSelectorTag[i].id}</a>`;

    newElm.innerHTML = navElm;
    navbar.appendChild(newElm);
};

function inViewport(element) {
    let bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.addEventListener("scroll", function() {
    for (const section of sections) {
        inViewport(section) ? section.classList.add("active") : section.classList.remove("active");
    }
});