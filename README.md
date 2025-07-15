# Proyecto: Ejemplos de APIs y Funcionalidades Web

Este proyecto contiene varios ejemplos de uso de APIs y funcionalidades modernas de JavaScript, cada uno implementado en archivos separados dentro de la carpeta `js/`. A continuación se describe brevemente la funcionalidad de cada archivo:

## js/01-app.js
Implementa notificaciones del navegador:
- Botón **Notificarme!!** solicita permiso para mostrar notificaciones.
- Botón **Ver Notificación** muestra una notificación personalizada (con ícono y texto) si el permiso fue concedido. Al hacer clic en la notificación, se abre un enlace a GitHub.

## js/02-app.js
Utiliza la API de **Intersection Observer**:
- Detecta cuando un elemento con la clase `.premium` es visible en pantalla y muestra un mensaje en consola.

## js/03-app.js
Detecta el estado de conexión a internet:
- Escucha los eventos `online` y `offline` para mostrar en consola si el usuario tiene o no conexión a internet.

## js/04-app.js
Controla el modo de pantalla completa:
- Botón **Full Screen** activa el modo pantalla completa.
- Botón **Salir de Full Screen** sale del modo pantalla completa.

## js/05-app.js
Detecta la visibilidad de la pestaña:
- Utiliza el evento `visibilitychange` para mostrar en consola si la pestaña está visible o no.

## js/06-app.js
Implementa reconocimiento de voz con la **Speech Recognition API**:
- Botón **Speech Recognition API** inicia el reconocimiento de voz.
- Muestra en pantalla el texto grabado y el nivel de confianza del reconocimiento.

---

## Integración con HTML
En el archivo `index.html` se encuentran los botones y elementos necesarios para interactuar con las funcionalidades de los archivos JS. Para probar cada funcionalidad, descomenta el `<script src="js/XX-app.js"></script>` correspondiente en el HTML.

## Recursos
- Imágenes y estilos se encuentran en las carpetas `img/` y `css/` respectivamente.
- Se utilizan fuentes de `webfonts/` para iconos.

## Autor
ElSantanax 