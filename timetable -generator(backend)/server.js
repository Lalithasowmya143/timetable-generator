const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./src/models'); // your Sequelize models

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import routes
require('./src/routes/user.routes')(app);
require('./src/routes/timetable.routes')(app);
require('./src/routes/feedback.routes')(app);
require('./src/routes/subject.routes')(app);
require('./src/routes/faculty.routes')(app);
require('./src/routes/room.routes')(app);
require('./src/routes/batch.routes')(app);
require('./src/routes/profile.routes')(app);
require('./src/routes/auth.routes')(app);

// Sync database (safe for serverless)
db.sequelize.sync({ alter: true })
  .then(() => console.log("✅ Database synced!"))
  .catch(err => console.error("❌ DB sync error:", err));

module.exports = app; // export app for serverless
