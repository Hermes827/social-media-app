var express = require('express');
var router = express.Router();
var CommentController = require('../controllers/commentController')
var VerifyToken = require('../middleware/verifyToken');

router.post('/', VerifyToken, CommentController.createComment)
router.get('/', CommentController.findComment)
router.get('/update/', CommentController.findUpdateComments)
router.delete('/', CommentController.deleteAllComments)
router.delete('/:id', VerifyToken, CommentController.deleteComment)

module.exports = router;
