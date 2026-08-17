module.exports = app => {
  const db = require("../models");
  const Faculty = db.faculty;
  const router = require("express").Router();

  router.get("/", async (req, res) => {
    res.send(await Faculty.findAll());
  });

  router.post("/", async (req, res) => {
    try {
      const f = await Faculty.create(req.body);
      res.send(f);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });

  app.use("/api/faculties", router);
};
