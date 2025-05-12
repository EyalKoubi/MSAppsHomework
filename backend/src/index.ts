import express from "express";
import cors from "cors";
import photoRoutes from "./routes/photos";

const app = express();

app.use(cors());
app.use("/api/photos", photoRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
