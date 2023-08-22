require('dotenv').config()
const express = require('express');
const cors = require('cors');
const Router = require('./routes/routes') 
require('./config/database')
const app = express();
const fs = require('fs')
const port = process.env.PORT ||3000
const host = process.env.HOST || '0.0.0.0'

//middlewares
app.use(cors());
app.use(express.json());

app.use('/api', Router)
app.use(express.static('public'));


app.listen(port,host,()=> console.log('Server ready'))


