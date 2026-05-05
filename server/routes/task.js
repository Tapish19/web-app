const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth");

const router = express.Router();

// Create task
router.post("/", auth, async (req, res) => {
    const task = await Task.create(req.body);
    res.json(task);
});

// Get tasks by project
router.get("/project/:id", auth, async (req, res) => {
    const tasks = await Task.find({ projectId: req.params.id })
        .populate("assignedTo", "name email");
    res.json(tasks);
});

// Update status
router.put("/:id", auth, async (req, res) => {
    const task = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(task);
});

module.exports = router;