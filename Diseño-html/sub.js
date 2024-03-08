function sub() {
    const radios = document.querySelectorAll('input[type="radio"]');
    let allSelected = true;

    radios.forEach(radio => {
        if (!radio.checked) {
            allSelected = false;
        }
    });

    if (allSelected) {
        alert('¡Todos los radios han sido seleccionados! Aquí puedes enviar el formulario.');
    } else {
        alert('Por favor, selecciona todas las opciones antes de enviar el formulario.');
    }
}

function showForm(formId) {
    var forms = document.querySelectorAll('.formularios > div');
    forms.forEach(function(form) {
        form.classList.remove('show');
    });

    var formToShow = document.getElementById(formId);
    formToShow.classList.add('show');
}