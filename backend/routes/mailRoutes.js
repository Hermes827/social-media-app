var express = require('express');
var router = express.Router();
var MailController = require('../controllers/mailController')

router.get('/', MailController.findUserMail)

module.exports = router;
