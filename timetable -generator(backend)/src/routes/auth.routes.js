// src/routes/auth.routes.js
module.exports = (app) => {
  const db = require("../models");
  const User = db.user;
  const router = require("express").Router();

  // Login route
  router.post("/login", async (req, res) => {
    const { email, password, profession } = req.body;

    if (!email || !password || !profession) {
      return res
        .status(400)
        .send({ message: "Email, password and profession are required" });
    }

    try {
      const user = await User.findOne({
        where: { email, password, profession }, // 👈 strict match
      });

      if (!user) {
        return res
          .status(401)
          .send({ message: "Invalid email, password, or profession" });
      }

      res.send({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        profession: user.profession,
      });
    } catch (err) {
      res.status(500).send({ message: "Server error: " + err.message });
    }
  });

  app.use("/api/auth", router);
};
