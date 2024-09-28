document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            alert('Has hecho clic en una imagen de la galería');
        });
    });

    const navLinks = document.querySelectorAll('.alin-nea a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            console.log('Has hecho clic en una opción del navbar');
        });
    });
});