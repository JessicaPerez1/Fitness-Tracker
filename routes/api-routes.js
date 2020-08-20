//connect to my database
const db = require("../models");
const Workout = require("../models/workout.js");
//const Workout = db.Workout
//const router = require("express").Router();
//API ROUTES NEEDED
//CREATE A NEW WORKOUT==== POST/insert()
//be able to add new exercises to a new workout plan
//CONTINUE/VIEW LAST WORKOUT =====GET/find()
//sort by descending date, and select the first item(at index 0 of array)
//be able to add exercise to a previous workout plan ==== POST/insert to add, GET/find() to retrieve

//patch????? to update

//GET ALL THE WORKOUTS
module.exports = function (app) {
  //CREATE A NEW WORKOUT
  app.post("/api/workouts", ({ body }, res) => {
    const workout = new Workout(body);
    // workout.setTotalWeight();
    // workout.setTotalDuration();
    //const workout = new Workout(body);
    Workout.create(body)
      .then((dbWorkout) => {
        // If saved successfully, send the the new User document to the client
        res.json(dbWorkout);
      })
      .catch((err) => {
        // If an error occurs, send the error to the client
        res.json(err);
      });
  });
  //update a workout
  app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
      $push: {
        exercises: req.body,
      },
    })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

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
    Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};

//FOR UPDATE==need to populate the exrcise array
// app.post("/submit", ({ body }, res) => {
//   db.Workout.create(body)
//     .then(({ _id }) =>
//       db.Workout.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true })
//     )
//     .then((dbUser) => {
//       res.json(dbUser);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });
