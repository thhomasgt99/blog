// Importar Express
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();

// Definir la ruta GET
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Configurar el servidor para que escuche en el puerto 3000
const PORT = process.env.PORT || 3800;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});