import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js"; 

// ✅ User Registration
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        console.log("Incoming Register Request:", req.body); 

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });

        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("🔴 Registration Error:", error); // Log actual error
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

// ✅ User Login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Incoming Login Request:", req.body);

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("🔴 Login Error:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
