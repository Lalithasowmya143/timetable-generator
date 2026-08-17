// src/routes/user.routes.js
module.exports = (app) => {
  const db = require("../models");
  const User = db.user;
  const router = require("express").Router();

  // Create a new user (Signup)
  router.post("/", async (req, res) => {
    try {
      const { name, email, phone, profession, password } = req.body;

      if (!name || !email || !profession || !password) {
        return res.status(400).send({ message: "Missing required fields" });
      }

      const user = await User.create({
        name,
        email,
        phone,
        profession,
        password,
      });

      res.send(user);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Error creating user" });
    }
  });

  // Get all users (for testing/debug)
  router.get("/", async (req, res) => {
    const users = await User.findAll();
    res.send(users);
  });

  app.use("/api/users", router);
};
