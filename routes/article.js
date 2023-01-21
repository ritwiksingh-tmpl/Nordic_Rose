const express = require('express');
const article = express.Router();
const articleController = require('../controllers/article')

article.get('/article/:uuid', articleController.getArticle)
article.post('/article/:uuid', articleController.postArticle)

module.exports = article;