function validarFormulario() {
    // Obtener los valores de los campos de entrada
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    
    // validar el formato de correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar los datos
    if (nombre.trim() === "" || email.trim() === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    // Validar correo electrónico
    if (!emailRegex.test(email)) {
        alert("Por favor, introduzca un correo electrónico válido.");
        return false;
    }

    alert("¡Formulario válido! Puedes realizar alguna acción aquí, como mostrar un mensaje de éxito.");

    // Evitar que el formulario se envíe automáticamente
    return false;
}

// Agregar un listener para el evento submit del formulario
$(document).ready(function() {
    $("#registroForm").submit(function(event) {
        // Detener el envío del formulario si la validación no pasa
        if (!validarFormulario()) {
            event.preventDefault();
        }
    });
});
