document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Lógica para enviar datos al servidor (esto es solo un ejemplo básico)
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Inicio de sesión exitoso');
            // Redirigir a la página principal o al dashboard del usuario
            window.location.href = '/dashboard';
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Lógica para enviar datos al servidor (esto es solo un ejemplo básico)
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Registro exitoso, ahora puede iniciar sesión');
            // Limpiar el formulario de registro
            document.getElementById('registerForm').reset();
        } else {
            alert('Error en el registro, intente nuevamente');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
