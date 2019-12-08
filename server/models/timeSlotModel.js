const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimeSlotSchema = new Schema(
  {
    //startDate: Number,
    //endDate: Number,
    day: Number,
    earliestTime: Number,
    latestTime: Number,
    user: mongoose.ObjectId
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", TimeSlotSchema);