module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define(
    "Tags",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  Tags.associate = function (models) {
    Tags.belongsToMany(models.Blogs, {
      through: "BlogTags", // junction table
      foreignKey: "TagId",
    });
  };
  return Tags;
};
