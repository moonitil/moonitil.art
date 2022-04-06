const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggleIcon');
const menuBars = document.getElementById('menu-bars');



function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('fade');
    // Toggle: Navigation Active
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

// Dark Mode Styling
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    //textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'DARK MODE';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

// Light Mode Styling
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    //textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'LIGHT MODE';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
    document.documentElement.setAttribute('dataTheme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
} else {
    document.documentElement.setAttribute('dataTheme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
    }
}

// Event Listeners
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('dataTheme', currentTheme);
    if (currentTheme === 'light') {
        toggleSwitch.checked = true;
        lightMode();
    }
}

// Nav Listeners 
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});