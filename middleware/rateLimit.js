import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, 
    max: 5, 
    message: {error:"Rate limit exceeded. Try again later."}
});
