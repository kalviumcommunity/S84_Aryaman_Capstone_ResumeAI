const express = require("express");
const app = express();

const aiRoutes = require("./routes/aiRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/api/ai",aiRoutes);
app.use("/api/resumes",resumeRoutes);
app.use("/api/users",userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
