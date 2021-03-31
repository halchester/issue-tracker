const router = require("express").Router();
const Issue = require("../models/Issue");

router.get("/issues", async (req, res) => {
  await Issue.find()
    .sort({ createdAt: -1 })
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((err) => res.status(400).json({ success: false, error: err }));
});

router.post("/issue", async (req, res) => {
  console.log(req.body);
});

module.exports = router;
