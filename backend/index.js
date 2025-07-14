const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

// Import relatif untuk data.js
const { educationHistory, skills, projects } = require("./data");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/education", (req, res) => res.json(educationHistory));
app.get("/api/skills", (req, res) => res.json(skills));
app.get("/api/projects", (req, res) => res.json(projects));

// Ekspor app untuk testing lokal, dan handler untuk serverless (Vercel)
module.exports = app;
module.exports.handler = serverless(app);
