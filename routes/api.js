const router = require("express").Router();
const Exercise = require("../models/exercise.js");
const Workout = require("../models/workout.js");


router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
        console.log(err);
      });
  });
  
  router.put("/api/workouts/:id", (req, res) => {
    Exercise.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
        console.log(err);
      });
  });
  
  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;