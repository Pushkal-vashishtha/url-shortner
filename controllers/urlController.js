import { nanoid } from "nanoid";
import  {URL}  from "../models/url.js";

export const shortenURL = async (req, res) => {
    const { originalUrl } = req.body;

    if (!originalUrl) {
        return res.status(400).json({ error: "URL is required" });
    }

    try {
        const shortUrl = nanoid(6); // Generate a 6-character unique ID
        const newUrl = new URL({ originalUrl, shortUrl });
        await newUrl.save();

        const baseUrl = process.env.BASE_URL || "http://localhost:5000";
        res.status(201).json({ shortUrl: `${baseUrl}/${shortUrl}` });
        
        } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
