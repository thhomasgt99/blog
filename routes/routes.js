var express = require('express')

function prueba(req, res) {
	res.status(200).send({
		message: 'hola mundo desde Node'
	})
}

var api = express.Router()

// var multipart = require('connect-multiparty')
// var md_upload = multipart({uploadDir: './uploads/users'})

api.get('/', prueba)

module.exports = api