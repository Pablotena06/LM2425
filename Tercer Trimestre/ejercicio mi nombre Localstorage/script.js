$(document).ready(function () {
    const $mensaje = $('#mensajeBienvenida');

    function mostrarMensaje(nombre) {
        $mensaje
            .text(`¡Bienvenido, ${nombre}!`)
            .css({
                'background-color': '#d1e7dd',
                'color': '#0f5132',
                'border': '1px solid #badbcc',
                'font-size': '18px',
                'font-weight': 'bold'
            })
            .removeClass('oculto')
            .fadeTo(1000, 1); // animación
    }

    // Comprobar si hay un nombre guardado
    const nombreGuardado = localStorage.getItem('nombreUsuario');
    if (nombreGuardado) {
        mostrarMensaje(nombreGuardado);
    }

    // Guardar nombre al enviar el formulario
    $('#formularioNombre').submit(function (e) {
        e.preventDefault();
        const nombre = $('#nombre').val().trim();

        if (nombre !== '') {
            localStorage.setItem('nombreUsuario', nombre);
            mostrarMensaje(nombre);
        }
    });
});
