// JS para seleccionar opción de Robux
document.querySelectorAll('.robux-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.robux-option').forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
    });
});

document.querySelector('.continue-btn').addEventListener('click', function() {
    // Obtener la cantidad de Robux seleccionada
    const selectedOption = document.querySelector('.robux-option.selected');
    if (!selectedOption) return alert("Please select an amount of Robux");
    
    const targetRobux = parseInt(selectedOption.dataset.value, 10);

    // Mostrar barra de progreso y contador
    const progressContainer = document.querySelector('.progress-container');
    const progressFill = document.querySelector('.progress-fill');
    const robuxCounter = document.querySelector('.robux-counter');
    progressContainer.classList.remove('hidden');

    let progress = 0;
    let robuxCount = 0;
    
    // Intervalo para animar la barra de progreso y el contador
    const interval = setInterval(() => {
        progress += 1; // Incrementa la barra en porcentajes
        robuxCount += Math.ceil(targetRobux / 100); // Incrementa el contador de Robux

        // Limitar el contador al valor máximo
        if (robuxCount > targetRobux) robuxCount = targetRobux;

        // Actualizar la barra de progreso y el contador de Robux
        progressFill.style.width = progress + '%';
        robuxCounter.textContent = robuxCount + ' Robux';

        // Detener la animación cuando llegue al 100%
        if (progress >= 100) clearInterval(interval);
    }, 50); // Tiempo de intervalo en ms
});
