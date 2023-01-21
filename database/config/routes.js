const homeRoute = require('../../routes/home')
const articleRoute = require('../../routes/article')
const authorRoute = require('../../routes/author');

module.exports = (app) => {
    console.log("this is a test");
    app.use('/', homeRoute)
    app.use('/home', homeRoute)
    // app.use('/author', authorRoute)
    // app.use('/author/:id', authorRoute)
}