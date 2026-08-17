module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define("feedback", {
    userName: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    language: DataTypes.STRING,
    experience: DataTypes.STRING
  });
  return Feedback;
};
