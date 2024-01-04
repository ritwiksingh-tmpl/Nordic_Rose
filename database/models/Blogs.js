module.exports = (sequelize, DataTypes) => {
  const Blogs = sequelize.define(
    "Blogs",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subheading: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shortDesc: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      bannerImg: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contentImg: {
        type: DataTypes.STRING,
      },
      contentImgDesc: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "Blogs",
      freezeTableName: true,
    }
  );

  Blogs.associate = function (models) {
    models.Blogs.belongsTo(models.Authors, { foreignKey: "AuthorId" });
    Blogs.belongsToMany(models.Tags, {
      through: "BlogTags", // junction table
      foreignKey: "BlogId",
    });
  };

  return Blogs;
};
