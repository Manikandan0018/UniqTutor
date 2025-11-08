import { v4 as uuidv4 } from "uuid";
import LiveSession from "../models/LiveSession.js";

export const createSession = async (req, res) => {
  try {
    const type = "admin";
    const unique_id = uuidv4();
    const userurl = `${process.env.FRONTEND_URL}/session/${unique_id}`;

    console.log("👉 Creating new session with URL:", userurl);

    const newSession = new LiveSession({ type, unique_id, userurl });
    await newSession.save();

    res.status(201).json({
      message: "Session created successfully",
      session: newSession,
    });
  } catch (err) {
    console.error("❌ Error creating session:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


export const getSession = async (req, res) => {
  try {
    const { unique_id } = req.params;
    const session = await LiveSession.findOne({ unique_id });
    if (!session) return res.status(404).json({ message: "Session not found" });
    res.json({ session });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
