const db = require('../database/models');

module.exports = {
    getAuthor: async (req, res) => {
        try {
            const authors = await db.Authors.findAll();

            if (authors.length){
                res.status(200).json(authors)
            } else {
                throw new Error("Author Not Found")
            }
        } catch(err) {
            return res.status(404).send(`404 ${err}`)
            
        }
        // const id = req.params.id
        // const author = await db.Authors.findAll()
        // // const author = await db.Authors.findOne(
        // //     {where: {id: id}}
        // // )
        // if (author) {
        //     return res.status(200).json(author)
        // } else {
        //     return res.status(400).json({error: "No Authors found"})
        // }
    },
    // createAuthor 
    editAuthor : async (req, res) => {
        // if else missing
        const {fullName, about, profileImg, linkFb, linkTwt, linkWa} = req.body;
        try {
            const author = await db.Authors.create({fullName, about, profileImg, linkFb, linkTwt, linkWa})
            return res.status(200).json({author})
        } catch(err) {
            console.log(err);
            return res.status(400).json({error: err.message})
        }
    }
}