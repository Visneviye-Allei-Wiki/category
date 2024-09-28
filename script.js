const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function setTheme(isDark) {
    if (isDark) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

themeToggle.addEventListener('change', (event) => {
    setTheme(event.target.checked);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeToggle.checked = true;
        setTheme(true);
    }
});

function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}
