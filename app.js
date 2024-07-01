'use strict'

var express = require('express')
// var bodyParser = require('body-parser')
// var routes = require('./routes/routes')
var app = express()

var express = require('express')

var api = express.Router()

function prueba(req, res) {
	res.status(200).send({
		message: 'hola mundo desde Node'
	})
}

api.get('/', prueba)

//cargar rutas
// var user_routes = require('./routes/userRoute')

const cors = require('cors');


// //middlewares
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())


//cors
app.use(cors());

//rutas
// app.use('/api', ()=>{
// app.use('/', routes)

//exportar
module.exports = app