const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); 

dotenv.config(); 

const app = express();

connectDB();

const aiRoutes = require("./routes/aiRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes"); 

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the ResumeAI API. Use /api/auth, /api/users, /api/ai, or /api/resumes.");
});

app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/resumes", resumeRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
