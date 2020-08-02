var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
  userName: String,
  content: String,
  date: String,
  authorID: String,
  authorName: String,
  updateID: String
});
mongoose.model('Comment', CommentSchema);

module.exports = mongoose.model('Comment');
