const db = require('../database/models');

module.exports = {
    getBlogs: async (req, res) => {
        try {
            const banner = await db.HomePage.findAll();
            
            // pagination
            let perPage = parseInt(req.query.perPage) || 12
            let pageNo = parseInt(req.query.pageNo) || 1
            
            let offset = (perPage * (pageNo - 1))
            let articles = await db.Blogs.findAll(
                {offset, limit: perPage}
                )
            
                //total pages
            let totalPosts = await db.Blogs.findAll();
            totalPosts = totalPosts.length
            let totalPages = []
            console.log(totalPosts);
            for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
                totalPages.push(i);
              }

            const response = {
                banner: banner[0],
                blogs: articles,
                totalPages: totalPages
            }
            
            return res.status(200).json(response);

        } catch(err) {
            return res.status(404).send(`404 ${err}`);
        }
    },
    uploadBanner: async(req, res) => {
        const {title, subtitle, bannerImg} = req.body;
        try {
            const homePage = await db.HomePage.create({ title, subtitle, bannerImg});
            return res.status(200).json({homePage});
        } catch(err) {
            return res.status(400).json({error: `Bad Request: ${err.message}`});
        }
    }
}