module.exports = app => {
  const db = require("../models");
  const Timetable = db.timetable;
  const router = require("express").Router();

  router.get("/", async (req, res) => {
    res.send(await Timetable.findAll());
  });

  router.post("/", async (req, res) => {
    try {
      const t = await Timetable.create(req.body);
      res.send(t);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });

  app.use("/api/timetables", router);
};
