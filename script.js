// Importer CountUp depuis le CDN
import { CountUp } from 'https://cdn.jsdelivr.net/npm/countup.js@2.8.0/dist/countUp.min.js';

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('fiction-modal');
    const closeButton = modal.querySelector('.close-modal');

    // Intercepter tous les clics sur les liens app store et play store
    document.querySelectorAll('.store-buttons a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showModal();
        });
    });

    // Fermer la modale avec le bouton
    closeButton.addEventListener('click', hideModal);

    // Fermer la modale en cliquant en dehors
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            hideModal();
        }
    });

    // Fermer la modale avec la touche Echap
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            hideModal();
        }
    });

    function showModal() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Empêcher le défilement
    }

    function hideModal() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Réactiver le défilement
    }

    // Configuration des compteurs
    const repasCounter = new CountUp('repas-count', 20000, {
        duration: 2.5,
        separator: ' '
    });
    const restaurantsCounter = new CountUp('restaurants-count', 700, {
        duration: 2,
        separator: ' '
    });
    const satisfactionCounter = new CountUp('satisfaction-count', 98, {
        duration: 3,
        suffix: '%'
    });

    // Fonction pour démarrer l'animation quand la section est visible
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                repasCounter.start();
                restaurantsCounter.start();
                satisfactionCounter.start();
                // Désactiver l'observer après la première animation
                observer.disconnect();
            }
        });
    }

    // Observer pour détecter quand la section stats est visible
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5
    });

    const statsSection = document.querySelector('.stats-section');
    observer.observe(statsSection);
}); 