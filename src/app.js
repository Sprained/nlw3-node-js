require('dotenv/config');

const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

require('express-async-errors');
require('./database');

class App {
    constructor(){
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(cors());
        this.server.use(express.json());
    }

    routes(){
        this.server.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
        this.server.use(routes);
    }
}

module.exports = new App().server;