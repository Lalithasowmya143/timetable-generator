module.exports = app => {
  const db = require("../models");
  const Feedback = db.feedback;
  const router = require("express").Router();

  router.get("/", async (req, res) => {
    res.send(await Feedback.findAll());
  });

  router.post("/", async (req, res) => {
    try {
      const f = await Feedback.create(req.body);
      res.send(f);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });

  app.use("/api/feedbacks", router);
};
