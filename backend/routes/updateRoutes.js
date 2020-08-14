var express = require('express');
var router = express.Router();
var UpdateController = require('../controllers/updateController')
var VerifyToken = require('../middleware/verifyToken');

router.post('/', UpdateController.createUpdate)
router.get('/', UpdateController.findAllUpdates)
router.get('/:id', UpdateController.findUpdate)
router.delete('/', UpdateController.deleteAllUpdates)
router.delete('/:id', VerifyToken, UpdateController.deleteUpdate)

module.exports = router;
