function showForm(formId) {
    var forms = document.querySelectorAll('.formularios > div');
    forms.forEach(function(form) {
        form.classList.remove('show');
    });

    var formToShow = document.getElementById(formId);
    formToShow.classList.add('show');
}