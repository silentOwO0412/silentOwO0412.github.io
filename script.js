// Get the button and the body element
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// 1. Check if the user already chose dark mode previously
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
}

// 2. Listen for clicks on the toggle button
toggleBtn.addEventListener('click', function() {
  // Toggle the dark-mode class on or off
  body.classList.toggle('dark-mode');
  
  // 3. Save their preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
