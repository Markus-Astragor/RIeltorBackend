
const {UserModel} = require('../../../models/users.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');


module.exports.registerUser = async (req,res) =>{

    const validationErrors = validationResult(req);

    if(!validationErrors.isEmpty()){
        return res.status(400).send(errors.array());
    }

    const {password, email, userName} = req.body;


    const user = await UserModel.findOne({email: email});

    if(user)
    {
        return res.status(400).send('Даний email вже використовується');
    }

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
        email: email,
        passwordHash: password_hash,
        name: userName
    })

    const doc = await newUser.save();


    const {passwordHash, ...userDate} = doc._doc;

    const token = jwt.sign({_id: doc._id},'secret123', { expiresIn: '5d'});

    res.status(200).send({
        userDate,
        token
    })
}

