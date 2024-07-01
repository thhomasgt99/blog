function prueba(req, res) {
	res.status(200).send({
		message: 'hola mundo desde Node'
	})
}

module.exports = {
	prueba,
}