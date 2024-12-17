document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('.skills');
    skillsSection.addEventListener('click', () => {
        skillsSection.classList.toggle('hidden');
    });
});