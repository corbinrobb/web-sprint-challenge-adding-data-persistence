const express = require('express');
const cors = require('cors');
const server = express();

const projectsRouter = require('./routes/projectsRouter.js');
const resourcesRouter = require('./routes/resourcesRouter.js');
const tasksRouter = require('./routes/tasksRouter.js');

server.use(express.json());
server.use(cors());

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

module.exports = server;