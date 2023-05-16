

const {DwellingModel} = require('../../../models/dwellings');


module.exports.filterDwellings = async(req,res) =>{


    const coefficient = 0.000009; 
    const { point_x, point_y, radius } = req.query; 


    const gtx = point_x - radius * coefficient;
    console.log('gtx', gtx);
    const gty = point_y - radius * coefficient;
    console.log('gty', gty);
    const ltx = Number(point_x) + ( radius * coefficient);
    console.log('ltx', ltx);
    const lty = Number(point_y) +(radius * coefficient);
    console.log('lty', lty);


    const dwellings = await DwellingModel.find({lattitude: {$gt: gtx, $lt: ltx}, longitude: {$gt: gty, $lt: lty}});

    console.log(dwellings);
  
 

  const filteredDwellings = dwellings.filter(item => {
    const { lattitude, longitude } = item.coordinates;

    return (radius * 0.000009)^2 >= (lattitude - point_x)^2 + (longitude - point_y)^2;
  });

  console.log(filteredDwellings);


  res.status(200).send(filteredDwellings);


}
  


