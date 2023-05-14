

const {DwellingModel} = require('../../../models/dwellings.js');
const {FavoriteListModel} = require('../../../models/favoriteLists.js');


const jwt = require('jsonwebtoken');


module.exports.getUserDwellings = async (req,res) =>{
    
    const {token} = req.params;

     const decodedToken = jwt.verify(token, 'secret123');

     console.log("Decoded token ", decodedToken);


    const userList = await FavoriteListModel.findOne({user_id: decodedToken._id});

    if(!userList) {
        return res.status(400).send("User list was not found");
    }

    const dwelling_list = userList.dwelling_lists;
    console.log(dwelling_list);



    const dwellings = await DwellingModel.find({_id: {
        $in: dwelling_list
    }})

    if(!dwellings) {
        return res.status(400).send("There is no saved dwellings in your list");
    }


    console.log(dwellings);


    res.send(dwellings);


}

