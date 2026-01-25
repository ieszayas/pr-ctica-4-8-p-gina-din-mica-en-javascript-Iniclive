# Documentación del Proyecto **OPOINI**

## 1. Descripción General

OPOINI es una web orientada a la preparación de oposiciones, desarrollada como práctica avanzada de **HTML, CSS, JavaScript y Bootstrap 5**. Combina un diseño visual corporativo con múltiples funcionalidades interactivas enfocadas al usuario.

---

## 2. Tecnologías Utilizadas

* **HTML5** – Estructura semántica
* **CSS3** – Estilos personalizados y variables CSS
* **Bootstrap 5.3** – Diseño responsive y componentes UI
* **Bootstrap Icons** – Iconografía
* **JavaScript (ES6)** – Lógica, validaciones e interactividad
* **LocalStorage** – Persistencia de preferencias de usuario

---

## 3. Identidad Visual y Estilo

### 3.1 Paleta de Colores

* Azul oscuro corporativo
* Azul profundo de fondo
* Dorado institucional
* Rojo corporativo

*(Definidos mediante variables CSS)*

![Paleta de colores](assets/images/paleta_colores.png)

### 3.2 Estilo General

* Fondo con degradado radial fijo
* Tipografía clara sobre fondo oscuro
* Componentes con bordes dorados
* Animaciones suaves en hover


![Estilo general de la web](assets/images/estilo_general.png)


## 4. Estructura de la Web

### 4.1 Barra de Navegación (Navbar)

**Funcionalidades:**

* Logo SVG corporativo
* Menú de navegación principal
* Dropdown de recursos
* Buscador de contenidos
* Reloj digital en tiempo real
* Botón de cambio de tema claro/oscuro


![Navbar](assets/images/navbar.png)


---

### 4.2 Hero Section

* Presentación principal de la plataforma
* Llamada a la acción (CTA)
* Imagen y mensaje motivacional


![Hero section](assets/images/hero_section.png)


## 5. Funcionalidades Dinámicas

### 5.1 Cambio de Tema Claro / Oscuro

* Uso de `data-bs-theme`
* Persistencia con `localStorage`
* Cambio dinámico del texto del botón



![Modo claro y oscuro](assets/images/boton_claro.png)
![Modo claro y oscuro](assets/images/modo_claro.png)
![Modo claro y oscuro](assets/images/boton_oscuro.png)
![Modo claro y oscuro](assets/images/modo_oscuro.png)



### 5.2 Reloj Digital

* Actualización cada segundo
* Formato 24h
* Implementado con `setInterval`

![Reloj digital](assets/images/relog_digi)

---

### 5.3 Tabla Dinámica de Requisitos

* Generación dinámica desde array JS
* Búsqueda y filtrado por texto
* Actualización sin recargar la página

![Tabla dinámica](assets/images/tabla.png)


### 5.4 Buscador de Tabla

* Filtra por clave o descripción
* Integrado en el navbar


![Buscador de tabla](assets/images/filtro.png)
![Buscador de tabla](assets/images/tabla_filtrada.png)


---

### 5.5 Carrusel de Imágenes

* Bootstrap Carousel
* Imágenes responsivas

![Carrusel](assets/images/carrousel.png)

---

## 6. Formulario de Inscripción

### 6.1 Campos del Formulario

* Nombre completo
* Fecha de nacimiento
* Correo electrónico
* Escala de oposición
* Nivel de preparación
* Observaciones
* Checkbox de aceptación


![Formulario de inscripción](assets/images/formulario.png)

---

### 6.2 Validaciones en Tiempo Real

* Validación de nombre (solo letras)
* Validación de correo (.es / .com)
* Validación de mayoría de edad (+18)
* Feedback visual con Bootstrap



![Validaciones del formulario](assets/images/formulario_fallo.png)
![Validaciones del formulario](assets/images/formulario_correcto.png)

---

### 6.3 Envío y Limpieza

* Toast al enviar formulario correctamente
* Toast al limpiar campos
* Limpieza de estados y mensajes de error
* Almacenamiento temporal en array JS




![Toast de confirmación](assets/images/limpiar.png)

---

## 7. Componentes Visuales Adicionales

### 7.1 Cards Informativas

* Servicios
* Características
* Funcionalidades
* Efecto hover con sombra dorada


![Cards informativas](assets/images/cards.png)


---

### 7.2 Placa SVG Arrastrable

* Elemento decorativo interactivo
* Movimiento libre con mouse
* Siempre visible sobre el contenido



![Placa draggable](assets/images/placa1.png)
![Placa draggable](assets/images/placa2.png)


---

## 8. Calculadora de Nota Física

### 8.1 Modal de Calculadora

* Apertura desde botón flotante
* Entrada de datos físicos
* Cálculo automático de media



![Modal calculadora](assets/images/calculadora1.png)
![Modal calculadora](assets/images/calculadora2.png)
![Modal calculadora](assets/images/calculadora3.png)


---

### 8.2 Lógica de Cálculo

* Conversión de tiempos
* Asignación de puntos
* Resultado visual con alertas


![Resultado de cálculo](assets/images/calculadora4.png)


---

## 9. Footer

* Información del autor
* Enlaces a redes sociales
* Estilo consistente con el navbar




![Footer](assets/images/footer.png)


---

## 10. Conclusión

OPOINI es un proyecto completo que integra diseño moderno, interactividad avanzada y buenas prácticas de desarrollo frontend, ideal como proyecto académico o base para una plataforma real de preparación de oposiciones.

---

✍️ **Autor:** Iñigo Hernandez
