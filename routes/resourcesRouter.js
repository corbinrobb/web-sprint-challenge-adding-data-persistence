const router = require('express').Router();
const db = require('../models/index.js');

router.get('/', async (req, res) => {
  try {
    const resources = await db.getResources();
    res.status(200).json(resources);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt retrieve resources from database" })
  }
})

router.get('/:id/projects', async (req, res) => {
  try {
    const projects = await db.getProjectsByResource(req.params.id);
    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt retrieve projects from database" })
  }
})

router.post('/', async (req, res) => {
  try {
    const resource = req.body;

    const resourceId = await db.addResource(resource);
    res.status(201).json(resourceId);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt add resource to database" })
  }
})

module.exports = router;