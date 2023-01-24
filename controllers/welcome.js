module.exports = {
    welcome : (req, res) => {
        return res.status(200).send('<h1>Hello World!</h1>')
    }
}