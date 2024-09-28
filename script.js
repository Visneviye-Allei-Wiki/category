// Переключение темы
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

// Мобильное меню
function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Раскрывающиеся категории
document.querySelectorAll('.category-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
        const btn = header.querySelector('.toggle-btn');
        btn.textContent = content.classList.contains('active') ? '▲' : '▼';
    });
});

// Закрытие мобильного меню при клике вне его
document.addEventListener('click', (event) => {
    const sidebar = document.getElementById('sidebar');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (!sidebar.contains(event.target) && event.target !== mobileMenuToggle) {
        sidebar.classList.remove('active');
    }
});

// Предотвращение закрытия мобильного меню при клике внутри него
document.getElementById('sidebar').addEventListener('click', (event) => {
    event.stopPropagation();
});
