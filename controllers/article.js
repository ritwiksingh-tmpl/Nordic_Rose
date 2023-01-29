const db = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
  getArticle: async (req, res) => {
    let readNext;
    try {
      let id = req.params.id;

      const article = await db.Blogs.findOne({
        where: { id },
        attributes: { exclude: ["AuthorId", "updatedAt"] },
        include: [
          {
            model: db.Authors,
            as: "Author",
            attributes: { exclude: ["id", "createdAt", "updatedAt"] },
          },
        ],
      });

      // pagination
      let perPage = parseInt(req.query.perPage) || 6;
      let pageNo = parseInt(req.query.pageNo) || 1;

      //total pages
      let totalPosts = await db.Blogs.findAll();
      totalPosts = totalPosts.length - 1;
      let totalPages = [];
      // Math.ceil() adds the fraction value to the next integer value
      for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
        totalPages.push(i);
      }

      // if requested pageNo > totalPages
      if (pageNo > totalPages.length) {
        pageNo = totalPages.length;
      }

      // offset
      let offset = perPage * (pageNo - 1);
      
      //
      readNext = await db.Blogs.findAll({
        offset,
        limit: perPage,
        where: {id: { [Op.ne]: id }},
        attributes: ["id", "title", "bannerImg"],
      });

      const response = {
        article,
        readNext,
        totalPages,
      };
      return res.status(200).json(response);
    } catch (err) {
      readNext = await db.Blogs.findAll({
        offset,
        limit: perPage,
        attributes: ["id", "title", "bannerImg"]});

      const response = {
        error: `Bad Reqest: ${err.message}`,
        readNext
      };
      return res.status(400).json(response);
    }
  },
};