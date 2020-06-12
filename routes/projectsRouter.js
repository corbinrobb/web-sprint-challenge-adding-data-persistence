const router = require('express').Router();
const db = require('../models/index.js');

router.get('/', async (req, res) => {
  try {
    const projects = await db.getProjects();
    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt retrieve projects from database" })
  }
})

router.get('/:id/resources', async (req, res) => {
  try {
    const resources = await db.getProjectResources(req.params.id);
    res.status(200).json(resources);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt retrieve project resources from database" })
  }
})

router.post('/:id/resources', async (req, res) => {
  try {
    const projectId = req.params.id;
    const resourcesId = req.body.resource_id;
    const key = await db.addProjectResource(resourcesId, projectId);
    res.status(200).json(key);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt add resource to project" })
  }
})

router.get('/:id/tasks', async (req, res) => {
  try {
    const tasks = await db.getProjectTasks(req.params.id);
    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt retrieve project tasks from database" })
  }
})

router.post('/', async (req, res) => {
  try {
    const project = req.body;

    const projectId = await db.addProject(project);
    res.status(200).json(projectId);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt add project to database" })
  }
})

module.exports = router;