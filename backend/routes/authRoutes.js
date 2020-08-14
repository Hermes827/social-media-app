var express = require('express');
var router = express.Router();
var AuthController = require('../controllers/authController')

router.post('/signup', AuthController.signup)
router.post('/login', AuthController.login)
router.get('/info', AuthController.info)

module.exports = router;
