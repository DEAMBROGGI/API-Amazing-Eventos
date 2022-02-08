require('dotenv').config()
const express = require('express');
const cors = require('cors');
const Router = require('./routes/routes')
require('./config/database')
const app = express();
const fs = require('fs')
const port = process.env.PORT ||3000

//middlewares
app.use(cors());
app.use(express.json());

app.use('/api', Router)



app.listen(port,()=> console.log('Server ready'))


