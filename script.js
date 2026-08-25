const formulario = document.querySelector("#formulario-contacto");
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const mensaje = document.querySelector("#mensaje").value;
    const mensajeError = document.querySelector("#mensaje-error")
    function mostrarError (texto){
        mensajeError.textContent = texto;
    }
    if (nombre === ""){
        mostrarError("Por favor completa tu nombre");
    return;
    }
    if (email === ""){
        mostrarError("Por favor completa tu email");
    return;
    }
    if (mensaje===""){
        mostrarError("Por favor completa tu mensaje");
    return;
    }
fetch("https://formspree.io/f/xljrvkvv", {
    method: "POST",
    body: JSON.stringify({nombre: nombre, email: email, mensaje: mensaje}),
    headers: {"Content-type": "application/json"}
})
.then(function(respuesta) {
    mostrarError("¡Gracias! Hemos recibido tu solicitud, te contactaremos pronto.");
formulario.reset();
});
});
