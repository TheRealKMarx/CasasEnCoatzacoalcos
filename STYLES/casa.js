// Miniaturas cambian la imagen principal
const miniaturas = document.querySelectorAll('.thumb');
const imgPrincipal = document.getElementById('img-principal');

miniaturas.forEach((mini, index) => {
    mini.addEventListener('click', () => {

        // Cambiar imagen principal
        imgPrincipal.src = mini.src;

        // Quitar selección anterior
        document.querySelector('.thumb.activa')?.classList.remove('activa');

        // Activar miniatura
        mini.classList.add('activa');
    });
});

// Lightbox al hacer clic en imagen principal
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const cerrar = document.querySelector('.cerrar');

imgPrincipal.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = imgPrincipal.src;
});

cerrar.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
