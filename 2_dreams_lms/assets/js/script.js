const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu =  document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

const changeThemeBtn = document.querySelector("#change-theme");

// Toggle dark mode
function toggleDarkMode() {
    document.getElementById('theme').classList.toggle("darkT");
}

// Load light or dark mode
function loadTheme() {
  const darkMode = localStorage.getItem("darkT");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Save or remove dark mode from localStorage
  localStorage.removeItem("darkT");
  var logo = document.querySelector("#logo");
  logo.setAttribute('src', './assets/img/logo.png');

  var logof = document.querySelector("#logof");
  logof.setAttribute('src', './assets/img/logo.png');
  

  if (document.getElementById('theme').classList.contains("darkT")) {
    localStorage.setItem("darkT", 1);
    
    var logodt = document.querySelector("#logo");
    logodt.setAttribute('src', './assets/img/dt-logo.png');

    var logodtf = document.querySelector("#logof");
    logodtf.setAttribute('src', './assets/img/dt-logo.png');
  }
});