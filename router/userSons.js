import { Router } from "express";
import { success } from "./response.js";
import { getData } from "../models/db.js";
import { getSon } from "../models/UsersSon.js";

const router = Router();

const user = getSon.build({
  attributes: ["id", "name", "ap_father", "ap_mother", "age"],
});
console.log(user instanceof getSon); // true
console.log(user.name);

router.get("/success", function (req, res) {
  success(req, res, "", 200);
});

router.get("/list_sons", async function (req, res) {
  getSon
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

router.post("/add_son", async function (req, res) {
  getSon
    .create({
      name: req.query.name,
      ap_father: req.query.ap_father,
      ap_mother: req.query.ap_mother,
      age: req.query.age,
      tblUserfatherId: req.query.tblUserfatherId,
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/update_son/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.query;
  getSon
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

router.delete("/delete_son/:id", (req, res) => {
  const id = req.params.id;
  getSon
    .destroy({
      where: { id: id },
    })
    .then((deleted) => {
      res.json(deleted);
    });
});

export default router;
