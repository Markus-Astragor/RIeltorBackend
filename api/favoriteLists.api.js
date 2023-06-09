
const {Router} = require('express');
const {wrapperApi} = require('../shared/wrapperApi');
const {favoriteList} = require('./handlers/index.js');

const router = Router();

router.get('/users/:token/dwellings',  wrapperApi(favoriteList.getUserDwellings));
router.patch('/users/dwellings', wrapperApi(favoriteList.addToUserDwellings));
router.delete('/delete/user/dwelling', wrapperApi(favoriteList.deleteFromUserDwellings));




module.exports = {router};