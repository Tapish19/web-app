require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const path = require("path");
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB
connectDB();

app.use(express.static(path.join(__dirname, "..", "client")));

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/projects", require("./routes/project"));
app.use("/api/tasks", require("./routes/task"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT, () =>
    console.log(`Server running on ${process.env.PORT}`)
);
