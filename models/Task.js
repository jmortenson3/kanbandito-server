const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Task = new Schema({
  id: ObjectId,
  title: String,
  assignee: String,
  description: String,
  dueDate: Date,
  createdDate: Date,
  folder: String
});

module.exports = Task;