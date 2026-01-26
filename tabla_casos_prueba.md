| ID Caso Prueba | Descripción Caso de Prueba                     | Entrada                                 | Salida Esperada                                                           | Resultado   |
|----------------|-----------------------------------------------|-----------------------------------------|---------------------------------------------------------------------------|-------------|
| 01             | Funcionamiento Modo Oscuro               | Clic en botón "Modo Claro" / "Modo Oscuro"     | El CSS cambia dinámicamente: cambia los colores de el formulario y las cards     | OK|
| 02             | Persistencia mediante localStorage           | Seleccionar tema y refrescar página (F5)     | La aplicación consulta el localStorage y mantiene el tema seleccionado anteriormente   | OK|
| 03             | Funcionamiento del botón "Limpiar" del formulario    | Pulsar botón limpiar     | Se resetean todos los campos y validaciones | OK|
| 04             | Funcionamiento del botón "Enviar" del formulario   | Pulsar botón enviar | Se envía y se guarda el usuario en la tabla de usuarios tras validar los campos | OK|
| 05             | Notificación emergente (Toast)    | Pulsar en enviar o limpiar formulario   | Se muestra un "Toast" en la esquina inferior derecha con el mensaje | OK|
