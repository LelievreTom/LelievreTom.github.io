// Initialisation d'EmailJS
emailjs.init("LV-qqM_sx1i4fOoZT");

// Fonction pour envoyer un email
function envoieMail(form) {
  // Envoi des données via EmailJS
  emailjs.sendForm("service_pgufc7a", "template_ya0u36o", form)
    .then(function() {
      alert("Message envoyé avec succès !");
      console.log("Email envoyé !");
    })
    .catch(function(error) {
      alert("Erreur lors de l'envoi : " + JSON.stringify(error));
      console.error("Erreur EmailJS :", error);
    });
}

// Fonction principale à exécuter une fois la page chargée
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  // Écouteur pour la soumission du formulaire
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Vérifie si le reCAPTCHA est validé
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      alert("Veuillez valider le reCAPTCHA avant de soumettre le formulaire.");
      console.error("reCAPTCHA non validé.");
      return;
    }

    console.log("reCAPTCHA validé :", recaptchaResponse);

    // Vérifie les données du formulaire (optionnel pour debug)
    const formData = new FormData(this);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`); // Affiche les données dans la console
    }

    // Envoie l'email si le reCAPTCHA est validé
    envoieMail(this);
  });
});
