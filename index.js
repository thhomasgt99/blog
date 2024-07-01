// Importar Express
const app = require('./app')
// const mongoose = require('mongoose')

// Configurar el servidor para que escuche en el puerto 3000
const PORT = process.env.PORT || 3800;
// app.listen(PORT, () => {
//     console.log(`Servidor escuchando en el puerto ${PORT}`);
// });

//conexion database
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/blog')
// mongoose.connect('mongodb+srv://thhomasgt99:lPSWgHFfHqt7fkGu@cluster0.tykp5qz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
// 	.then(()=>{
// 		console.log("La conexion a la base de datos se ha realizado correctamente")

// 		//crear servidor
		app.listen(PORT, ()=>{
			console.log("Servidor corriendo en http://localhost:3800")
		})

// 	})
// 	.catch(err => console.log(err))