document.addEventListener('DOMContentLoaded', () => {
    const toggleContainer = document.querySelector('.toggle-container');
    const body = document.body;

    function applyTheme(theme) {
        if (theme === 'night') {
            toggleContainer.classList.add('is-night');
            body.classList.add('is-night');
        } else {
            toggleContainer.classList.remove('is-night');
            body.classList.remove('is-night');
        }
    }

    // Check for a saved theme in localStorage, default to 'night'
    const savedTheme = localStorage.getItem('theme') || 'night';
    applyTheme(savedTheme);

    toggleContainer.addEventListener('click', () => {
        const isCurrentlyNight = toggleContainer.classList.contains('is-night');
        const newTheme = isCurrentlyNight ? 'day' : 'night';
        
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});