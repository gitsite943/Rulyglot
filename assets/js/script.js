console.log("✅ JavaScript is loaded and running!");

const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

// Disable body scroll when menu opens
openMenu?.addEventListener('click', () => {
  if (!mobileMenu) return;
  mobileMenu.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // hides scrollbar
});

// Enable body scroll when menu closes
closeMenu?.addEventListener('click', () => {
  if (!mobileMenu) return;
  mobileMenu.classList.add('hidden');
  document.body.style.overflow = ''; // restores scroll
});

// Also close menu if a mobile link is clicked
document.querySelectorAll('.mobile-menu-link').forEach(link => {
  link.addEventListener('click', () => {
    if (!mobileMenu) return;
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
  });
});