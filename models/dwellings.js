const {model, Schema, Types} = require('mongoose');

const schema = new Schema({
    rieltor_id: Types.ObjectId,
    dwelling_type: {type: String, required: true},
    status: {type: String, required: true},
    price: {type: Number, required: true},
    oblast: {type: String, required: true},
    district: {type: String, required: true},
    rooms: {type: Number, required: true},
    area: {type: Number, required: true},
    coordinates: {lattitude: Number, longitude: Number},
    description: String,
    building_state: {type: String, required: true},
    created_at: Date
})


const DwellingModel = model('dwellings', schema, 'dwellings');

module.exports = {DwellingModel};