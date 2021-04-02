const Issue = require("../models/Issue");

exports.getAllIssues = async (req, res) => {
  await Issue.find()
    .sort({ createdAt: -1 })
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((err) => res.status(400).json({ success: false, error: err }));
};

exports.registerIssue = async (req, res) => {
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
};

exports.editIssue = async (req, res) => {
  const { id } = req.params;
  await Issue.findOneAndUpdate(
    { uniqueId: id },
    {
      $set: { ...req.body },
    },
    { new: true }
  ).then((data) =>
    res
      .status(200)
      .json({ status: true, data })
      .catch((err) =>
        res.status(200).json({ success: false, data: err.message })
      )
  );
};

exports.deleteIssue = async (req, res) => {
  const { id } = req.params;
  await Issue.findOneAndDelete({ uniqueId: id })
    .then((data) => res.status(200).json({ success: true, data: data }))
    .catch((err) =>
      res.status(200).json({ success: false, data: err.message })
    );
};
