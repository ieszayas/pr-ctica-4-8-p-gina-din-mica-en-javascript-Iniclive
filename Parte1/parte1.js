/*FUNCION DE CAMBIAR EL TEMA CLARO/ OSCURO*/

const btn = document.getElementById('boton_claro');
const html = document.documentElement;

// Función para aplicar el tema
function cambiarTema(tema) {
    html.setAttribute('data-bs-theme', tema);  
    localStorage.setItem('tema', tema);

    if (tema === 'dark') {
        btn.innerText = 'Modo Claro';
    } else {
        btn.innerText = 'Modo Oscuro';
    }
}

// 1. Cargar preferencia al iniciar
/*
La || actua de la misma forma, detecta si es null, y si el getItem no devuelve nada aplica esa opcion
if (guardado !== null) {
    tema = guardado;
} else {
    tema = 'light';
}*/
const temaGuardado = localStorage.getItem('tema') || 'dark'; //Pone el modo dark por defecto
cambiarTema(temaGuardado);

// 2. Escuchar el click
/*if (temaActual === 'light') {
    temaNuevo = 'dark';
} else {
    temaNuevo = 'light';
}*/
if (btn) { //Este if previene problemas al cargar el js en caso de que se elimine el boton
    btn.addEventListener('click', () => {
        const temaActual = html.getAttribute('data-bs-theme'); //Estp es una etiqueta de boostrap para el tema
    let temaNuevo;
    if (temaActual === 'light') {
    temaNuevo = 'dark';
    } else {
    temaNuevo = 'light';
    }
        cambiarTema(temaNuevo);
    });
}



/*VALIDACIONES DEL FORMULARIO*/



/*VALIDACION DE NOMBRE*/
const campoNombre = document.getElementById('nombreCompleto');

function validarNombre() {
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    
    // Buscamos si ya hay un mensaje de error previo para no duplicarlo
    let mensajeError = campoNombre.parentNode.querySelector('.mensaje_error'); /*Al usar parentNode solo busca dentro del div de nombre*/

    //Si está vacio se eliminan los mensajes de validación
    if (campoNombre.value.trim() === "") {
        campoNombre.classList.remove('is-invalid', 'is-valid'); /* EL uso de is-invalid o valid modifica directamenta la interfaz con propiedades de boostrap*/
        if (mensajeError) {
            mensajeError.remove();
        }
        return;
    }

    if (!regexNombre.test(campoNombre.value)) {
        campoNombre.classList.add('is-invalid');

        // Si el mensaje no existe, lo creamos y lo inyectamos
        if (!mensajeError) {
            mensajeError = document.createElement('div');
            mensajeError.className = 'mensaje_error text-danger small mt-1';
            mensajeError.innerText = 'El nombre solo debe contener letras.';
            campoNombre.parentNode.appendChild(mensajeError);
        }
    } else {
        // Si es válido, quitamos el error y borramos el mensaje si existía
        campoNombre.classList.remove('is-invalid');
        campoNombre.classList.add('is-valid');
        if (mensajeError) {
            mensajeError.remove();
        }
    }
}


campoNombre.addEventListener('input', validarNombre);

/*VALIDACION DE CORREO*/
const campoCorreo = document.getElementById('emailUsuario');

function validarCorreo() {
    const regexEmail = /^[^\s@]+@[^\s@]+\.(com|es)$/;
    
    // Buscamos si ya hay un mensaje de error previo para no duplicarlo
    let mensajeError = campoCorreo.parentNode.querySelector('.mensaje_error'); /*Al usar parentNode solo busca dentro del div de mail*/

    //Si está vacio se eliminan los mensajes de validación
    if (campoCorreo.value.trim() === "") {
        campoCorreo.classList.remove('is-invalid', 'is-valid'); /* EL uso de is-invalid o valid modifica directamenta la interfaz con propiedades de boostrap*/
        if (mensajeError) {
            mensajeError.remove();
        }
        return;
    }

    if (!regexEmail.test(campoCorreo.value)) {
        campoCorreo.classList.add('is-invalid');

        // Si el mensaje no existe, lo creamos y lo inyectamos
        if (!mensajeError) {
            mensajeError = document.createElement('div');
            mensajeError.className = 'mensaje_error text-danger small mt-1';
            mensajeError.innerText = 'El correo debe terminar en @XXX.es o @.XXXcom';
            campoCorreo.parentNode.appendChild(mensajeError);
        }
    } else {
        // Si es válido, quitamos el error y borramos el mensaje si existía
        campoCorreo.classList.remove('is-invalid');
        campoCorreo.classList.add('is-valid');
        if (mensajeError) {
            mensajeError.remove();
        }
    }
}
campoCorreo.addEventListener('input', validarCorreo);



/*VALIDAR FECHA DE NACIMIENTO*/
const campoFecha = document.getElementById('fechaNacimiento');

function validarEdad() {
    const fechaValor = campoFecha.value;
    let mensajeError = campoFecha.parentNode.querySelector('.mensaje_error');

    // 1. Si está vacío, limpiamos
    if (fechaValor === "") {
        campoFecha.classList.remove('is-invalid', 'is-valid');
        if (mensajeError) mensajeError.remove();
        return;
    }

    // 2. Cálculo de la edad
    const hoy = new Date();
    const fechaNac = new Date(fechaValor);
    
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    // Ajuste por si aún no ha cumplido años en el año actual
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) { //hoy.getDate() < fechaNac.getDate() esto compara el dia si es el mismo mes
        edad--; 
    }

    // 3. Validación de 18 años
    if (edad < 18) {
        campoFecha.classList.add('is-invalid');
        campoFecha.classList.remove('is-valid');

        if (!mensajeError) {
            mensajeError = document.createElement('div');
            mensajeError.className = 'mensaje_error text-danger small mt-1';
            mensajeError.innerText = 'Debes ser mayor de 18 años para inscribirte.';
            campoFecha.parentNode.appendChild(mensajeError);
        }
    } else {
        campoFecha.classList.remove('is-invalid');
        campoFecha.classList.add('is-valid');
        if (mensajeError) mensajeError.remove();
    }
}

campoFecha.addEventListener('change', validarEdad); //Change en lugar de input se aplica si se cambia el valor




/*BOTON DEL TOAST*/

const btnLimpiar = document.getElementById('btnLimpiar');
const toastElement = document.getElementById('toastLimpiar');

// 2. Escuchar el evento click

if (btnLimpiar && toastElement) { /*Igual que antes, verifica la existencia de los elementos*/
    
    btnLimpiar.addEventListener('click', () => {
        
        // Inicializar el componente Toast de Bootstrap
        const toast = new bootstrap.Toast(toastElement);
        
        // Mostrar la notificación
        toast.show();

        const fechaFija = "2001-01-01";
        // --- LIMPIAR NOMBRE ---
        campoNombre.classList.remove('is-invalid', 'is-valid');
        let errorNom = campoNombre.parentNode.querySelector('.mensaje_error');
        if (errorNom) errorNom.remove();

        // --- LIMPIAR EMAIL ---
        campoCorreo.classList.remove('is-invalid', 'is-valid');
        let errorEmail = campoCorreo.parentNode.querySelector('.mensaje_error');
        if (errorEmail) errorEmail.remove();

        // --- LIMPIAR FECHA ---
        campoFecha.classList.remove('is-invalid', 'is-valid');
        let errorFecha = campoFecha.parentNode.querySelector('.mensaje_error');
        if (errorFecha) errorFecha.remove();
        campoFecha.value = fechaFija;
        
    
    });
}