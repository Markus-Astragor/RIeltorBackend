

const {DwellingModel} = require('../../../models/dwellings.js');
const jwt = require('jsonwebtoken');


module.exports.getAllDwellings = async (req,res) =>{


    const {token} = req.query;

    const decoded_token = jwt.verify(token, 'secret123');


    const dwellings = await DwellingModel.find({rieltor_id: decoded_token._id});

    if(!dwellings) {
        return res.status(400).send('There is no dwellings created by you');
    }

    res.status(200).send(dwellings);

}