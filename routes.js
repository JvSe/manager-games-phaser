const express = require('express');
const path = require('path');

const routes = express.Router();

routes.get('/tutorial1', (req, res) => {
    res.sendFile(path.join(__dirname + "/src/tutoria1/index.html"))
});

routes.get('/tutorial2', (req, res) => {
    res.sendFile(path.join(__dirname + "/src/tutoria2/index.html"))
});

routes.get('/gameAdventure', (req, res) => {
    res.sendFile(path.join(__dirname + "/src/gameAdventure/index.html"))
});

module.exports = routes;