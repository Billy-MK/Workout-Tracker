const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for this exercise"
  },
  date: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    trim: true,
    required: "Enter the type of exercise"
  },
  weight: {
    type: Number
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  duration: {
    type: Number
  },
  distance: {
    type: Number
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;


// name, date, type, weight, sets, reps, duration, and distance (if cardio)