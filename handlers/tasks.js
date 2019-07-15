const db = require('../db');


exports.getTask = function(req, res, next) {
  db.query('SELECT * FROM tasks WHERE id = $1', [req.params.id], (err, data) => {
    if (err) {
      return next(err);
    }

    const task = data.rows[0];

    return res.status(200).json({"title": task.title});
  })
}

exports.getTasks = function(req, res, next) {

  return res.status(200).json({"tasks": [{"title": "task1"}, {"title": "task2"}]});
}

exports.createTask = function(req, res, next) {
  console.log(req.body.task);
  const task = new Task(req.body.task);

  return task.save().then(function () {
    res.status(200).json({"message": "task created"});
  });
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
