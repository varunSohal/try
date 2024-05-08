// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive skills section with progress bars
document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        { skill: 'Skill 1', level: 80 },
        { skill: 'Skill 2', level: 70 },
        { skill: 'Skill 3', level: 90 },
    ];

    const skillsContainer = document.getElementById('skills-container');

    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';

        const skillName = document.createElement('p');
        skillName.innerText = skill.skill;

        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';

        const progress = document.createElement('div');
        progress.className = 'progress';
        progress.style.width = `${skill.level}%`;

        progressBar.appendChild(progress);
        skillItem.appendChild(skillName);
        skillItem.appendChild(progressBar);
        skillsContainer.appendChild(skillItem);
    });
});

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('[name="name"]').value;
    const email = form.querySelector('[name="email"]').value;
    const message = form.querySelector('[name="message"]').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Perform form submission or other actions here
    alert('Form submitted successfully!');
    form.reset();
});

// Theme toggle (light/dark mode)
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
