document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const welcomeHeading = document.getElementById('welcome-msg');
    const container = document.getElementById('project-container');

    // 1. DOM manipulation
    if (welcomeHeading) welcomeHeading.innerText = "Welcome to my Portfolio!";

    // 2. Function with Template Literals
    function renderProject(title) {
        return `<div class="card"><h3>${title}</h3></div>`;
    }

    /*if (container) {
        container.innerHTML = renderProject("New Project Added");
    }*/

    // 3. Click Event
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            console.log("Button clicked!"); // Check your browser console
        });
    }
});