const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('¡Hola, mundo!');
});

module.exports = app