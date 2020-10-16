const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/uploads');

const routes = express.Router();
const upload = multer(uploadConfig);

const OrphanageController = require('./app/controller/OrphanageController');

routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);
routes.post('/orphanages', upload.array('images'), OrphanageController.store);

module.exports = routes;