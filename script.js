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
}); 