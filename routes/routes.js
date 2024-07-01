const express = require('express')
const controller = require('../controllers/controllers')

const api = express.Router()

// var multipart = require('connect-multiparty')
// var md_upload = multipart({uploadDir: './uploads/users'})

api.get('/', controller.prueba)

module.exports = api