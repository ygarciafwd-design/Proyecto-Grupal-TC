document.getElementById('solicitudForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log('Datos del formulario:', data);
    alert('¡Formulario enviado con éxito!');
    e.target.reset();
});
