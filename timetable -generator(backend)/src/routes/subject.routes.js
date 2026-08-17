module.exports = app => {
  const db = require("../models");
  const Subject = db.subject;
  const router = require("express").Router();

  router.get("/", async (req, res) => {
    res.send(await Subject.findAll());
  });

  router.post("/", async (req, res) => {
    try {
      const s = await Subject.create(req.body);
      res.send(s);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });

  app.use("/api/subjects", router);
};
