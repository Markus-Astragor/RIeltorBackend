

const {DwellingModel} = require('../../../models/dwellings.js');


module.exports.getAllDwellings = async (req,res) =>{


    const {id} = req.query;


    const dwellings = await DwellingModel.find({rieltor_id: id});

    if(!dwellings) {
        return res.status(400).send('There is no dwellings created by you');
    }

    res.status(200).send(dwellings);

}