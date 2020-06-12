const router = require('express').Router();
const db = require('../models/index.js');

router.get('/', async (req, res) => {
  try {
    const tasks = await db.getTasks();
    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt retrieve tasks from database" })
  }
})

router.post('/', async (req, res) => {
  try {
    const task = req.body;

    const taskId = await db.addTask(task);
    res.status(200).json(taskId);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt add task to database" })
  }
})

module.exports = router;