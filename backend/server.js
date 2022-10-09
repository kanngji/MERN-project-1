const express = require("express");
const bodyParser = require("body-parser"); // what is this?
const cors = require("cors"); // what is this?

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // w i t?
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
