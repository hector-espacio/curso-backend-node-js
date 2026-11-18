import express from 'express';
const app = express();

app.use(express.json());

// Middleware para autorizar al navegador
app.use((req, res, next) => {
    // 1. Permites que cualquier origen hable contigo
    res.header('Access-Control-Allow-Origin', '*');
    
    // 2. AQUÍ ESTÁ LO QUE QUERÍAS ENTENDER: 
    // Le dices al navegador que SÍ permita enviar estas cabeceras específicas
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // 3. Métodos permitidos
    res.header('Access-Control-Allow-Methods', 'POST, GET');
    
    next();
});

// Tu ruta que recibe los datos
app.post('/api/perfil', (req, res) => {
    // El servidor lee el token que mandó el cliente en el header 'Authorization'
    const token = req.headers['authorization'];
    
    // El servidor lee el JSON que mandó el cliente gracias a 'Content-Type'
    const { nombre } = req.body; 

    console.log("Token recibido:", token);
    console.log("Nombre recibido:", nombre);

    res.json({ respuesta: "¡Datos recibidos con éxito!" });
});

app.listen(3000, () => {
    console.log('Servidor en puerto 3000');
});
