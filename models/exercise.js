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

  },
  weight: {

  },
  sets: {

  },
  reps: {

  },
  duration: {

  },
  distance: {

  }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;


// name, date, type, weight, sets, reps, duration, and distance (if cardio)