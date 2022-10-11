const express = require("express");
const bodyParser = require("body-parser"); // what is this?
const path = require("path");
const cors = require("cors"); // what is this? react port와 node port data받을려고하는거같아용

require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // w i t?
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(
  uri,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected");
    }
  }
);

mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Router 연결
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

// Router 사용
// app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
