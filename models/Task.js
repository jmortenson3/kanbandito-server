const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Task = new Schema({
  id: ObjectId,
  title: String,
  assignee: String,
  description: String,
  folder: String
});

module.exports = mongoose.model('Task', Task);