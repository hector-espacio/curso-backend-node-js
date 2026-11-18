fetch('http://localhost:3000/api/perfil', {
    method: 'POST',
    headers: {
        // El navegador revisará si el servidor te autorizó a enviar esto
        'Content-Type': 'application/json',
        'Authorization': 'Bearer mi-token-secreto-123'
    },
    body: JSON.stringify({ nombre: 'Carlos' })
})
.then(res => res.json())
.then(data => console.log(data));
