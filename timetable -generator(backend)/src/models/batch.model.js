module.exports = (sequelize, DataTypes) => {
  const Batch = sequelize.define("batch", {
    name: DataTypes.STRING
  });
  return Batch;
};
