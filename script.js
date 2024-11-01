document.querySelectorAll('.robux-option').forEach(option => {
    option.addEventListener('click', function() {
        // Elimina la clase 'selected' de todas las opciones
        document.querySelectorAll('.robux-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        // Agrega la clase 'selected' a la opción clickeada
        this.classList.add('selected');
    });
});

document.querySelector('.continue-btn').addEventListener('click', function() {
    const overlay = document.querySelector('.overlay');
    const progressFill = document.querySelector('.progress-fill');
    const robuxCounter = document.querySelector('.robux-counter');
    const successMessage = document.querySelector('.mensaje-exito');

    // Muestra el overlay
    overlay.classList.remove('hidden');

    let progress = 0;
    const targetRobux = parseInt(document.querySelector('.robux-option.selected').dataset.value, 10);

    const interval = setInterval(() => {
        progress += 10; // Incrementa el progreso
        progressFill.style.width = (progress / targetRobux) * 100 + '%';
        robuxCounter.textContent = (progress > targetRobux) ? targetRobux : progress + ' Robux';

        if (progress >= targetRobux) {
            clearInterval(interval);
            successMessage.textContent = "¡PERFECTO! Has recibido " + targetRobux + " Robux.";
            successMessage.classList.remove('oculto');
        }
    }, 8);
});
