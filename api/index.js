

const {Router} = require('express');

const UsersAPI  =require('./users.api');




const router = Router();


router.use(UsersAPI.router);




module.exports = {router}