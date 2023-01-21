const db = require('../database/models');
module.exports = {
    // createAuthor 
    postAuthor : async (req, res) => {

        // if else missing
        const {fullName, about, profileImg, linkFB, linkTwt, linkWA} = req.body;
        try {
            const author = await db.Authors.create({fullName, about, profileImg, linkFB, linkTwt, linkWA})
            return res.status(200).json({author})
        } catch(err) {
            console.log(err);
            return res.status(400).json({error: err.message})
        }
    },
    // getOneAuthor
    getAuthor: async (req, res) => {
        const id = req.params.id
        const author = await db.Authors.findOne(
            {where: {id: id}}
        )

        if (author) {
            return res.status(200).json(author)
        } else {
            return res.status(400).json({error: "No Authors found"})
        }
    }

    // getAllAuthors
}