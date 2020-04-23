const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const server = express();

server.use(express.static("src"));
server.use(cors());

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/src/index.html"))
})
server.use(routes);

server.listen(process.env.PORT || 3000);