let slideIndex = 1;
var debugMessage = "Exécution du diaporama";
showSlides(slideIndex);

// Défilement automatique
let slideInterval = setInterval(() => { plusSlides(1); }, 5000); // Change de slide toutes les 5 secondes

function plusSlides(n) {
  // Réinitialise l'intervalle lors du clic sur les flèches
  clearInterval(slideInterval);
  slideInterval = setInterval(() => { plusSlides(1); }, 5000);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  // Réinitialise l'intervalle lors du clic sur les points
  clearInterval(slideInterval);
  slideInterval = setInterval(() => { plusSlides(1); }, 5000);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let totalElements = slides.length;

  if (n > slides.length) {slideIndex = 1}
 
  if (n < 1) {slideIndex = slides.length}

  console.log(debugMessage);

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

for (i = 0; i < dots.length; i++) {
    let currentDot = dots[i];
    currentDot.className = currentDot.className.replace(" active", "");
  }

slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// --- Animation des barres de compétences au défilement ---

document.addEventListener("DOMContentLoaded", () => {
    const competencesSection = document.querySelector("#competences");
    const skillLevels = document.querySelectorAll(".skill-level");

    if (!competencesSection) return; // Sécurité si la section n'existe pas

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Si la section "compétences" est visible à l'écran
            if (entry.isIntersecting) {
                skillLevels.forEach(skill => {
                    // Applique la largeur stockée dans data-level
                    const level = skill.getAttribute('data-level');
                    skill.style.width = level;
                });
            } else {
                // Si la section n'est plus visible, réinitialise la largeur à 0
                skillLevels.forEach(skill => {
                    skill.style.width = '0';
                });
            }
        });
    }, {
        threshold: 0.4 // Déclenche l'animation quand 40% de la section est visible
    });

    // Commence à observer la section des compétences
    observer.observe(competencesSection);
});