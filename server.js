require('dotenv').config()
const express = require('express');
const cors = require('cors');
const Router = require('./routes/routes')
require('./config/database')
const app = express();
const fs = require('fs')

//middlewares
app.use(cors());
app.use(express.json());

app.use('/api', Router)
app.use(express.static('img'));


app.listen('4000',()=> console.log('Server listening on port 4000'))


