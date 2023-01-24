const db = require("../database/models")

module.exports = {
    getArticle: async (req, res) => {
        let articles;
        try {
            let id = req.params.id

            console.log(`Searching for article ${id} ...`);

            let perPage = parseInt(req.query.perPage) || 6
            let pageNo = parseInt(req.query.pageNo) || 1
            
            let offset = (perPage * (pageNo - 1))
            articles = await db.Blogs.findAll(
                {offset, limit: perPage}
                )

            // association
            // const article = await db.Blogs.findOne(
            //     {where: {id, include:[db.Authors]}}
            // )

            const article = await db.Blogs.findOne(
                {where: {id}}
            )

            const author = await db.Authors.findOne(
                {where: {id: article.AuthorId}}
            )
            
            // LOL manual association
            article.AuthorId = author
            
            const response = {
                    article: article,
                    readNext: articles
            }
            return res.status(200).json(response)

        } catch (err) {
            const response = {
                article: `Error: Blog with id '${req.params.id}' doesn't exist!`,
                readNext: articles
            }
            return res.status(400).json(response)
        }
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