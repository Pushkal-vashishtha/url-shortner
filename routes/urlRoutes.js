import express from "express";
import { shortenURL } from "../controllers/urlController.js";
import { redirectToOriginal } from "../controllers/redirectController.js";
import { getURLStats } from "../controllers/statsController.js";
import { rateLimiter } from "../middleware/rateLimit.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/shorten", authenticateUser,rateLimiter, shortenURL);
router.get("/:shorttext", redirectToOriginal);
router.get("/stats/:shorttext", authenticateUser,getURLStats);

export default router;
