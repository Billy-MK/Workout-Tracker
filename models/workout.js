const mongoose = require("mongoose");
const Exercise = require("./exercise.js");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    exercises: { 
      type: Schema.Types.ObjectId, 
      ref: "Exercise"
    }
  });

module.exports = mongoose.model("Workout", workoutSchema);