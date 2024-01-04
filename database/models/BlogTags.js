module.exports = (sequelize, DataTypes) => {
  const BlogTags = sequelize.define(
    "BlogTags",
    {
      BlogId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      TagId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return BlogTags;
};
