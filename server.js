import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import urlRoutes from "./routes/urlRoutes.js";
import authRoutes from "./routes/authRoutes.js"; // ✅ Add this

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/url", urlRoutes);
app.use("/api/auth", authRoutes);  // ✅ Add authentication routes


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
