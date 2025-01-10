// Selecciona la imagen del logo
const logoImage = document.getElementById('logo-image');
const navbar = document.getElementById('navbar'); // Asegúrate de tener el ID del navbar

// Evento para cambiar la imagen al hacer clic mientras el navbar es negro
logoImage.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace recargue la página

    // Verifica si el navbar tiene el fondo negro (hover activo)
    if (navbar.matches(':hover')) {
        logoImage.src = 'logo_negro.png'; // Cambia al logo negro al presionar
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const texto = document.getElementById('texto-container');

    // Evento: Al pasar el ratón, mueve el texto rápidamente
    texto.addEventListener('mouseover', () => {
        texto.style.transform = 'translate(-50%, -60%)'; // Mueve el texto hacia abajo
    });

    // Evento: Al salir el ratón, regresa a su posición inicial
    texto.addEventListener('mouseout', () => {
        texto.style.transform = 'translate(-50%, -50%)'; // Regresa al centro
    });
});
