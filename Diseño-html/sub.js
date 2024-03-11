function siguiente() {
    // Obtener todos los formularios
    var formularios = document.querySelectorAll('.formularios form');

    // verificar si todas las opciones están seleccionadas
    var todasOpcionesSeleccionadas = true;

    // Iterar sobre cada formulario
    formularios.forEach(function(formulario) {
        // Obtener todas las preguntas en el formulario
        var preguntas = formulario.querySelectorAll('.question');

        // verificar si todas las opciones en el formulario están seleccionadas
        var opcionesSeleccionadas = true;

        // Iterar sobre cada pregunta en el formulario
        preguntas.forEach(function(pregunta) {
            // Obtener todas las opciones de radio en la pregunta
            var radios = pregunta.querySelectorAll('input[type="radio"]');

            // Verificar si al menos una opción está seleccionada
            var alMenosUnaSeleccionada = false;
            radios.forEach(function(radio) {
                if (radio.checked) {
                    alMenosUnaSeleccionada = true;
                }
            });

            // Si ninguna opción está seleccionada, establecer falso
            if (!alMenosUnaSeleccionada) {
                opcionesSeleccionadas = false;
            }
        });

        // Si no todas las opciones en el formulario están seleccionadas, establecer falso
        if (!opcionesSeleccionadas) {
            todasOpcionesSeleccionadas = false;
        }
    });

    // Si todas las opciones en todos los formularios están seleccionadas, proceder al siguiente paso
    if (todasOpcionesSeleccionadas) {
        //Navegar al siguiente HTML
        window.location.href = "file:///C:/Users/Dell/Documents/Diseño-html/keep/Keep.html";
    } else {
        
    }
}