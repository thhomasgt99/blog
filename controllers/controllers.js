const User = require('../models/userModel')

function prueba(req, res) {
	res.status(200).send({
		message: 'hola Thomi'
	})
}

function saveUser(req, res) {
	var params = req.body
	const newUser = new User()

	if (params.name && params.social_profile  && params.rating && params.last_login) {
		newUser.name = params.name
		newUser.user_role = params.user_role
		newUser.status = params.status
		newUser.social_profile = params.social_profile
		newUser.promote = params.promote
		newUser.rating = params.rating
		newUser.last_login = params.last_login
	}

	User.find()
		.then((usuarios) => {
			const filter = usuarios.some(usuario => usuario.name == newUser.name)
			if (filter) {
				res.status(404).send({message: 'el nombre de usuario ya existe'})
			} else {
				newUser.save().then((item) => {
					res.status(200).send(item)
				}).catch((err) => {
					console.error('Error al guardar el usuario', err)
				})
			}
		})
		.catch((err) => {
			console.error('Error al obtener la lista de usuarios:', err);
		});

		return newUser

}

module.exports = {
	prueba,
	saveUser,
}