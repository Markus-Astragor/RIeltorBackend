const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();


const mongo = require('./mongo/index.js');


const bootstrap = async () =>{

app.use(bodyParser.json);
app.use(cors());
await mongo.connectMongo(process.env.MONGO_URI);

app.listen(process.env.PORT, () =>{
    console.log('Server was started on port', process.env.PORT);
})

}



bootstrap();