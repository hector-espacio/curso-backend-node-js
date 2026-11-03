document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.querySelector("#contenedor-usuarios");

    fetch('/api/usuarios')
        .then(response => response.json())
        .then(usuarios => {
            // Recorremos cada uno de los 5 usuarios del arreglo
            usuarios.forEach(user => {
                const tarjeta = document.createElement("div");
                tarjeta.style.margin = "10px 0";
                tarjeta.style.padding = "10px";
                tarjeta.style.border = "1px solid #ddd";

                tarjeta.innerHTML = `
                    <p><strong>${user.mensaje}, ${user.nombre}!</strong> - Rol: ${user.rol}</p>
                `;

                // Agregamos cada tarjeta al contenedor del HTML
                contenedor.appendChild(tarjeta);
            });
        })
        .catch(error => console.error("Error:", error));
});
