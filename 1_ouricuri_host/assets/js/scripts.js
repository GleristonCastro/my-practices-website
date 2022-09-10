const changeThemeBtn = document.querySelector("#change-theme");

// Toggle dark mode
function toggleDarkMode() {
    document.getElementById('theme').classList.toggle("dark");
}

// Load light or dark mode
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Save or remove dark mode from localStorage
  localStorage.removeItem("dark");

  if (document.getElementById('theme').classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});