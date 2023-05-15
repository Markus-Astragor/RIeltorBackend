

const {Router} = require('express');

const UsersAPI  = require('./users.api');
const favoriteListAPI = require('./favoriteLists.api');
const DwellingsAPI = require('./rieltor.api');
const router = Router();



router.use(UsersAPI.router);
router.use(favoriteListAPI.router);
router.use(DwellingsAPI.router);



module.exports = {router}