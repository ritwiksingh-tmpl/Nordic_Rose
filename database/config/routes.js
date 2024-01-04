const homeRoute = require("../../routes/home");
const welcome = require("../../routes/welcome");
const searchRoute = require("../../routes/search");
const articleRoute = require("../../routes/article");
const subscribeRoute = require("../../routes/subscribe");
const tagsRoute = require("../../routes/tags");

module.exports = (app) => {
  app.use("/", welcome);
  app.use("/home", homeRoute);
  app.use("/search", searchRoute);
  app.use("/article", articleRoute);
  app.use("/subscribe", subscribeRoute);
  app.use("/tags", tagsRoute);
};
