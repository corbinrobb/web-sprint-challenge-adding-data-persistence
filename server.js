const express = require('express');
const cors = require('cors');
const server = express();

const router = require('./routes/router.js');

server.use(express.json());
server.use(cors());

server.use('/api', router);

module.exports = server;