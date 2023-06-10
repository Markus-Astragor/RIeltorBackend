const {DwellingModel} = require('../../../models/dwellings');

const jwt = require('jsonwebtoken');

module.exports.createDwelling = async (req, res) => {
    const {token, dwelling_type, status, city, price, oblast, district, rooms, area, coordinates, description, building_state} = req.body;

    const decoded_token = jwt.verify(token, 'secret123');
    const id = decoded_token._id;



    if(dwelling_type == '' || dwelling_type == undefined)
    {
        return res.status(404).send('Тип квартири не повинен бути порожнім');
    }

    if(city == '' || undefined)
    {
        return res.status(404).send('Поле міста не повинне бути порожнім');
    }

    if(typeof(price) !== Number && price <= 0)
    {
        return res.status(404).send('Ціна повинна бути додатною і не бути в лапках');
    }

    if(oblast == '' || undefined)
    {
        return res.status(404).send('Поле області повинне бути заповнене');
    }

    if(district == '' || undefined)
    {
        return res.status(404).send('Поле району повинне бути заповненим');
    }

    if(rooms !== Number && rooms <= 0)
    {
        return res.status(404).send('Кількість кімнат повинна бути додатною і бути числом');
    }

    
    if(typeof(area) !== 'number' || area <= 0)
    {
        return res.status(404).send('Поле площі повинне бути додатним числом');
    }

    if( (typeof(coordinates.lattitude) !== 'number') || typeof(coordinates.longitude) !== 'number'){ 
        return res.status(404).send('Координати повинні бути числом');
    }

    if(description == '')
    {
        return res.status(404).send('Поле опису повинне бути заповнене');
    }


    if(typeof(dwelling_type) !== 'string')
    {
        return res.status(404).send('Поле повинне містити текст');
    }

    const docs = new DwellingModel({
        rieltor_id: id,
        dwelling_type: dwelling_type,
        status: status,
        city: city,
        price: price,
        oblast: oblast,
        district: district,
        rooms: rooms,
        area: area,
        coordinates: coordinates,
        description: description,
        building_state: building_state,
        created_at: new Date()
    })
    const doc = await docs.save();

    return res.status(200).send(doc);

}