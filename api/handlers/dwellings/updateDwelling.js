
const { body } = require('express-validator');
const {DwellingModel} = require('../../../models/dwellings.js');

const jwt = require('jsonwebtoken');

module.exports.updateDwelling = async (req,res) =>{

    const {data, id} = req.body;


    const post = await DwellingModel.findById(id);

    if(!post) {

        return res.status(400).send('Dwelling was not found');
    }

    console.log(data);

    await DwellingModel.updateOne({_id: id}, {$set: data});

    res.status(200).send('Dwelling was updated')


}