const express = require('express');
const router = express.Router();
const { createTask,
        deleteTask,
        getTasks,
        updateTask } = require('../handlers/tasks');

router.route('/')
  .get(getTasks)
  .post(createTask);

router.route('/:id')
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;