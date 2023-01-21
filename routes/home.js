const express = require('express');
const homeRoute = express.Router();
const homeController = require('../controllers/home')

homeRoute.get('/', homeController.welcome)
homeRoute.get('/home', homeController.getBanner)

homeRoute.post('/', homeController.uploadBanner)
homeRoute.post('/home', homeController.uploadBanner)

module.exports = homeRoute;