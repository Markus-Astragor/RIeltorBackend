

const mongoose = require('mongoose');


const connectMongo = async (url) =>{
    await mongoose.connect(url).then(() =>{
        console.log('Mongo db is connected');
    }).catch(err =>{
        console.log(err);
        console.log("Something went wrong during mongoDB connection");
    })
}

module.exports = {connectMongo}