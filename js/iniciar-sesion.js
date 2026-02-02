document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = e.target.username.value;
    const pass = e.target.password.value;

    console.log('Intento de login:', { user, pass });

    if (user && pass) {
        // Simulating a successful login
        alert('¡Bienvenido, ' + user + '! Redirigiendo a la página principal...');

        // Redirecting back to inicio.html
        window.location.href = 'inicio.html';
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
