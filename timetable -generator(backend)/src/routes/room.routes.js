module.exports = app => {
  const db = require("../models");
  const Room = db.room;
  const router = require("express").Router();

  router.get("/", async (req, res) => {
    res.send(await Room.findAll());
  });

  router.post("/", async (req, res) => {
    try {
      const r = await Room.create(req.body);
      res.send(r);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });

  app.use("/api/rooms", router);
};
