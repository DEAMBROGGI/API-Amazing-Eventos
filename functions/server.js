const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const Router = require('./routes/routes')
require('./config/database')
const app = express();
const port = process.env.PORT ||3000
const host = process.env.HOST || '0.0.0.0'

//middlewares
app.use(cors());
app.use(express.json());

app.use("/api",Router)

app.get("/",(req,res)=>{
    res.send("Api de Amazing Events Server Ready")
})
//app.listen(port,host,()=> console.log('Server ready'))

exports.app = functions.https.onRequest(app)

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

