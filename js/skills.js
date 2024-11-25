// Gestion des Compétences (Soft vs Hard Skills)
    const softSkillsBtn = document.getElementById('softSkillsBtn');
    const hardSkillsBtn = document.getElementById('hardSkillsBtn');
    const softSkills = document.getElementById('softSkills');
    const hardSkills = document.getElementById('hardSkills');

    if (softSkillsBtn && hardSkillsBtn) {
        softSkillsBtn.addEventListener('click', function () {
            softSkills.classList.add('active');
            hardSkills.classList.remove('active');
            softSkillsBtn.classList.add('active');
            hardSkillsBtn.classList.remove('active');
        });

        hardSkillsBtn.addEventListener('click', function () {
            hardSkills.classList.add('active');
            softSkills.classList.remove('active');
            hardSkillsBtn.classList.add('active');
            softSkillsBtn.classList.remove('active');
        });
    }