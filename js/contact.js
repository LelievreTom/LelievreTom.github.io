// Initialisation de EmailJS avec votre User ID
emailjs.init("LV-qqM_sx1i4fOoZT");

// Gestionnaire d'événement pour le formulaire
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Vérifiez les données du formulaire
  const formData = new FormData(this); // Capture les données du formulaire
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`); // Affiche chaque paire clé-valeur dans la console
  }

  // Envoi des données via EmailJS
  emailjs.sendForm("service_pgufc7a", "template_ya0u36o", this)
    .then(function() {
      alert("Message envoyé avec succès !");
    })
    .catch(function(error) {
      alert("Erreur lors de l'envoi : " + JSON.stringify(error));
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function(event) {
    // Vérifie si le reCAPTCHA est validé
    const recaptchaResponse = grecaptcha.getResponse();

    if (recaptchaResponse.length === 0) {
      // reCAPTCHA n'est pas validé
      event.preventDefault(); // Empêche la soumission du formulaire
      alert('Veuillez valider le reCAPTCHA avant de soumettre le formulaire.');
    } else {
      // Le reCAPTCHA est validé - procédez à la soumission
      console.log('Formulaire soumis avec reCAPTCHA validé.');
    }
  });
});
