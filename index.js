// Importar Express
const app = require('./app')

// Configurar el servidor para que escuche en el puerto 3000
const PORT = process.env.PORT || 3800;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});