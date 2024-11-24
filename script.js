document.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const menuLinks = document.querySelector(".menu-links");

    if (hamburgerIcon && menuLinks) {
        // Toggle menu visibility on icon click
        hamburgerIcon.addEventListener("click", () => {
            menuLinks.classList.toggle("open");
            hamburgerIcon.classList.toggle("open");
        });

        // Close menu when any link is clicked
        menuLinks.addEventListener("click", (event) => {
            if (event.target.tagName === "A") {
                menuLinks.classList.remove("open");
                hamburgerIcon.classList.remove("open");
            }
        });
    } else {
        console.error("Hamburger icon or menu links not found.");
    }
});
