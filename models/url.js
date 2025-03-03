import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now, expires: 604800 }, // Auto delete after 7 days
    clicks: { type: Number, default: 0 }
});

export const URL = mongoose.model("URL", urlSchema);
