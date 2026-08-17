const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: dbConfig.pool
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.user = require("./user.model.js")(sequelize, DataTypes);
db.timetable = require("./timetable.model.js")(sequelize, DataTypes);
db.feedback = require("./feedback.model.js")(sequelize, DataTypes);
db.subject = require("./subject.model.js")(sequelize, DataTypes);
db.faculty = require("./faculty.model.js")(sequelize, DataTypes);
db.room = require("./room.model.js")(sequelize, DataTypes);
db.batch = require("./batch.model.js")(sequelize, DataTypes);

module.exports = db;
