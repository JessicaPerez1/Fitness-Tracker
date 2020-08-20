//connect to my database
const db = require("../models");
const Workout = require("../models/workout.js");

module.exports = function (app) {
  //CREATE A NEW WORKOUT
  app.post("/api/workouts", ({ body }, res) => {
    const workout = new Workout(body);
    //create a new workout with our constructor
    Workout.create(body)
      .then((dbWorkout) => {
        // If saved successfully, send the the new workout to the user
        res.json(dbWorkout);
      })
      .catch((err) => {
        // If an error occurs, send the error
        res.json(err);
      });
  });
  // UPDATE A WORKOUT
  app.put("/api/workouts/:id", (req, res) => {
    //find the workout by its id
    Workout.findByIdAndUpdate(req.params.id, {
      //push the updated body information to the exercise array
      $push: {
        exercises: req.body,
      },
    })
      //send the new info
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      //if there is an error, send it
      .catch((err) => {
        res.json(err);
      });
  });
  //GET ALL THE WORKOUTS from our DATABASE
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then((dbWorkout) => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //STATS ROUTE
  app.get("/api/workouts/range", (req, res) => {
    //get all the workout info
    Workout.find({})
      //send the info back
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
