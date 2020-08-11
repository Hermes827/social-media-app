var mongoose = require('mongoose');
var MailSchema = new mongoose.Schema({
  content: String,
  date: String,
  authorID: String,
  authorName: String
});
mongoose.model('Mail', MailSchema);

module.exports = mongoose.model('Mail');
