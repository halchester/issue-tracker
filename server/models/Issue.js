const mongoose = require("mongoose");
const shortId = require("shortid");

const Issue = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
  },
  description: {
    type: String,
  },
  uniqueId: {
    type: String,
  },
});
Issue.pre("save", async function (next) {
  //generate a unique short code
  this.uniqueId = await shortId.generate();
  next();
});
module.exports = mongoose.model("Issue", Issue);
