const mongoose = require("mongoose");
//constructor that will help us create schema for our model
const Schema = mongoose.Schema;

//multiple exercises in a workout
//name, type, weight, sets, reps and duration of exercise
//if exercise is cardio, track distance traveled

//define the schema
// call in a constructor with the syntax new
const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "exercise type required",
        },
        name: {
          type: String,
          trim: true,
          required: "exercise name required",
        },
        duration: {
          type: Number,
          required: "exercise duration required",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  }
  // {
  //   toJSON: {
  //     // we include virtuals because the mongoose doesn't inlcude virtual properties,
  //     //we would have to specify the inclusion for json data.
  //     virtuals: true,
  //   },
  //}
);
// // adds a virtual(calculated property) field to the schema
// workoutSchema.virtual("totalWeight").get(function () {
//   // adding the total weight of the exercises together
//   return this.weight * this.reps * this.sets;
// });
// // adds a virtual( calculated property) field to schema
// workoutSchema.virtual("totalDuration").get(function () {
//   // the reduce method executes a reducer function(that you provide) on each element of the array, resulting in single output value.
//   return this.exercises.reduce((total, exercise) => {
//     return total + exercise.duration;
//   }, 0);
// });

//create the model
const Workout = mongoose.model("Workout", WorkoutSchema);
//export our model
module.exports = Workout;
