import { Router } from "express";
import { success } from "./response.js";
import { getData } from "../models/db.js";
import { getUser } from "../models/Users.js";

const router = Router();

const user = getUser.build({
  attributes: ["id", "username", "email", "password", "phone_number"],
});
console.log(user instanceof getUser); // true
console.log(user.name);

router.get("/success", function (req, res) {
  success(req, res, "", 200);
});

router.get("/list", async function (req, res) {
  getUser
    .findAll({
      exclude: [],
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/add", async function (req, res) {
  getUser
    .create({
      username: req.query.username,
      email: req.query.email,
      password: req.query.password,
      phone_number: req.query.phone_number,
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.query;
  getUser
    .findOne({
      where: { id: id },
    })
    .then((del) => {
      return del.update(updates);
    })
    .then((updated) => {
      res.json(updated);
    });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  getUser
    .destroy({
      where: { id: id },
    })
    .then((deleted) => {
      res.json(deleted);
    });
});

export default router;
