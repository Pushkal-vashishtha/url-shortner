import { URL } from "../models/url.js";

export const getURLStats = async (req, res) => {
    const { shorttext } = req.params; 

    try {
        const urlData = await URL.findOne({ shortUrl: shorttext });

        if (!urlData) {
            return res.status(404).json({ error: "URL not found" });
        }

        res.json({
            originalUrl: urlData.originalUrl,
            shortUrl: urlData.shortUrl,
            clicks: urlData.clicks,
            createdAt: urlData.createdAt
        });
    } catch (error) {
        console.error("Error fetching URL stats:", error);
        res.status(500).json({ error: "Server error" });
    }
};
