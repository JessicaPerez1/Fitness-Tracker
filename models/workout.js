const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({});

//multiple exercises in a workout
//name, type, weight, sets, reps and duration of exercise
//if exercise is cardio, track distance traveled

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
