import { Router } from "express";
import { success } from "./response.js";
import { getData } from "../models/db.js";
import { getRegister } from "../models/Register.js";
import { getFather } from "../models/UsersFather.js";

const router = Router();

const user = getRegister.build({
  attributes: ["id", "user", "password"],
});
console.log(user instanceof getRegister); // true
console.log(user.name);

router.get("/success", function (req, res) {
  success(req, res, "", 200);
});

router.get("/list_register", async function (req, res) {
  getRegister
    .findAll({
      include: {
        model: getFather,
        attributes: ["name", "ap_father", "ap_mother", "age"],
      },
      attributes: ["id", "user", "password"],
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/add_register", async function (req, res) {
  getRegister
    .create({
      user: req.query.user,
      password: req.query.password,
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/update_register/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.query;
  getRegister
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

router.delete("/delete_register/:id", (req, res) => {
  const id = req.params.id;
  getRegister
    .destroy({
      where: { id: id },
    })
    .then((deleted) => {
      res.json(deleted);
    });
});

export default router;
