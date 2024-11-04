function toggleMenu() {
    // Select the menu and hamburger icon elements
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";

    // Check if the elements exist before toggling classes
    if (menu && icon) {
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    } else {
        console.error("Menu or icon element not found");
    }
}
