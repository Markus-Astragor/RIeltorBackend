

const {FavoriteListModel} = require('../../../models/favoriteLists');
const jwt = require('jsonwebtoken');

module.exports.deleteFromUserDwellings = async (req,res) =>{

    const {id, token} = req.body;

    const decoded_token = jwt.verify(token, 'secret123')

    const deleteFromList = await FavoriteListModel.updateOne({user_id: decoded_token._id}, {$pull: {dwelling_lists: id}});

    res.status(200).send('Post was deleted from saved list');
} 