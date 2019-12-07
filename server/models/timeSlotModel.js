const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimeSlotSchema = new Schema(
  {
    day: Number,
    hour: Number,
    minute: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", TimeSlotSchema);