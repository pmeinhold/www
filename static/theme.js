const theme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', theme);

const toggle = document.getElementById('theme-toggle');
const icon = toggle.querySelector('.theme-toggle-icon');

function updateIcon() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    icon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

updateIcon();

toggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon();
});
