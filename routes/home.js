const express = require('express');
const homeRoute = express.Router();
const homeController = require('../controllers/home')

homeRoute.get('/', homeController.getBanner)

homeRoute.post('/', homeController.uploadBanner)

module.exports = homeRoute;