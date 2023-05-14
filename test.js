

const jwt = require('jsonwebtoken');


const token = jwt.sign({_id: "64609b552b39df17e119"}, 'secret123');

console.log(token);