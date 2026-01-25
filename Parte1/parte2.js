const datosTabla = [
    { clave: "Requisito de Edad", detalle: "Tener 18 años y no exceder la edad máxima de jubilación." },
    { clave: "Titulación Requerida", detalle: "Título de Bachiller o equivalente (para Escala Básica)." },
    { clave: "Nacionalidad", detalle: "Tener la nacionalidad española." },
    { clave: "Pruebas Físicas", detalle: "Circuito de agilidad, dominadas (hombres)/aguante (mujeres) y 1km." },
    { clave: "Examen Teórico", detalle: "Cuestionario de 100 preguntas sobre el temario oficial (45 temas)." },
    { clave: "Prueba de Idioma", detalle: "Obligatorio (Inglés o Francés) con nivel básico-intermedio." },
    { clave: "Reconocimiento Médico", detalle: "Cuadro de exclusiones médicas (visión, audición, patologías, etc.)." },
    { clave: "Test Psicotécnicos", detalle: "Evaluación de aptitudes intelectuales y perfil de personalidad." },
    { clave: "Entrevista Personal", detalle: "Valoración de idoneidad y competencias para el puesto." },
    { clave: "Permiso de Conducir", detalle: "Estar en posesión del permiso de clase B en vigor." }
];

function crearTabla() {
    const cuerpo = document.getElementById('cuerpoTabla');

    // Limpiamos la tabla antes de rellenar
    cuerpo.innerHTML = "";

    // Usamos el segundo parámetro del forEach (index) para generar el número
    datosTabla.forEach((elemento, index) => {
        const fila = document.createElement('tr');
        // Generamos el contenido usando el índice + 1 para la primera columna
        fila.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td>${elemento.clave}</td>
            <td>${elemento.detalle}</td>
        `;
        cuerpo.appendChild(fila);
    });
}

crearTabla();