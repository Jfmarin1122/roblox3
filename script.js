// Seleccionar opción de Robux
document.querySelectorAll('.robux-option').forEach(option => {
    option.addEventListener('click', function() {
        // Quitar la clase 'selected' de todas las opciones
        document.querySelectorAll('.robux-option').forEach(opt => opt.classList.remove('selected'));
        // Añadir la clase 'selected' a la opción clicada
        this.classList.add('selected');
    });
});

// Manejar el clic en el botón de continuar
document.querySelector('.continue-btn').addEventListener('click', function() {
    const selectedOption = document.querySelector('.robux-option.selected');
    if (!selectedOption) return alert("Please select an amount of Robux");

    const targetRobux = parseInt(selectedOption.dataset.value, 10);
    const progressContainer = document.querySelector('.progress-container');
    const progressFill = document.querySelector('.progress-fill');
    const robuxCounter = document.querySelector('.robux-counter');
    const successMessage = document.querySelector('.mensaje-exito');

    // Mostrar barra de progreso y contador
    progressContainer.classList.remove('hidden');
    successMessage.classList.add('oculto'); // Asegúrate de ocultar el mensaje al inicio

    let progress = 0;
    let robuxCount = 0;

    const interval = setInterval(() => {
        progress += 1; 
        robuxCount += Math.ceil(targetRobux / 100); 

        if (robuxCount > targetRobux) robuxCount = targetRobux;

        progressFill.style.width = progress + '%';
        robuxCounter.textContent = robuxCount + ' Robux';

        // Mostrar el mensaje de éxito cuando la barra de progreso complete
        if (progress >= 100) {
            clearInterval(interval);
            successMessage.textContent = "¡PERFECTO! Has recibido " + targetRobux + " Robux.";
            successMessage.classList.remove('oculto');
        }
    }, 50);
});
