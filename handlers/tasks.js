const Task = require('../models/Task');


exports.getTasks = function(req, res, next) {
  return res.status(200).json({"tasks": [{"title": "task1"}, {"title": "task2"}]});
}

exports.createTask = function(req, res, next) {
  return res.status(200).json({"message": "task created"});
}

exports.updateTask = function(req, res, next) {
  console.log(req.params.id);
  console.log(req.body);
  return res.status(200).json({"message": `task with id ${req.params.id} updated`});
}

exports.deleteTask = function(req, res, next) {
  console.log(req.params.id);
  return res.status(200).json({"message": `task ${req.params.id} deleted`});
}
