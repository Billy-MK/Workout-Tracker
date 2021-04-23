const router = require("express").Router();
const Workout = require("../models/workout.js");


router.post("/workouts", (req, res) => {
    Workout.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
        console.log(err);
      });
  });
  
  router.put("/workouts/:id", (req, res) => {
    const workoutId = req.params.id;
    Workout.updateOne({ _id: workoutId }, {
      $push: { exercises: req.body }
    }).catch(err => {
      res.status(400).json(err);
      console.log(err);
    })
  });
  
  router.get("/workouts/range", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  router.get("/workouts", (req, res) => {
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