const router = require('express').Router();
const db = require('../models/models.js');

router.get('/projects', async (req, res) => {
  try {
    const projects = await db.getProjects();
    res.status(200).json(projects);
  } catch(err) {
    console.log(err);
    res.status(500).json({error: "Couldnt retrieve projects from database"})
  }
})

router.get('/projects/:id/resources', async (req, res) => {
  try {
    const resources = await db.getProjectResources(req.params.id);
    res.status(200).json(resources);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt retrieve project resources from database" })
  }
})

router.get('/projects/:id/tasks', async (req, res) => {
  try {
    const tasks = await db.getProjectTasks(req.params.id);
    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt retrieve project tasks from database" })
  }
})

router.get('/resources', async (req, res) => {
  try {
    const resources = await db.getResources();
    res.status(200).json(resources);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt retrieve resources from database" })
  }
})

router.get('/resources/:id/projects', async (req, res) => {
  try {
    const projects = await db.getProjectsByResource(req.params.id);
    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt retrieve projects from database" })
  }
})

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await db.getTasks();
    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt retrieve tasks from database" })
  }
})

router.post('/projects', async (req, res) => {
  try {
    const project = req.body;
    
    const projectId = await db.addProject(project);
    res.status(200).json(projectId);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt add project to database" })
  }
})

router.post('/resources', async (req, res) => {
  try {
    const resource = req.body;

    const resourceId = await db.addResource(resource);
    res.status(200).json(resourceId);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt add resource to database" })
  }
})

router.post('/tasks', async (req, res) => {
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