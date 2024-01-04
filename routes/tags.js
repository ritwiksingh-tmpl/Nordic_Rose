const express = require("express");
const tags = express.Router();
const tagsController = require("../controllers/tags");

tags.get("/", tagsController.getAllTags);

module.exports = tags;
