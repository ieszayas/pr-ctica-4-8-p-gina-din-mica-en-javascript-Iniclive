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

function calcularNotas() {
    const circuito = parseFloat(document.getElementById('valCircuito').value);
    const dominadas = parseInt(document.getElementById('valDominadas').value);
    const carrera = document.getElementById('valCarrera').value; // Formato "3:25"

    // 1. Lógica simplificada de puntos (Ejemplo basado en baremo hombre)
    let pCircuito = circuito <= 8.2 ? 10 : (circuito >= 11.5 ? 0 : 5); 
    let pDominadas = dominadas >= 17 ? 10 : (dominadas <= 5 ? 0 : 5);
    
    // Convertir carrera "3:25" a segundos totales
    const partes = carrera.split(':');
    const segTotales = (parseInt(partes[0]) * 60) + parseInt(partes[1]);
    let pCarrera = segTotales <= 189 ? 10 : (segTotales >= 230 ? 0 : 5);

    // 2. Calcular Media
    const media = ((pCircuito + pDominadas + pCarrera) / 3).toFixed(2);
    
    // 3. Mostrar Resultado
    const resDiv = document.getElementById('resultadoCalculo');
    resDiv.classList.remove('d-none');
    
    let color = media >= 5 ? 'alert-success' : 'alert-danger';
    resDiv.className = `alert ${color} mt-3`;
    
    resDiv.innerHTML = `
        <strong>Resultados:</strong><br>
        Agilidad: ${pCircuito} pts | Dominadas: ${pDominadas} pts | Carrera: ${pCarrera} pts<br>
        <hr>
        <h4 class="mb-0 text-center">MEDIA FINAL: ${media}</h4>
    `;
}