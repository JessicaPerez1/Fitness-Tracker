//DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();

//SET UP OUR PORT
const PORT = process.env.PORT || 3000;

//MIDDLEWARE
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//this is where we connect to our database
//include env variable for Heroku connection to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

//require our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//make sure port is working
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
