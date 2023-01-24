const express = require('express')
const welcome = express.Router()
const welcomeController = require('../controllers/welcome')

welcome.get('/', welcomeController.welcome)

module.exports = welcome