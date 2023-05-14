
const {model, Schema, Types} = require('mongoose');


const schema = new Schema({
    user_id: {type: String, required: true},
    dwelling_lists: [String]
})


const FavoriteListModel = model('saved_dwellings', schema, 'saved_dwellings');

module.exports = {FavoriteListModel};
