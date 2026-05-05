require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB
connectDB();

// API routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/projects", require("./routes/project"));
app.use("/api/tasks", require("./routes/task"));

app.get("/", (req, res) => {
    res.json({
        service: "ProjectFlow Backend API",
        status: "ok",
        docsHint: "Use /api/auth, /api/projects, /api/tasks"
    });
});

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.listen(process.env.PORT, () =>
    console.log(`Server running on ${process.env.PORT}`)
);
