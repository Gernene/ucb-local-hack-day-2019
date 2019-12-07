const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const { Educator, validate } = require("../models/educatorModel");
const express = require("express");
const router = express.Router();

router.get("/current", auth, async (req, res) => {
    const educator = await educator.findById(req.educator._id).select("-password");
    res.send(educator);
});

router.post("/", async (req, res) => {
    // validate the request body first
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    //find an existing educator
    let educator = await Educator.findOne({ email: req.body.email });
    if (educator) return res.status(400).send("Educator already registered.");
  
    educator = new Educator({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
    });
    educator.password = await bcrypt.hash(educator.password, 10);
    await educator.save();
  
    const token = educator.generateAuthToken();
    res.header("x-auth-token", token).send({
      _id: educator._id,
      name: educator.name,
      email: educator.email
    });
  });