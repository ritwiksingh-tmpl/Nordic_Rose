const db = require("../database/models");

module.exports = {
  getAllTags: async (req, res) => {
    try {
      const response = await db.Tags.findAll();
      return res.status(200).json(response);
    } catch (error) {
      res.status(400).send(`Bad Request ${err}`);
    }
  },
};
