const db = require("../database/models")

module.exports = {
    getArticle: async (req, res) => {
        const id = req.params.id
        const {readNext, pangeNo} = req.body
        const article = await db.Blogs.findOne(
            {where: {id: id}})
        res.status(200).json(article)
    },
    postArticle: async (req, res) => {
        const {titile, subtitle, subheading, shordDesc, description, bannerImg, contentImg, contentImgDesc, AuthorId, tags} = req.body
        try {
            await db.Blogs.create({ titile, subtitle, subheading, shordDesc, description, bannerImg, contentImg, contentImgDesc, AuthorId, tags})
    } catch(err) {
        console.log(err);
        return res.status(400).json({error: err.message})
        // return createError(400,err.message)
    }
    }
}