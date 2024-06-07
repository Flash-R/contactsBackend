const express = require('express');
const { register, login, userInfo } = require('../controllers/userController');

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/user', userInfo);

module.exports = router