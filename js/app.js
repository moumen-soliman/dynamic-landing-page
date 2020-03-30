// Global Variables 

const sections = document.getElementsByTagName('section');
const navbar = document.getElementById('navbar__list');

// Helper functions

// Creating navbar dynamically.
[...sections].map(section =>
    navbar.innerHTML += `
    <li>
        <a href="#${section.id}">
            ${section.getAttribute('data-nav')}
        </a>
    </li>`
)

const inViewport = (element) => {
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

// Build Nav

for (let i = 0; i < sections.length; i++) {    
    handleNavSections('navbar__list', 'li', 'section', i);
};