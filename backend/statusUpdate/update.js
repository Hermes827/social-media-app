var mongoose = require('mongoose');
var UpdateSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: String,
  authorID: String
});
mongoose.model('Update', UpdateSchema);

module.exports = mongoose.model('Update');
