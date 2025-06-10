console.log("✅ JavaScript is loaded and running!");
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

// Disable body scroll when menu opens
openMenu?.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // <--- hides scrollbar
});

// Enable body scroll when menu closes
closeMenu?.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  document.body.style.overflow = ''; // <--- restores scroll
});

// Optional: Also close menu if a mobile link is clicked
document.querySelectorAll('.mobile-menu-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
  });
});