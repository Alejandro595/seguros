// Función para alternar el modo oscuro/contraste
document.getElementById("toggle-contrast").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Función para reservar cita
document.getElementById("form-cita").addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    const especialidad = document.getElementById("especialidad").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    // Simular la confirmación de la cita
    const mensaje = `¡Cita confirmada!\nEspecialidad: ${especialidad}\nFecha: ${fecha}\nHora: ${hora}`;
    document.getElementById("mensaje-confirmacion").textContent = mensaje;

    // Mostrar cita en el historial (simulación)
    const citaElemento = document.createElement("li");
    citaElemento.textContent = `${especialidad} - ${fecha} a las ${hora}`;
    document.getElementById("citas-pasadas").appendChild(citaElemento);

    // Resetear el formulario
    e.target.reset();
});
