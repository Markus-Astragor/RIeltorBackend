

const {Router} = require('express');
const {wrapperApi} = require('../shared/wrapperApi');
const {dwellings} = require('./handlers/index.js');

const router = Router();

router.delete('/delete/dwelling/:id',  wrapperApi(dwellings.deleteDwelling));
router.patch('/update/dwelling', wrapperApi(dwellings.updateDwelling));
router.get('/get/rieltor/dwelling', wrapperApi(dwellings.getAllDwellings));





module.exports = {router};