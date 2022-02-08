require('dotenv').config()
const express = require('express');
const cors = require('cors');
const Router = require('./routes/routes')
require('./config/database')
const app = express();
const fs = require('fs')
const host = "https://amazingeventsapi.herokuapp.com"

//middlewares
app.use(cors());
app.use(express.json());

app.use('/api', Router)



app.listen(host,()=> console.log('Server listening on port 4000'))


