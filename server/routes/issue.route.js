const router = require("express").Router();
const Issue = require("../models/Issue");

router.get("/issues", async (req, res) => {
  await Issue.find()
    .sort({ createdAt: -1 })
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((err) => res.status(400).json({ success: false, error: err }));
});

router.post("/issue", async (req, res) => {
  try {
    const { title, owner, deadline, status, type, description } = req.body;
    let newIssue = new Issue({
      title,
      owner,
      deadline,
      status,
      type,
      description,
    });
    await newIssue.save();
    return res.status(200).json({ success: true, data: newIssue });
  } catch (err) {
    console.log(err);
    return res.status(200).json({ success: false, data: {} });
  }
});

module.exports = router;
