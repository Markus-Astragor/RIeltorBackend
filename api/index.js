

const {Router} = require('express');

const UsersAPI  = require('./users.api');
const favoriteListAPI = require('./favoriteLists.api');

const router = Router();



router.use(UsersAPI.router);
router.use(favoriteListAPI.router);



module.exports = {router}