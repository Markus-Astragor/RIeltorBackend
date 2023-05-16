
const {DwelingModel} = require('../models/dwelings.js');


module.exports.filterDwellings = async (req,res) => {


  try {

      const {dwelling_type, status, price, oblast, district, city, rooms, area} = req.query;
  
      const queryDb = {}


      const fieldsOne = {
        dwelling_type,
        oblast,
        district,
        rooms,
        city
      };
      
      Object.entries(fieldsOne).forEach(([key, value]) => {
        if (value) queryDb[key] = value;
      });


      const fieldsTwo = {
        price,
        area
      };

      Object.entries(fieldsTwo).forEach(([key, value]) => {
        let temp_parsed= JSON.parse(value);

            if(value.split('gt').length -1 >= 2 || value.split('lt').length-1 >= 2) {
                return res.status(400).send('Два однакові параметри були передані');
            }

            if(temp_parsed.gt> temp_parsed.lt) {
                return res.status(404).send('Значення gt є більше за lt');
            }

            if (temp_parsed.gt) {
              temp_parsed['$gt'] = temp_parsed['gt'];
                delete temp_parsed['gt'];
            }

            if (temp_parsed.lt) {
              temp_parsed['$lt'] = temp_parsed['lt'];
                delete temp_parsed['lt'];
            }

            queryDb[key] = temp_parsed;
      });

      if (status) {
        if(status == 'true'){
          queryDb.status =true;
        }
        if(status == 'false'){
          queryDb.status =false;
        }
      }


      const doc = await DwelingModel.find(queryDb);                            

      res.status(200).send(doc);

  } catch (error) {
      console.log(error.toString());
      res.status(404).send('error');
  }

}




module.exports = {router};