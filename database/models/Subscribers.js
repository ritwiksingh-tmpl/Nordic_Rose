module.exports = (sequelize, DataTypes) => {
  const Subscribers = sequelize.define("Subscribers",
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Subscribers;
};
