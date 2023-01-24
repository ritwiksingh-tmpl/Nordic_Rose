const db = require('../database/models');

module.exports = {
    getBanner: async (req, res) => {
        try {
            const banner = await db.HomePage.findAll();
            const articles = await db.Blogs.findAll()
            if (banner.length) {
                return res.status(200).json([banner[0], articles]);
            } else {
                throw new Error("Article Not Found")
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