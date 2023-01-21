const express = require('express');
const author = express.Router();
const authorController = require('../controllers/author')

author.get('/author/:id', authorController.getAuthor)
author.post('/author', authorController.postAuthor)

module.exports = author;