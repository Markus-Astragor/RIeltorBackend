

const {model, Schema} = require('mongoose');


const schema = new Schema({
    email: {type: String, required: true},
    passwordHash: {type: String, required: true},
    name: {type: String, required: true},
    contacts: {telegram: [Number], viber: [Number], email: String},
    role: String
})

const UserModel = model('users', schema, 'users');


module.exports = {UserModel};