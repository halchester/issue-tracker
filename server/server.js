const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = 8000;
const bodyParser = require("body-parser");
const cors = require("cors");

// Route imports
const issueRouter = require("./routes/issue.route");
app.use("/api/", issueRouter);

let options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hi");
});

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.x3hwc.mongodb.net/issue_tracker?retryWrites=true&w=majority`,
  options,
  () => console.log("Connected to db.")
);

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}.`));
