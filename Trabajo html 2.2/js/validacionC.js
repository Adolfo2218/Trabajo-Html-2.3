document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    
    if (nombre && telefono && correo) {
        alert("Formulario enviado correctamente!");
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
