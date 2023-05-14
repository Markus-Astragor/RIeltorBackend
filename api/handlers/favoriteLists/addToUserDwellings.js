

const {FavoriteListModel} = require('../../../models/favoriteLists');

const jwt = require('jsonwebtoken');


module.exports.addToUserDwellings = async (req,res) => {


    const {token, dwelling_id} = req.body;
    
    const decoded_token = jwt.verify(token, 'secret123');

    const user_list = await FavoriteListModel.findOne({user_id: decoded_token._id});

    if(!user_list) {
        return res.status(400).send('user list was not found');

    }

    const update_list = await FavoriteListModel.findOneAndUpdate({user_id: decoded_token._id}, {$push: {dwelling_lists: dwelling_id}});



    console.log(update_list);

    res.status(200).send("List was updated");

}