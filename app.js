const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

//middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use(cors());


app.get('/', (req, res) => {
	res.send('¡Hola desde app!');
});

module.exports = app