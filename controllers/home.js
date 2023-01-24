const db = require('../database/models');

module.exports = {
    getBanner: async (req, res) => {
        try {
            const banner = await db.HomePage.findAll();
            let articles;
            
            if (req.query){
                let perPage = parseInt(req.query.perPage) || 12
                let pageNo = parseInt(req.query.pageNo) || 1
                
                let offset = (perPage * (pageNo - 1))
                articles = await db.Blogs.findAll(
                    {offset, limit: perPage})
                }

            else{
                articles = await db.Blogs.findAll()
            }
            
            const response = {
                banner: banner[0],
                blogs: articles
            }

            if (banner.length) {
                return res.status(200).json(response);
            } else {
                throw new Error("Articles Not Found")
            }
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