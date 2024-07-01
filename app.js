'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes/routes')
var app = express()

//cargar rutas
// var user_routes = require('./routes/userRoute')

const cors = require('cors');


//middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//cors
app.use(cors());

//rutas
// app.use('/api', ()=>{
app.use('/', routes)

//exportar
module.exports = app