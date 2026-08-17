module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define("subject", {
    name: DataTypes.STRING,
    perWeek: DataTypes.INTEGER,
    perDay: DataTypes.INTEGER
  });
  return Subject;
};
