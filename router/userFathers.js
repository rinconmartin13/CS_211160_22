import { Router } from "express";
import { success } from "./response.js";
import { getData } from "../models/db.js";
import { getFather } from "../models/UsersFather.js";
import { getSon } from "../models/UsersSon.js";

const router = Router();

const user = getFather.build({
  attributes: ["id", "name", "ap_father", "ap_mother", "age"],
});
console.log(user instanceof getFather); // true
console.log(user.name);

router.get("/success", function (req, res) {
  success(req, res, "", 200);
});

router.get("/list_fathers", async function (req, res) {
  getFather
    .findAll({
      include: {
        model: getSon,
        attributes: ["name", "ap_father", "ap_mother", "age"],
      },
      attributes: ["id", "name", "ap_father", "ap_mother", "age"],
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/add_father", async function (req, res) {
  getFather
    .create({
      name: req.query.name,
      ap_father: req.query.ap_father,
      ap_mother: req.query.ap_mother,
      age: req.query.age,
      tblRegisterId: req.query.tblRegisterId,
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/update_father/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.query;
  getFather
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

router.delete("/delete_father/:id", (req, res) => {
  const id = req.params.id;
  getFather
    .destroy({
      where: { id: id },
    })
    .then((deleted) => {
      res.json(deleted);
    });
});

export default router;
