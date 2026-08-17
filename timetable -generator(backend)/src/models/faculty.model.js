module.exports = (sequelize, DataTypes) => {
  const Faculty = sequelize.define("faculty", {
    name: DataTypes.STRING,
    subject: DataTypes.STRING,
    avgLeaves: DataTypes.INTEGER
  });
  return Faculty;
};
