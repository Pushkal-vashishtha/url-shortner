import express from "express";
import { register, login } from "../controllers/authController.js"; // ✅ Import controller functions

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
