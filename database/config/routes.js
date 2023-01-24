const homeRoute = require('../../routes/home')
const welcome = require('../../routes/welcome')
const articleRoute = require('../../routes/article')

module.exports = (app) => {
    console.log("this is a test");
    app.use('/', welcome)
    app.use('/home', homeRoute)
}