const express = require('express');
const router = express.Router();
const { createTask,
        deleteTask,
        getTasks,
        getTask,
        updateTask } = require('../handlers/tasks');

router.route('/')
  .get(getTasks)
  .post(createTask);

router.route('/:id')
  .get(getTask)
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;