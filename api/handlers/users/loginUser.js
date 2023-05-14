

const {UserModel} = require('../../../models/users.js');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports.loginUser = async (req,res) => {

    const {password, email} = req.body;

    
    const user = await UserModel.findOne({email: email});

    if(!user)
    {
        return res.status(400).send("Невірно вказаний email або пароль");
    }

    const passwordIsEqual = bcrypt.compare(password, user.passwordHash);
    if(!passwordIsEqual) {
        return res.status(400).send("Невірно вказаний email або пароль");
    }

    const {passwordHash, ...userDate} = user._doc;

    const token = jwt.sign( {_id: user._id}, 'secret123',{ expiresIn: '15d'});

    res.status(200).send({
        token, userDate
    })
}
