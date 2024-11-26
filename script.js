function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
  
    // Toggle the 'open' class for both menu and icon
    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
  }
  
  // Close menu when a link is clicked
  const menuItems = document.querySelectorAll('.menu-links a');
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      const menuLinks = document.querySelector('.menu-links');
      const hamburgerIcon = document.querySelector('.hamburger-icon');
  
      // Remove the 'open' class to close the menu
      menuLinks.classList.remove('open');
      hamburgerIcon.classList.remove('open');
    });
  });
  