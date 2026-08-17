// src/models/timetable.model.js
module.exports = (sequelize, DataTypes) => {
  const Timetable = sequelize.define("timetable", {
    title: DataTypes.STRING,
    dataJson: DataTypes.TEXT
  });

  return Timetable;
};
