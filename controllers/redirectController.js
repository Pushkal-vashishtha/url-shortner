import { URL } from "../models/url.js";

export const redirectToOriginal = async (req, res) => {
    const { shorttext } = req.params; 
    try {
        const urlData = await URL.findOne({ shortUrl: shorttext });

        if (!urlData) {
            return res.status(404).json({ error: "URL not found" });
        }

        urlData.clicks += 1;
        await urlData.save();

        return res.redirect(urlData.originalUrl);
    } catch (error) {
        console.error("Error in redirection:", error);
        return res.status(500).json({ error: "Server error" });
    }
};
