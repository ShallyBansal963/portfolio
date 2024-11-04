function toggleMenu() {
    // Select the menu and hamburger icon elements
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    document.querySelector('.hamburger-icon').addEventListener('click', function() {
        this.classList.toggle('open');
        document.querySelector('.menu-links').classList.toggle('open');
      });
      
    

    // Check if the elements exist before toggling classes
    if (menu && icon) {
        menu.classList.toggle("open");
        icon.classList.toggle("open");
        
    } else {
        console.error("Menu or icon element not found");
    }
}
