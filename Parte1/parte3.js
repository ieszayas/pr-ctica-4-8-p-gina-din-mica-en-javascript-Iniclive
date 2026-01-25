/**
 * Función para actualizar el reloj digital
 */
function iniciarReloj() {
    const reloj = document.getElementById('relojContainer');
    if (!reloj) return;

    // Usamos setInterval para que se ejecute cada 1 segundo (1000ms)
    setInterval(() => {
        const ahora = new Date();
        
        // Formateamos usando toLocaleTimeString para ahorrar líneas de código
        // 'it-IT' se usa a menudo para forzar el formato de 24 horas (HH:MM:SS)
        const horaFormateada = ahora.toLocaleTimeString('es-ES', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        reloj.textContent = horaFormateada;

    }, 1000);
}

// Ejecutamos la función
iniciarReloj();

const placa = document.getElementById('placaDraggable');

if (placa) {
    let xInicial, yInicial, xActual, yActual;
    let activo = false;

    // Cuando pulsas el ratón
    placa.addEventListener('mousedown', (e) => {
        activo = true;
        // Calculamos la posición del ratón respecto a la placa
        xInicial = e.clientX - placa.offsetLeft;
        yInicial = e.clientY - placa.offsetTop;
    });

    // Cuando mueves el ratón por toda la ventana
    window.addEventListener('mousemove', (e) => {
        if (activo) {
            e.preventDefault(); // Evita comportamientos extraños
            
            xActual = e.clientX - xInicial;
            yActual = e.clientY - yInicial;

            // Aplicamos la nueva posición
            placa.style.left = xActual + 'px';
            placa.style.top = yActual + 'px';
        }
    });

    // Cuando sueltas el ratón
    window.addEventListener('mouseup', () => {
        activo = false;
    });
}