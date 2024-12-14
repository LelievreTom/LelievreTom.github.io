document.addEventListener('DOMContentLoaded', function () {
    // Gestion du Carrousel des Projets
    const projects = document.querySelectorAll('.projects-section .project');
    const prevBtn = document.getElementById('prevProject');
    const nextBtn = document.getElementById('nextProject');
    let currentProject = 0;

    // S'assurer que les projets sont cachés et qu'un seul projet est visible
    if (projects.length > 0) {
        projects.forEach((project, index) => {
            if (index !== currentProject) {
                project.classList.remove('active'); // Cache les autres projets
            } else {
                project.classList.add('active'); // Affiche le premier projet
            }
        });

        prevBtn.addEventListener('click', function () {
            // Masque l'actuel projet
            projects[currentProject].classList.remove('active');
            // Passe au projet précédent
            currentProject = (currentProject - 1 + projects.length) % projects.length;
            // Affiche le nouveau projet
            projects[currentProject].classList.add('active');
        });

        nextBtn.addEventListener('click', function () {
            // Masque l'actuel projet
            projects[currentProject].classList.remove('active');
            // Passe au projet suivant
            currentProject = (currentProject + 1) % projects.length;
            // Affiche le nouveau projet
            projects[currentProject].classList.add('active');
        });
    }
});