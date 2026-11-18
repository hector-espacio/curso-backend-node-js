import express from 'express';

const app = express();

// Base de datos integrada directamente en el servidor
const baseDeDatosProductos = [
    { id: 1, nombre: 'Teclado Mecánico', categoria: 'tecnologia', precio: 80 },
    { id: 2, nombre: 'Camisa de Algodón', categoria: 'ropa', precio: 25 },
    { id: 3, nombre: 'Mouse Inalámbrico', categoria: 'tecnologia', precio: 30 },
    { id: 4, nombre: 'Pantalón Jeans', categoria: 'ropa', precio: 50 }
];

// Ruta que procesa los Query Params para filtrar la base de datos
app.get('/productos', (req, res) => {
    // req.query extrae los parámetros enviados en la URL
    const { categoria, precioMax } = req.query;

    let resultados = baseDeDatosProductos;

    // Si el cliente envió el query param 'categoria', filtramos
    if (categoria) {
        resultados = resultados.filter(p => p.categoria === categoria);
    }

    // Si el cliente envió el query param 'precioMax', filtramos
    if (precioMax) {
        resultados = resultados.filter(p => p.precio <= Number(precioMax));
    }

    // Devolvemos el resultado al cliente en formato JSON
    res.json({
        filtrosAplicados: { categoria, precioMax },
        totalEncontrados: resultados.length,
        datos: resultados
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
