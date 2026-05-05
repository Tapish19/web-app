const express = require("express");
const Project = require("../models/Project");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

const router = express.Router();

// Create project (Admin)
router.post("/", auth, role("admin"), async (req, res) => {
    const project = await Project.create({
        ...req.body,
        createdBy: req.user.id
    });
    res.json(project);
});

// Get all projects
router.get("/", auth, async (req, res) => {
    const projects = await Project.find().populate("members", "name email");
    res.json(projects);
});

module.exports = router;