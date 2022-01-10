const express = require("express");
const router = express.Router();
const User = require("../../models/userModel");

router.get("/", async (req, res) => {
  try {
    let users = await User.find();
    if (users.length > 0) {
      res.status(200).send(users);
    } else {
      res.status(404).send({ message: "No records found" });
    }
  } catch (err) {
    res.status(404).send({ message: "There is some problem" });
  }
});

router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send({ message: "This user is already registered" });
  } else {
    user = new User(req.body);
    await user.save();
    return res.send(user);
  }
});

router.get("/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({ message: "This user does not exist" });
  }
});

router.post("/login", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let user = await User.findOne({ email: email, password: password });
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({ message: "Invalid Password or Email" });
  }
});
module.exports = router;
