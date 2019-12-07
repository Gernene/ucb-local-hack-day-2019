const express = require('express');
const router = express.Router();
const TimeSlot = require('../models/timeSlotModel');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function (req, res) {
  res.send("Home");
});

router.get('/about', function (req, res) {
  res.send("About;")
});

router.get("/all", (req, res) => {
  TimeSlot.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.post("/update", (req, res) => {
  const { id, update } = req.body;
  TimeSlot.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.delete("/delete", (req, res) => {
  const { id } = req.body;
  TimeSlot.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

module.exports = router