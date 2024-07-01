'use strict'

var express = require('express')

var api = express.Router()

function prueba(req, res) {
	res.status(200).send({
		message: 'hola mundo desde Node'
	})
}

api.get('/', prueba)

module.exports = api