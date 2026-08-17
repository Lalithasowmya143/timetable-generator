module.exports = app => {
  const db = require("../models");
  const Batch = db.batch;
  const router = require("express").Router();

  router.get("/", async (req, res) => {
    res.send(await Batch.findAll());
  });

  router.post("/", async (req, res) => {
    try {
      const b = await Batch.create(req.body);
      res.send(b);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });

  app.use("/api/batches", router);
};
