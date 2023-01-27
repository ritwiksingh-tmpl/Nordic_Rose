const db = require("../database/models")

module.exports = {
    getArticle: async (req, res) => {
        let articles;
        try {
            let id = req.params.id

            console.log(`Searching for article ${id} .`);
            console.log(`Searching for article ${id} ..`);
            console.log(`Searching for article ${id} ...`);

            // pagination
            let perPage = parseInt(req.query.perPage) || 6
            let pageNo = parseInt(req.query.pageNo) || 1
            
            let offset = (perPage * (pageNo - 1))
            articles = await db.Blogs.findAll(
                {offset, limit: perPage, attributes : ["id", "title", "bannerImg"]}
                )

            //total pages
            let totalPosts = await db.Blogs.findAll();
            totalPosts = totalPosts.length
            let totalPages = []
            console.log(totalPosts);
            for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
                totalPages.push(i);
              }

            // association
            // const article = await db.Blogs.findOne(
            //     {where: {id, include:[db.Authors]}}
            // )

            const article = await db.Blogs.findOne(
                {where: {id}, attributes: {exclude: ["updatedAt"]}}
            )
            
            // finding author of 
            const author = await db.Authors.findOne({
                where: {
                    id: article.Author}, 
                attributes: {
                    exclude: ["id","updatedAt", "createdAt"]}
                }
            )
            
            // LOL manual association
            article.Author = author
            console.log(author)
            
            const response = {
                    article: article,
                    readNext: articles,
                    totalPages: totalPages
            }
            return res.status(200).json(response)

        } catch (err) {
            const response = {
                error: `Bad Reqest: ${err.message}`,
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