

const {Router} = require('express');
const {wrapperApi} = require('../shared/wrapperApi');
const {users} = require('./handlers/index.js');

const router = Router();

router.post('/registration',  wrapperApi(users.registerUser));
router.post('/login', wrapperApi(users.loginUser));




module.exports = {router};