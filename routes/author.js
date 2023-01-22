const express = require('express')
const authorRoute = express.Router();
const authorController = require('../controllers/author')

// all authors
authorRoute.get('/', authorController.getAuthor)

// author by author id
authorRoute.get('/:id', authorController.getAuthor)

// add an author to the database
authorRoute.post('/', authorController.editAuthor)

module.exports = authorRoute;