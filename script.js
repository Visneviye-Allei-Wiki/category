document.addEventListener('DOMContentLoaded', () => {
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

    // Загрузка сохраненной темы
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeToggle.checked = true;
        setTheme(true);
    }

    // Мобильное меню
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.getElementById('sidebar');

    function toggleMobileMenu() {
        sidebar.classList.toggle('active');
    }

    mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    // Закрытие мобильного меню при клике вне его
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && event.target !== mobileMenuToggle) {
            sidebar.classList.remove('active');
        }
    });

    // Предотвращение закрытия мобильного меню при клике внутри него
    sidebar.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Раскрывающиеся категории
    const categories = document.querySelectorAll('.category');
    
    categories.forEach(category => {
        const header = category.querySelector('.category-header');
        const content = category.querySelector('.category-content');
        const toggleBtn = category.querySelector('.toggle-btn');
        
        header.addEventListener('click', () => {
            content.classList.toggle('closed');
            toggleBtn.classList.toggle('closed');
            toggleBtn.textContent = content.classList.contains('closed') ? '▼' : '▲';
        });
    });
});
