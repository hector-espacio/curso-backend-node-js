import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/usuarios', (req, res) => {
    const listaUsuarios = [
        { nombre: "Hector", rol: "Estudiante de Backend", mensaje: "¡Hola" },
        { nombre: "Lucía", rol: "Diseñadora UX/UI", mensaje: "¡Hola" },
        { nombre: "Carlos", rol: "Frontend Developer", mensaje: "¡Hola" },
        { nombre: "Ana", rol: "Data Analyst", mensaje: "¡Hola" },
        { nombre: "Mateo", rol: "DevOps Engineer", mensaje: "¡Hola" }
    ];
    res.json(listaUsuarios);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
