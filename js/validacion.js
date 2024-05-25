function validarFormulario() {
    // Obtener los valores de los campos de entrada
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    
    
    // Validar los datos
    if (nombre.trim() === "" || apellido.trim() === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    
    
    alert("¡Formulario válido!");

    // Evitar que el formulario se envíe automáticamente
    return false;
}

// Agregar  listener para el evento submit del formulario
$(document).ready(function() {
    $("#registroForm").submit(function(event) {
        // Detener el envío del formulario si la validación no pasa
        if (!validarFormulario()) {
            event.preventDefault();
        }
    });
});
