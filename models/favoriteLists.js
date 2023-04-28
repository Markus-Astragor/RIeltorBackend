
const {model, Schema, Types}  = require('mongoose');

const schema = new Schema({
    user_id: {type: Types.ObjectId, required: true},
    dwelling_lists: [String]
})


const FavoriteListModel = model('lists', schema, 'lists');

module.exports = {FavoriteListModel};
