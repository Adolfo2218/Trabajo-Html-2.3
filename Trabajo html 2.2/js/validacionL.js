document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "admin" && password === "password123") {
        alert("¡Inicio de sesión exitoso!");
    } else {
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
});
