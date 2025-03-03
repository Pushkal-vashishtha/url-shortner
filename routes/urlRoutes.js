import express from "express";
import { shortenURL } from "../controllers/urlController.js";
import { redirectToOriginal } from "../controllers/redirectController.js";
import { getURLStats } from "../controllers/statsController.js";
import { rateLimiter } from "../middleware/rateLimit.js";

const router = express.Router();

router.post("/shorten", rateLimiter, shortenURL);
router.get("/:shorttext", redirectToOriginal);
router.get("/stats/:shorttext", getURLStats);

export default router;
