function toggleMenu() {
  const menu = document.getElementById('menu-links');
  const icon = document.querySelector('.hamburger-icon');
  
  // Toggle menu visibility
  menu.classList.toggle('hidden');
  menu.classList.toggle('block');
  
  // Toggle the hamburger icon
  icon.classList.toggle('open');

  // Add/remove class for the hamburger icon animation
  if (icon.classList.contains('open')) {
    // Transformations for the hamburger icon
    document.querySelector('.hamburger-icon span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
    document.querySelector('.hamburger-icon span:nth-child(2)').style.opacity = '0';
    document.querySelector('.hamburger-icon span:nth-child(3)').style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    // Reset transformations
    document.querySelector('.hamburger-icon span:nth-child(1)').style.transform = 'none';
    document.querySelector('.hamburger-icon span:nth-child(2)').style.opacity = '1';
    document.querySelector('.hamburger-icon span:nth-child(3)').style.transform = 'none';
  }
}
