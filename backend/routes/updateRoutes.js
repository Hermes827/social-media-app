var express = require('express');
var router = express.Router();

var UpdateController = require('../controllers/updateController')

router.get('/updates', UpdateController.createUpdate)

module.exports = router;
