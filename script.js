
// JAVASCRIPT — SCROLL PROGRESS BAR
// This <script> block runs after the page loads (placed at bottom of body).

// Concepts demonstrated:
//   - document.getElementById()  → finding an HTML element from JS
//   - addEventListener()         → listening for browser events
//   - window.scrollY             → reading how far the user has scrolled
//   - element.style.width        → changing a CSS property from JS

// Get a reference to the progress bar div (defined in HTML with id="progress-bar")
const progressBar = document.getElementById('progress-bar');

// Listen for scroll events on the window — this function runs every time the user scrolls
window.addEventListener('scroll', function() {

  // How many pixels the user has scrolled from the top
  const scrolled = window.scrollY;

  // Total scrollable distance = full page height minus the visible window height
  const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Convert to a percentage (0–100)
  const percentage = (scrolled / total) * 100;

  // Set the bar's width to that percentage — same as writing width: 42% in CSS
  progressBar.style.width = percentage + '%';
});
