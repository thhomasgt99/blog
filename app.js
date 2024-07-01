const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
var user_routes = require('./routes/routes')

const app = express();

//middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use(cors());

app.use('/api', user_routes)
module.exports = app