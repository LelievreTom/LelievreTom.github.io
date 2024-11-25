document.addEventListener('DOMContentLoaded', function () {
    // Gestion du Carrousel des Projets
    const projects = document.querySelectorAll('.projects-section .project');
    const prevBtn = document.getElementById('prevProject');
    const nextBtn = document.getElementById('nextProject');
    let currentProject = 0;

    if (projects.length > 0) {
        projects[currentProject].classList.add('active');

        prevBtn.addEventListener('click', function () {
            projects[currentProject].classList.remove('active');
            currentProject = (currentProject - 1 + projects.length) % projects.length;
            projects[currentProject].classList.add('active');
        });

        nextBtn.addEventListener('click', function () {
            projects[currentProject].classList.remove('active');
            currentProject = (currentProject + 1) % projects.length;
            projects[currentProject].classList.add('active');
        });
    }



});