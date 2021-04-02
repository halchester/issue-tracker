"use strict";

const issueController = require("../controllers/issue.controller");
const router = require("express").Router();

router.get("/api/issues", issueController.getAllIssues);
router.post("/api/issue", issueController.registerIssue);
router.delete("/api/issue/:id", issueController.deleteIssue);
router.put("/api/issue/:id", issueController.editIssue);
router.get("/api/issue/:id", issueController.getOneIssue);
module.exports = router;
