const homeRoute = require('../../routes/home')
const welcome = require('../../routes/welcome')
const articleRoute = require('../../routes/article')
const searchRoute = require('../../routes/search')

module.exports = (app) => {
    console.log("this is a test");
    app.use('/', welcome);
    app.use('/home', homeRoute);
    app.use('/search', searchRoute);
    app.use('/article', articleRoute);
}