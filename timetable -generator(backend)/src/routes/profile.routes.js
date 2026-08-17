module.exports = app => {
  const db = require("../models");
  const User = db.user;
  const Timetable = db.timetable;
  const router = require("express").Router();

  // GET profile + timetables
  router.get("/:id", async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id, {
        attributes: ["id", "name", "email", "profession", "phone"],
        include: [
          {
            model: Timetable,
            attributes: ["id", "title", "createdAt"],
            order: [["createdAt", "DESC"]],
          },
        ],
      });

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      res.send({
        id: user.id,
        name: user.name,
        email: user.email,
        profession: user.profession,
        phone: user.phone,
        timetableCount: user.timetables.length,
        timetables: user.timetables,
      });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

  app.use("/api/profile", router);
};
